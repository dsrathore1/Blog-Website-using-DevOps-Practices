import Header from '@/app/Components/Header';
import React from 'react';
import AboutCard from '@/app/Components/AboutCard';
import ReviewCard from '@/app/Components/ReviewCard';
import Image from "next/image";
import Phone from "@/app/Assets/phone.png";
import Landscape from "@/app/Assets/landscape.jpg";

const AboutPage = () => {
    return (
        <>
            <Header title={"About Us"} />
            <div className='flex flex-col justify-center items-center gap-6 text-white'>
                <h1 className='text-5xl capitalize font-bold'>Who we are</h1>
                <p className='w-1/2 text-base text-center text-[#bdbbb3]'>Sed velit sapien, commodo et dictum porta, varius id nibh. Vivamus sed sapien molestie maximus lorem ut commodo enim.</p>
            </div>
            <div className='flex flex-wrap gap-8 justify-center items-center'>
                <AboutCard />
                <AboutCard />
                <AboutCard />
            </div>
            <ReviewCard />
            <div className='h-[80vh] z-0 my-10 w-full bg-[#101010] flex justify-center items-end'>
                <div className='w-full flex justify-center items-center'>
                    <Image className='h-[78vh] w-96' src={Phone} alt='' height={100} width={400} priority={false} />
                </div>
                <div className='flex h-full w-full gap-10 flex-col justify-center items-start'>
                    <h1 className='text-white text-4xl font-bold tracking-wide'>About Blog.</h1>
                    <p className='text-[#bdbbbd] w-[75%] leading-7'>Blog is a new NextJS theme dedicated, podcasts and music streaming. Browse through the live demo to explore all the advanced features bundled within the theme. Then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears.</p>
                    <button className='bg-green-500 py-3 px-16 rounded-full text-white'>More Info</button>
                </div>
            </div>
            <div className='relative h-[80vh] w-full -mt-10 mb-10'>
                <Image className='object-fill mt-0 bg-fixed w-full h-full' alt='#' src={Landscape} height={900} width={900} priority={false} />
                <div className='absolute top-0 w-full h-full bg-[#00000091] flex flex-col justify-center items-center  text-center text-white'>
                    <h1 className='text-5xl font-bold'>Subscribe to Our Mailing List</h1>
                    <p className='w-[40%] my-12 text-lg'>To receive ongoing updates and notifications on new episodes, please sign up to our Newsletter and we&apos;ll make sure to keep you in the loop!</p>
                    <div className='rounded-full w-1/2 h-[8vh] flex justify-center'>
                        <input placeholder='Your email address' className='rounded-l-full px-5 text-lg placeholder:text-gray-400 text-black outline-none w-full' />
                        <button className='bg-green-500 w-[15vw] text-lg font-bold uppercase text-white rounded-r-full'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='h-[60vh] -mt-10 w-full bg-black'>

            </div>
        </>
    )
}

export default AboutPage