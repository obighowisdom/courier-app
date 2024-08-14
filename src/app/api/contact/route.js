import connectMongoDB from "../../../../libs/mongodb"
import Contact from "../../../../models/contacts/contacts";
import { NextResponse } from "next/server"

export async function POST(request) {
    const { name, email, phone,
        message,
    } = await request.json()
    await connectMongoDB();
    await Contact.create({
        name, email, phone,
        message,
    })
    return NextResponse.json({ message: "Contact Created" }, { status: 201 })

}


export async function GET() {
    await connectMongoDB();
    const contact = await Contact.find();
    return NextResponse.json({ contact })
}