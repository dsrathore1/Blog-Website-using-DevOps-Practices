import BlogCard from "@/app/Components/Blog-Card";
import Header from "@/app/Components/Header";

export default function BlogPage() {
    return (
        <>
        <Header title={"Blog"}/>
            <div className="flex justify-between items-center flex-wrap my-24 mx-32">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </>
    )
}