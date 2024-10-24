import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell, MailOpen, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center bg-black/30
            flex-copy-16 lg:px-24 md:px-16 sm:px-6 px-4">
                <div className="w-full h-auto flex items-start lg:justify-between
                md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap">
                    <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex 
                    lg:items-start md:items-start sm:items-center items-center flex-col 
                    justify-center">
                        <Link className="w-fit h-autotext-3xl text-indigo-600 font-semibold tracking-
                      [0.1rem] flex items-end gap-x-1 relative mb-3">
                            G<span className="text-xl font-bold text-gray-300">Y</span>M
                            <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-
                        [46%] translate-x-[-50%]" />
                        </Link>
                        <p className="text-base text-gray-500 font-normal mb-4 lg:text-start 
                    md:text-start sm:text-center text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
                            quae quasi vel, qui delectus voluptate? Maiores aliquid, at sint
                            itaque neque et velit quas in!
                        </p>
                        <div className="w-full h-auto space-y-2">
                            <div className="w-full h-auto flex items-center lg:justify-start 
                            md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 
                            hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                                <MapPin className="w-5h-5" />
                                <p className="text-base">123 Main Street, Anytown USA</p>
                            </div>
                            <div className="w-full h-auto flex items-center lg:justify-start 
                            md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 
                            hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                                <MailOpen className="w-5h-5" />
                                <p className="text-base">gtechgym@gmail.com</p>
                            </div>
                            <div className="w-full h-auto flex items-center lg:justify-start 
                            md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 
                            hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                                <Phone className="w-5h-5" />
                                <p className="text-base">+91 9885058859</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 
                    flex items-center lg:justify-end md:justify-end sm:justify-center 
                    flex-wrap gap-5">
                        <div className="lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex 
                        items-center flex-col justify-center">
                            <h2 className="text-lg text-gray-200 font-medium mb-4">
                                Services
                            </h2>
                        </div>
                        <div className="lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex 
                        items-center flex-col justify-center">
                            <h2 className="text-lg text-gray-200 font-medium mb-4">
                                Quick Link
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;