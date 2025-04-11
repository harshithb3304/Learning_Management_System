'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

/**
 * Get all courses with optional filtering by teacher ID
 */
export async function getCourses(teacherId?: string) {
  try {
    const courses = await prisma.course.findMany({
      where: teacherId ? { teacherId } : undefined,
      include: {
        teacher: true,
        enrollments: {
          include: {
            student: true
          }
        }
      },
      orderBy: { title: 'asc' }
    })
    return { courses }
  } catch (error) {
    console.error('Error fetching courses:', error)
    return { error: 'Failed to fetch courses' }
  }
}

/**
 * Get a single course by ID
 */
export async function getCourseById(id: string) {
  try {
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        teacher: true,
        enrollments: {
          include: {
            student: true
          }
        },
        coursework: {
          include: {
            submissions: {
              include: {
                student: true
              }
            }
          }
        }
      }
    })
    
    if (!course) {
      return { error: 'Course not found' }
    }
    
    return { course }
  } catch (error) {
    console.error('Error fetching course:', error)
    return { error: 'Failed to fetch course' }
  }
}

/**
 * Create a new course
 */
export async function createCourse(data: {
  title: string
  description?: string
  imageUrl?: string
  teacherId: string
}) {
  try {
    const course = await prisma.course.create({
      data
    })
    
    revalidatePath('/dashboard/courses')
    return { course }
  } catch (error) {
    console.error('Error creating course:', error)
    return { error: 'Failed to create course' }
  }
}

/**
 * Update an existing course
 */
export async function updateCourse(id: string, data: {
  title?: string
  description?: string
  imageUrl?: string
  teacherId?: string
}) {
  try {
    const course = await prisma.course.update({
      where: { id },
      data
    })
    
    revalidatePath('/dashboard/courses')
    revalidatePath(`/dashboard/courses/${id}`)
    return { course }
  } catch (error) {
    console.error('Error updating course:', error)
    return { error: 'Failed to update course' }
  }
}

/**
 * Delete a course
 */
export async function deleteCourse(id: string) {
  try {
    await prisma.course.delete({
      where: { id }
    })
    
    revalidatePath('/dashboard/courses')
    return { success: true }
  } catch (error) {
    console.error('Error deleting course:', error)
    return { error: 'Failed to delete course' }
  }
}



/**
 * Remove a student from a course
 */
export async function unenrollStudent(enrollmentId: string) {
  try {
    const enrollment = await prisma.enrollment.delete({
      where: {
        id: enrollmentId
      },
      include: {
        course: true
      }
    })
    
    revalidatePath('/dashboard/courses')
    revalidatePath(`/dashboard/courses/${enrollment.courseId}`)
    return { success: true }
  } catch (error) {
    console.error('Error unenrolling student:', error)
    return { error: 'Failed to unenroll student' }
  }
}

/**
 * Add coursework to a course
 */
export async function addCoursework(data: {
  title: string
  description?: string
  courseId: string
  dueDate?: string
}) {
  try {
    const coursework = await prisma.coursework.create({
      data: {
        title: data.title,
        description: data.description,
        courseId: data.courseId,
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined
      }
    })
    
    revalidatePath(`/dashboard/courses/${data.courseId}`)
    return { coursework }
  } catch (error) {
    console.error('Error adding coursework:', error)
    return { error: 'Failed to add coursework' }
  }
}

/**
 * Enroll a student in a course
 */
export async function enrollStudent(data: {
  courseId: string
  studentId: string
}) {
  try {
    // Check if student is already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        courseId_studentId: {
          courseId: data.courseId,
          studentId: data.studentId
        }
      }
    })
    
    if (existingEnrollment) {
      return { error: 'Student is already enrolled in this course' }
    }
    
    const enrollment = await prisma.enrollment.create({
      data: {
        courseId: data.courseId,
        studentId: data.studentId
      },
      include: {
        course: true,
        student: true
      }
    })
    
    revalidatePath('/dashboard/courses')
    revalidatePath(`/dashboard/courses/${data.courseId}`)
    return { enrollment }
  } catch (error) {
    console.error('Error enrolling student:', error)
    return { error: 'Failed to enroll student' }
  }
}
