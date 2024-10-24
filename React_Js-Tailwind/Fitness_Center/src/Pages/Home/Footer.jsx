import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";

const Footer = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center bg-black/30
            flex-copy-16 lg:px-24 md:px-16 sm:px-6 px-4">
                <div className="w-full h-auto flex items-start lg:justify-between
                md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap">
                    <Link className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex 
                    items-end gap-x-1 relative">
                        G<span className="text-xl font-bold text-gray-300">Y</span>M
                        <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-
                        [46%] translate-x-[-50%]" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer;