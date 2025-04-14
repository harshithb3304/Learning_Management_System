import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { getTeachers } from "@/actions/users";
import { getCurrentUser } from "@/lib/auth-utils";
import { createCourse } from "@/actions/courses";
import Link from "next/link";

export default async function NewCoursePage() {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  if (user.role !== "admin" && user.role !== "teacher") {
    redirect("/dashboard");
  }

  const handleCreateCourse = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!title) {
      console.error("Title is required");
      return;
    }

    const { user } = await getCurrentUser();

    if (!user) {
      redirect("/auth/login");
    }

    let teacherId = user.id;

    if (user.role === "admin") {
      const selectedTeacherId = formData.get("teacher_id") as string;
      if (selectedTeacherId) {
        teacherId = selectedTeacherId;
      }
    }

    const { error } = await createCourse({
      title,
      description,
      teacherId,
    });

    if (error) {
      console.error("Error creating course:", error);
      return;
    }

    redirect("/dashboard/courses");
  };

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
          <form action={handleCreateCourse} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Introduction to Programming"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Course Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="A comprehensive introduction to programming concepts..."
                rows={4}
              />
            </div>

            {user.role === "admin" && teachers.length > 0 && (
              <div className="space-y-2">
                <Label htmlFor="teacher_id">Assign Teacher</Label>
                <select
                  id="teacher_id"
                  name="teacher_id"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option value="">Select a teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.full_name}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-muted-foreground">
                  Leave empty to assign yourself as the teacher
                </p>
              </div>
            )}

            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" asChild>
                <Link href="/dashboard/courses">Cancel</Link>
              </Button>
              <Button type="submit">Create Course</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
