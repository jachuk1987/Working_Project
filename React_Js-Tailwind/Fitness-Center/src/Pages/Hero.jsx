import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
const Hero = () => {

    const swiperData = [
        {
            id: 1,
            bgImg: "https://source.unsplash.com/random/?fitness",
            slogan: "Keep your body",
            title: "Burning",
            desc: "Get ready to burn off some serious fat wit our high quality products.",
        },
        {
            id: 2,
            bgImg: "https://source.unsplash.com/random/?gym",
            slogan: "Just Believe In",
            title: "Yourself",
            desc: "We are here to help you achieve your goals.",
        },
        {
            id: 3,
            bgImg: "https://source.unsplash.com/random/?yoga",
            slogan: "Grow Your Body",
            title: "Strength",
            desc: "Make your body stronger with our high quality products.",
        },
    ];
    return (
        <>
            <div className="w-full h-auto">
                <Swiper spaceBetween={30}
                    centeredSlides={true}
                    loop = {true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide
                        className="w-full h-[70vh]"
                        style={{
                            backgroundImage: "url('./images/hero-1.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        <div className="w-full h-full bg-black/80 absoluter top-0 left-0 -z-10"></div>
                        <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
                            <h5 className="lg:text-4x1 md:text-3x1 sm:text-2x1 text-2x1 text-indigo-400 font-semibold mb-2 uppercase">
                            Keep your body
                            </h5>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Hero;