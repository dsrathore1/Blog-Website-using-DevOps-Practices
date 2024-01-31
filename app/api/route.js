import { client } from "@/DB/connectDB";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const result = await client.query('SELECT * FROM TEST_TABLE');
        // console.log(result.rows);
        return NextResponse.json({ message: "Your data", result: result.rows }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            message: "Internal server error mentioned below 👇🏻",
            error: error
        }, { status: 500 });
    }
} 