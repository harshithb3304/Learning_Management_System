"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { createCourse } from "@/actions/courses";

interface Teacher {
  id: string;
  full_name: string;
  email: string;
}

interface CreateCourseFormProps {
  userId: string;
  userRole: string;
  teachers?: Teacher[];
}

export function CreateCourseForm({ userId, userRole, teachers = [] }: CreateCourseFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!title) {
      setError("Title is required");
      setIsSubmitting(false);
      return;
    }

    let teacherId = userId;

    if (userRole === "admin") {
      const selectedTeacherId = formData.get("teacher_id") as string;
      if (selectedTeacherId) {
        teacherId = selectedTeacherId;
      }
    }

    try {
      const result = await createCourse({
        title,
        description,
        teacherId,
      }, userRole, userId);

      if (result.error) {
        setError(result.error);
        setIsSubmitting(false);
        return;
      }

      // Success - navigate to courses page
      router.push("/dashboard/courses");
      router.refresh();
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Error creating course:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
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

      {userRole === "admin" && teachers.length > 0 && (
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
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Course"}
        </Button>
      </div>
    </form>
  );
}
