"use client";

import { Button } from "@/components/ui/button";

interface CancelButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function CancelButton({ variant = "outline" }: CancelButtonProps) {
  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    const closeButton = document.querySelector('[data-state="open"] button[data-state="closed"]');
    if (closeButton) {
      (closeButton as HTMLButtonElement).click();
    }
  };

  return (
    <Button type="button" variant={variant} onClick={handleCancel}>
      Cancel
    </Button>
  );
}
