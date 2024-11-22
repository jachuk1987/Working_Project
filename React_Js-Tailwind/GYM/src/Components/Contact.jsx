import React, { useEffect } from "react";
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",
        });
    }, [])
    return (
        <>
            <section className="w-full bg-red-500 py-20 z-10">
                <h1 data-aos="zoom-in" data-aos-delay="200" className="text-white md:text-6x1 text-5x1 font-semibold text-center pb-32" >GET IN TOUCH</h1>
            </section>

            <section id="contact">
                <div className="w-full flex flex-col justify-center items-center gap-2 bg-blue-900 h-fit pb-20">
                    <div className="md:w-[85%] w-full mx-auto grid md:grid-cols-3 grid-cols-1 justify-center items-center md:gap-20 gap-10 md:p-20 p-10 mt-[-200px] z-20">
                        <div data-aos="slide-up" data-aos-delay="400" className="p-10 bg-white flex flex-col justify-center items-center gap-4" >
                            <div className="border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <FaMapMarkerAlt className="size-10 text-slate-400" />
                            </div>
                            <h1 className="text-2x1 text-slate-500 font-bold">Address</h1>
                            <p className="text-center text-lg">121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
                        </div>
                        <div data-aos="slide-up" data-aos-delay="400" className="p-10 bg-white flex flex-col justify-center items-center gap-4" >
                            <div className="border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <IoMdMail className="size-10 text-slate-400" />
                            </div>
                            <h1 className="text-2x1 text-slate-500 font-bold">Email Us</h1>
                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-center text-lg">jachu.k1212@gmail.com</p>
                                <p className="text-center text-lg">jeswanth.k1987@gmail.com</p>
                            </div>
                        </div>
                        <div data-aos="slide-up" data-aos-delay="400" className="p-10 bg-white flex flex-col justify-center items-center gap-4" >
                            <div className="border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <IoCall className="size-10 text-slate-400" />
                            </div>
                            <h1 className="text-2x1 text-slate-500 font-bold">Call Us</h1>
                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-center text-lg">+91 988 5058 859</p>
                                <p className="text-center text-lg">+91 939 2064 446</p>
                            </div>

                        </div>
                    </div>
                    <button className="px-6 py-3 bg-red-500 text-white font-semibold">VIEW MORE</button>
                </div>
            </section>
        </>
    )
}

export default Contact;