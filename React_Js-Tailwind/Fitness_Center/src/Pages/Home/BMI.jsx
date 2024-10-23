import React, { useState } from "react";
import { Dumbbell } from "lucide-react";
import Label from "../../Components/Label/Label";
import Input from "../../Components/Form/Input";
import SecondaryBtn from "../../Components/Button/SecondaryBtn";

const BMI = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState(null);
    return (
        <>
            <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10
            lg:px-24 md:px-16 sm:px-6 px-4">
                <div className="w-full h-auto flex items-center justify-center flex-col">
                    <h6 className="lg:text-lg md:text-lf sm:text-base text-base font-medium
                    text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
                        <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
                        Calculate Your BMI
                    </h6>
                    <div className="w-full h-auto flex items-end justify-center bg-black/20
                    rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md;px-0 sm;px-2 px-4
                    flex-wrap">
                        <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
                            <Label htmlfor="weight">Weight (Kg)</Label>
                            <Input
                                id="weight"
                                name="weight"
                                type="text"
                                placeholder="Enter your Weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
                            <Label htmlfor="height">Height (Cm)</Label>
                            <Input
                                id="height"
                                name="height"
                                type="text"
                                placeholder="Enter your height"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BMI;