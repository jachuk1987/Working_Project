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

                </div>
            </div>
        </>
    )
}

export default About;