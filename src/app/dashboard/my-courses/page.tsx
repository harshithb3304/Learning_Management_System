import { redirect } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth-utils";

interface EnrollmentWithCourse {
  id: string;
  studentId: string;
  courseId: string;
  createdAt: Date;
  course: {
    id: string;
    title: string;
    description: string | null;
    teacher: {
      id: string;
      full_name: string;
      email: string;
    } | null;
  };
}

export default async function MyCoursesPage() {
  // Get current user with Prisma
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Only student role can access this page
  if (user.role !== "student") {
    redirect("/dashboard");
  }

  // Fetch enrolled courses with Prisma
  const enrollments = await prisma.enrollment.findMany({
    where: {
      studentId: user.id,
    },
    include: {
      course: {
        include: {
          teacher: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const enrolledCourses = enrollments || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
        <p className="text-muted-foreground">View all your enrolled courses</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((enrollment: EnrollmentWithCourse) => {
            const course = enrollment.course;
            return (
              <Card key={enrollment.id} className="overflow-hidden">
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">
                    {course?.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course?.description || "No description provided"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Teacher:</span>
                      <span>{course?.teacher?.full_name || "Unknown"}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Enrolled:</span>
                      <span>
                        {format(new Date(enrollment.createdAt), "MMM d, yyyy")}
                      </span>
                    </div>
                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link href={`/dashboard/courses/${course?.id}`}>
                          View Course
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-dashed">
            <div className="text-center">
              <p className="text-muted-foreground">
                You are not enrolled in any courses yet.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
