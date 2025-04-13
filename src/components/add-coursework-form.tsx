"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { addCoursework } from "@/actions/courses";

interface AddCourseworkFormProps {
  courseId: string;
}

export function AddCourseworkForm({ courseId }: AddCourseworkFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await addCoursework({
        title,
        description: description.trim() || undefined,
        courseId,
        dueDate: dueDate || undefined,
      });

      if (result.error) {
        setError(result.error);
      } else {
        // Reset form
        setTitle("");
        setDescription("");
        setDueDate("");
        
        // Refresh the data without a full page reload
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Error adding coursework:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-destructive/15 text-destructive p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Lesson 1: Introduction"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="due_date">Due Date (Optional)</Label>
          <Input
            id="due_date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          placeholder="Describe the content or assignment..."
        />
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Content"}
        </Button>
      </div>
    </form>
  );
}
