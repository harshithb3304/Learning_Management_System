import React from 'react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getCurrentUser } from '@/lib/auth-utils'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  // Get the current user using our utility function
  const { user: userData } = await getCurrentUser()
  
  if (!userData) {
    // If no user is found, redirect to login
    redirect('/auth/login')
  }
  
  const userRole = userData.role
  const userInitials = userData.full_name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
  
  const handleSignOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/auth/login')
  }
  
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
              <span className="text-xl font-bold">LMS</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src={userData.avatar_url || ''} alt={userData.full_name} />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{userData.full_name}</p>
                    <p className="text-xs text-muted-foreground">{userData.email}</p>
                    <p className="text-xs text-muted-foreground capitalize">{userData.role}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form action={handleSignOut}>
                    <button type="submit" className="w-full text-left">Sign out</button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-64 border-r bg-muted/40 sm:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1 px-2 text-sm font-medium">
              <Link 
                href="/dashboard" 
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent"
              >
                Dashboard
              </Link>
              
              {/* Admin-only navigation */}
              {userRole === 'admin' && (
                <>
                  <Link 
                    href="/dashboard/users" 
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent"
                  >
                    Users
                  </Link>
                </>
              )}
              
              {/* Admin and Teacher navigation */}
              {(userRole === 'admin' || userRole === 'teacher') && (
                <Link 
                  href="/dashboard/courses" 
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent"
                >
                  Courses
                </Link>
              )}
              
              {/* Student-only navigation */}
              {userRole === 'student' && (
                <Link 
                  href="/dashboard/my-courses" 
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent"
                >
                  My Courses
                </Link>
              )}
            </nav>
          </div>
        </aside>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
