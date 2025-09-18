import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

interface User {
  _id: string;
  name: string;
  email: string;
  passwordHash: string;
  type: "admin" | "client" | "customer";
  createdAt: Date;
}

// POST /api/users → create a user

export async function POST(req: Request) {
  try {
    const { name, email, password, type } = await req.json();

    if (!name || !email || !password || !type) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser)
      return NextResponse.json(
        { error: "User already exists, use another account" },
        { status: 409 }
      );

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await db.collection("users").insertOne({
      name,
      email,
      passwordHash,
      type,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET /api/users?id=xxxx&type=admin
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const type = searchParams.get("type");

    if (!id || !type) {
      return NextResponse.json(
        { error: "id and type query params are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const user = await db.collection("users").findOne({
      _id: new ObjectId(id),
      type,
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // sanitize output
    const safeUser = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      type: user.type,
      createdAt: user.createdAt,
    };

    return NextResponse.json(safeUser);
  } catch (err) {
    console.error("GET /api/users error:", err);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
