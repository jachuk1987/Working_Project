import React from "react";
import Hero from "./Hero";
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";
import Trainers from "./Trainers";
import Popular from "./Popular";
import PrincingPlan from "./PrincingPlan";

const Home = () => {
    return (
        <>
            <div className="w-full h-auto overflow-hidden">
                <Hero />
                <About />
                <BMI />
                <Services />
                <Banner />
                <Trainers />
                <Popular />
                <PrincingPlan />
            </div>
        </>
    )
}

export default Home;