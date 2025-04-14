"use server";

import { prisma } from "@/lib/prisma";

export async function getDashboardStats(userId: string, userRole: string) {
  try {
    let courseCount = 0;
    let studentCount = 0;
    let enrollmentCount = 0;
    let teacherCount = 0;

    if (userRole === "admin") {
      courseCount = await prisma.course.count();
      studentCount = await prisma.user.count({
        where: { role: "student" },
      });
      teacherCount = await prisma.user.count({
        where: { role: "teacher" },
      });
      enrollmentCount = await prisma.enrollment.count();
    } else if (userRole === "teacher") {
      courseCount = await prisma.course.count({
        where: { teacherId: userId },
      });
      enrollmentCount = await prisma.enrollment.count({
        where: {
          course: {
            teacherId: userId,
          },
        },
      });
    } else if (userRole === "student") {
      enrollmentCount = await prisma.enrollment.count({
        where: { studentId: userId },
      });
    }

    return { courseCount, studentCount, teacherCount, enrollmentCount };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return { error: "Failed to fetch dashboard stats" };
  }
}
