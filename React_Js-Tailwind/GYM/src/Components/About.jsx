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
            <section id="about" className="">

            </section>
        </>
    )
}

export default About;