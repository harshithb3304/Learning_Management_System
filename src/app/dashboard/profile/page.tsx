import { redirect } from 'next/navigation'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth-utils'

export default async function ProfilePage() {
  // Get current user with Prisma
  const { user } = await getCurrentUser()
  
  if (!user) {
    redirect('/auth/login')
  }
  
  const userInitials = user.full_name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
  
  const updateProfile = async (formData: FormData) => {
    'use server'
    
    const { user } = await getCurrentUser()
    if (!user) {
      console.error('User not found')
      return
    }
    
    const fullName = formData.get('full_name') as string
    
    if (!fullName) {
      console.error('Full name is required')
      return
    }
    
    try {
      await prisma.user.update({
        where: { id: user.id },
        data: { full_name: fullName }
      })
    } catch (error) {
      console.error('Error updating profile:', error)
      return
    }
    
    redirect('/dashboard/profile')
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
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
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    disabled
                  />
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
              <CardDescription>
                Your profile picture
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar_url || ''} alt={user.full_name} />
                <AvatarFallback className="text-2xl">{userInitials}</AvatarFallback>
              </Avatar>
              <p className="text-center text-sm text-muted-foreground">
                Your avatar is managed through your Google account
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
