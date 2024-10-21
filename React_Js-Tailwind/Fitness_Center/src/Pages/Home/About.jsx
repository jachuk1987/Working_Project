import React from "react";

const About = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16
            md:py-14 sm:py-12 py-10 lg:px-16 sm:px-6 px-4 flex-wrap-reverse">
                <div className="lg:w-[38%] md:w-full sm:w-full h-auto relative
                overflow-hidden rounded-lg">
                    <img
                        src="https://source.unsplash.com/random/?gym"
                        alt="About image"
                        className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
                    />
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start
                md:text-start sm:text-start text-center">
                    <h6 className="text-lg font-medium text-gray-200 flex items-center
                    lg:justify-start md:justify-start sm:justify-center justify-center gap-x--2 mb-3">
                        <Dumbbell classname="w-4 h-4 -rotate-45 text-indigo-600"/>
                        About Us
                    </h6>
                    <h1 className="lg:text-3x1 md:text-3x1 sm:text-2x1 text-2x1 font-semibold
                    text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
                        Effortless Strength, Timely Gains: Building Better Bodies, Faster
                    </h1>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500
                    font-medium mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
                        corrupti eos, enim ipsum, consequuntur ab id possimus exercitationem
                        velit voluptas deserunt quibusdam hic harum, inventore perferendis
                        ducimus minus. Incidunt, facere!
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;