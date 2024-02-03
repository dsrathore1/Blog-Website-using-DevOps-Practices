"use client"
import BlogCard from "@/app/Components/Blog-Card";
import DetailCard from "@/app/Components/DetailCard";
import Header from "@/app/Components/Header";
import { useEffect } from "react";

export default function BlogPage() {
    useEffect(() => {
        document.title = "Blog App - Blog"
    }, [])
    return (
        <div className="relative z-10">
            <Header title={"Blog"} />
            <div className="flex justify-center items-center gap-8 flex-wrap my-24 mx-32">
                <DetailCard />
                <BlogCard />
            </div>
        </div>
    )
}