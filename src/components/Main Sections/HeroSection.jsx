import React, { useRef } from 'react'

import { motion } from "framer-motion"

import { MapPin, MoveDown } from 'lucide-react';

import Cloud1 from "../../assets/Clouds/1.jpg";
import Cloud2 from "../../assets/Clouds/2.jpg";
import Cloud3 from "../../assets/Clouds/3.jpg";

import ProfileImage from '../Minor Sections/ProfileImage'
import Navbar from '../Minor Sections/Navbar'
import Links from '../Minor Sections/Links'

const HeroSection = ({ HeroSectionRef_Passed, onScrollToAbout, onScrollToSkills, onScrollToExperience, onScrollToProjects, onScrollToContact }) => {

    return (
        <>
            <div ref={HeroSectionRef_Passed} className='min-h-screen flex flex-col justify-between mb-5'>

                {/* Navbar */}
                <motion.div
                    className="navbar mb-5"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Navbar
                        onScrollToAbout_Passed={onScrollToAbout}
                        onScrollToSkills_Passed={onScrollToSkills}
                        onScrollToExperience_Passed={onScrollToExperience}
                        onScrollToProjects_Passed={onScrollToProjects}
                        onScrollToContact_Passed={onScrollToContact}
                    />
                </motion.div>

                {/* Home-Content */}
                <motion.div
                    className="relative home container max-w-[1400px] my-5 mx-auto h-fit px-10 py-16 flex justify-between"
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                >

                    {/* Text */}
                    <div className="text flex flex-col w-[800px] justify-center">

                        <span className='font-extrabold text-2xl pl-5'>Hello, I am</span>
                        <span className='font-bold text-9xl'>Ahzam Khan</span>

                        <div className='pt-4 pl-8'>
                            <span className='font-bold text-5xl'>Full Stack Dev</span>
                            <span className='font-semibold text-4xl italic text-gray-800'> & </span>
                            <span className='font-bold text-5xl'>DSA Learner</span>
                        </div>

                        <span className='font-medium text-[22px] pt-14 text-gray-800 pl-4'>Full Stack Developer creating standout web apps with clean code, sleek design, and smooth functionality.</span>

                        <motion.div className='flex items-center pt-8 gap-2'>
                            <MapPin size={35} />
                            <span className=' font-bold text-2xl'>New Delhi, India</span>
                        </motion.div>

                        {/* Cloud 1 */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 -z-20"
                            style={{ background: "transparent" }}
                            initial={{ x: -600, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <motion.div
                                className='absolute -top-[10%] -left-[15%]'
                                initial={{ x: 0, y: 0, scale: 1 }}
                                animate={{
                                    x: [0, 50, 0, -50, 0],
                                    y: [0, -10, 0, 10, 0],
                                    scale: [1, 1.15, 1]
                                }}
                                transition={{
                                    x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
                                    y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <img src={Cloud1} className='w-[550px]' alt="Cloud 1" />
                            </motion.div>

                        </motion.div>

                        {/* Cloud 3 */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 -z-20"
                            style={{ background: "transparent" }}
                            initial={{ x: 500, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <motion.div
                                className='absolute bottom-0 right-[14%]'
                                initial={{ x: 0, y: 0, scale: 1, rotate: 3 }}
                                animate={{
                                    x: [0, 10, 0, -10, 0],
                                    y: [0, -10, 0, 10, 0],
                                    scale: [1, 1.15, 1]
                                }}
                                transition={{
                                    x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
                                    y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <img src={Cloud3} className='w-[550px]' alt="Cloud 3" />
                            </motion.div>
                        </motion.div>

                        {/* Cloud 2 */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 -z-20"
                            style={{ background: "transparent" }}
                            initial={{ x: 500, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <motion.div
                                className='absolute -top-[5%] -right-[15%]'
                                initial={{ x: 0, y: 0, scale: 1, rotate: 5 }}
                                animate={{
                                    x: [0, 5, 0, -5, 0],
                                    y: [0, -10, 0, 10, 0],
                                    scale: [1, 1.15, 1]
                                }}
                                transition={{
                                    x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
                                    y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <img src={Cloud2} className='w-[500px]' alt="Cloud 2" />
                            </motion.div>
                        </motion.div>

                    </div>

                    {/* Image */}
                    <ProfileImage />

                </motion.div>

                {/* Home-Arrow */}
                <motion.div
                    className="arrow my-5 flex items-center justify-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                >
                    <motion.span
                        onClick={onScrollToAbout}
                        className='cursor-pointer'
                        whileHover={{
                            scale: 1.5,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        whileTap={{
                            scale: 0.8,
                            transition: {
                                duration: 0.1
                            }
                        }}
                    >
                        <MoveDown size={30} />
                    </motion.span>
                </motion.div>

                {/* Links */}
                <motion.div
                    className="fixed bottom-10 left-4"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <Links />
                </motion.div>

            </div>
        </>
    )
}

export default HeroSection
