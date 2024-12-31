import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { ref, update, remove } from 'firebase/database'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const data = await request.json()
    const packageRef = ref(db, `packages/${id}`)
    await update(packageRef, data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating package:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const packageRef = ref(db, `packages/${id}`)
    await remove(packageRef)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting package:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

