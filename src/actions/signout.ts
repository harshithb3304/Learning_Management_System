"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export const handleSignOut = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/auth/login");
};
