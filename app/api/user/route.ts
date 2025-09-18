import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import bcrypt from "bcryptjs";

interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  type: "admin" | "client" | "customer";
  createdAt: Date;
}

// POST /api/users → create a user
export async function POST(req: Request) {
  try {
    const { name, email, password, type } = await req.json();

    if (!name || !email || !password || !type) {
      return NextResponse.json(
        { error: "All fields (name, email, password, type) are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: Omit<User, "password"> & { passwordHash: string } = {
      name,
      email,
      passwordHash: hashedPassword,
      type,
      createdAt: new Date(),
    };

    // Remove _id if present, since MongoDB will generate its own ObjectId
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...userToInsert } = newUser;

    const result = await db.collection("users").insertOne(userToInsert);

    return NextResponse.json(
      {
        success: true,
        id: result.insertedId,
        user: { ...newUser, passwordHash: undefined },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/users error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET /api/users → fetch all users
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const users = await db
      .collection("users")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // sanitize output (don’t return password hashes)
    const safeUsers = users.map((u) => ({
      _id: u._id.toString(),
      name: u.name,
      email: u.email,
      type: u.type,
      createdAt: u.createdAt,
    }));

    return NextResponse.json(safeUsers);
  } catch (err) {
    console.error("GET /api/users error:", err);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
