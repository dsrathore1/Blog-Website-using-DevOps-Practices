import { client } from "@/DB/connectDB";
import { deleteAllData, getBlog } from "@/DB/queries";
import { NextResponse as res } from "next/server";

export async function GET(req) {
    try {
        const result = await client.query(getBlog);
        // console.log(result.rows);
        return res.json({ message: "Your data", result: result.rows }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            message: "Internal server error mentioned below 👇🏻",
            error: error
        }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        await client.query(deleteAllData);
        return res.json("Data deleted successfully");
    } catch (error) {
        if (err) throw err;
    }
}