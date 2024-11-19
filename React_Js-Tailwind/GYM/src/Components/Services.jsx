import React, { useEffect } from "react";
import phil1 from "../assets/phi1.png";
import phil2 from "../assets/phil2.png";
import phil3 from "../assets/phil3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

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
                <h1 data-aos="zoom-in" data-aos-delay="200" className="text-white md:text-6x1 text-5x1 font-semibold text-center pb-32">OUR SERVICES</h1>
            </section>
        </>
    )
}

export default Services;