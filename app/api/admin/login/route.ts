import { NextResponse } from 'next/server'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    if (user) {
      // User signed in successfully
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

