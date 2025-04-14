"use server";

import { prisma } from "@/lib/prisma";

export async function getCourseDetails(courseId: string, userId: string, userRole: string) {
  try {
    // Get course data
    const courseData = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        teacher: true,
        enrollments: {
          include: {
            student: true,
          },
        },
      },
    });

    if (!courseData) {
      return { error: "Course not found" };
    }

    // Get enrollment status for students
    let isEnrolled = false;
    if (userRole === "student") {
      const enrollment = await prisma.enrollment.findFirst({
        where: {
          courseId,
          studentId: userId,
        },
      });
      isEnrolled = !!enrollment;
    }

    // Get enrollments for teachers/admins
    const enrollments = await prisma.enrollment.findMany({
      where: {
        courseId,
      },
      include: {
        student: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get coursework
    const coursework = await prisma.coursework.findMany({
      where: {
        courseId,
      },
      include: {
        submissions: {
          include: {
            student: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get available students for enrollment
    const availableStudents = userRole !== "student" ? await prisma.user.findMany({
      where: {
        role: "student",
        enrollments: {
          none: {
            courseId,
          },
        },
      },
      orderBy: {
        full_name: "asc",
      },
    }) : [];

    return {
      course: courseData,
      isEnrolled,
      enrollments,
      coursework,
      availableStudents,
    };
  } catch (error) {
    console.error("Error fetching course details:", error);
    return { error: "Failed to fetch course details" };
  }
}
