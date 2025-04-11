'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

/**
 * Get all submissions for a specific coursework
 */
export async function getSubmissions(courseworkId: string) {
  try {
    const submissions = await prisma.submission.findMany({
      where: { courseworkId },
      include: {
        student: true,
        coursework: true
      },
      orderBy: { createdAt: 'desc' }
    })
    return { submissions }
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return { error: 'Failed to fetch submissions' }
  }
}

/**
 * Get submissions by student ID
 */
export async function getStudentSubmissions(studentId: string) {
  try {
    const submissions = await prisma.submission.findMany({
      where: { studentId },
      include: {
        coursework: {
          include: {
            course: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    return { submissions }
  } catch (error) {
    console.error('Error fetching student submissions:', error)
    return { error: 'Failed to fetch student submissions' }
  }
}

/**
 * Get a single submission by ID
 */
export async function getSubmissionById(id: string) {
  try {
    const submission = await prisma.submission.findUnique({
      where: { id },
      include: {
        student: true,
        coursework: {
          include: {
            course: true
          }
        }
      }
    })
    
    if (!submission) {
      return { error: 'Submission not found' }
    }
    
    return { submission }
  } catch (error) {
    console.error('Error fetching submission:', error)
    return { error: 'Failed to fetch submission' }
  }
}

/**
 * Create or update a submission
 */
export async function submitAssignment(data: {
  courseworkId: string
  studentId: string
  content: string
  fileUrl?: string
}) {
  try {
    // Check if submission already exists
    const existingSubmission = await prisma.submission.findUnique({
      where: {
        courseworkId_studentId: {
          courseworkId: data.courseworkId,
          studentId: data.studentId
        }
      }
    })
    
    let submission;
    
    if (existingSubmission) {
      // Update existing submission
      submission = await prisma.submission.update({
        where: { id: existingSubmission.id },
        data: {
          content: data.content,
          fileUrl: data.fileUrl,
          // Reset grade and feedback when resubmitting
          grade: null,
          feedback: null
        },
        include: {
          coursework: true
        }
      })
    } else {
      // Create new submission
      submission = await prisma.submission.create({
        data,
        include: {
          coursework: true
        }
      })
    }
    
    revalidatePath(`/dashboard/courses/${submission.coursework.courseId}`)
    return { submission }
  } catch (error) {
    console.error('Error submitting assignment:', error)
    return { error: 'Failed to submit assignment' }
  }
}

/**
 * Grade a submission
 */
export async function gradeSubmission(id: string, data: {
  grade: number
  feedback?: string
}) {
  try {
    const submission = await prisma.submission.update({
      where: { id },
      data,
      include: {
        coursework: {
          include: {
            course: true
          }
        }
      }
    })
    
    revalidatePath(`/dashboard/courses/${submission.coursework.course.id}`)
    return { submission }
  } catch (error) {
    console.error('Error grading submission:', error)
    return { error: 'Failed to grade submission' }
  }
}

/**
 * Delete a submission
 */
export async function deleteSubmission(id: string) {
  try {
    const submission = await prisma.submission.delete({
      where: { id },
      include: {
        coursework: {
          include: {
            course: true
          }
        }
      }
    })
    
    revalidatePath(`/dashboard/courses/${submission.coursework.course.id}`)
    return { success: true }
  } catch (error) {
    console.error('Error deleting submission:', error)
    return { error: 'Failed to delete submission' }
  }
}
