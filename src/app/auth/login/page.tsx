import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCurrentUser } from "@/lib/auth-utils";
import Link from "next/link";

export default async function LoginPage() {
  // Check if user is already logged in
  const { user } = await getCurrentUser();
  if (user) {
    redirect("/dashboard");
  }

  const signInWithGoogle = async () => {
    "use server";

    const supabase = await createClient();
    const isLocalEnv = process.env.NODE_ENV === "development";
    const baseUrl = isLocalEnv
      ? "http://localhost:3000"
      : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "";

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${baseUrl}/auth/callback`,
      },
    });

    if (data.url) {
      redirect(data.url);
    }

    if (error) {
      redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
  };

  const signInWithEmail = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      console.error("Email and password are required");
      return;
    }

    try {
      // First, check if the user exists in Supabase Auth
      const supabase = await createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: password || "password123", // Use default password if not provided
      });

      if (error) {
        console.error("Error signing in with email:", error);

        // If user doesn't exist in Auth, try to create them
        if (error.message.includes("Invalid login credentials")) {
          // For test accounts, create them if they don't exist
          if (email.endsWith("@lms.com") && password === "password123") {
            const { error: signUpError } = await supabase.auth.signUp({
              email,
              password: "password123",
              options: {
                emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
              },
            });

            if (signUpError) {
              console.error("Error creating test user:", signUpError);
              return;
            }

            // Try signing in again
            const { error: retryError } =
              await supabase.auth.signInWithPassword({
                email,
                password: "password123",
              });

            if (retryError) {
              console.error(
                "Error signing in after account creation:",
                retryError
              );
              return;
            }
          } else {
            console.error("Invalid email or password");
            return;
          }
        } else {
          console.error(error.message);
          return;
        }
      }

      redirect("/dashboard");
    } catch (error) {
      console.error("Unexpected error during sign in:", error);
      return;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 sm:px-6 w-full max-w-screen-xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              LMS
            </div>
            <span className="text-xl font-bold hidden sm:inline-block">
              EduLearn
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Welcome to LMS</CardTitle>
            <CardDescription>
              Sign in to access your learning dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Google Login */}
            <div>
              <form action={signInWithGoogle} className="space-y-4">
                <Button type="submit" className="w-full">
                  Sign in with Google
                </Button>
              </form>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or sign in with email
                </span>
              </div>
            </div>

            {/* Email Login */}
            <div>
              <form action={signInWithEmail} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@lms.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign in with Email
                </Button>
              </form>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              <p className="font-semibold mb-1">Test accounts:</p>
              <p>- Admin: admin@lms.com</p>
              <p>- Teacher: teacher@lms.com</p>
              <p>- Student: student1@lms.com</p>
              <p>Password for all test accounts: password123</p>
              <p className="font-bold mt-2">
                The Email Login Feature is only for test users. Please use
                Google Auth for regular use.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
