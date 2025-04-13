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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { CancelButton } from "@/components/cancel-button";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth-utils";
import {
  addCoursework,
  enrollStudent,
  unenrollStudent,
  addCourseResource,
  deleteCourseResource,
  uploadCourseResource,
  getCourseResources,
} from "@/actions/courses";

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  avatar_url: string | null;
  createdAt: Date;
}

interface Course {
  id: string;
  title: string;
  description: string | null;
  teacherId: string;
  createdAt: Date;
  teacher: User | null;
}

interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  createdAt: Date;
  student: User | null;
}

interface Coursework {
  id: string;
  title: string;
  description: string | null;
  courseId: string;
  dueDate: Date | null;
  createdAt: Date;
}

interface CourseResource {
  id: string;
  name: string;
  description: string | null;
  fileUrl: string;
  fileType: string;
  fileSize: number;
  courseId: string;
  createdAt: Date;
}

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  // Get current user with Prisma
  const { user } = await getCurrentUser();

  // Await params to access its properties
  const { id: courseId } = await params;

  if (!user) {
    redirect("/auth/login");
  }

  // Fetch course details with Prisma
  const courseData = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      teacher: true,
    },
  });

  if (!courseData) {
    redirect("/dashboard/courses");
  }

  const course: Course = courseData;

  // Check if user has permission to view this course
  if (user.role === "teacher" && course.teacherId !== user.id) {
    redirect("/dashboard/courses");
  }

  if (user.role === "student") {
    // Check if student is enrolled in this course
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        courseId: courseId,
        studentId: user.id,
      },
    });

    if (!enrollment) {
      redirect("/dashboard/my-courses");
    }
  }

  // Fetch enrolled students with Prisma
  const enrollments = await prisma.enrollment.findMany({
    where: {
      courseId: courseId,
    },
    include: {
      student: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const enrolledStudents = enrollments || [];

  // Fetch coursework with Prisma
  const coursework = await prisma.coursework.findMany({
    where: {
      courseId: courseId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const courseContent = coursework || [];

  // Fetch course resources with Prisma
  const resourcesResult = await getCourseResources(courseId);
  console.log("Resources result:", resourcesResult);
  const courseResources = resourcesResult.success
    ? resourcesResult.resources
    : [];

  // Server actions wrapper functions
  const handleAddCoursework = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const dueDate = formData.get("due_date") as string;

    if (!title) {
      console.error("Title is required");
      return;
    }

    const { error } = await addCoursework({
      title,
      description,
      courseId: courseId,
      dueDate: dueDate || undefined,
    });

    if (error) {
      console.error("Error adding coursework:", error);
      return;
    }

    redirect(`/dashboard/courses/${courseId}?tab=content`);
  };

  const handleEnrollStudent = async (formData: FormData) => {
    "use server";

    const studentId = formData.get("student_id") as string;

    if (!studentId) {
      console.error("Student ID is required");
      return;
    }

    const { error } = await enrollStudent({
      courseId: courseId,
      studentId,
    });

    if (error) {
      console.error("Error enrolling student:", error);
      return;
    }

    redirect(`/dashboard/courses/${courseId}?tab=students`);
  };

  // Handle file upload for course resources
  const handleResourceUpload = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const file = formData.get("file") as File;

    if (!name || !file) {
      console.error("Name and file are required");
      return;
    }

    try {
      // Upload the file directly using the server action
      const uploadResult = await uploadCourseResource(file, courseId);

      if (!uploadResult.success) {
        console.error("Error uploading file:", uploadResult.error);
        return;
      }

      // Make sure we have the data before destructuring
      if (!uploadResult.data) {
        console.error("No data returned from upload");
        return;
      }

      const fileUrl = uploadResult.data.fileUrl;

      // Add the resource to the database
      const { error: resourceError } = await addCourseResource({
        name,
        description: description || undefined,
        courseId,
        fileUrl,
        fileType: file.type,
        fileSize: file.size,
      });

      if (resourceError) {
        console.error("Error adding resource:", resourceError);
        return;
      }

      // Return a success response that will be used for redirection
      return { success: true, redirectTo: `/dashboard/courses/${courseId}?tab=resources` };
    } catch (error) {
      // Only log actual errors, not redirect "errors"
      if (!(error instanceof Error && error.message === 'NEXT_REDIRECT')) {
        console.error("Error processing file upload:", error);
      }
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  };

  // Handle resource deletion
  const handleDeleteResource = async (resourceId: string) => {
    "use server";

    const { error } = await deleteCourseResource(resourceId);

    if (error) {
      console.error("Error deleting resource:", error);
      return;
    }

    redirect(`/dashboard/courses/${courseId}?tab=resources`);
  };

  // Fetch available students for enrollment (not already enrolled)
  interface AvailableStudent {
    id: string;
    full_name: string;
    email: string;
  }

  let availableStudents: AvailableStudent[] = [];
  if (
    user.role === "admin" ||
    (user.role === "teacher" && course.teacherId === user.id)
  ) {
    const enrolledStudentIds = enrolledStudents.map((e) => e.studentId);

    // Get all students who are not enrolled in this course
    const students = await prisma.user.findMany({
      where: {
        role: "student",
        id: {
          notIn: enrolledStudentIds,
        },
      },
      select: {
        id: true,
        full_name: true,
        email: true,
      },
    });

    availableStudents = students || [];
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
          <p className="text-muted-foreground">
            {course.description || "No description provided"}
          </p>
        </div>
        {(user.role === "admin" ||
          (user.role === "teacher" && course.teacherId === user.id)) && (
          <Button variant="outline" asChild>
            <a href={`/dashboard/courses/${courseId}/edit`}>Edit Course</a>
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium">Teacher</p>
              <p className="text-sm text-muted-foreground">
                {course.teacher?.full_name || "Unknown"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Created</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(course.createdAt), "MMMM d, yyyy")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Enrolled Students</p>
              <p className="text-sm text-muted-foreground">
                {enrolledStudents.length}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Course Content</p>
              <p className="text-sm text-muted-foreground">
                {courseContent.length} item
                {courseContent.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="content">
        <TabsList>
          <TabsTrigger value="content">Course Content</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          {(user.role === "admin" ||
            (user.role === "teacher" && course.teacherId === user.id)) && (
            <Card>
              <CardHeader>
                <CardTitle>Add Course Content</CardTitle>
                <CardDescription>
                  Add new coursework, assignments, or materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleAddCoursework} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="title" className="text-sm font-medium">
                        Title
                      </label>
                      <input
                        id="title"
                        name="title"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="Lesson 1: Introduction"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="due_date" className="text-sm font-medium">
                        Due Date (Optional)
                      </label>
                      <input
                        id="due_date"
                        name="due_date"
                        type="date"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      rows={3}
                      placeholder="Describe the content or assignment..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Add Content</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>
                {courseContent.length} item
                {courseContent.length !== 1 ? "s" : ""} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              {courseContent.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseContent.map((item: Coursework) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {item.title}
                        </TableCell>
                        <TableCell>
                          {item.description || "No description"}
                        </TableCell>
                        <TableCell>
                          {item.dueDate
                            ? format(new Date(item.dueDate), "MMM d, yyyy")
                            : "No due date"}
                        </TableCell>
                        <TableCell>
                          {format(new Date(item.createdAt), "MMM d, yyyy")}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex h-32 items-center justify-center">
                  <p className="text-center text-muted-foreground">
                    No content has been added to this course yet.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          {(user.role === "admin" ||
            (user.role === "teacher" && course.teacherId === user.id)) && (
            <Card>
              <CardHeader>
                <CardTitle>Manage Students</CardTitle>
                <CardDescription>
                  Enroll or remove students from this course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Enroll Student</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Enroll Student</DialogTitle>
                        <DialogDescription>
                          Select a student to enroll in this course
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        action={handleEnrollStudent}
                        className="space-y-4 pt-4"
                      >
                        <div className="space-y-2">
                          <label
                            htmlFor="student_id"
                            className="text-sm font-medium"
                          >
                            Student
                          </label>
                          <select
                            id="student_id"
                            name="student_id"
                            className="w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                          >
                            <option value="">Select a student</option>
                            {availableStudents.map(
                              (student: {
                                id: string;
                                full_name: string;
                                email: string;
                              }) => (
                                <option key={student.id} value={student.id}>
                                  {student.full_name} ({student.email})
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <div className="flex justify-end">
                          <Button type="submit">Enroll</Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Enrolled Students</CardTitle>
              <CardDescription>
                {enrolledStudents.length} student
                {enrolledStudents.length !== 1 ? "s" : ""} enrolled
              </CardDescription>
            </CardHeader>
            <CardContent>
              {enrolledStudents.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Enrolled On</TableHead>
                      {(user.role === "admin" ||
                        (user.role === "teacher" &&
                          course.teacherId === user.id)) && (
                        <TableHead className="text-right">Actions</TableHead>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {enrolledStudents.map((enrollment: Enrollment) => (
                      <TableRow key={enrollment.id}>
                        <TableCell className="font-medium">
                          {enrollment.student?.full_name || "Unknown"}
                        </TableCell>
                        <TableCell>
                          {enrollment.student?.email || "Unknown"}
                        </TableCell>
                        <TableCell>
                          {format(
                            new Date(enrollment.createdAt),
                            "MMM d, yyyy"
                          )}
                        </TableCell>
                        {(user.role === "admin" ||
                          (user.role === "teacher" &&
                            course.teacherId === user.id)) && (
                          <TableCell className="text-right">
                            <form
                              action={async () => {
                                "use server";
                                await unenrollStudent(enrollment.id);
                                return redirect(
                                  `/dashboard/courses/${courseId}?tab=students`
                                );
                              }}
                            >
                              <Button variant="ghost" size="sm" type="submit">
                                Remove
                              </Button>
                            </form>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex h-32 items-center justify-center">
                  <p className="text-center text-muted-foreground">
                    No students are enrolled in this course yet.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          {(user.role === "admin" ||
            (user.role === "teacher" && course.teacherId === user.id)) && (
            <Card>
              <CardHeader>
                <CardTitle>Add Course Resource</CardTitle>
                <CardDescription>
                  Upload files such as PDFs, images, or other materials for
                  students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleResourceUpload} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Resource Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="Lecture Notes Week 1"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="file" className="text-sm font-medium">
                        File
                      </label>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium"
                    >
                      Description (Optional)
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      rows={3}
                      placeholder="Describe the resource..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Upload Resource</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
              <CardDescription>
                {courseResources?.length} resource
                {courseResources?.length !== 1 ? "s" : ""} available
              </CardDescription>
            </CardHeader>
            <CardContent>
              {courseResources?.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Uploaded</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseResources?.map((resource: CourseResource) => (
                      <TableRow key={resource.id}>
                        <TableCell className="font-medium">
                          {resource.name}
                        </TableCell>
                        <TableCell>
                          {resource.description || "No description"}
                        </TableCell>
                        <TableCell>
                          {resource.fileType.split("/")[1]?.toUpperCase() ||
                            resource.fileType}
                        </TableCell>
                        <TableCell>
                          {Math.round(resource.fileSize / 1024)} KB
                        </TableCell>
                        <TableCell>
                          {format(new Date(resource.createdAt), "MMM d, yyyy")}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={resource.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View
                              </a>
                            </Button>

                            {(user.role === "admin" ||
                              (user.role === "teacher" &&
                                course.teacherId === user.id)) && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                  >
                                    Delete
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Delete Resource</DialogTitle>
                                    <DialogDescription>
                                      Are you sure you want to delete &ldquo;
                                      {resource.name}&rdquo;? This action cannot
                                      be undone.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <form
                                    action={async () => {
                                      "use server";
                                      await handleDeleteResource(resource.id);
                                    }}
                                    className="pt-4"
                                  >
                                    <DialogFooter>
                                      <CancelButton variant="outline" />
                                      <Button
                                        type="submit"
                                        variant="destructive"
                                      >
                                        Delete Resource
                                      </Button>
                                    </DialogFooter>
                                  </form>
                                </DialogContent>
                              </Dialog>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex h-32 items-center justify-center">
                  <p className="text-center text-muted-foreground">
                    No resources have been added to this course yet.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
