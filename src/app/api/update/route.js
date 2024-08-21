import connectMongoDB from "../../../../libs/mongodb"
import Update from "../../../../models/updates/updates";
import { NextResponse } from "next/server"

export async function POST(request) {
  const { trackingID, title, company, date,
    time,
  } = await request.json()
  await connectMongoDB();
  await Update.create({
    trackingID, title, company, date,
    time,
  })
  return NextResponse.json({ message: "details Updated" }, { status: 201 })

}


export async function GET() {
  await connectMongoDB();
  const update = await Update.find();
  return NextResponse.json({ update })
}