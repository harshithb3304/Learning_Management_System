export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          teacher_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          teacher_id: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      enrollments: {
        Row: {
          id: string
          created_at: string
          course_id: string
          student_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          course_id: string
          student_id: string
        }
        Update: {
          id?: string
          created_at?: string
          course_id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_student_id_fkey"
            columns: ["student_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      coursework: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          course_id: string
          file_url: string | null
          due_date: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          course_id: string
          file_url?: string | null
          due_date?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          course_id?: string
          file_url?: string | null
          due_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "coursework_course_id_fkey"
            columns: ["course_id"]
            referencedRelation: "courses"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          role: 'admin' | 'teacher' | 'student'
          avatar_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          full_name: string
          role?: 'admin' | 'teacher' | 'student'
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          role?: 'admin' | 'teacher' | 'student'
          avatar_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
