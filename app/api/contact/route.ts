import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

interface Message {
  _id?: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
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
      message,
      createdAt: new Date(),
    };

    const result = await db.collection<Message>("messages").insertOne(newMsg);

    return NextResponse.json(
      { success: true, id: result.insertedId, data: newMsg },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
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

    return NextResponse.json(messages);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
