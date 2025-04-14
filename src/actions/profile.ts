"use server";

import { prisma } from "@/lib/prisma";

export async function updateUserProfile(userId: string, data: { full_name: string }) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { full_name: data.full_name },
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { error: "Failed to update profile" };
  }
}
