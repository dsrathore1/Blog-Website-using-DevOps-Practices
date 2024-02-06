"use client"
import React from 'react'
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import BG from "@/app/Assets/landscape.jpg"

const DetailCard = () => {
    let cancel = true;
    return (
        <div className={cancel ? `sticky h-full w-3/4 bg-[#000000d7] rounded-2xl z-0 top-24` : 'hidden'}>
            <MdCancel className='text-[#ffffffcf] text-4xl absolute right-4 top-2 cursor-pointer' onClick={() => {
                cancel = false;
            }} />
            <Image className='w-full rounded-t-2xl h-[60vh] object-cover' src={BG} alt='#' height={100} width={800} />
            <div className='scrollbar text-white px-3 py-5 overflow-y-scroll h-[100vh] snap-y'>
                <h1 className='text-5xl font-bold'>DevOps Life cycle</h1>
                <div className='flex text-sm justify-start gap-10 my-5'>
                    <p>December 24, 2023</p> /
                    <p>DevOps</p> /
                    <p>Author</p>
                </div>
                <div className='mt-10 divide-[#bbbbbb33] divide-y-[.5px]'>
                    <div className='flex w-full items-center gap-10'>
                        <span className='text-white font-semibold text-xl uppercase'>Description</span>
                        <p className='text-lg text-gray-200 my-10'> The DevOps lifecycle is an iterative and collaborative process that integrates automation and feedback to deliver high-quality software, tailored to meet business and user requirements.</p>
                    </div>
                    <div className='flex w-full justify-center items-center gap-10'>
                        <span className='text-white font-semibold text-xl uppercase'>Content</span>
                        <p className='text-lg text-gray-200 my-10'> DevOps Lifecycle is the set of phases that includes DevOps for taking part in Development and Operation group duties for quicker software program delivery. DevOps follows positive techniques that consist of code, building, testing, releasing, deploying, operating, displaying, and planning. DevOps lifecycle follows a range of phases such as non-stop development, non-stop integration, non-stop testing, non-stop monitoring, and non-stop feedback. Each segment of the DevOps lifecycle is related to some equipment and applied sciences to obtain the process. Some of the frequently used tools are open source and are carried out primarily based on commercial enterprise requirements. DevOps lifecycle is effortless to manipulate and it helps satisfactory delivery.</p>
                    </div>
                    <div className='flex w-full justify-center items-center gap-10'>
                        <span className='text-white font-semibold text-xl uppercase'>Content</span>
                        <p className='text-lg text-gray-200 my-10'> DevOps Lifecycle is the set of phases that includes DevOps for taking part in Development and Operation group duties for quicker software program delivery. DevOps follows positive techniques that consist of code, building, testing, releasing, deploying, operating, displaying, and planning. DevOps lifecycle follows a range of phases such as non-stop development, non-stop integration, non-stop testing, non-stop monitoring, and non-stop feedback. Each segment of the DevOps lifecycle is related to some equipment and applied sciences to obtain the process. Some of the frequently used tools are open source and are carried out primarily based on commercial enterprise requirements. DevOps lifecycle is effortless to manipulate and it helps satisfactory delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard