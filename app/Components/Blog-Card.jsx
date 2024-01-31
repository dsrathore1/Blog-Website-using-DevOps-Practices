import React from 'react'
import Image from "next/image";
import CardImg from "@/app/Assets/Meditation.jpg"

const BlogCard = () => {
    return (
        <>
            <div className='bg-[#101010] rounded-lg text-[#bdbbb3] w-[40vw] h-[80vh] flex flex-col justify-start my-5'>
                <Image className='w-full h-[45vh] object-cover rounded-tl-lg rounded-tr-lg' src={CardImg} alt='' height={400} width={400} priority={false} />
                <div className='my-4 mx-5'>
                    <h1 className='text-3xl font-semibold text-white'>Post: Gallery Example</h1>
                    <div className='flex text-sm justify-start gap-10 my-5'>
                        <p>December 19, 2020</p> /
                        <p>Category</p> /
                        <p>{ }Comments</p>
                    </div>
                    <p className='leading-7 mt-8'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the...</p>
                </div>
            </div>
        </>
    )
}

export default BlogCard;