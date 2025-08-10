import React from 'react'

import { useState } from 'react';

import { motion, AnimatePresence } from "framer-motion"
import { Download, Contact, Sun, Moon } from 'lucide-react';

const Navbar = () => {

    const [isDark, setIsDark] = useState(false);


    return (
        <>
            <div className="flex justify-between w-[100%] px-5 py-4 items-center bg-[#F7F6F6]">

                <div className="1-Left flex gap-32 leading-none items-center">

                    {/* Logo */}
                    <div className="logo pl-16 text-2xl font-semibold leading-none">
                        <span>Ahzam</span>
                    </div>

                    {/* Navbar Main Options */}
                    <ul className='flex gap-16 text-xl font-semibold leading-none pt-0'>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Skills</li>
                        <li className='cursor-pointer'>Experience</li>
                        <li className='cursor-pointer'>Projects</li>
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
                                    <Sun size={28}/>
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
                                    <Moon size={28}/>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Change Motions to "quick then slow" */}
                    {/* Buttons */}
                    <div className="Btns flex justify-evenly gap-3 items-center">

                        {/* Resume */}
                        <div className="Resume text-white font-semibold">
                            <motion.button
                                className="bg-black w-[90px] h-10 rounded-full"
                                whileHover={{
                                    scale: 1.15,
                                    transition: {
                                        duration: 0.3
                                    }
                                }}
                            >
                                <span>Resume</span>
                            </motion.button>
                        </div>

                        {/* Contact */}
                        <div className="Resume text-white font-semibold">
                            <motion.button
                                className="bg-black w-[90px] h-10 rounded-full"
                                whileHover={{
                                    scale: 1.15,
                                    transition: {
                                        duration: 0.3
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
