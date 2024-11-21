import React, { useEffect } from "react";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';

const Teams = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",
        });
    }, [])

    return (
        <section id="team" className="w-[80%] mx-auto py-20 h-fit flex flex-col justify-center items-center gap-8">
            <div id="gallery" className="flex md:flex-row flex-col justify-center items-center gap-6">
                <img data-aos="slide-up" data-aos-delay= "200" src={client1} alt="teams" />
            </div>
        </section>
    )
}

export default Teams;