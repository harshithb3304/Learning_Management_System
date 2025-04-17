import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getTeachers } from "@/actions/users";
import { getCurrentUser } from "@/lib/auth-utils";
import Link from "next/link";
import { CreateCourseForm } from "@/components/create-course-form";

export default async function NewCoursePage() {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  if (user.role !== "admin" && user.role !== "teacher") {
    redirect("/dashboard");
  }

  type Teacher = NonNullable<
    Awaited<ReturnType<typeof getTeachers>>["teachers"]
  >[number];
  let teachers: Teacher[] = [];
  if (user.role === "admin") {
    const { teachers: teacherUsers, error } = await getTeachers();
    if (error) {
      console.error("Error fetching teachers:", error);
    } else {
      teachers = teacherUsers || [];
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Create New Course
          </h1>
          <p className="text-muted-foreground">
            Add a new course to the learning management system
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/dashboard/courses">Back</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Details</CardTitle>
          <CardDescription>
            Enter the details for the new course
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateCourseForm 
            userId={user.id} 
            userRole={user.role} 
            teachers={teachers} 
          />
        </CardContent>
      </Card>
    </div>
  );
}
