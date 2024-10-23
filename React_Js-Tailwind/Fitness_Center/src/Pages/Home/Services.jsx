import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import TertiaryLink from "../../Components/LinkBtn/TertiaryLink";

const Services = () => {
    const services = [
        {
          id: 1,
          serviceImg: "https://source.unsplash.com/random/?dumbbell",
          icon: Dumbbell,
          title: "Fitness",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 2,
          serviceImg: "https://source.unsplash.com/random/?yoga",
          icon: Dumbbell,
          title: "Yoga",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 3,
          serviceImg: "https://source.unsplash.com/random/?gym",
          icon: Dumbbell,
          title: "Gym",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 4,
          serviceImg: "https://source.unsplash.com/random/?aerobics",
          icon: Dumbbell,
          title: "Aerobics",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 5,
          serviceImg: "https://source.unsplash.com/random/?boxing",
          icon: Dumbbell,
          title: "Boxing",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 6,
          serviceImg: "https://source.unsplash.com/random/?yoga",
          icon: Dumbbell,
          title: "Yoga",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 7,
          serviceImg: "https://source.unsplash.com/random/?gym",
          icon: Dumbbell,
          title: "Gym",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 8,
          serviceImg: "https://source.unsplash.com/random/?zumba",
          icon: Dumbbell,
          title: "Zumba",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
      ];
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16
            md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                    <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600"/>
                    Our Services
                </h6>
                <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5
                flex-wrap mb-10">
                    <div className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] 
                    sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden
                    cursor-pointer z-10 hover:translater-y-2 ease-out duration-500"
                    style={{
                        backgroundImage: `url("https://source.unsplash.com/random/?yoga")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    >
                        <div className="w-full h-full bg-black absolute top-0 left-0 -z-10"></div>
                        <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                            <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                                Boxing Training
                            </h1>
                            <p className="text-base text-gray-400 font-normal text-center mb-4">
                                Get ready to burn off some serious fat with our high quality products.
                            </p>
                            <TertiaryLink link="#services">Read More
                                <MoveRight className="w-4 h-4 "/>
                            </TertiaryLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;