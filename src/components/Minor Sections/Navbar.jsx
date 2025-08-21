import React from 'react'

import { useState } from 'react';

import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from 'lucide-react';

import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Navbar = ({ onScrollToAbout_Passed, onScrollToSkills_Passed, onScrollToExperience_Passed, onScrollToProjects_Passed, onScrollToContact_Passed }) => {

    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "About", onClick: onScrollToAbout_Passed },
        { label: "Skills", onClick: onScrollToSkills_Passed },
        { label: "Experience", onClick: onScrollToExperience_Passed },
        { label: "Projects", onClick: onScrollToProjects_Passed },
    ];

    return (
        <>

            {/* Desktop/Laptop Version */}
            <div className={`hidden lg:flex justify-between w-[100%] p-5 items-center ${isMenuOpen ? "bg-white" : "bg-transparent"}`}>

                <div className="1-Left flex gap-10 large:gap-14 xl:gap-32 leading-none items-center">

                    {/* Logo */}
                    <div className="logo pl-5 large:pl-10 xl:pl-16 text-4xl font-black leading-none"
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
                    <ul className="flex gap-2 large:gap-4 text-xl large:text-2xl font-bold leading-none">
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

                <div className='2-Right flex gap-6 large:gap-10 items-center'>

                    {/* LightMode-DarkMode */}
                    {/* <div className="Mode leading-none cursor-pointer" onClick={() => setIsDark(mode => !mode)}>
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
                                    <Sun size={30} className='hidden large:block' />
                                    <Sun size={25} className='block large:hidden mt-[2px]' />
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
                                    <Moon size={30} className='hidden large:block' />
                                    <Moon size={25} className='block large:hidden mt-[2px]' />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div> */}

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

            {/* Mobile/Tablet Version */}
            <div className={`flex relative lg:hidden justify-between w-[100%] p-5 items-center ${isMenuOpen ? "bg-white" : "bg-transparent"}`}>

                {/* Logo */}
                <div className="logo pl-5 text-4xl font-black leading-none"
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

                {/* Hamburger/Menu Btn and Cross/Cancel Btn */}
                {isMenuOpen ? (
                    <RxCross1
                        size={35}
                        strokeWidth={0.5}
                        className="cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    />
                ) : (
                    <HiMenuAlt3
                        size={35}
                        className="cursor-pointer"
                        onClick={() => setIsMenuOpen(true)}
                    />
                )}

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isMenuOpen && (

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden absolute top-full left-0 flex flex-col items-center gap-6 py-6 bg-white shadow-md w-full z-50"
                        >
                            {/* Nav Links */}
                            <ul className="flex flex-col gap-6 text-xl font-semibold">
                                {navItems.map((item, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => {
                                            item.onClick();
                                            setIsMenuOpen(false); // close menu after click
                                        }}
                                        className="cursor-pointer hover:text-gray-600"
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>

                            {/* Buttons */}
                            <div className="flex gap-10 items-center justify-evenly px-10">

                                {/* Resume */}
                                <a
                                    className=" text-center text-white font-bold text-lg"
                                    href="https://drive.google.com/file/d/1aY2xjhcI6xxNbtIFR6Iu2J-iWL3LBzXV/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.button
                                        className="bg-black w-full rounded-[18px] px-5 py-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Resume
                                    </motion.button>
                                </a>

                                {/* Contact */}
                                <motion.button
                                    className="bg-black text-white font-bold text-lg rounded-[18px] px-5 py-2"
                                    onClick={() => {
                                        onScrollToContact_Passed();
                                        setIsMenuOpen(false);
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact
                                </motion.button>

                            </div>
                        </motion.div>

                    )}
                </AnimatePresence>

            </div>

        </>
    )
}

export default Navbar
