'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

/**
 * Get all users with optional filtering by role
 */
export async function getUsers(role?: string) {
  try {
    const users = await prisma.user.findMany({
      where: role ? { role } : undefined,
      orderBy: { full_name: 'asc' }
    })
    return { users }
  } catch (error) {
    console.error('Error fetching users:', error)
    return { error: 'Failed to fetch users' }
  }
}

/**
 * Get a single user by ID
 */
export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        teacherCourses: true,
        enrollments: {
          include: {
            course: true
          }
        }
      }
    })
    
    if (!user) {
      return { error: 'User not found' }
    }
    
    return { user }
  } catch (error) {
    console.error('Error fetching user:', error)
    return { error: 'Failed to fetch user' }
  }
}

/**
 * Create a new user
 */
export async function createUser(data: {
  id?: string
  email: string
  full_name: string
  role: string
  avatar_url?: string
}) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    })
    
    if (existingUser) {
      return { error: 'User with this email already exists' }
    }
    
    const user = await prisma.user.create({
      data
    })
    
    revalidatePath('/dashboard/users')
    return { user }
  } catch (error) {
    console.error('Error creating user:', error)
    return { error: 'Failed to create user' }
  }
}

/**
 * Update an existing user
 */
export async function updateUser(id: string, data: {
  full_name?: string
  role?: string
  avatar_url?: string
}) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data
    })
    
    revalidatePath('/dashboard/users')
    revalidatePath(`/dashboard/users/${id}`)
    return { user }
  } catch (error) {
    console.error('Error updating user:', error)
    return { error: 'Failed to update user' }
  }
}

/**
 * Delete a user
 */
export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id }
    })
    
    revalidatePath('/dashboard/users')
    return { success: true }
  } catch (error) {
    console.error('Error deleting user:', error)
    return { error: 'Failed to delete user' }
  }
}
