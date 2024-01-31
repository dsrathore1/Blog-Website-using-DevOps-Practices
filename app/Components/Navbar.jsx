"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <header className="text-gray-400 bg-[#101010] body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link href="/" className={`${pathname === "/" ? "text-green-400" : "text-gray-400"} mr-5 hover:text-green-400 ease-in-out duration-200 transition-all`}>Home</Link>
                        <Link href="/blog" className={`${pathname === "/blog" ? "text-green-400" : "text-gray-400"} mr-5 hover:text-green-400 ease-in-out duration-200 transition-all`}>Blog</Link>
                        <Link href="/about" className={`${pathname === "/about" ? "text-green-400" : "text-gray-400"} mr-5 hover:text-green-400 ease-in-out duration-200 transition-all`}>About</Link>
                        <Link href="/contactUs" className={`${pathname === "/contactUs" ? "text-green-400" : "text-gray-400"} mr-5 hover:text-green-400 ease-in-out duration-200 transition-all`}>Contact Us</Link>
                    </nav>
                    <Link href="/" className="cursor-default flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                        <span href="/" className="ml-3 text-3xl font-bold xl:block lg:hidden">BLOG</span>
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header >
        </>
    )
}