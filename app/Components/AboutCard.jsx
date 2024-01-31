import React from 'react';
import Image from "next/image";
import PersonImg from "@/app/Assets/person.jpg";
import SocialIcon from './SocialIcon';

const AboutCard = () => {
    return (
        <div className='bg-[#101010] rounded-md flex flex-col justify-between gap-10 text-[#bdbbb3] my-24 pb-10 w-[25vw] h-[90vh] text-center'>
            <Image className='rounded-tl-md rounded-tr-md w-full' height={300} width={400} src={PersonImg} alt='#' priority={false} />
            <div className='mx-10'>
                <h1 className='text-3xl text-white font-semibold'>Fred Morton</h1>
                <p className='mt-5'>When, while the lovely valley teems.
                    With vapour around me, and the meridian sun strikes the upper surface of.</p>
            </div>
            <SocialIcon />
        </div>
    )
}

export default AboutCard