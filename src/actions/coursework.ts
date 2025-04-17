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
}, userId: string, userRole: string) {
  try {
    // Check if the course exists and if the user has permission
    const course = await prisma.course.findUnique({
      where: { id: data.courseId },
      select: { teacherId: true }
    });

    if (!course) {
      return { error: "Course not found" };
    }

    // Only admin or the course teacher can create coursework
    if (userRole !== 'admin' && course.teacherId !== userId) {
      return { error: "You don't have permission to add coursework to this course" };
    }

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
}, userId: string, userRole: string) {
  try {
    // First get the coursework to check permissions
    const existingCoursework = await prisma.coursework.findUnique({
      where: { id },
      include: {
        course: true
      }
    });

    if (!existingCoursework) {
      return { error: "Coursework not found" };
    }

    // Only admin or the course teacher can update coursework
    if (userRole !== 'admin' && existingCoursework.course.teacherId !== userId) {
      return { error: "You don't have permission to update this coursework" };
    }

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
export async function deleteCoursework(id: string, courseId: string, userId: string, userRole: string) {
  try {
    // First get the coursework to check permissions
    const coursework = await prisma.coursework.findUnique({
      where: { id },
      include: {
        course: true
      }
    });

    if (!coursework) {
      return { error: "Coursework not found" };
    }

    // Only admin or the course teacher can delete coursework
    if (userRole !== 'admin' && coursework.course.teacherId !== userId) {
      return { error: "You don't have permission to delete this coursework" };
    }

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
