import { PrismaClient } from '../src/generated/prisma'
import { randomUUID } from 'crypto'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting to seed the database...')

  // Create admin user
  const adminId = randomUUID()
  await prisma.user.upsert({
    where: { email: 'admin@lms.com' },
    update: {},
    create: {
      id: adminId,
      email: 'admin@lms.com',
      full_name: 'Admin User',
      role: 'admin',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  console.log('Created admin user: admin@lms.com')

  // Create 10 student users
  const studentEmails = [
    'student1@lms.com',
    'student2@lms.com',
    'student3@lms.com',
    'student4@lms.com',
    'student5@lms.com',
    'student6@lms.com',
    'student7@lms.com',
    'student8@lms.com',
    'student9@lms.com',
    'student10@lms.com',
  ]

  for (const email of studentEmails) {
    const studentId = randomUUID()
    const studentNumber = email.replace('student', '').replace('@lms.com', '')
    
    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        id: studentId,
        email,
        full_name: `Student ${studentNumber}`,
        role: 'student',
        avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${studentNumber}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
  }
  console.log('Created 10 student users')

  // Create a teacher user
  const teacherId = randomUUID()
  await prisma.user.upsert({
    where: { email: 'teacher@lms.com' },
    update: {},
    create: {
      id: teacherId,
      email: 'teacher@lms.com',
      full_name: 'Teacher User',
      role: 'teacher',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  console.log('Created teacher user: teacher@lms.com')

  // Create a sample course
  const courseId = randomUUID()
  await prisma.course.upsert({
    where: { id: courseId },
    update: {},
    create: {
      id: courseId,
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript',
      teacherId: teacherId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  console.log('Created sample course')

  // Enroll some students in the course
  for (let i = 1; i <= 5; i++) {
    const student = await prisma.user.findUnique({
      where: { email: `student${i}@lms.com` },
    })

    if (student) {
      await prisma.enrollment.upsert({
        where: {
          courseId_studentId: {
            courseId,
            studentId: student.id,
          },
        },
        update: {},
        create: {
          courseId,
          studentId: student.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })
    }
  }
  console.log('Enrolled 5 students in the sample course')

  console.log('Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
