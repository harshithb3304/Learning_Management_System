import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/auth-utils';

export default async function Home() {
  const { user } = await getCurrentUser();
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-xl font-bold">LMS</span>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <Button asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Learning Management System
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A role-based LMS inspired by Google Classroom
                </p>
              </div>
              <div className="space-x-4">
                {user ? (
                  <Button size="lg" asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                ) : (
                  <Button size="lg" asChild>
                    <Link href="/auth/login">Get Started</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Everything You Need
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our LMS provides a comprehensive set of features for administrators, teachers, and students.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Role-Based Access Control</h3>
                  <p className="text-muted-foreground">
                    Different permissions for admins, teachers, and students
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Course Management</h3>
                  <p className="text-muted-foreground">
                    Create, update, and manage courses with ease
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Student Enrollment</h3>
                  <p className="text-muted-foreground">
                    Easily enroll students in courses and track their progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Learning Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
