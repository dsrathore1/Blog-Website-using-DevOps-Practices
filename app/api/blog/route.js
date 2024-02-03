import { client } from "@/DB/connectDB";
import { getBlog, postBlogData } from "@/DB/queries";
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

export async function POST(req) {
    try {
        const { AUTHOR, TITLE, BLOG_DESCRIPTION, BLOG_CONTENT, EMAIL_ID } = await req.json();
        console.log({ AUTHOR, TITLE, BLOG_DESCRIPTION, BLOG_CONTENT, EMAIL_ID });
        // return res.json({
        //     AUTHOR,
        //     TITLE,
        //     BLOG_DESCRIPTION,
        //     BLOG_CONTENT,
        //     EMAIL_ID
        // });

        const result = await client.query(postBlogData, [AUTHOR, TITLE, BLOG_DESCRIPTION, BLOG_CONTENT, EMAIL_ID]);
        console.log(result.rows);
        return res.json({ message: "Imported data successfully", result: result.rows, data: { AUTHOR, TITLE, BLOG_DESCRIPTION, BLOG_CONTENT, EMAIL_ID } });

    } catch (error) {
        return res.json({
            message: "Internal server error mentioned below 👇🏻",
            error: error
        }, { status: 500 });
    }
}