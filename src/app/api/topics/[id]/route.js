import connectMongoDB from '../../../../../libs/mongodb'
import Topic from '../../../../../models/users'
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    const { id } = params
    const { newStatus: status,
        newDelDate: delDate,
        newMode: mode,
        newOfficer: officer,
        newComment: comment,
        newMap: map } = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, { status, delDate, mode, officer, comment, map })
    return NextResponse.json({message: "Client Details Updated"},{status: 200})
}

export async function GET(request, { params }) {
    const { id } = params
    const topic = await Topic.findOne({ _id: id })
    return NextResponse.json({topic}, {status:200})
}