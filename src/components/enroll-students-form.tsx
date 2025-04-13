"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { enrollStudent } from "@/actions/courses";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Student {
  id: string;
  full_name: string;
  email: string;
}

interface EnrollStudentsFormProps {
  courseId: string;
  availableStudents: Student[];
}

export function EnrollStudentsForm({ courseId, availableStudents }: EnrollStudentsFormProps) {
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedStudents.length === 0) {
      setError("Please select at least one student");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Enroll each selected student one by one
      for (const student of selectedStudents) {
        const result = await enrollStudent({
          courseId,
          studentId: student.id,
        });

        if (result.error) {
          setError(`Error enrolling ${student.full_name}: ${result.error}`);
          break;
        }
      }

      if (!error) {
        // Reset selection
        setSelectedStudents([]);
        
        // Refresh the data without a full page reload
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Error enrolling students:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleStudent = (student: Student) => {
    setSelectedStudents(current => {
      const isSelected = current.some(s => s.id === student.id);
      
      if (isSelected) {
        return current.filter(s => s.id !== student.id);
      } else {
        return [...current, student];
      }
    });
  };

  const removeStudent = (studentId: string) => {
    setSelectedStudents(current => current.filter(s => s.id !== studentId));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-destructive/15 text-destructive p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="students">Select Students</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {selectedStudents.length > 0
                ? `${selectedStudents.length} student${selectedStudents.length > 1 ? 's' : ''} selected`
                : "Select students to enroll..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search students..." />
              <CommandEmpty>No students found.</CommandEmpty>
              <CommandGroup>
                <ScrollArea className="h-60">
                  {availableStudents.map((student) => (
                    <CommandItem
                      key={student.id}
                      value={student.id}
                      onSelect={() => toggleStudent(student)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedStudents.some(s => s.id === student.id)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      <div className="flex flex-col">
                        <span>{student.full_name}</span>
                        <span className="text-xs text-muted-foreground">{student.email}</span>
                      </div>
                    </CommandItem>
                  ))}
                </ScrollArea>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {selectedStudents.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedStudents.map((student) => (
            <Badge key={student.id} variant="secondary">
              {student.full_name}
              <button
                type="button"
                className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => removeStudent(student.id)}
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}
      
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting || selectedStudents.length === 0}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enrolling...
            </>
          ) : (
            "Enroll Students"
          )}
        </Button>
      </div>
    </form>
  );
}
