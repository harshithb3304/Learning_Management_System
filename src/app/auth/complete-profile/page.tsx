import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createUser } from '@/actions/users'
import { getCurrentUser } from '@/lib/auth-utils'

export default async function CompleteProfilePage() {
  // Get the current user using our utility function
  const { user } = await getCurrentUser()
  if (!user) {
    redirect('/auth/login')
  }

  // Since getCurrentUser already checks the Prisma database,
  // we can use the returned user directly
  const existingUser = user

  if (existingUser) {
    redirect('/dashboard')
  }

  const completeProfile = async (formData: FormData) => {
    'use server'
    
    // Get the current user using our utility function
    const { user } = await getCurrentUser()
    if (!user) {
      redirect('/auth/login')
      return
    }
    
    const fullName = formData.get('fullName') as string
    const role = formData.get('role') as 'student' | 'teacher' | 'admin'
    
    if (!fullName || !role) {
      console.error('Full name and role are required')
      return
    }
    
    // For Supabase user, we need to get the metadata from auth
    const supabase = await createClient()
    const { data: { user: authUser } } = await supabase.auth.getUser()
    
    const { error } = await createUser({
      id: user.id,
      email: user.email,
      full_name: fullName,
      role: role,
      avatar_url: authUser?.user_metadata.avatar_url,
    })
    
    if (error) {
      console.error('Error creating user profile:', error)
      return
    }
    
    redirect('/dashboard')
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Complete Your Profile</CardTitle>
          <CardDescription>
            Please provide additional information to complete your profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={completeProfile} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                required
                defaultValue={user?.full_name || ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select name="role" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Note: Admin accounts require approval
              </p>
            </div>
            <Button type="submit" className="w-full">
              Complete Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
