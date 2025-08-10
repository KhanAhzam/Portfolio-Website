import React, { useRef } from 'react'

import { motion } from "framer-motion"

const About = ({ AboutRef_Passed }) => {

    return (
        <>
            <div
                className=' container mx-auto min-h-screen w-[1400px] p-10'
                ref={AboutRef_Passed}
            >

                {/* Heading */}
                <div className="heading font-bold text-6xl">
                    About.
                </div>

                {/* Content */}
                <ul>
                    <li className="para1 font-medium text-gray-800 text-[26px] my-10 px-16">
                        As a passionate Full Stack Developer, I have expertise in writing clean, efficient, and neat code to create stunning web applications that stand out through thoughtful design and polished execution. I'm skilled at turning needs into great results that far exceed expectations.
                    </li>
                    <li className="para2 font-medium text-gray-800 text-[26px] my-10 px-16">
                        In terms of experience, I've worked with teams of developers in the past, where I got the chance to exchange ideas and learn from different perspectives. These experiences helped strengthen not just my technical foundation, but also improved my communication, task management, and adaptability in dynamic situations.
                    </li>
                    <li className="para3 font-medium text-gray-800 text-[26px] my-10 px-16">
                        As a avid learner, I genuinely enjoy working with other developers, it pushes me beyond my comfort zone and encourages me to grow. Being in a collaborative setting forces me to learn new tools and technologies quickly, adapt to challenges, and grow with every step.
                    </li>
                    <li className="para4 font-medium text-gray-800 text-[26px] my-10 px-16">
                        Additionally, I have a strong interest in Data Structures and Algorithms, which I regularly practice using Java to sharpen my logic and problem-solving abilities.
                    </li>
                </ul>

                {/* Grab My Resume Btn */}
                <div className="resume_btn flex items-center justify-center">
                    <motion.a
                        href="https://drive.google.com/file/d/1aY2xjhcI6xxNbtIFR6Iu2J-iWL3LBzXV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black h-14 w-[250px] rounded-full font-bold text-[22px] text-white flex items-center justify-center px-6 leading-tight"
                        whileHover={{
                            scale: 1.15,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut"
                            }
                        }}
                        whileTap={{
                            scale: 0.9,
                            transition: {
                                duration: 0.1,
                                ease: "easeIn"
                            }
                        }}
                    >
                        <span>Grab My Resume!</span>
                    </motion.a>
                </div>

            </div>
        </>
    )
}

export default About
