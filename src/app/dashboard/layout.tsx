import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
import { getCurrentUser } from "@/lib/auth-utils";
import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground h-full`}
      >
        <SidebarProvider>
          <div className="flex h-full">
            <AppSidebar role={user.role as "admin" | "teacher" | "student"} />

            <div className="flex h-screen w-full overflow-hidden">
              <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 w-full">
                <div className="flex justify-between items-center mb-4">
                  <SidebarTrigger />
                </div>
                <div className="mx-auto max-w-6xl">
                  {children}
                </div>
              </main>
            </div>
          </div>

          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
