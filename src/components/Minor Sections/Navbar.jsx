import React from 'react'

import { useState } from 'react';

import { motion, AnimatePresence } from "framer-motion"
import { Download, Contact, Sun, Moon } from 'lucide-react';

const Navbar = ({ onScrollToAbout_Passed, onScrollToSkills_Passed, onScrollToExperience_Passed, onScrollToProjects_Passed, onScrollToContact_Passed }) => {

    const [isDark, setIsDark] = useState(false);

    const navItems = [
        { label: "About", onClick: onScrollToAbout_Passed },
        { label: "Skills", onClick: onScrollToSkills_Passed },
        { label: "Experience", onClick: onScrollToExperience_Passed },
        { label: "Projects", onClick: onScrollToProjects_Passed },
    ];

    return (
        <>
            <div className="flex justify-between w-[100%] px-5 py-5 items-center ">

                <div className="1-Left flex gap-32 leading-none items-center">

                    {/* Logo */}
                    <div
                        className="logo pl-16 text-4xl font-black leading-none"
                    >
                        <motion.span
                            className='inline-block cursor-pointer'
                            whileHover={{
                                scale: 1.2,
                                transition: {
                                    duration: 0.4
                                }
                            }}
                            whileTap={{
                                scale: 0.8,
                                transition: {
                                    duration: 0.4
                                }
                            }}
                            onClick={() => window.location.href = "/"}
                        >
                            Ahzam.
                        </motion.span>
                    </div>

                    {/* Navbar Main Options */}
                    <ul className="flex gap-4 text-2xl font-bold leading-none">
                        {navItems.map((item, idx) => (
                            <motion.li
                                key={idx}
                                onClick={item.onClick}
                                className="relative cursor-pointer px-5 py-1.5 pt-2 overflow-hidden"
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                variants={{
                                    rest: { color: "black" },
                                    hover: { color: "white" }
                                }}
                            >
                                {/* Background animation */}
                                <motion.span
                                    className="absolute left-0 bottom-0 w-full bg-black -z-10"
                                    variants={{
                                        rest: { height: "0%" },
                                        hover: { height: "100%" }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                                {item.label}
                            </motion.li>
                        ))}
                    </ul>

                </div>

                <div className='2-Right flex gap-10 items-center'>

                    {/* LightMode-DarkMode */}
                    <div className="Mode leading-none cursor-pointer" onClick={() => setIsDark(mode => !mode)}>
                        <AnimatePresence mode="wait">
                            {isDark ? (
                                <motion.div
                                    key="sun"
                                    initial={{ rotate: 0, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 270, opacity: 0 }}
                                    whileHover={{ scale: 1.25, rotate: 90 }}
                                    whileTap={{ scale: 0.75 }}
                                    transition={{
                                        rotate: { duration: 0.35 },
                                        opacity: { duration: 0.4, ease: "easeOut" }
                                    }}
                                >
                                    <Sun size={30} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="moon"
                                    initial={{ rotate: 0, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -300, opacity: 0 }}
                                    whileHover={{ scale: 1.25, rotate: 85 }}
                                    whileTap={{ scale: 0.75 }}
                                    transition={{
                                        rotate: { duration: 0.35 },
                                        opacity: { duration: 0.4, ease: "easeOut" }
                                    }}
                                >
                                    <Moon size={30} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Buttons */}
                    <div className="Btns flex justify-evenly gap-3 items-center">

                        {/* Resume */}
                        <a
                            className="Resume text-white font-bold text-xl"
                            href="https://drive.google.com/file/d/1aY2xjhcI6xxNbtIFR6Iu2J-iWL3LBzXV/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.button
                                className="bg-black w-fit rounded-[18px] px-5 py-1.5"
                                whileHover={{
                                    scale: 1.15,
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
                                <span>Resume</span>
                            </motion.button>
                        </a>

                        {/* Contact */}
                        <div
                            className="Contact text-white font-bold text-xl"
                            onClick={onScrollToContact_Passed}
                        >
                            <motion.button
                                className="bg-black w-fit rounded-[18px] px-5 py-1.5"
                                whileHover={{
                                    scale: 1.15,
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
                                <span>Contact</span>
                            </motion.button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar
