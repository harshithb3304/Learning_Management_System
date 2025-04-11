import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getCurrentUser } from '@/lib/auth-utils'

export default async function LoginPage() {
  // Check if user is already logged in
  const { user } = await getCurrentUser()
  if (user) {
    redirect('/dashboard')
  }

  const signInWithGoogle = async () => {
    'use server'
    
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
      },
    })
    
    if (error) {
      console.error('Error signing in with Google:', error)
      return
    }
    
    redirect(data.url)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome to LMS</CardTitle>
          <CardDescription>
            Sign in to access your learning dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={signInWithGoogle} className="space-y-4">
            <Button type="submit" className="w-full">
              Sign in with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
