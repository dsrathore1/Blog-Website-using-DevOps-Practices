import Image from "next/image";
import HeaderImg from "@/app/Assets/headerImg.jpg"


export default function Header({ title }) {
    return (
        <div className="h-[55vh] mb-24 relative flex justify-center items-center">
            <Image src={HeaderImg} alt="#" className="object-cover bg-blend-multiply h-full w-full" priority={false} />
            <h2 className="absolute text-6xl uppercase font-bold text-gray-200">{title}</h2>
        </div>
    )
}