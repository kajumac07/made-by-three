import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

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

// GET /api/users → fetch all users
// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db(process.env.MONGODB_DB);

//     const users = await db
//       .collection("users")
//       .find({})
//       .sort({ createdAt: -1 })
//       .toArray();

//     // sanitize output (don’t return password hashes)
//     const safeUsers = users.map((u) => ({
//       _id: u._id.toString(),
//       name: u.name,
//       email: u.email,
//       type: u.type,
//       createdAt: u.createdAt,
//     }));

//     return NextResponse.json(safeUsers);
//   } catch (err) {
//     console.error("GET /api/users error:", err);
//     return NextResponse.json(
//       { error: "Failed to fetch users" },
//       { status: 500 }
//     );
//   }
// }
