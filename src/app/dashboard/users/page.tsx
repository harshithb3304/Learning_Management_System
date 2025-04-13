import { redirect } from "next/navigation";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCurrentUser } from "@/lib/auth-utils";
import { getUsers, updateUser, deleteUser } from "@/actions/users";

export default async function UsersPage() {
  // Get current user with Prisma
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Only admin role can access this page
  if (user.role !== "admin") {
    redirect("/dashboard");
  }

  // Fetch all users using the users action
  const { users: fetchedUsers, error } = await getUsers();

  if (error) {
    console.error("Error fetching users:", error);
  }

  const allUsers = fetchedUsers || [];

  const updateUserRole = async (formData: FormData) => {
    "use server";

    const userId = formData.get("user_id") as string;
    const role = formData.get("role") as "admin" | "teacher" | "student";

    if (!userId || !role) {
      console.error("User ID and role are required");
      return;
    }

    const { error } = await updateUser(userId, { role });

    if (error) {
      console.error("Error updating user role:", error);
      return;
    }

    redirect("/dashboard/users");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage all users in the system
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            {allUsers.length} user{allUsers.length !== 1 ? "s" : ""} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers.map(
                (user: {
                  id: string;
                  full_name: string;
                  email: string;
                  role: string;
                  createdAt?: Date;
                  created_at?: string;
                }) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.full_name}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="capitalize">{user.role}</TableCell>
                    <TableCell>
                      {format(
                        new Date(
                          user.createdAt || user.created_at || new Date()
                        ),
                        "MMM d, yyyy"
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="default"
                              size="sm"
                              className="hover:cursor-pointer"
                            >
                              Edit Role
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit User Role</DialogTitle>
                              <DialogDescription>
                                Change the role for {user.full_name}
                              </DialogDescription>
                            </DialogHeader>
                            <form
                              action={updateUserRole}
                              className="space-y-4 pt-4"
                            >
                              <input
                                type="hidden"
                                name="user_id"
                                value={user.id}
                              />
                              <div className="space-y-2">
                                <Label htmlFor="role">Role</Label>
                                <Select name="role" defaultValue={user.role}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a role" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="teacher">
                                      Teacher
                                    </SelectItem>
                                    <SelectItem value="student">
                                      Student
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex justify-end">
                                <Button
                                  type="submit"
                                  className="hover:cursor-pointer"
                                >
                                  Save Changes
                                </Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              className="hover:cursor-pointer"
                            >
                              Remove
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Remove User</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to remove {user.full_name}
                                ? This action cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <form
                              action={async () => {
                                "use server";
                                await deleteUser(user.id);
                                return redirect("/dashboard/users");
                              }}
                              className="pt-4"
                            >
                              <DialogFooter>
                                <DialogTrigger asChild>
                                  <Button>Cancel</Button>
                                </DialogTrigger>
                                <Button type="submit" variant="destructive">
                                  Remove User
                                </Button>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
