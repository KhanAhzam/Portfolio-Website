import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion"

import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";

import Cloud6 from "../../assets/Clouds/6.png";
import Cloud7 from "../../assets/Clouds/7.png";



// DRDO CERTIFICATE ADD



const Experience = ({ ExperienceRef_Passed, onScrollToExperience }) => {

    const Exp_list = [
        {
            key_index: 1,
            company: "tendr",
            role: "Frontend Developer Intern",
            duration_start: "April 2025",
            duration_ends: "August 2025",
            location: "Remote",
            details: [
                "Developed a full-featured website from scratch using React.js and Tailwind CSS, with a focus on clean, maintainable, and scalable code.",
                "Designed user interfaces and user flows using Figma, ensuring visual consistency and ease of navigation.",
                "Created 10+ dynamic pages, including Landing Page, Announcement Page, Sign In, Sign Up, and other key user interaction screens.",
                "Developed backend functionality for a data capture page to store user emails in a cloud database using various backend technologies ensuring secure and reliable data handling.",
                "Collaborated with a team of developers using version control system GitHub to manage code, conduct reviews, and maintain smooth project workflows."
            ],
            skills: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Render", "Figma", "HTML", "CSS", "Git", "Github"],
            certi_link: "https://drive.google.com/file/d/1kJxMh8jZsjyBT0hh8_sXKaHqW4HBiKMx/view?usp=drive_link"
        },
        {
            key_index: 2,
            company: "DRDO - SAG Lab",
            role: "Research Intern",
            duration_start: "June 2025",
            duration_ends: "July 2025",
            location: "Hybrid",
            details: [
                "Worked on the IEEE 1016 Formatter project, a compliant document generation system that takes a Software Design Document (SDD) as input and returns it formatted according to the IEEE 1016 standard, contributing to both the Streamlit based frontend and backend adaptation.",
                "Worked on the online implementation of the project, optimizing backend logic and integrating the Groq API to reduce average runtime from 28 minutes (Ollama LLaMA 3.2) to 7 minutes (Groq LLaMA 3.3 70B), while preserving document structure.",
                "Backend was built using Python with LangChain for LLM workflow management, ChromaDB for vector storage and retrieval, and ReportLab, BeautifulSoup, and Pillow for PDF processing",
                "Benchmarked the Groq version, achieving a 75% faster generation time compared to the offline version, significantly improving turnaround time for large documents.",
                "Implemented secure API key management with environment variables, ensured reproducible installations with `requirements.txt`, and adapted the codebase for use in both restricted networks and cloud environments."
            ],
            skills: ["Python", "LangChain", "ChromaDB", "ReportLab", "BeautifulSoup", "Pillow", "Streamlit", "Groq API", "PyMuPDF", "Ollama", "dotenv", "Git", "Github"],
            certi_link: ""
        }
    ]

    const [openStates, setOpenStates] = useState(
        Exp_list.map(() => false)                                           //Exp_list.map(() => false) creates an array the same length as Exp_list, but every element is false. [false, false]
    );

    const toggleIndex = (index) => {
        setOpenStates(prev =>
            prev.map((state, i) => (i === index ? !state : state))          //Loops through all openStates. Flips (!state) only the one whose index matches the clicked icon. Leaves all other states the same.
        );
    };

    return (
        <>

            <div
                className='relative container mx-auto min-h-screen w-[1400px] p-10'
                ref={ExperienceRef_Passed}
            >

                {/* Heading */}
                <motion.div
                    className="heading font-bold text-6xl"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Experience.
                </motion.div>

                {/* Content */}
                <motion.div
                    className="my-10 px-16"
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                >

                    {Exp_list.map((item, index) => {
                        return <div key={item.key_index} className="relative main_box my-24">

                            {/* Experience Box */}
                            <div
                                className={`w-full rounded-[30px] shadow-lg bg-[#f5f5f5] p-10 ${openStates[index] ? "h-fit" : "h-[200px]"}`}
                            >

                                {/* Upper-Visible Text */}
                                <div className="text h-[120px] flex justify-between">

                                    {/* Left Text */}
                                    <div className="left flex flex-col justify-evenly">

                                        {/* Company */}
                                        <div className="title font-bold text-4xl">
                                            {item.company}
                                        </div>

                                        {/* Role */}
                                        <div className="role font-semibold text-3xl">
                                            {item.role}
                                        </div>

                                    </div>

                                    {/* Right Text */}
                                    <div className="right font-semibold text-[28px] pt-1 flex flex-col justify-evenly">

                                        {/* Duration */}
                                        <div className="duration">
                                            <span className="start">{item.duration_start}</span> - <span className="end">{item.duration_ends}</span>
                                        </div>

                                        {/* Location */}
                                        <div className="location">
                                            {item.location}
                                        </div>

                                    </div>

                                </div>

                                {/* Lower-Toggled Enabled Text */}
                                {openStates[index] &&
                                    <div className='w-full flex flex-col gap-8 items-center py-6 justify-between'>

                                        {/* Details */}
                                        <ol className="details text-2xl font-semibold list-disc list-outside px-14">
                                            {item.details.map((item2) =>
                                                <li key={index}>{item2}</li>
                                            )}
                                        </ol>

                                        {/* Lower */}
                                        <div className="lower flex w-full px-10 items-center">

                                            {/* Skills */}
                                            <div className="skills flex flex-wrap gap-x-4 gap-y-1 w-[90%]">
                                                {item.skills.map((item2) =>
                                                    <motion.span
                                                        key={item2}
                                                        className='font-semibold text-xl mt-1 bg-blue-500 w-fit px-5 py-1.5 rounded-[20px] cursor-pointer text-white'
                                                        whileHover={{
                                                            scale: 1.1,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                    >
                                                        {item2}
                                                    </motion.span>
                                                )}
                                            </div>

                                            {/* Certification Button */}
                                            <motion.a
                                                className="certificate flex justify-center items-center w-[10%] h-[60px] rounded-[26px] bg-black text-white cursor-pointer"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.certi_link}
                                                whileHover={{
                                                    scale: 1.15,
                                                    transition: { duration: 0.3 }
                                                }}
                                                whileTap={{
                                                    scale: 0.8,
                                                    transition: { duration: 0.1 }
                                                }}
                                            >
                                                <PiCertificate fontSize={50} />
                                            </motion.a>

                                        </div>

                                    </div>
                                }

                                {/* Cloud 17 */}
                                {item.key_index === 1 &&
                                    <>
                                        <motion.div
                                            className="pointer-events-none absolute inset-0 -z-20"
                                            style={{ background: "transparent" }}
                                            initial={{ x: 200, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                            viewport={{ once: true, amount: 0.4 }}
                                        >
                                            <motion.div
                                                className='absolute -top-[90px] -right-[160px]'
                                                initial={{ x: 0, y: 0, scale: 1, rotate: 5, opacity: "90%" }}
                                                animate={{
                                                    x: [0, 15, 0, -15, 0],
                                                    y: [0, -10, 0, 10, 0],
                                                    scale: [1, 1.15, 1]
                                                }}
                                                transition={{
                                                    x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                                    y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                                    scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                                }}
                                            >
                                                <img src={Cloud7} className='w-[330px]' alt="" />
                                            </motion.div>
                                        </motion.div>
                                    </>
                                }

                                {/* Cloud 16 */}
                                {item.key_index === 2 &&
                                    <>
                                        <motion.div
                                            className="pointer-events-none absolute inset-0 -z-20"
                                            style={{ background: "transparent" }}
                                            initial={{ x: -400, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                            viewport={{ once: true, amount: 0.4 }}
                                        >
                                            <motion.div
                                                className='absolute -bottom-[80px] -left-[140px]'
                                                initial={{ x: 0, y: 0, scale: 1, rotate: 15, opacity: "90%" }}
                                                animate={{
                                                    x: [0, 15, 0, -15, 0],
                                                    y: [0, -10, 0, 10, 0],
                                                    scale: [1, 1.15, 1]
                                                }}
                                                transition={{
                                                    x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                                    y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                                    scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                                }}
                                            >
                                                <img src={Cloud6} className='w-[300px]' alt="" />
                                            </motion.div>
                                        </motion.div>
                                    </>
                                }

                            </div>

                            {/* Arrow */}
                            <div
                                className="absolute arrow -bottom-8 left-1/2 -translate-x-1/2 bg-[#f5f5f5] rounded-3xl flex items-end justify-center h-[60px] w-[100px] shadow-[0_6px_6px_-4px_rgba(0,0,0,0.25)]"
                            >
                                {openStates[index] ? (
                                    <IoChevronUp
                                        className="w-full h-[35px] cursor-pointer"
                                        fontSize={40}
                                        onClick={() => {
                                            toggleIndex(index);
                                            onScrollToExperience();
                                        }}
                                    />
                                ) : (
                                    <IoChevronDown
                                        className="w-full h-[35px] cursor-pointer"
                                        fontSize={40}
                                        onClick={() => toggleIndex(index)}
                                    />
                                )}
                            </div>

                        </div>
                    })}

                </motion.div>

            </div >

        </>
    )
}

export default Experience
