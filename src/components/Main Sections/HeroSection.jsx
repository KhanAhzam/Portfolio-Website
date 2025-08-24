import React, { useRef } from 'react'

import { motion } from "framer-motion"

import { MapPin, MoveDown } from 'lucide-react';

import Cloud1 from "../../assets/Clouds/1.png";
import Cloud2 from "../../assets/Clouds/2.png";
import Cloud3 from "../../assets/Clouds/3.png";

import ProfileImage from '../Minor Sections/ProfileImage'
import Navbar from '../Minor Sections/Navbar'
import Links from '../Minor Sections/Links'

const HeroSection = ({ HeroSectionRef_Passed, onScrollToAbout, onScrollToSkills, onScrollToExperience, onScrollToProjects, onScrollToContact }) => {

    return (
        <>
            <div ref={HeroSectionRef_Passed} className='relative min-h-screen flex flex-col justify-start gap-0 md:gap-10 large:gap-0 large:justify-between mb-5 overflow-hidden'>

                {/* Navbar */}
                <motion.div
                    className="navbar mb-5 relative"
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

                    {/* <motion.div className="pointer-events-none absolute inset-0 -z-20"
                        style={{ background: "transparent" }}
                        initial={{ x: -600, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <motion.div
                            className='top-[10%] -left-[5%]'
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

                    </motion.div> */}



                </motion.div>

                {/* Home-Content */}
                <motion.div
                    className="large:relative home container max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1300px] 3xl:max-w-[1400px] my-3 mx-auto px-10 large:py-16 flex flex-col large:flex-row items-center justify-between"
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                >

                    {/* Image below 1150px (large) */}
                    <div className="block large:hidden shrink-0 pb-10">
                        <ProfileImage />
                    </div>

                    {/* Text */}
                    <div className="text flex flex-col w-full large:w-[800px] items-center large:items-baseline justify-center">

                        <span className='font-extrabold sm:font-bold leading-none large:leading-normal large:font-extrabold text-xl large:text-2xl large:pl-5'>Hello, I am</span>
                        <span className='font-black smaller:font-extrabold sm:font-bold text-[40px] smaller:text-[54px] xs:text-6xl sm:text-8xl 2xl:text-9xl'>Ahzam Khan</span>

                        <div className='md:pl-8 text-center large:text-left'>
                            <span className='font-bold text-[28px] sm:text-4xl 2xl:text-5xl'>Full Stack Dev</span>
                            <span className='font-semibold text-2xl sm:text-3xl 2xl:text-4xl italic text-gray-800'> & </span>
                            <span className='font-bold text-[28px] sm:text-4xl 2xl:text-5xl'>DSA Learner</span>
                        </div>

                        <span className='font-bold sm:font-semibold text-lg sm:text-[22px] text-center large:text-left pt-2 xs:pt-5 large:pt-14 text-gray-800 large:pl-4 mx-2 sm:mx-5 md:mx-10 large:mx-0'>
                            Full Stack Developer creating standout web apps with clean code, sleek design, and smooth functionality.
                        </span>

                        <motion.div className='flex items-center pt-4 xs:pt-8 gap-2'>
                            <MapPin size={35} className='hidden xs:block' />
                            <MapPin size={30} className='block xs:hidden' />
                            <span className='font-extrabold sm:font-bold text-[22px] xs:text-2xl'>New Delhi, India</span>
                        </motion.div>

                        {/* Cloud 1 */}
                        <motion.div className="hidden large:block pointer-events-none absolute inset-0 -z-20"
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

                        {/* Cloud 2 */}
                        <motion.div className="hidden large:block pointer-events-none absolute inset-0 -z-20"
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

                        {/* Cloud 3 */}
                        <motion.div className="hidden large:block pointer-events-none absolute inset-0 -z-20"
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

                    </div>

                    {/* Image above 1150px (large) */}
                    <div className="hidden large:block shrink-0">
                        <ProfileImage />
                    </div>












                </motion.div>

                {/* Cloud 1 for mobile devices */}
                <motion.div className="block large:hidden pointer-events-none absolute inset-0 -z-20"
                    style={{ background: "transparent" }}
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <motion.div
                        className='absolute top-[5%] -left-[5%] sm:left-[0%] large:-top-[10%] large:-left-[15%]'
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
                        <img src={Cloud1} className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px]" alt="Cloud 1" />
                    </motion.div>

                </motion.div>

                {/* Cloud 2 for mobile devices */}
                <motion.div className="block large:hidden pointer-events-none absolute inset-0 -z-20"
                    style={{ background: "transparent" }}
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <motion.div
                        className='absolute top-[44%] md:top-[50%] large:-top-[5%] -right-[10%] xs:-right-[10%] sm:right-[0%] md:-right-[5%] lg:right-[0%] large:-right-[15%]'
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
                        <img src={Cloud2} className='w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px]' alt="Cloud 2" />
                    </motion.div>
                </motion.div>

                {/* Cloud 3 for mobile devices */}
                <motion.div className="block large:hidden pointer-events-none absolute inset-0 -z-20"
                    style={{ background: "transparent" }}
                    initial={{ x: 300, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <motion.div
                        className='absolute bottom-[5%] right-[20%] md:bottom-0 md:right-[14%]'
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
                        <img src={Cloud3} className='w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] large:w-[550px]' alt="Cloud 3" />
                    </motion.div>
                </motion.div>

                {/* Home-Arrow */}
                <motion.div
                    className="arrow my-5 large:flex items-center justify-center hidden"
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
                    className="fixed bottom-14 left-4 z-20"
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









// {/* Shared Cloud Wrapper */}
// <div className="block large:hidden pointer-events-none absolute inset-0 -z-20 overflow-hidden large:overflow-visible">

//     {/* Cloud 1 */}
//     <motion.div
//         className="absolute top-[5%] -left-[5%] sm:left-[0%] large:-top-[10%] large:-left-[15%]"
//         initial={{ x: 0, y: 0, scale: 1 }}
//         animate={{
//             x: [0, 50, 0, -50, 0],
//             y: [0, -10, 0, 10, 0],
//             scale: [1, 1.15, 1],
//         }}
//         transition={{
//             x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
//             y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
//             scale: { duration: 30, repeat: Infinity, ease: "easeInOut" },
//         }}
//     >
//         <img src={Cloud1} className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px]" alt="Cloud 1" />
//     </motion.div>

//     {/* Cloud 2 */}
//     <motion.div
//         className="absolute top-[48%] md:top-[50%] large:-top-[5%] -right-[5%] xs:-right-[10%] sm:right-[0%] md:-right-[5%] lg:right-[0%] large:-right-[15%]"
//         initial={{ x: 0, y: 0, scale: 1, rotate: 5 }}
//         animate={{
//             x: [0, 5, 0, -5, 0],
//             y: [0, -10, 0, 10, 0],
//             scale: [1, 1.15, 1],
//         }}
//         transition={{
//             x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
//             y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
//             scale: { duration: 30, repeat: Infinity, ease: "easeInOut" },
//         }}
//     >
//         <img src={Cloud2} className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px]" alt="Cloud 2" />
//     </motion.div>

//     {/* Cloud 3 */}
//     <motion.div
//         className="absolute bottom-[5%] right-[10%] md:bottom-0 md:right-[14%]"
//         initial={{ x: 0, y: 0, scale: 1, rotate: 3 }}
//         animate={{
//             x: [0, 10, 0, -10, 0],
//             y: [0, -10, 0, 10, 0],
//             scale: [1, 1.15, 1],
//         }}
//         transition={{
//             x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
//             y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
//             scale: { duration: 30, repeat: Infinity, ease: "easeInOut" },
//         }}
//     >
//         <img src={Cloud3} className="w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] large:w-[550px]" alt="Cloud 3" />
//     </motion.div>

// </div>












                // {/* Shared Cloud Wrapper */}
                // <div className="block large:hidden pointer-events-none absolute inset-0 -z-20 overflow-hidden large:overflow-visible">

                //     {/* Cloud 1 */}
                //     <motion.div
                //         className="absolute top-[5%] -left-[5%] sm:left-[0%] large:-top-[10%] large:-left-[15%]"
                //         initial={{ x: 0, y: 0, scale: 1 }}
                //         animate={{
                //             x: [0, 50, 0, -50, 0],
                //             y: [0, -10, 0, 10, 0],
                //             scale: [1, 1.15, 1],
                //         }}
                //         transition={{
                //             x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
                //             y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                //             scale: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                //         }}
                //     >
                //         <img src={Cloud1} className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px]" alt="Cloud 1" />
                //     </motion.div>

                //     {/* Cloud 2 */}
                //     <motion.div
                //         className="absolute top-[48%] md:top-[50%] large:-top-[5%] -right-[5%] xs:-right-[10%] sm:right-[0%] md:-right-[5%] lg:right-[0%] large:-right-[15%]"
                //         initial={{ x: 0, y: 0, scale: 1, rotate: 5 }}
                //         animate={{
                //             x: [0, 5, 0, -5, 0],
                //             y: [0, -10, 0, 10, 0],
                //             scale: [1, 1.15, 1],
                //         }}
                //         transition={{
                //             x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
                //             y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                //             scale: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                //         }}
                //     >
                //         <img src={Cloud2} className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px]" alt="Cloud 2" />
                //     </motion.div>

                //     {/* Cloud 3 */}
                //     <motion.div
                //         className="absolute bottom-[5%] right-[10%] md:bottom-0 md:right-[14%]"
                //         initial={{ x: 0, y: 0, scale: 1, rotate: 3 }}
                //         animate={{
                //             x: [0, 10, 0, -10, 0],
                //             y: [0, -10, 0, 10, 0],
                //             scale: [1, 1.15, 1],
                //         }}
                //         transition={{
                //             x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
                //             y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                //             scale: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                //         }}
                //     >
                //         <img src={Cloud3} className="w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] large:w-[550px]" alt="Cloud 3" />
                //     </motion.div>

                // </div>
