import React from "react";
import "../Hero/Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play-icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Hero;