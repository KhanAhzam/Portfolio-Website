import React from 'react'

import { IoChevronDown } from "react-icons/io5";

const Experience = ({ ExperienceRef_Passed }) => {
    return (
        <>

            <div
                className=' container mx-auto min-h-screen w-[1400px] p-10'
                ref={ExperienceRef_Passed}
            >

                {/* Heading */}
                <div className="heading font-bold text-6xl">
                    Experience.
                </div>

                {/* Content */}
                <div className="my-10 px-16">

                    {/* Experience Box */}
                    <div className="relative w-full h-fit border border-[#f5f5f5] rounded-[30px] bg-[#f5f5f5] p-10">

                        {/* Upper-Visible Text */}
                        <div className="text flex justify-between">

                            <div className="left">

                                {/* Company */}
                                <div className="title font-bold text-4xl leading-none">
                                    tendr
                                </div>

                                {/* Role */}
                                <div className="role font-semibold text-3xl">
                                    Frontend Developer Intern
                                </div>

                            </div>

                            <div className="right font-semibold text-2xl pt-1">

                                {/* Duration */}
                                <div className="duration">
                                    April 2025 - Present
                                </div>

                                {/* Location */}
                                <div className="location">
                                    Remote
                                </div>

                            </div>

                        </div>

                        {/* Arrow Downward */}
                        <div className="absolute arrow -bottom-10 ">
                            <IoChevronDown fontSize={50}/>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Experience
