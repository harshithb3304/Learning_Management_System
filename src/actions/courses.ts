"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

/**
 * Get enrolled courses for a student
 */
export async function getEnrolledCourses(studentId: string) {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: {
        studentId,
      },
      include: {
        course: {
          include: {
            teacher: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { enrollments };
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    return { error: 'Failed to fetch enrolled courses' };
  }
}

export async function getCourses(teacherId?: string) {
  try {
    const courses = await prisma.course.findMany({
      where: teacherId ? { teacherId } : undefined,
      include: {
        teacher: true,
        enrollments: {
          include: {
            student: true,
          },
        },
      },
      orderBy: { title: "asc" },
    });
    return { courses };
  } catch (error) {
    console.error("Error fetching courses:", error);
    return { error: "Failed to fetch courses" };
  }
}

/**
 * Get a single course by ID
 */
export async function getCourseById(id: string) {
  try {
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        teacher: true,
        enrollments: {
          include: {
            student: true,
          },
        },
        coursework: {
          include: {
            submissions: {
              include: {
                student: true,
              },
            },
          },
        },
      },
    });

    if (!course) {
      return { error: "Course not found" };
    }

    return { course };
  } catch (error) {
    console.error("Error fetching course:", error);
    return { error: "Failed to fetch course" };
  }
}

/**
 * Create a new course
 */
export async function createCourse(data: {
  title: string;
  description?: string;
  imageUrl?: string;
  teacherId: string;
}, userRole: string, userId: string) {
  try {
    // Check if user has permission to create a course
    if (userRole !== 'admin' && userRole !== 'teacher') {
      return { error: "You don't have permission to create courses" };
    }

    // If user is a teacher, they can only create courses for themselves
    if (userRole === 'teacher' && data.teacherId !== userId) {
      return { error: "Teachers can only create courses for themselves" };
    }

    // Check for duplicate course name for the same teacher
    const existingCourse = await prisma.course.findFirst({
      where: {
        title: data.title,
        teacherId: data.teacherId
      }
    });

    if (existingCourse) {
      return { error: "You already have a course with this name" };
    }

    const course = await prisma.course.create({
      data,
    });

    revalidatePath("/dashboard/courses");
    return { course };
  } catch (error) {
    console.error("Error creating course:", error);
    return { error: "Failed to create course" };
  }
}

/**
 * Update an existing course
 */
export async function updateCourse(
  id: string,
  data: {
    title?: string;
    description?: string;
    imageUrl?: string;
    teacherId?: string;
  },
  userId: string,
  userRole: string
) {
  try {
    // Get the current course to check permissions
    const currentCourse = await prisma.course.findUnique({
      where: { id },
      select: { teacherId: true, title: true }
    });

    if (!currentCourse) {
      return { error: "Course not found" };
    }

    // Check if user has permission to update the course
    if (userRole !== 'admin' && currentCourse.teacherId !== userId) {
      return { error: "You don't have permission to update this course" };
    }

    // Only admin can change the teacher of a course
    if (data.teacherId && data.teacherId !== currentCourse.teacherId && userRole !== 'admin') {
      return { error: "Only administrators can reassign courses to different teachers" };
    }

    // If title is being changed, check for duplicates
    if (data.title && data.title !== currentCourse.title) {
      const teacherId = data.teacherId || currentCourse.teacherId;
      const existingCourse = await prisma.course.findFirst({
        where: {
          title: data.title,
          teacherId: teacherId,
          id: { not: id } // Exclude current course
        }
      });

      if (existingCourse) {
        return { error: "A course with this name already exists for this teacher" };
      }
    }

    const course = await prisma.course.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard/courses");
    revalidatePath(`/dashboard/courses/${id}`);
    return { course };
  } catch (error) {
    console.error("Error updating course:", error);
    return { error: "Failed to update course" };
  }
}

/**
 * Delete a course
 */
export async function deleteCourse(courseId: string, userId: string, userRole: string) {
  try {
    // Check if user has permission to delete the course
    if (userRole !== "admin") {
      const course = await prisma.course.findUnique({
        where: { id: courseId },
        select: { teacherId: true },
      });

      if (!course || course.teacherId !== userId) {
        return { error: "You don't have permission to delete this course" };
      }
    }

    // Delete all related records in a transaction
    await prisma.$transaction([
      // Delete course resources
      prisma.courseResource.deleteMany({
        where: { courseId },
      }),
      // Delete coursework
      prisma.coursework.deleteMany({
        where: { courseId },
      }),
      // Delete enrollments
      prisma.enrollment.deleteMany({
        where: { courseId },
      }),
      // Finally, delete the course
      prisma.course.delete({
        where: { id: courseId },
      }),
    ]);

    revalidatePath("/dashboard/courses");
    return { success: true };
  } catch (error) {
    console.error("Error deleting course:", error);
    return { error: "Failed to delete course" };
  }
}

/**
 * Remove a student from a course
 */
export async function unenrollStudent(enrollmentId: string, userId: string, userRole: string) {
  try {
    // First get the enrollment to check permissions
    const enrollment = await prisma.enrollment.findUnique({
      where: { id: enrollmentId },
      include: {
        course: true,
        student: true
      }
    });

    if (!enrollment) {
      return { error: "Enrollment not found" };
    }

    // Check if user has permission to unenroll the student
    // Only admin, the course teacher, or the student themselves can unenroll
    const isSelfUnenrollment = userId === enrollment.studentId;
    const isTeacherOfCourse = enrollment.course.teacherId === userId;

    if (userRole !== 'admin' && !isTeacherOfCourse && !isSelfUnenrollment) {
      return { error: "You don't have permission to unenroll this student" };
    }

    // Now delete the enrollment
    await prisma.enrollment.delete({
      where: {
        id: enrollmentId,
      },
    });

    revalidatePath("/dashboard/courses");
    revalidatePath(`/dashboard/courses/${enrollment.courseId}`);
    return { success: true };
  } catch (error) {
    console.error("Error unenrolling student:", error);
    return { error: "Failed to unenroll student" };
  }
}

/**
 * Add coursework to a course
 */
export async function addCoursework(data: {
  title: string;
  description?: string;
  courseId: string;
  dueDate?: string;
}, userId: string, userRole: string) {
  try {
    // Check if the course exists and if the user has permission
    const course = await prisma.course.findUnique({
      where: { id: data.courseId },
      select: { teacherId: true }
    });

    if (!course) {
      return { error: "Course not found" };
    }

    // Only admin or the course teacher can add coursework
    if (userRole !== 'admin' && course.teacherId !== userId) {
      return { error: "You don't have permission to add coursework to this course" };
    }

    const coursework = await prisma.coursework.create({
      data: {
        title: data.title,
        description: data.description,
        courseId: data.courseId,
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
      },
    });

    revalidatePath(`/dashboard/courses/${data.courseId}`);
    return { coursework };
  } catch (error) {
    console.error("Error adding coursework:", error);
    return { error: "Failed to add coursework" };
  }
}

/**
 * Enroll a student in a course
 */
export async function enrollStudent(data: {
  courseId: string;
  studentId: string;
}, userId: string, userRole: string) {
  try {
    // Check if the course exists
    const course = await prisma.course.findUnique({
      where: { id: data.courseId },
      select: { teacherId: true }
    });

    if (!course) {
      return { error: "Course not found" };
    }

    // Check if user has permission to enroll students
    // Only admin, the course teacher, or the student themselves can enroll
    const isSelfEnrollment = userId === data.studentId;
    const isTeacherOfCourse = course.teacherId === userId;

    if (userRole !== 'admin' && !isTeacherOfCourse && !isSelfEnrollment) {
      return { error: "You don't have permission to enroll students in this course" };
    }

    // Check if the user being enrolled is actually a student
    const student = await prisma.user.findUnique({
      where: { id: data.studentId },
      select: { role: true }
    });

    if (!student) {
      return { error: "Student not found" };
    }

    if (student.role !== 'student') {
      return { error: "Only users with student role can be enrolled in courses" };
    }

    // Check if student is already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        courseId_studentId: {
          courseId: data.courseId,
          studentId: data.studentId,
        },
      },
    });

    if (existingEnrollment) {
      return { error: "Student is already enrolled in this course" };
    }

    const enrollment = await prisma.enrollment.create({
      data: {
        courseId: data.courseId,
        studentId: data.studentId,
      },
      include: {
        course: true,
        student: true,
      },
    });

    revalidatePath("/dashboard/courses");
    revalidatePath(`/dashboard/courses/${data.courseId}`);
    return { enrollment };
  } catch (error) {
    console.error("Error enrolling student:", error);
    return { error: "Failed to enroll student" };
  }
}

/**
 * Upload a file to course resources bucket using standard upload
 */
export async function uploadCourseResource(file: File, courseId: string, userId: string, userRole: string) {
  try {
    // Check if the course exists and if the user has permission
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: { teacherId: true }
    });

    if (!course) {
      return { success: false, error: "Course not found" };
    }

    // Only admin or the course teacher can upload resources
    if (userRole !== 'admin' && course.teacherId !== userId) {
      return { success: false, error: "You don't have permission to upload resources to this course" };
    }

    const supabase = await createClient();

    // Create a unique file path to avoid conflicts
    const fileName = `${courseId}/${Date.now()}-${file.name.replace(
      /\s+/g,
      "-"
    )}`;

    // Upload file using standard upload method as shown in the docs
    const { error } = await supabase.storage
      .from("course-resources")
      .upload(fileName, file, {
        contentType: file.type,
        cacheControl: "3600",
      });

    if (error) {
      throw error;
    }

    // Get the public URL for the file
    const { data: publicUrlData } = supabase.storage
      .from("course-resources")
      .getPublicUrl(fileName);

    return {
      success: true,
      data: {
        fileUrl: publicUrlData.publicUrl,
      },
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Add a resource to a course
 */
export async function addCourseResource(data: {
  name: string;
  description?: string;
  courseId: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
}, userId: string, userRole: string) {
  try {
    // Check if the course exists and if the user has permission
    const course = await prisma.course.findUnique({
      where: { id: data.courseId },
      select: { teacherId: true }
    });

    if (!course) {
      return { success: false, error: "Course not found" };
    }

    // Only admin or the course teacher can add resources
    if (userRole !== 'admin' && course.teacherId !== userId) {
      return { success: false, error: "You don't have permission to add resources to this course" };
    }

    const resource = await prisma.courseResource.create({
      data: {
        name: data.name,
        description: data.description,
        courseId: data.courseId,
        fileUrl: data.fileUrl,
        fileType: data.fileType,
        fileSize: data.fileSize,
      },
    });

    revalidatePath(`/dashboard/courses/${data.courseId}`);
    return { success: true, resource };
  } catch (error) {
    console.error("Error adding course resource:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to add course resource",
    };
  }
}

/**
 * Get all resources for a course
 */
export async function getCourseResources(courseId: string) {
  try {
    const resources = await prisma.courseResource.findMany({
      where: { courseId },
      orderBy: { createdAt: "desc" },
    });

    return {
      success: true,
      resources: resources || [], // Ensure we always return an array
    };
  } catch (error) {
    console.error("Error fetching course resources:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch course resources",
      resources: [], // Return empty array on error
    };
  }
}

/**
 * Delete a course resource
 */
export async function deleteCourseResource(id: string, userId: string, userRole: string) {
  try {
    // First get the resource to get the file path and check permissions
    const resource = await prisma.courseResource.findUnique({
      where: { id },
      include: {
        course: {
          select: {
            teacherId: true
          }
        }
      }
    });

    if (!resource) {
      return { success: false, error: "Resource not found" };
    }

    // Check if user has permission to delete the resource
    if (userRole !== 'admin' && resource.course.teacherId !== userId) {
      return { success: false, error: "You don't have permission to delete this resource" };
    }

    // Delete from database
    await prisma.courseResource.delete({
      where: { id },
    });

    // Get the Supabase client
    const supabase = await createClient();

    // Extract the file path from the URL
    const fileUrl = resource.fileUrl;
    const urlParts = fileUrl.split("course-resources/");

    if (urlParts.length > 1) {
      const filePath = urlParts[1].split("?")[0]; // Remove query parameters if any

      // Delete the file from Supabase storage
      const { error: deleteError } = await supabase.storage
        .from("course-resources")
        .remove([filePath]);

      if (deleteError) {
        console.error("Error deleting file from storage:", deleteError);
      }
    }

    revalidatePath(`/dashboard/courses/${resource.courseId}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting course resource:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to delete course resource",
    };
  }
}
