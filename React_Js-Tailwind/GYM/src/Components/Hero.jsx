import React, { useEffect } from "react";
import herobanner from "../assets/herobanner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",
        });
    }, [])

    return (
        <section id="hero" className="w-full py-10 mx-auto h-fit flex md:flex-row flex-col justify-between items-center gap-10">
            <div className="md:pl-56 flex flex-col justify-center items-center md:gap-10 gap-6 p-10">
                <h1 data-aos="zoom-in" className="text-2x1 uppercase font-regular text-slate-700 text-center">STRONGZONE CLUB</h1>
                <h1 data-aos="zoom-in" data-aos-delay="200" className="md:text-8x1 text-6x1 font-bold text-center text-blue-900">FITNESS CLASSES</h1>
                <button data-aos="zoom-in" data-aos-delay="400" className="px-8 py-4 bg-red-600 hover:bg-blue-900 text-white font-semibold cursor-pointer">BOOK NOW</button>
            </div>

            <div className="flex justify-end items-end">
                <img data-aos="zoom-in" data-aos-delay="600" src={herobanner} alt="hero banner" width={1500} height={800} className="bg-cover bg-center"/>
            </div>

        </section>
    )
}

export default Hero;