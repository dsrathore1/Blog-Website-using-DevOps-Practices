import React from 'react'
import { FaFacebookF, FaSpotify, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialIcon = () => {
    return (
        <div className='flex w-full justify-center items-center gap-10'>
            <div className='bg-gray-500 h-10 w-10 p-1 rounded-full flex justify-center items-center'>
                <FaFacebookF className='  text-white hover:text-blue-500 transition-all ease-in-out duration-200 text-xl' />
            </div>
            <div className='bg-gray-500 h-10 w-10 p-1 rounded-full flex justify-center items-center'>
                <FaSpotify className='h-10 w-10 p-1 rounded-full bg-gray-500 text-white hover:text-green-400 transition-all ease-in-out duration-200' />
            </div>
            <div className='bg-gray-500 h-10 w-10 p-1 rounded-full flex justify-center items-center'>
                <FaTwitter className='h-10 w-10 text-lg p-1 rounded-full bg-gray-500 text-white hover:text-blue-300 transition-all ease-in-out duration-200' />
            </div>
            <div className='bg-gray-500 h-10 w-10 p-1 rounded-full flex justify-center items-center'>
                <FaInstagram className='h-10 w-10 text-lg p-1 rounded-full bg-gray-500 text-white hover:text-pink-500 transition-all ease-in-out duration-200' />
            </div>
        </div>
    )
}

export default SocialIcon