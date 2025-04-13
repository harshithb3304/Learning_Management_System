"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { updateCourse } from "@/actions/courses";

interface Teacher {
  id: string;
  full_name: string;
  email: string;
}

interface ChangeTeacherDialogProps {
  courseId: string;
  currentTeacherId?: string;
  teachers: Teacher[];
}

export function ChangeTeacherDialog({
  courseId,
  currentTeacherId,
  teachers,
}: ChangeTeacherDialogProps) {
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>(
    currentTeacherId || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!selectedTeacherId) return;
    
    setIsSubmitting(true);
    try {
      const result = await updateCourse(courseId, {
        teacherId: selectedTeacherId,
      });
      
      if (result.error) {
        console.error("Error updating course teacher:", result.error);
      } else {
        setIsOpen(false);
        // Refresh the page data without a full reload
        router.refresh();
      }
    } catch (error) {
      console.error("Error updating course teacher:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Change Teacher
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Course Teacher</DialogTitle>
          <DialogDescription>
            Assign a different teacher to this course
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="teacher">Select Teacher</Label>
            <Select
              value={selectedTeacherId}
              onValueChange={setSelectedTeacherId}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a teacher" />
              </SelectTrigger>
              <SelectContent>
                {teachers.map((teacher) => (
                  <SelectItem key={teacher.id} value={teacher.id}>
                    {teacher.full_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!selectedTeacherId || isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
