import React, { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";

import { IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { FaJava, FaNode, FaFigma } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiRedux, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";


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

    const More_skills = [ "Framer-Motion", "Git", "GitHub", "Mongoose", "RESTful APIs", "Vercel", "Netlify", "Postman" ]

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
                <div className="my-10 px-16 grid grid-cols-4 text-center gap-y-[52px]">

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

                </div>


                {/* More Sills Box */}
                {MoreSkills &&
                    <div className='fixed inset-0 flex justify-center items-center z-50'>
                        <div className='bg-black mr-12 w-[600px] h-[800px] rounded-[40px] p-16 text-white flex flex-col justify-between'>

                            {/* Quit Button */}
                            <div className="exitbtn flex items-start justify-end">
                                <motion.span
                                    className='cursor-pointer'
                                    whileHover={{
                                        scale:1.35,
                                        transition:{ duration:0.3, ease:"easeOut" }
                                    }}
                                    whileTap={{
                                        scale:0.7,
                                        transition:{ duration:0.1, ease:"easeIn" }
                                    }}
                                    onClick={()=>setMoreSkills(false)}
                                >
                                    <RxCross1 fontSize={40}/>
                                </motion.span>
                            </div>

                            {/* Skills */}
                            <div className="skills">
                                {More_skills.map((item) => 
                                    <ul
                                        key={item}
                                        className='font-semibold text-2xl'
                                    >
                                        <li className='my-1'>{item}</li>
                                    </ul>
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
