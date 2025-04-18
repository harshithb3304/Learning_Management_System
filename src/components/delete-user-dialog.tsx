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
import { Loader2 } from "lucide-react";
import { deleteUser, getUserById } from "@/actions/users";
import { User } from "@/generated/prisma";

interface DeleteUserDialogProps {
  currentUser: User;
  userId: string;
  userName: string;
  onDeleteSuccess?: () => void;
  disabled?: boolean;
}

export function DeleteUserDialog({
  currentUser,
  userId,
  userName,
  onDeleteSuccess,
  disabled = false,
}: DeleteUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      // Get the current user for authorization

      if (!currentUser) {
        setError("Authentication error");
        setIsDeleting(false);
        return;
      }

      console.log("role:", currentUser.role);

      const result = await deleteUser(
        userId,
        currentUser.id!,
        currentUser.role!
      );

      if (result.error) {
        setError(result.error);
      } else {
        setIsOpen(false);
        // Refresh the page data without a full reload
        router.refresh();
        if (onDeleteSuccess) {
          onDeleteSuccess();
        }
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Error deleting user:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm" disabled={disabled}>
          Remove
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Remove User</DialogTitle>
          <DialogDescription>
            Are you sure you want to remove {userName}? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="bg-destructive/15 text-destructive p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <DialogFooter className="pt-4">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isDeleting}
            className="relative"
          >
            Cancel
            {isDeleting && (
              <span className="absolute inset-0 bg-background/50 rounded-md" />
            )}
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
            className="relative"
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Removing...
              </>
            ) : (
              "Remove User"
            )}
            {isDeleting && (
              <span className="absolute inset-0 bg-background/50 rounded-md" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
