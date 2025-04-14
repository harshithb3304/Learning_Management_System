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
| Backend/API  | Supabase Edge Functions , Prisma ORM|
| Auth         | Supabase Auth (Google Login only) + RBAC using Policies |
| Database     | Postgres (Supabase) |

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Supabase account and project
- Google Cloud Platform account (for OAuth)

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/harshithb3304/Learning_Management_System.git

# Navigate to the project directory
cd Learning_Management_System
```

### Step 2: Supabase Setup

1. Create a new Supabase project at [https://app.supabase.com](https://app.supabase.com)
2. Note down your project password during creation (you'll need this for database connection)
3. From the Supabase dashboard, go to Project Settings > API to get:
   - Project URL (e.g., `https://abcdefghijklm.supabase.co`)
   - Project API Keys (anon public key)

### Step 3: Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Configure the OAuth consent screen if prompted:
   - User Type: External
   - App name: Your LMS name
   - User support email: Your email
   - Developer contact information: Your email
6. Create OAuth client ID:
   - Application type: Web application
   - Name: LMS Web Client
   - Authorized JavaScript origins: Add your Supabase project URL and `http://localhost:3000`
   - Authorized redirect URIs: Add `https://[YOUR_SUPABASE_PROJECT_ID].supabase.co/auth/v1/callback` and `http://localhost:3000/auth/callback`
7. Copy the Client ID and Client Secret

### Step 4: Configure Supabase Auth

1. In your Supabase dashboard, go to Authentication > Providers
2. Enable Google provider
3. Enter the Client ID and Client Secret obtained from Google Cloud Console
4. Save the configuration

### Step 5: Environment Setup

Create a `.env` file in the root directory with the following variables or follow `.env.example`:

```
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Database Connection (for Prisma)
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres
```

### Step 6: Install Dependencies

```bash
npm install
```

### Step 7: Database Schema Setup with Prisma

Follow the official Supabase Prisma integration guide: [https://supabase.com/docs/guides/database/prisma](https://supabase.com/docs/guides/database/prisma)


1. Configure Prisma for Supabase:

   The project already includes a `prisma/schema.prisma` file. Make sure it has the correct provider and datasource configuration:
```
   prisma
   datasource db {
   provider  = "postgresql"
   url       = env("DATABASE_URL")
   directUrl = env("DIRECT_URL")
   }
   ```

   Note: The `directUrl` is required when using connection pooling with Supabase.

2. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

3. Push the schema to your Supabase database:

   ```bash
   npx prisma db push
   ```

4. (Optional) Explore your database with Prisma Studio:

   ```bash
   npx prisma studio
   ```

5. (Optional) Seed the database with initial data:

   ```bash
   npx prisma db seed
   ```

### Step 8: Run the Application

```bash
# Start the development server
npm run dev
```

### Step 9: Access the Application

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

Log in using Google authentication. The first user to register will automatically be assigned the admin role.


