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
}, userId: string, userRole: string) {
  try {
    // Check if the coursework exists
    const coursework = await prisma.coursework.findUnique({
      where: { id: data.courseworkId },
      include: {
        course: {
          select: {
            id: true,
            teacherId: true
          }
        }
      }
    });

    if (!coursework) {
      return { error: "Coursework not found" };
    }

    // Check if user has permission to submit assignment
    // Only admin, the course teacher, or the student themselves can submit
    const isSelfSubmission = userId === data.studentId;
    const isTeacherOfCourse = coursework.course.teacherId === userId;

    if (userRole !== 'admin' && !isTeacherOfCourse && !isSelfSubmission) {
      return { error: "You don't have permission to submit this assignment" };
    }

    // Check if the user being submitted for is actually a student
    if (!isSelfSubmission) {
      const student = await prisma.user.findUnique({
        where: { id: data.studentId },
        select: { role: true }
      });

      if (!student) {
        return { error: "Student not found" };
      }

      if (student.role !== 'student') {
        return { error: "Submissions can only be made for users with student role" };
      }
    }

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
}, userId: string, userRole: string) {
  try {
    // First get the submission to check permissions
    const existingSubmission = await prisma.submission.findUnique({
      where: { id },
      include: {
        coursework: {
          include: {
            course: true
          }
        }
      }
    });

    if (!existingSubmission) {
      return { error: "Submission not found" };
    }

    // Only admin or the course teacher can grade submissions
    if (userRole !== 'admin' && existingSubmission.coursework.course.teacherId !== userId) {
      return { error: "You don't have permission to grade this submission" };
    }

    // Validate grade is within reasonable range (0-100)
    if (data.grade < 0 || data.grade > 100) {
      return { error: "Grade must be between 0 and 100" };
    }

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
export async function deleteSubmission(id: string, userId: string, userRole: string) {
  try {
    // First get the submission to check permissions
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
    });

    if (!submission) {
      return { error: "Submission not found" };
    }

    // Check if user has permission to delete the submission
    // Only admin, the course teacher, or the student themselves can delete
    const isSelfDeletion = userId === submission.student.id;
    const isTeacherOfCourse = submission.coursework.course.teacherId === userId;

    if (userRole !== 'admin' && !isTeacherOfCourse && !isSelfDeletion) {
      return { error: "You don't have permission to delete this submission" };
    }

    await prisma.submission.delete({
      where: { id }
    });
    
    revalidatePath(`/dashboard/courses/${submission.coursework.course.id}`)
    return { success: true }
  } catch (error) {
    console.error('Error deleting submission:', error)
    return { error: 'Failed to delete submission' }
  }
}
