# Learning Management System (LMS)

A role-based Learning Management System inspired by Google Classroom. This application provides a comprehensive platform for administrators, teachers, and students to manage courses, enrollments, and coursework.

## Features

### Authentication
- Supabase Auth with Google Login
- Role-based access control (RBAC) using Supabase Policies & Auth
- Role-based access (Admin / Teacher / Student)

### Dashboard
- Unified layout with scoped content per role
- Responsive & accessible design with shadcn/ui components

### Role-Based Features

#### Admin Capabilities
- Manage all users (Create, Update, Delete)
- Assign roles (Teacher / Student)
- Manage all courses (CRUD)

#### Teacher Capabilities
- Create, Update, Delete own courses
- Manage students within own courses (Add / Remove)
- Upload and manage coursework

#### Student Capabilities
- View enrolled courses
- Access coursework within enrolled courses

## Tech Stack

| Layer        | Tech                        |
|--------------|-----------------------------|  
| Frontend     | Next.js, Tailwind CSS, shadcn/ui |
| Backend/API  | Supabase Edge Functions (Optional for server logic) |
| Auth         | Supabase Auth (Google Login only) + RBAC using Policies |
| Database     | Supabase Postgres |

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Database Setup

1. Create a new Supabase project
2. Set up the following tables in your Supabase database:
   - users
   - courses
   - enrollments
   - coursework

3. Configure authentication with Google OAuth provider

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Application Structure

```
src/
├── app/                    # Next.js app directory
│   ├── auth/               # Authentication pages
│   ├── dashboard/          # Dashboard and role-based pages
│   └── page.tsx            # Landing page
├── components/             # React components
│   ├── layout/             # Layout components
│   └── ui/                 # UI components from shadcn/ui
├── lib/                    # Utility functions
│   └── supabase/           # Supabase client setup
└── types/                  # TypeScript type definitions
```

## Deployment

This application can be deployed to Vercel or any other platform that supports Next.js applications.

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
