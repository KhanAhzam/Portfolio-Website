import React, { useState, useEffect } from 'react'

import { motion, AnimatePresence, scale } from "framer-motion";

import { IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { FaJava, FaNode, FaFigma } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiRedux, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";

import Cloud4 from "../../assets/Clouds/4.png";
import Cloud5 from "../../assets/Clouds/5.png";

const Skills = ({ SkillsRef_Passed }) => {

    const [IsIndex, setIsIndex] = useState(null);
    const [MoreSkills, setMoreSkills] = useState(false);
    const [showMobileMoreSkills, setShowMobileMoreSkills] = useState(false);
    const [showDesktopMoreSkills, setShowDesktopMoreSkills] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);                                    //We use the resize event listener because the value of window.innerWidth can change while the user is on your site (if they resize the browser or rotate a tablet/phone).
        return () => window.removeEventListener("resize", handleResize);                    //window.addEventListener("resize", handleResize) ensures that isMobile updates anytime the window is resized.
    }, []);                                                                                 //Runs this function as soon as this component mounts the DOM, it checks whether isMobile state will be true or false 


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

    const More_skills = ["Framer-Motion", "Git", "GitHub", "Mongoose", "RESTful APIs", "Vercel", "Netlify", "Postman", "Python", "Streamlit", "Groq API", "Langchain", "dotenv", "Ollama", "Gemini API"]

    useEffect(() => {
        if (!showDesktopMoreSkills) return;               // If popup was closed by user then it wont work, as it is the case where MoreSkills will be false

        const startY = window.scrollY;         // where user was when popup opened
        const threshold = 250;                 // px of movement before closing

        const onScroll = () => {
            if (Math.abs(window.scrollY - startY) >= threshold) {
                setShowDesktopMoreSkills(false);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);

    }, [showDesktopMoreSkills]);

    return (
        <>
            <div
                className=' container mx-auto min-h-screen max-w-[1400px] p-10'
                ref={SkillsRef_Passed}
            >

                {/* Heading */}
                <motion.div
                    className="heading font-bold text-5xl mini_smaller:text-6xl"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Skills.
                </motion.div>

                {/* Content for mobile devices below md:768px */}
                <motion.div className="md:hidden relative my-10 px-16 grid grid-cols-1 justify-items-center gap-y-[26px]"
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0 }}
                >

                    {/* Mapping Array */}
                    {skills_Arr.map((item, index) =>

                        item.skill_name.toLowerCase() === "more skills" ? (

                            // Explore More Skills Options
                            <motion.div
                                className="w-[300px] smaller:w-[350px] sm:w-[450px] h-[220px] rounded-[30px] text-white bg-black cursor-pointer flex flex-col items-center justify-evenly p-5 origin-left"
                                initial={{ y: 100, opacity: 0 }} // 👈 start below & invisible
                                whileInView={{ y: 0, opacity: 1 }} // 👈 slide up + fade in
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }} // 👈 trigger when 20% visible
                            >
                                {/* Text */}
                                <div
                                    className="font-bold pb-4 sm:pb-8 text-3xl smaller:text-4xl text-center"
                                    key="text"
                                >
                                    Explore My Other Skills!
                                </div>

                                {/* Button */}
                                <motion.button
                                    className="w-[150px] h-[50px] bg-white rounded-3xl"
                                    key="btn"
                                    whileTap={{ scale: 0.7, transition: { duration: 0.2 } }}
                                    onClick={() => setShowMobileMoreSkills(true)}
                                >
                                    <span className="text-black font-bold text-4xl">Go!</span>
                                </motion.button>
                            </motion.div>


                        ) : (

                            // Normal Skills Boxes
                            <div className="relative w-[250px] h-[220px] lg:h-[180px]">
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-full rounded-[30px] text-white bg-black cursor-pointer flex flex-col items-center p-3"
                                    animate={{
                                        height: isMobile ? 220 : IsIndex === index ? 220 : 180,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    onHoverStart={() => !isMobile && setIsIndex(index)}
                                    onHoverEnd={() => !isMobile && setIsIndex(null)}
                                >
                                    {/* Icon */}
                                    <div className="pt-10">{item.skill_icon}</div>

                                    {/* Text */}
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={isMobile ? { opacity: 1, y: 0 } : {}}
                                        animate={
                                            isMobile
                                                ? {}
                                                : {
                                                    opacity: IsIndex === index ? 1 : 0,                     //hover logic is been handled at the parent motion.div level, in onHoverStart and onHoverEnd
                                                    y: IsIndex === index ? 0 : 10,
                                                }
                                        }
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 1 }}
                                        className="mt-6 text-3xl font-semibold"
                                    >
                                        {item.skill_name}
                                    </motion.span>
                                </motion.div>
                            </div>

                        )
                    )}

                    {/* Cloud 5 */}
                    <motion.div
                        className="pointer-events-none absolute inset-0 -z-20"
                        style={{ background: "transparent" }}
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <motion.div
                            className='absolute -top-[4%] -right-[5%]'
                            initial={{ x: 0, y: 0, scale: 1, rotate: 13 }}
                            animate={{
                                x: [0, 5, 0, -5, 0],
                                y: [0, -10, 0, 10, 0],
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <img src={Cloud5} className='w-[250px] xs:w-[300px] sm:w-[350px]' alt="Cloud 5" />
                        </motion.div>
                    </motion.div>

                    {/* Cloud 4 */}
                    <motion.div
                        className="pointer-events-none absolute inset-0 -z-20"
                        style={{ background: "transparent" }}
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div
                            className='absolute -bottom-[2.5%] sm:-bottom-[3%] -left-[10%] sm:-left-[0%]'
                            initial={{ x: 0, y: 0, scale: 1, rotate: -15, scaleX: -1 }}
                            animate={{
                                x: [0, 5, 0, -5, 0],
                                y: [0, -10, 0, 10, 0],
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <img src={Cloud4} className='w-[250px] xs:w-[300px] sm:w-[350px]' alt="Cloud 4" />
                        </motion.div>
                    </motion.div>

                </motion.div>

                {/* Content for desktop devices above md:768px */}
                <motion.div className="hidden relative my-10 px-16 md:grid lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 text-center gap-y-[52px] justify-items-center 4xl:justify-items-start"
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0 }}
                >

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
                                                onClick={() => setShowDesktopMoreSkills(true)}
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

                    {/* Cloud 5 */}
                    <motion.div
                        className="pointer-events-none absolute inset-0 -z-20"
                        style={{ background: "transparent" }}
                        initial={{ x: 500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div
                            className='absolute -top-[5%] lg:-top-[10%] 4xl:-top-[15%] -right-[0%] lg:-right-[5%] 2xl:-right-[10%]'
                            initial={{ x: 0, y: 0, scale: 1, rotate: 13 }}
                            animate={{
                                x: [0, 5, 0, -5, 0],
                                y: [0, -10, 0, 10, 0],
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <img src={Cloud5} className='w-[350px]' alt="Cloud 5" />
                        </motion.div>
                    </motion.div>

                    {/* Cloud 4 */}
                    <motion.div
                        className="pointer-events-none absolute inset-0 -z-20"
                        style={{ background: "transparent" }}
                        initial={{ x: -500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div
                            className='absolute -bottom-[3%] lg:-bottom-[5%] 4xl:-bottom-[8%] -left-[0%] lg:-left-[5%] 2xl:-left-[10%]'
                            initial={{ x: 0, y: 0, scale: 1, rotate: -15, scaleX: -1 }}
                            animate={{
                                x: [0, 5, 0, -5, 0],
                                y: [0, -10, 0, 10, 0],
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <img src={Cloud4} className='w-[350px]' alt="Cloud 4" />
                        </motion.div>
                    </motion.div>

                </motion.div>

                {/* Desktop More Skills Box */}
                {showDesktopMoreSkills &&
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
                                    onClick={() => setShowDesktopMoreSkills(false)}
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

                {/* Mobile More Skills Box */}
                <AnimatePresence>
                    {showMobileMoreSkills && (
                        <motion.div
                            className="fixed inset-0 bg-white z-50 flex flex-col px-8 pt-8 pb-10"
                            initial={{ x: "-100%" }}      // start off-screen (left)
                            animate={{ x: 0 }}            // slide to full screen
                            exit={{ x: "100%" }}          // slide out to right
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {/* Quit Button */}
                            <div className="flex justify-end">
                                <motion.span
                                    className="cursor-pointer px-2 py-2 rounded-full text-black"
                                    whileHover={{
                                        scale: 1.35,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{
                                        scale: 0.7,
                                        transition: { duration: 0.1, ease: "easeIn" }
                                    }}
                                    onClick={() => setShowMobileMoreSkills(false)}
                                >
                                    <RxCross1 fontSize={40} />
                                </motion.span>
                            </div>

                            {/* Text */}
                            <div className="text-4xl md:text-5xl text-black font-extrabold mt-5 mb-10 text-center smaller:text-left">
                                Other Skills I Use
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-y-2 gap-x-2">
                                {More_skills.map((item) => (
                                    <motion.div
                                        key={item}
                                        className="font-bold text-xl md:text-2xl my-1 bg-blue-500 w-fit px-5 py-2 rounded-[20px] cursor-pointer text-white"
                                        whileHover={{
                                            scale: 1.15,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>
        </>
    )
}

export default Skills
