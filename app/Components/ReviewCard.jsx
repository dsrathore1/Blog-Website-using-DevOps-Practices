import React from 'react';
import { AiFillStar } from "react-icons/ai";

const ReviewCard = () => {
    return (
        <div className='flex justify-around items-center h-[40vh] my-10 w-full text-white bg-[#000]'>
            <div>
                <span className='text-3xl font-bold'>Listeners Rating</span>
                <p className='text-md font-light'>Based on <span className='text-green-500'>24,143 Podcast Reviews</span></p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <AiFillStar className='text-amber-600 text-4xl' />
                <AiFillStar className='text-amber-600 text-4xl' />
                <AiFillStar className='text-amber-600 text-4xl' />
                <AiFillStar className='text-amber-600 text-4xl' />
                <AiFillStar className='text-amber-600 text-4xl' />
            </div>
            <button className='rounded-full py-4 px-20 text-white uppercase bg-green-500 font-semibold'>Listen Today</button>
        </div>
    )
}

export default ReviewCard