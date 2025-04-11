'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

/**
 * Get all coursework for a specific course
 */
export async function getCoursework(courseId: string) {
  try {
    const coursework = await prisma.coursework.findMany({
      where: { courseId },
      include: {
        course: true,
        submissions: {
          include: {
            student: true
          }
        }
      },
      orderBy: { dueDate: 'asc' }
    })
    return { coursework }
  } catch (error) {
    console.error('Error fetching coursework:', error)
    return { error: 'Failed to fetch coursework' }
  }
}

/**
 * Get a single coursework item by ID
 */
export async function getCourseworkById(id: string) {
  try {
    const coursework = await prisma.coursework.findUnique({
      where: { id },
      include: {
        course: true,
        submissions: {
          include: {
            student: true
          }
        }
      }
    })
    
    if (!coursework) {
      return { error: 'Coursework not found' }
    }
    
    return { coursework }
  } catch (error) {
    console.error('Error fetching coursework:', error)
    return { error: 'Failed to fetch coursework' }
  }
}

/**
 * Create a new coursework item
 */
export async function createCoursework(data: {
  title: string
  description?: string
  dueDate?: Date
  courseId: string
}) {
  try {
    const coursework = await prisma.coursework.create({
      data
    })
    
    revalidatePath(`/dashboard/courses/${data.courseId}`)
    return { coursework }
  } catch (error) {
    console.error('Error creating coursework:', error)
    return { error: 'Failed to create coursework' }
  }
}

/**
 * Update an existing coursework item
 */
export async function updateCoursework(id: string, data: {
  title?: string
  description?: string
  dueDate?: Date
}) {
  try {
    const coursework = await prisma.coursework.update({
      where: { id },
      data,
      include: {
        course: true
      }
    })
    
    revalidatePath(`/dashboard/courses/${coursework.course.id}`)
    return { coursework }
  } catch (error) {
    console.error('Error updating coursework:', error)
    return { error: 'Failed to update coursework' }
  }
}

/**
 * Delete a coursework item
 */
export async function deleteCoursework(id: string, courseId: string) {
  try {
    await prisma.coursework.delete({
      where: { id }
    })
    
    revalidatePath(`/dashboard/courses/${courseId}`)
    return { success: true }
  } catch (error) {
    console.error('Error deleting coursework:', error)
    return { error: 'Failed to delete coursework' }
  }
}
