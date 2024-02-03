import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        return NextResponse.json({ message: "Welcome🎉🎊", GOTO: "http://localhost:3000/api/blog" });

    } catch (error) {
        return NextResponse.json({
            message: "Internal server error mentioned below 👇🏻",
            error: error
        }, { status: 500 });
    }
} 