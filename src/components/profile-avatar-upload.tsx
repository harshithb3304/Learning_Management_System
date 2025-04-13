"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { updateUser } from "@/actions/users";
import { createClient } from "@/utils/supabase/client";
import { Loader2, Upload, X, Trash2 } from "lucide-react";

interface ProfileAvatarUploadProps {
  userId: string;
  currentAvatarUrl: string | null;
  userFullName: string;
  userInitials: string;
}

export function ProfileAvatarUpload({
  userId,
  currentAvatarUrl,
  userFullName,
  userInitials,
}: ProfileAvatarUploadProps) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(currentAvatarUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB");
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split(".").pop();
      const fileName = `${userId}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from("user-avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("user-avatars")
        .getPublicUrl(filePath);

      const publicUrl = publicUrlData.publicUrl;

      // Update user profile with new avatar URL
      const result = await updateUser(userId, { avatar_url: publicUrl });

      if (result.error) {
        throw new Error(result.error);
      }

      // Update local state
      setAvatarUrl(publicUrl);

      // Refresh the data without a full page reload
      router.refresh();
    } catch (err) {
      console.error("Error uploading avatar:", err);
      setError("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveAvatar = async () => {
    if (!avatarUrl) return;

    setIsUploading(true);
    setError(null);

    try {
      // Update user profile to remove avatar URL
      const result = await updateUser(userId, { avatar_url: "" });

      if (result.error) {
        throw new Error(result.error);
      }

      // Update local state
      setAvatarUrl(null);

      // Refresh the data without a full page reload
      router.refresh();
    } catch (err) {
      console.error("Error removing avatar:", err);
      setError("Failed to remove image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src={avatarUrl || ""} alt={userFullName} />
        <AvatarFallback className="text-2xl">{userInitials}</AvatarFallback>
      </Avatar>

      {error && (
        <div className="text-sm text-destructive text-center">{error}</div>
      )}

      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="relative"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </>
            )}
            {isUploading && (
              <span className="absolute inset-0 bg-background/50 rounded-md" />
            )}
          </Button>

          {avatarUrl && (
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={handleRemoveAvatar}
              disabled={isUploading}
              className="relative"
            >
              {isUploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
              {isUploading && (
                <span className="absolute inset-0 bg-background/50 rounded-md" />
              )}
            </Button>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        <p className="text-center text-xs text-muted-foreground mt-2">
          Supported formats: JPEG, PNG, GIF (max 5MB)
        </p>
      </div>
    </div>
  );
}
