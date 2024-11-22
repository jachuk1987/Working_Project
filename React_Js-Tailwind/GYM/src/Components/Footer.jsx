import React from "react";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <section className="bg-black w-full text-white p-3 flex justify-center items-center gap-4">
            <FaCopyright className="size-6 text-white" />
            <h1 className="text-white text-center font-semibold text-lg">Copyright 2024, Strong Zone, All Rights Reserved</h1>
            </section>
        </>
    )
}

export default Footer;