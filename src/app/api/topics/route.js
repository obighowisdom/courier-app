import connectMongoDB from "../../../../libs/mongodb"
import Topic from "../../../../models/users/users";
import {NextResponse} from "next/server"

export async function POST(request) {
    const { clientName, email, state,
        clientCountry,
        trackingID,
        orderID,
        SenderName,
        senderTel,
        senderCountry,
        destination,
        orderDate,
        packageWeight,
        packageDesc,
        status,
        delDate,
        mode,
        officer,
        comment,
        map } = await request.json()
    await connectMongoDB();
    await Topic.create({
        clientName, email, state,
        clientCountry,
        trackingID,
        orderID,
        SenderName,
        senderTel,
        senderCountry,
        destination,
        orderDate,
        packageWeight,
        packageDesc,
        status,
        delDate,
        mode,
        officer,
        comment,
        map
    })
    return NextResponse.json({ message: "User Created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: "User Deleted" }, { status: 200 })

}