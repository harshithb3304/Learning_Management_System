"use client";

import {  usePathname } from "next/navigation";
import Link from "next/link";
import {
  Users,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { handleSignOut

 } from "@/actions/signout";
import { Button } from "./ui/button";
interface AppSidebarProps {
  role: "admin" | "teacher" | "student";
}

// All role-based menu items
const roleBasedItems = {
  admin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Users",
      url: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Manage Courses",
      url: "/dashboard/courses",
      icon: BookOpen,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: Settings,
    },
  ],
  teacher: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Your Courses",
      url: "/dashboard/courses",
      icon: BookOpen,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: Settings,
    },
  ],
  student: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Courses",
      url: "/dashboard/my-courses",
      icon: GraduationCap,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ role }: AppSidebarProps) {
  const pathname = usePathname();
  const sidebar = useSidebar();
  const collapsed = !sidebar.open;
  const items = roleBasedItems[role];


  return (
    <Sidebar className="border-r bg-background" collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          {!collapsed && (
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              LMS
            </div>
          )}
          {!collapsed && (
            <span className="font-semibold text-lg">EduLearn</span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {collapsed ? null : "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.url ||
                      pathname.startsWith(`${item.url}/`)
                    }
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="ml-2">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex justify-between items-center">
          {!collapsed && (
            <span className="text-sm text-muted-foreground">EduLearn LMS</span>
          )}
        </div>
        <SidebarMenu className="mt-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button variant="ghost" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Logout</span>}
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
