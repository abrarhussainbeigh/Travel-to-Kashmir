import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { ref, get, push } from 'firebase/database'

export async function GET() {
  try {
    const packagesRef = ref(db, 'packages')
    const snapshot = await get(packagesRef)
    const packages = snapshot.val()
    return NextResponse.json({ packages })
  } catch (error) {
    console.error('Error fetching packages:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const packagesRef = ref(db, 'packages')
    const newPackageRef = await push(packagesRef, data)
    return NextResponse.json({ id: newPackageRef.key, ...data })
  } catch (error) {
    console.error('Error creating package:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

