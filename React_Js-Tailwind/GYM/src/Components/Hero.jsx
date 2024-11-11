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
        <section>
            
        </section>
    )
}

export default Hero;