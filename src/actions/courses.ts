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
}) {
  try {
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
  }
) {
  try {
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
export async function unenrollStudent(enrollmentId: string) {
  try {
    const enrollment = await prisma.enrollment.delete({
      where: {
        id: enrollmentId,
      },
      include: {
        course: true,
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
}) {
  try {
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
}) {
  try {
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
export async function uploadCourseResource(file: File, courseId: string) {
  try {
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
}) {
  try {
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
export async function deleteCourseResource(id: string) {
  try {
    // First get the resource to get the file path
    const resource = await prisma.courseResource.findUnique({
      where: { id },
    });

    if (!resource) {
      return { success: false, error: "Resource not found" };
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
