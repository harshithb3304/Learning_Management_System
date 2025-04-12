import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth-utils";
import { ArrowRight, BookOpen, Users, Award, CheckCircle } from "lucide-react";

export default async function Home() {
  const { user } = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 w-full max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 font-semibold">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                LMS
              </div>
              <span className="text-xl font-bold hidden sm:inline-block">
                EduLearn
              </span>
            </div>
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
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-background to-muted flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Transform Your{" "}
                    <span className="text-primary">Learning</span> Experience
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A powerful, intuitive learning management system designed
                    for modern education. Empower teachers and engage students
                    with our comprehensive platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {user ? (
                    <Button size="lg" className="group" asChild>
                      <Link href="/dashboard">
                        Go to Dashboard
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  ) : (
                    <Button size="lg" className="group" asChild>
                      <Link href="/auth/login">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  )}
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Role-Based Access</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Course Management</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Easy Access to Course Resources</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none relative">
                <div className="aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="h-full w-full bg-muted/50 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center space-y-2">
                          <BookOpen className="h-16 w-16 mx-auto text-primary/80" />
                          <p className="text-xl font-medium">
                            Interactive Learning Platform
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  <span className="font-medium">Powerful Features</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need to Succeed
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive platform provides all the tools needed for
                  effective teaching and learning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Role-Based Access</h3>
                  <p className="mt-2 text-muted-foreground min-h-[6rem]">
                    Tailored experiences for administrators, teachers, and
                    students with appropriate permissions.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Course Management</h3>
                  <p className="mt-2 text-muted-foreground min-h-[6rem]">
                    Create, update, and manage courses easily.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Course Resources</h3>
                  <p className="mt-2 text-muted-foreground min-h-[6rem]">
                    Easy access to course materials and resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 flex justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  <span className="font-medium">About EduLearn</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Modern Education Platform
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  EduLearn is designed to streamline the educational process for
                  institutions of all sizes. Our platform connects teachers and
                  students in a collaborative digital environment.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <div className="rounded-lg border bg-background p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To provide educational institutions with powerful tools that
                  enhance teaching and learning experiences through technology.
                  We believe in making education more accessible, engaging, and
                  effective for everyone.
                </p>
                <h3 className="text-xl font-bold mb-4">Key Principles</h3>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Intuitive design focused on user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Robust security and privacy protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>
                      Continuous improvement based on educator feedback
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join educators and students on our learning management
                  platform.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2 mt-6">
                <div className="grid gap-2">
                  {user ? (
                    <Button size="lg" className="w-full" asChild>
                      <Link href="/dashboard">Go to Dashboard</Link>
                    </Button>
                  ) : (
                    <Button size="lg" className="w-full" asChild>
                      <Link href="/auth/login">Sign In</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="w-full flex justify-center">
          <p className="text-center text-xs text-muted-foreground">
            {new Date().getFullYear()} EduLearn LMS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
