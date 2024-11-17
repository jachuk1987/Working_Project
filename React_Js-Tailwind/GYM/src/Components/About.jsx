import React, { useEffect } from "react";
import aboutimg from "../assets/about.jpg";
import { FaCheck } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import banner from "../assets/banner.jpg";
import AOS from "aos";
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",
        });
    }, [])

    return (
        <>
            <section id="about" className="w-[75%] mx-auto md:py-20 py-10 flex md:flex-row flex-col justify-between items-start gap-20">
                <div className="md:w-[50%] w-full flex-col justify-center items-start gap-6">
                    <h1>JOIN TODAY</h1>
                </div>
            </section>
        </>
    )
}

export default About;