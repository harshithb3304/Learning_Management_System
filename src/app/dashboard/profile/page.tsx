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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { updateUserProfile } from "@/actions/profile";
import { getCurrentUser } from "@/lib/auth-utils";
import { ProfileAvatarUpload } from "@/components/profile-avatar-upload";

export default async function ProfilePage() {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  const userInitials = user.full_name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  const updateProfile = async (formData: FormData) => {
    "use server";

    const { user } = await getCurrentUser();
    if (!user) {
      console.error("User not found");
      return;
    }

    const fullName = formData.get("full_name") as string;

    if (!fullName) {
      console.error("Full name is required");
      return;
    }

    const { error } = await updateUserProfile(user.id, { full_name: fullName });
    if (error) {
      console.error(error);
      return;
    }

    redirect("/dashboard/profile");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={updateProfile} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name</Label>
                <Input
                  id="full_name"
                  name="full_name"
                  defaultValue={user.full_name}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={user.email} disabled />
                <p className="text-xs text-muted-foreground">
                  Email cannot be changed
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  disabled
                />
                <p className="text-xs text-muted-foreground">
                  Role can only be changed by an admin
                </p>
              </div>
              <div className="flex justify-end">
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Avatar</CardTitle>
            <CardDescription>Your profile picture</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileAvatarUpload
              userId={user.id}
              currentAvatarUrl={user.avatar_url}
              userFullName={user.full_name}
              userInitials={userInitials}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
