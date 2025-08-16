import React, { useRef } from 'react'

import { motion } from "framer-motion"

import Cloud1 from "../assets/Clouds/1.jpg";
import Cloud2 from "../assets/Clouds/2.jpg";
import Cloud3 from "../assets/Clouds/3.jpg";
import Cloud4 from "../assets/Clouds/4.jpg";
import Cloud5 from "../assets/Clouds/5.jpg";
import Cloud6 from "../assets/Clouds/6.jpg";
import Cloud7 from "../assets/Clouds/7.jpg";
import Cloud8 from "../assets/Clouds/Potential1.png";
import Cloud9 from "../assets/Clouds/Potential2.png";
import Cloud10 from "../assets/Clouds/Potential3.png";
import Cloud11 from "../assets/Clouds/Potential4.png";
import Cloud12 from "../assets/Clouds/Potential5.png";
import Cloud13 from "../assets/Clouds/Potential6.png";
import Cloud14 from "../assets/Clouds/dark1.png";
import Cloud15 from "../assets/Clouds/dark2.png";
import Cloud16 from "../assets/Clouds/dark3.png";
import Cloud17 from "../assets/Clouds/dark4.png";

const About = ({ AboutRef_Passed }) => {

    return (
        <>
            <div
                className='relative container mx-auto min-h-screen w-[1400px] p-10'
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
                        className="bg-black py-3.5 rounded-3xl font-bold text-2xl text-white flex items-center justify-center px-7 leading-tight"
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

                {/* Cloud 11 */}
                <div className="pointer-events-none absolute inset-0 -z-20"
                    style={{ background: "transparent" }}
                >
                    <motion.div
                        className='absolute top-[3%] -right-[3%]'
                        initial={{ x: 0, y: 0, scale: 1, rotate: 5, }}
                        animate={{
                            x: [0, 5, 0, -5, 0],
                            y: [0, -10, 0, 10, 0],
                            scale: [1, 1.15, 1]
                        }}
                        transition={{
                            x: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            y: {
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            scale: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <img src={Cloud11} className='w-[350px]' alt="" />
                    </motion.div>
                </div>

                {/* Cloud 10 */}
                <div className="pointer-events-none absolute inset-0 -z-20"
                    style={{ background: "transparent" }}
                >
                    <motion.div
                        className='absolute bottom-[5%] -left-[10%]'
                        initial={{ x: 0, y: 0, scale: 1, rotate: 5, }}
                        animate={{
                            x: [0, 5, 0, -5, 0],
                            y: [0, -10, 0, 10, 0],
                            scale: [1, 1.15, 1]
                        }}
                        transition={{
                            x: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            y: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            scale: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <img src={Cloud10} className='w-[450px]' alt="" />
                    </motion.div>
                </div>


            </div>
        </>
    )
}

export default About
