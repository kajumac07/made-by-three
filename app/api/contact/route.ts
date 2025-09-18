import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

interface Message {
  _id?: ObjectId;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const newMsg: Message = {
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    };

    const result = await db.collection<Message>("messages").insertOne(newMsg);

    return NextResponse.json(
      { success: true, id: result.insertedId.toString(), data: newMsg },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const messages = await db
      .collection<Message>("messages")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Convert _id -> string for safe JSON
    const safeMessages = messages.map((msg) => ({
      ...msg,
      _id: msg._id?.toString(),
    }));

    return NextResponse.json(safeMessages);
  } catch (err) {
    console.error("GET /api/contact error:", err);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
