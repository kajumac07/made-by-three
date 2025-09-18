import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface AdminUser {
  _id: string;
  name: string;
  email: string;
  passwordHash: string;
  type: "admin";
  createdAt: Date;
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const user = await db
      .collection<AdminUser>("users")
      .findOne({ email, type: "admin" });
    if (!user)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );

    const token = jwt.sign(
      { userId: user._id, type: user.type },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return NextResponse.json({ token });
  } catch (err) {
    console.error("POST /api/auth/login error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
