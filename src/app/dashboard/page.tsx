import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDashboardStats } from "@/actions/stats";
import { getCurrentUser } from "@/lib/auth-utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function DashboardPage() {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  const {
    courseCount = 0,
    studentCount = 0,
    teacherCount = 0,
    enrollmentCount = 0,
    error,
  } = await getDashboardStats(user.id, user.role);

  if (error) {
    console.error("Error fetching dashboard stats:", error);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {user.full_name}!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {user.role === "admin" && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{courseCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{studentCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Teachers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{teacherCount}</div>
              </CardContent>
            </Card>
          </>
        )}

        {user.role === "teacher" && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Your Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{courseCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Enrolled Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{enrollmentCount}</div>
              </CardContent>
            </Card>
          </>
        )}

        {user.role === "student" && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Enrolled Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrollmentCount}</div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Quick links to help you navigate the LMS
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {user.role === "admin" && (
              <>
                <Link href="/dashboard/users">
                  <div className="rounded-lg border p-4 cursor-pointer hover:bg-muted transition">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Manage Users</h3>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Add, edit, or remove users from the system
                    </p>
                  </div>
                </Link>
                <Link href="/dashboard/courses">
                  <div className="rounded-lg border p-4 cursor-pointer hover:bg-muted transition">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Manage Courses</h3>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Create, edit, or delete courses
                    </p>
                  </div>
                </Link>
              </>
            )}

            {user.role === "teacher" && (
              <>
                <Link href="/dashboard/courses">
                  <div className="rounded-lg border p-4 cursor-pointer hover:bg-muted transition">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Create a Course</h3>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Create a new course and add content
                    </p>
                  </div>
                </Link>
                <Link href="/dashboard/courses">
                  <div className="rounded-lg border p-4 cursor-pointer hover:bg-muted transition">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Manage Students</h3>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Add or remove students from your courses
                    </p>
                  </div>
                </Link>
              </>
            )}

            {user.role === "student" && (
              <Link href="/dashboard/courses">
                <div className="rounded-lg border p-4 cursor-pointer hover:bg-muted transition">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">View Courses</h3>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Access your enrolled courses and coursework
                  </p>
                </div>
              </Link>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
