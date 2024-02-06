"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import CardImg from "@/app/Assets/Meditation.jpg"
import moment from 'moment';

const BlogCard = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            await fetch("http://localhost:3000/api/blog", {
                method: "GET"
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data.result);
                    setData(data.result);
                });
        } catch (error) {
            if (error) throw error;
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {
                data && data.map((data) => {
                    // console.log(data.created_at);
                    const createdDate = moment(data.created_at).format('MMMM Do YYYY');
                    return (
                        <div className='bg-[#101010] rounded-lg text-[#bdbbb3] w-[40vw] h-[80vh] flex flex-col justify-start my-5 cursor-pointer' key={data.sr_no} onClick={() => { }}>
                            <Image className='w-full h-[45vh] object-cover rounded-tl-lg rounded-tr-lg' src={CardImg} alt='' height={400} width={400} priority={false} />
                            <div className='my-4 mx-5'>
                                <h1 className='text-3xl font-semibold text-white'>{data.title}</h1>
                                <div className='flex text-sm justify-start gap-10 my-5'>
                                    <p>{createdDate}</p> /
                                    <p>Category</p> /
                                    <p>{data.author}</p>
                                </div>
                                <p className='leading-7 mt-8 line-clamp-3'>{data.blog_description}</p>
                            </div>
                        </div>
                    );
                }
                )
            }
        </>
    );
}

export default BlogCard;