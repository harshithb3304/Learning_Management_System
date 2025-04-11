import { redirect } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getCurrentUser } from '@/lib/auth-utils'
import { getCourses } from '@/actions/courses'

export default async function CoursesPage() {
  // Get current user with Prisma
  const { user } = await getCurrentUser()
  
  if (!user) {
    redirect('/auth/login')
  }
  
  // Only admin and teacher roles can access this page
  if (user.role !== 'admin' && user.role !== 'teacher') {
    redirect('/dashboard')
  }
  
  // Fetch courses based on user role using the courses action
  const { courses: fetchedCourses, error } = await getCourses(user.role === 'admin' ? undefined : user.id)
  
  if (error) {
    console.error('Error fetching courses:', error)
  }
  
  const courses = fetchedCourses || []
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
            <p className="text-muted-foreground">
              {user.role === 'admin' 
                ? 'Manage all courses in the system' 
                : 'Manage your courses'}
            </p>
          </div>
          <Button asChild>
            <Link href="/dashboard/courses/new">Create Course</Link>
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>All Courses</CardTitle>
            <CardDescription>
              {courses.length} course{courses.length !== 1 ? 's' : ''} found
            </CardDescription>
          </CardHeader>
          <CardContent>
            {courses.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    {user.role === 'admin' && <TableHead>Teacher</TableHead>}
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell>{course.description || 'No description'}</TableCell>
                      {user.role === 'admin' && (
                        <TableCell>
                          {course.teacher?.full_name || 'Unknown'}
                        </TableCell>
                      )}
                      <TableCell>
                        {format(new Date(course.createdAt), 'MMM d, yyyy')}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/dashboard/courses/${course.id}`}>
                            View
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex h-32 items-center justify-center">
                <p className="text-center text-muted-foreground">
                  No courses found. Create your first course to get started.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
