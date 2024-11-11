import React, { useEffect } from "react";
import herobanner from "../assets/herobanner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(()=> {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",
        });
    },[])

    return (
        <section id="hero" className="w-full py-10 mx-auto h-fit flex">

        </section>
    )
}

export default Hero;