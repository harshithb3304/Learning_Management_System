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
import { getCurrentUser } from "@/lib/auth-utils";
import { getCourses } from "@/actions/courses";
import { prisma } from "@/lib/prisma";

interface Teacher {
  id: string;
  full_name: string;
  email: string;
}

interface Course {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  teacherId: string | null;
  createdAt: Date;
  updatedAt: Date;
  teacher: Teacher | null;
}

interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  createdAt: Date;
  course: Course;
}

export default async function CoursesPage() {
  // Get current user with Prisma
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  let courses: Course[] = [];
  let enrolledCourses: Enrollment[] = [];

  if (user.role === "admin" || user.role === "teacher") {
    // Fetch courses based on user role using the courses action
    const { courses: fetchedCourses, error } = await getCourses(
      user.role === "admin" ? undefined : user.id
    );

    if (error) {
      console.error("Error fetching courses:", error);
    }

    courses = fetchedCourses || [];
  } else if (user.role === "student") {
    // Fetch enrolled courses for students
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

    enrolledCourses = enrollments || [];
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">
            {user.role === "admin"
              ? "Manage all courses in the system"
              : user.role === "teacher"
              ? "Manage your courses"
              : "View your enrolled courses"}
          </p>
        </div>
        {(user.role === "admin" || user.role === "teacher") && (
          <Button asChild>
            <Link href="/dashboard/courses/new">Create Course</Link>
          </Button>
        )}
      </div>

      {/* Admin and Teacher View */}
      {(user.role === "admin" || user.role === "teacher") && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.length > 0 ? (
            courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description || "No description provided"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    {user.role === "admin" && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Teacher:</span>
                        <span>{course.teacher?.full_name || "Unknown"}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Created:</span>
                      <span>
                        {format(new Date(course.createdAt), "MMM d, yyyy")}
                      </span>
                    </div>
                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link href={`/dashboard/courses/${course.id}`}>
                          Manage Course
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-dashed">
              <div className="text-center">
                <p className="text-muted-foreground">
                  No courses found. Create your first course to get started.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Student View */}
      {user.role === "student" && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((enrollment) => {
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
      )}
    </div>
  );
}
