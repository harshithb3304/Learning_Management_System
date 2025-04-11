import { createClient } from '@/utils/supabase/server'
import { prisma } from '@/lib/prisma'

/**
 * Synchronizes a Supabase user with the Prisma database
 * This ensures that when a user signs up via Supabase Auth,
 * they are also created in the Prisma database
 */
export async function syncUserWithDatabase(userId: string, email: string, fullName: string, avatarUrl?: string) {
  try {
    // Check if user already exists in Prisma DB
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!existingUser) {
      // Create new user in Prisma DB
      // Default role is 'student' - can be changed by admin later
      await prisma.user.create({
        data: {
          id: userId,
          email,
          full_name: fullName,
          role: 'student',
          avatar_url: avatarUrl
        }
      })
      console.log(`Created new user in database: ${email}`)
    } else {
      // Update existing user if needed
      await prisma.user.update({
        where: { id: userId },
        data: {
          email,
          full_name: fullName,
          avatar_url: avatarUrl || existingUser.avatar_url
        }
      })
      console.log(`Updated existing user in database: ${email}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Error syncing user with database:', error)
    return { error: 'Failed to sync user with database' }
  }
}

/**
 * Gets the current user from Supabase Auth and ensures they exist in the Prisma database
 */
export async function getCurrentUser() {
  try {
    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
      return { user: null }
    }

    // Get user from Prisma database
    const dbUser = await prisma.user.findUnique({
      where: { id: user.id }
    })

    // If user exists in Supabase but not in Prisma, create them
    if (!dbUser && user.email) {
      const fullName = user.user_metadata?.full_name || user.user_metadata?.name || 'User'
      const avatarUrl = user.user_metadata?.avatar_url

      await syncUserWithDatabase(user.id, user.email, fullName, avatarUrl)
      
      // Fetch the newly created user
      const newDbUser = await prisma.user.findUnique({
        where: { id: user.id }
      })
      
      return { user: newDbUser }
    }

    return { user: dbUser }
  } catch (error) {
    console.error('Error getting current user:', error)
    return { user: null, error: 'Failed to get current user' }
  }
}
