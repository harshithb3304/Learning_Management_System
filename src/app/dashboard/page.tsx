import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth-utils'

export default async function DashboardPage() {
  // Get current user with Prisma
  const { user } = await getCurrentUser()
  
  if (!user) {
    redirect('/auth/login')
  }
  
  // Fetch data based on user role
  let courseCount = 0
  let studentCount = 0
  let enrollmentCount = 0
  
  if (user.role === 'admin') {
    // Admin sees all courses and users
    courseCount = await prisma.course.count()
    
    studentCount = await prisma.user.count({
      where: { role: 'student' }
    })
    
    enrollmentCount = await prisma.user.count({
      where: { role: 'teacher' }
    })
  } else if (user.role === 'teacher') {
    // Teacher sees their own courses and enrolled students
    courseCount = await prisma.course.count({
      where: { teacherId: user.id }
    })
    
    enrollmentCount = await prisma.enrollment.count({
      where: {
        course: {
          teacherId: user.id
        }
      }
    })
  } else if (user.role === 'student') {
    // Student sees enrolled courses
    enrollmentCount = await prisma.enrollment.count({
      where: { studentId: user.id }
    })
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user.full_name}!
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {user.role === 'admin' && (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{courseCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studentCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{enrollmentCount}</div>
                </CardContent>
              </Card>
            </>
          )}
          
          {user.role === 'teacher' && (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Your Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{courseCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Enrolled Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{enrollmentCount}</div>
                </CardContent>
              </Card>
            </>
          )}
          
          {user.role === 'student' && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{enrollmentCount}</div>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Quick links to help you navigate the LMS
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {user.role === 'admin' && (
                <>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Manage Users</h3>
                    <p className="text-sm text-muted-foreground">
                      Add, edit, or remove users from the system
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Manage Courses</h3>
                    <p className="text-sm text-muted-foreground">
                      Create, edit, or delete courses
                    </p>
                  </div>
                </>
              )}
              
              {user.role === 'teacher' && (
                <>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Create a Course</h3>
                    <p className="text-sm text-muted-foreground">
                      Create a new course and add content
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Manage Students</h3>
                    <p className="text-sm text-muted-foreground">
                      Add or remove students from your courses
                    </p>
                  </div>
                </>
              )}
              
              {user.role === 'student' && (
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">View Courses</h3>
                  <p className="text-sm text-muted-foreground">
                    Access your enrolled courses and coursework
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
