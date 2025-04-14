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
import { getCurrentUser } from "@/lib/auth-utils";
import {
  unenrollStudent,
  addCourseResource,
  deleteCourseResource,
  uploadCourseResource,
  getCourseResources,
} from "@/actions/courses";
import { getCourseDetails } from "@/actions/course-details";
import { getTeachers } from "@/actions/users";
import { ChangeTeacherDialog } from "@/components/change-teacher-dialog";
import { AddCourseworkForm } from "@/components/add-coursework-form";
import { EnrollStudentsForm } from "@/components/enroll-students-form";
import Link from "next/link";



type Course = NonNullable<Awaited<ReturnType<typeof getCourseDetails>>['course']>;
type Enrollment = NonNullable<Awaited<ReturnType<typeof getCourseDetails>>['enrollments']>[number];
type CourseResource = NonNullable<Awaited<ReturnType<typeof getCourseResources>>['resources']>[number];
type Teacher = NonNullable<Awaited<ReturnType<typeof getTeachers>>['teachers']>[number];

interface CoursePageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { user } = await getCurrentUser();

  const resolvedParams = await params;
  const courseId = resolvedParams.id;

  if (!user) {
    redirect("/auth/login");
  }

  const { course, isEnrolled, enrollments, coursework: courseContent = [], availableStudents = [], error } = await getCourseDetails(courseId, user.id, user.role);

  if (error) {
    console.error("Error fetching course details:", error);
  }

  if (!course) {
    redirect("/dashboard/courses");
  }

  if (user.role === "teacher" && course.teacherId && course.teacherId !== user.id) {
    redirect("/dashboard/courses");
  }

  if (user.role === "student" && !isEnrolled) {
    redirect("/dashboard/courses");
  }

  const enrolledStudents = enrollments || [];

  const resourcesResult = await getCourseResources(courseId);
  const courseResources = resourcesResult.success
    ? resourcesResult.resources
    : [];

  let availableTeachers: Teacher[] = [];
  if (user.role === "admin") {
    const { teachers, error: teachersError } = await getTeachers();
    if (teachersError) {
      console.error("Error fetching teachers:", teachersError);
    } else {
      availableTeachers = teachers || [];
    }
  }

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
      const uploadResult = await uploadCourseResource(file, courseId);

      if (!uploadResult.success) {
        console.error("Error uploading file:", uploadResult.error);
        return;
      }

      if (!uploadResult.data) {
        console.error("No data returned from upload");
        return;
      }

      const fileUrl = uploadResult.data.fileUrl;

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

      redirect(`/dashboard/courses/${courseId}?tab=resources`);
    } catch (error) {
      if (!(error instanceof Error && error.message === "NEXT_REDIRECT")) {
        console.error("Error processing file upload:", error);
      }
    }
  };

  const handleDeleteResource = async (resourceId: string) => {
    "use server";

    const { error } = await deleteCourseResource(resourceId);

    if (error) {
      console.error("Error deleting resource:", error);
      return;
    }

    redirect(`/dashboard/courses/${courseId}?tab=resources`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
          <p className="text-muted-foreground">
            {course.description || "No description provided"}
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href={`/dashboard/courses`}>Back</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Teacher</p>
                {user.role === "admin" && (
                  <ChangeTeacherDialog
                    courseId={courseId}
                    currentTeacherId={course.teacherId || ""}
                    teachers={availableTeachers}
                  />
                )}
              </div>
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
                <AddCourseworkForm courseId={courseId} />
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
                    {courseContent.map((item) => (
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
                      <div className="pt-4">
                        <EnrollStudentsForm 
                          courseId={courseId} 
                          availableStudents={availableStudents} 
                        />
                      </div>
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
                    {courseResources?.map((resource) => (
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
