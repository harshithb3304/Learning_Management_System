import { redirect } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { DeleteCourseButton } from "@/components/delete-course-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth-utils";
import { getCourses, getEnrolledCourses } from "@/actions/courses";

export default async function CoursesPage() {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { courses = [], error: coursesError } =
    user.role !== "student"
      ? await getCourses(user.role === "admin" ? undefined : user.id)
      : { courses: [] };

  const { enrollments = [], error: enrollmentsError } =
    user.role === "student"
      ? await getEnrolledCourses(user.id)
      : { enrollments: [] };

  if (coursesError) {
    console.error("Error fetching courses:", coursesError);
  }

  if (enrollmentsError) {
    console.error("Error fetching enrollments:", enrollmentsError);
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {user.role === "student" ? (
          enrollments.length > 0 ? (
            enrollments.map((enrollment) => {
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
                          {format(
                            new Date(enrollment.createdAt),
                            "MMM d, yyyy"
                          )}
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
          )
        ) : courses.length > 0 ? (
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
                  <div className="pt-4 space-y-2">
                    <Button asChild className="w-full">
                      <Link href={`/dashboard/courses/${course.id}`}>
                        Manage Course
                      </Link>
                    </Button>
                    {(user.role === "admin" ||
                      (user.role === "teacher" &&
                        course.teacherId === user.id)) && (
                      <DeleteCourseButton
                        courseId={course.id}
                        userId={user.id}
                        userRole={user.role}
                        courseName={course.title}
                      />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-dashed">
            <div className="text-center">
              <p className="text-muted-foreground">
                {user.role === "student"
                  ? "You are not enrolled in any courses yet."
                  : "No courses found. Create your first course to get started."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
