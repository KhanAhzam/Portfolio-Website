import React, { useState, useEffect } from 'react'

import { motion, AnimatePresence, scale } from "framer-motion";

import { IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { FaJava, FaNode, FaFigma } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiRedux, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";

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

const Skills = ({ SkillsRef_Passed }) => {

    const [IsIndex, setIsIndex] = useState(null);
    const [MoreSkills, setMoreSkills] = useState(false);

    const skills_Arr = [
        {
            skill_name: "JavaScript",
            skill_icon: <IoLogoJavascript fontSize={80} />
        },
        {
            skill_name: "Java",
            skill_icon: <FaJava fontSize={80} />
        },
        {
            skill_name: "React",
            skill_icon: <IoLogoReact fontSize={80} />
        },
        {
            skill_name: "Redux",
            skill_icon: <SiRedux fontSize={80} />
        },
        {
            skill_name: "TailwindCSS",
            skill_icon: <SiTailwindcss fontSize={80} />
        },
        {
            skill_name: "NodeJS",
            skill_icon: <FaNode fontSize={80} />
        },
        {
            skill_name: "ExpressJS",
            skill_icon: <SiExpress fontSize={80} />
        },
        {
            skill_name: "MongoDB",
            skill_icon: <SiMongodb fontSize={80} />
        },
        {
            skill_name: "Figma",
            skill_icon: <FaFigma fontSize={80} />
        },
        {
            skill_name: "HTML",
            skill_icon: <IoLogoHtml5 fontSize={80} />
        },
        {
            skill_name: "CSS",
            skill_icon: <IoLogoCss3 fontSize={80} />
        },
        {
            skill_name: "More Skills"
        }
    ]

    useEffect(() => {
        if (!MoreSkills) return;               // If popup was closed by user then it wont work, as it is the case where MoreSkills will be false

        const startY = window.scrollY;         // where user was when popup opened
        const threshold = 250;                 // px of movement before closing

        const onScroll = () => {
            if (Math.abs(window.scrollY - startY) >= threshold) {
                setMoreSkills(false);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);

    }, [MoreSkills]);

    const More_skills = ["Framer-Motion", "Git", "GitHub", "Mongoose", "RESTful APIs", "Vercel", "Netlify", "Postman", "Python", "Streamlit", "Groq API", "Langchain", "dotenv", "Ollama", "Gemini API"]

    return (
        <>
            <div
                className=' container mx-auto min-h-screen w-[1400px] p-10'
                ref={SkillsRef_Passed}
            >

                {/* Heading */}
                <div className="heading font-bold text-6xl">
                    Skills.
                </div>

                {/* Content */}
                <div className="relative my-10 px-16 grid grid-cols-4 text-center gap-y-[52px]">

                    {/* Mapping Array */}
                    {skills_Arr.map((item, index) =>

                        item.skill_name.toLowerCase() === "more skills" ? (

                            // Explore More Skills Options
                            <motion.div
                                className="relative w-[250px] h-[180px] rounded-[30px] text-white bg-black cursor-pointer flex flex-col items-center justify-center p-5"
                                animate={{
                                    width: IsIndex === index ? 500 : 250,
                                }}
                                transition={{
                                    width: IsIndex === index
                                        ? { duration: 0.4, ease: "easeIn" }  // growing
                                        : { duration: 0.8, ease: "easeOut" } // shrinking
                                }}
                                onHoverStart={() => setIsIndex(index)}
                                onHoverEnd={() => setIsIndex(null)}
                            >

                                {/* Main Arrow */}
                                <motion.div
                                    className="pl-20"
                                    initial={{ x: 0, opacity: 1 }}
                                    animate={IsIndex === index
                                        ? { x: 300, opacity: 0 }
                                        : { x: 0, opacity: 1 }
                                    }
                                    transition={{ duration: 0.75, ease: "easeOut" }}
                                >
                                    <FaArrowRightLong fontSize={80} width={1} />
                                </motion.div>

                                {/* After Hover Contents */}
                                <AnimatePresence>
                                    {IsIndex === index && (
                                        <>

                                            {/* Text */}
                                            <motion.div
                                                key="text"
                                                className="absolute top-5 font-bold"
                                                initial={{ fontSize: "0px", opacity: 0, y: -100, scale: 0 }}
                                                animate={{ fontSize: "35px", opacity: 1, y: 0, scale: 1 }}
                                                exit={{ fontSize: "0px", opacity: 0, y: -100, scale: 0 }}
                                                transition={{
                                                    fontSize: { duration: 0.5, ease: "easeOut" },
                                                    opacity: { duration: 0.5, ease: "easeOut" },
                                                    scale: { duration: 0.2, ease: "easeIn" },
                                                }}
                                            >
                                                Explore My Other Skills!
                                            </motion.div>

                                            {/* Button */}
                                            <motion.button
                                                key="btn"
                                                className="absolute bottom-8 w-[150px] h-[50px] bg-white rounded-3xl"
                                                initial={{ opacity: 0, y: 100, scale: 0 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 100, scale: 0 }}
                                                transition={{
                                                    opacity: { duration: 0.4, ease: "easeOut" },
                                                    y: { duration: 0.4, ease: "easeOut" },
                                                    scale: { duration: 0.2, ease: "easeIn" },
                                                }}
                                                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                                                whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                                                onClick={() => setMoreSkills(true)}
                                            >
                                                <span className='text-black font-bold text-4xl'>Go!</span>
                                            </motion.button>

                                        </>
                                    )}
                                </AnimatePresence>

                            </motion.div>

                        ) : (

                            // Normal Skills Boxes
                            <div className="relative w-[250px] h-[180px]">
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-full rounded-[30px] text-white bg-black cursor-pointer flex flex-col items-center p-3"
                                    whileHover={{
                                        height: 220,
                                        transition: { duration: 0.3, ease: "easeIn" },
                                    }}
                                    onHoverStart={() => setIsIndex(index)}
                                    onHoverEnd={() => setIsIndex(null)}
                                >
                                    {/* Icon */}
                                    <div className="pt-10">
                                        {item.skill_icon}
                                    </div>

                                    {/* Text */}
                                    <motion.span
                                        animate={{
                                            opacity: IsIndex === index ? 1 : 0,
                                            y: IsIndex === index ? 0 : 10,
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="mt-6 text-3xl font-semibold "
                                    >
                                        {item.skill_name}
                                    </motion.span>

                                </motion.div>
                            </div>

                        )
                    )}


                    {/* Cloud 15 */}
                    <div className="pointer-events-none absolute inset-0 -z-20"
                        style={{ background: "transparent" }}
                    >
                        <motion.div
                            className='absolute -top-[15%] -right-[10%]'
                            initial={{ x: 0, y: 0, scale: 1, rotate: 10 }}
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
                            <img src={Cloud15} className='w-[350px]' alt="" />
                        </motion.div>
                    </div>

                    {/* Cloud 14 */}
                    <div className="pointer-events-none absolute inset-0 -z-20"
                        style={{ background: "transparent" }}
                    >
                        <motion.div
                            className='absolute -bottom-[8%] -left-[8%]'
                            initial={{ x: 0, y: 0, scale: 1, rotate: -10, scaleX: -1 }}
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
                            <img src={Cloud14} className='w-[300px]' alt="" />
                        </motion.div>
                    </div>


                </div>

                {/* More Sills Box */}
                {MoreSkills &&
                    <div className='fixed inset-0 flex justify-center items-center z-50'>
                        <div className='bg-white mr-12 w-[600px] h-fit rounded-[40px] px-16 pt-8 pb-10 text-white flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.95)]'>

                            {/* Quit Button */}
                            <div className="exitbtn flex items-start justify-end">
                                <motion.span
                                    className='cursor-pointer px-2 py-2 rounded-full text-black'
                                    whileHover={{
                                        scale: 1.35,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{
                                        scale: 0.7,
                                        transition: { duration: 0.1, ease: "easeIn" }
                                    }}
                                    onClick={() => setMoreSkills(false)}
                                >
                                    <RxCross1 fontSize={40} />
                                </motion.span>
                            </div>

                            {/* Text */}
                            <div className="text-5xl text-black font-bold mt-5 mb-10">
                                Other Skills I Use
                            </div>

                            {/* Skills */}
                            <div className="skills flex flex-wrap gap-y-1 gap-x-4">
                                {More_skills.map((item) =>
                                    <motion.div
                                        key={item}
                                        className='font-semibold text-2xl my-1 bg-blue-500 w-fit px-4 py-1.5 rounded-[20px] cursor-pointer'
                                        whileHover={{
                                            scale: 1.15,
                                            transition: {
                                                duration: 0.3
                                            }
                                        }}
                                    >
                                        {item}
                                    </motion.div>
                                )}
                            </div>

                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Skills
