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
import { getUsers, updateUser } from "@/actions/users";
import { DeleteUserDialog } from "@/components/delete-user-dialog";

export default async function UsersPage() {
  const { user: currentUser } = await getCurrentUser();

  if (!currentUser) {
    redirect("/auth/login");
  }

  if (currentUser.role !== "admin") {
    redirect("/dashboard");
  }
  const { users: fetchedUsers, error } = await getUsers();

  if (error) {
    console.error("Error fetching users:", error);
  }

  const allUsers = fetchedUsers || [];

  const updateUserRole = async (formData: FormData) => {
    "use server";

    const { user: actionUser } = await getCurrentUser();
    if (!actionUser) {
      redirect("/auth/login");
    }

    const userId = formData.get("user_id") as string;
    const role = formData.get("role") as "admin" | "teacher" | "student";

    if (!userId || !role) {
      console.error("User ID and role are required");
      return;
    }

    const { error } = await updateUser(userId, { role }, actionUser.id, actionUser.role);

    if (error) {
      console.error("Error updating user role:", error);
      return;
    }

    redirect("/dashboard/users");
  };

  console.log(currentUser.role);
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
                              disabled={user.role === "admin"}
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
                                <Button type="submit">Save Changes</Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>

                        <DeleteUserDialog
                          currentUser={currentUser}
                          userId={user.id}
                          userName={user.full_name}
                          disabled={user.role === "admin"}
                        />
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
