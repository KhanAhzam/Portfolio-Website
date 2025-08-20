import React from "react";
import { motion } from "framer-motion";

import Cloud1 from "../../assets/Clouds-Splash/1.png"
import Cloud2 from "../../assets/Clouds-Splash/2.png"
import Cloud3 from "../../assets/Clouds-Splash/3.png"
import Cloud8 from "../../assets/Clouds-Splash/8.png"
import Cloud9 from "../../assets/Clouds-Splash/9.png"
import Cloud10 from "../../assets/Clouds-Splash/10.png"
import Cloud11 from "../../assets/Clouds-Splash/11.png"
import Cloud12 from "../../assets/Clouds-Splash/12.png"

const Splashscreen = () => {
    const text = "Ahzam Khan"

    const container = {                                 // container controls stagger timing
        hidden: { opacity: 0 },                         // when hidden, the whole container is invisible
        visible: {
            opacity: 1,                                 // when visible, the container itself becomes visible
            transition: {
                staggerChildren: 0.15,                   // every child (letter) starts 0.1s after the previous one
            },
        },
    };

    const letter = {                                    // each letter animation
        hidden: { opacity: 0, y: 50 },                  // start invisible, moved down 50px
        visible: {
            opacity: 1,
            y: 0,                                       // move up to normal position
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <div className="relative overflow-hidden font-urbanist">

                {/* Text Animation */}
                <motion.div
                    className="flex items-center justify-center min-h-screen overflow-hidden"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span
                        className="text-black font-bold text-9xl pb-20 flex"
                        initial={{ y: 0, scale: 1 }}
                        animate={{
                            y: -500,
                            scale: 0.6
                        }}
                        transition={{
                            delay: 2.5,                                                                 // wait until letters are in, adding a 2.5s delay
                            duration: 0.7,
                            ease: "easeIn",
                        }}>
                        {text.split("").map((char, index) => (

                            <motion.span key={index} variants={letter}>
                                {char === " " ? "\u00A0" : char}                                        {/* ensures spaces don’t collapse, "\u00A0" is a non-breaking space, so the gap between words is preserved. */}
                            </motion.span>

                        ))}
                    </motion.span>
                </motion.div>

                {/* Cloud 8 - Top Right */}
                <div className="pointer-events-none absolute inset-0 z-10"
                    style={{ background: "transparent" }}
                >
                    <motion.div
                        className='absolute top-[10%] right-[5%]'
                        initial={{ x: 0, y: 0, scale: 1, rotate: 10 }}
                        animate={{
                            x: [0, 15, 0, -15, 0],
                            y: [0, -15, 0, 15, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 60, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <motion.img
                            src={Cloud8}
                            className='w-[600px]'
                            alt="Cloud 8"
                            initial={{ y: 0, scale: 1 }}
                            animate={{
                                y: -1000,
                                scale: 0.3
                            }}
                            transition={{
                                delay: 2.5,
                                duration: 1.5,
                                ease: "easeIn",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Cloud 9 - Bottom Center */}
                <div className="pointer-events-none absolute inset-0 -z-10"
                    style={{ background: "transparent" }}
                >
                    <motion.div
                        className='absolute bottom-[5%] left-[35%]'
                        initial={{ x: 0, y: 0, scale: 1, rotate: 0 }}
                        animate={{
                            x: [0, 15, 0, -15, 0],
                            y: [0, -19, 0, 19, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 17, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 60, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <motion.img
                            src={Cloud9}
                            className='w-[600px]'
                            alt="Cloud 9"
                            initial={{ y: 0, scale: 1 }}
                            animate={{
                                y: 1000,
                                scale: 0.3
                            }}
                            transition={{
                                delay: 2.5,
                                duration: 1.5,
                                ease: "easeIn",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Cloud 3 - Bottom Left*/}
                <div className="pointer-events-none absolute inset-0 -z-20"
                    style={{ background: "transparent" }}
                >
                    <motion.div
                        className='absolute bottom-[25%] left-[5%]'
                        initial={{ x: 0, y: 0, scale: 1, rotate: 0 }}
                        animate={{
                            x: [0, 15, 0, -15, 0],
                            y: [0, -7, 0, 7, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 60, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <motion.img
                            src={Cloud3}
                            className='w-[650px]'
                            alt="Cloud 3"
                            initial={{ y: 0, scale: 1 }}
                            animate={{
                                y: 1000,
                                scale: 0.3
                            }}
                            transition={{
                                delay: 2.5,
                                duration: 1.5,
                                ease: "easeIn",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Cloud 12 - Bottom Right */}
                <div className="pointer-events-none absolute inset-0 -z-20"
                    style={{ background: "transparent" }}
                >
                    <motion.div
                        className='absolute bottom-[20%] right-[5%]'
                        initial={{ x: 0, y: 0, scale: 1, rotate: 15, scaleX: -1 }}
                        animate={{
                            x: [0, 15, 0, -15, 0],
                            y: [0, -12, 0, 12, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 60, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <motion.img
                            src={Cloud12}
                            className='w-[600px]'
                            alt="Cloud 12"
                            initial={{ y: 0, scale: 1 }}
                            animate={{
                                y: 1000,
                                scale: 0.3
                            }}
                            transition={{
                                delay: 2.5,
                                duration: 1.5,
                                ease: "easeIn",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Cloud 1 - Top Left */}
                <div className="pointer-events-none absolute inset-0 -z-20"
                    style={{ background: "transparent" }}
                >
                    <motion.div
                        className='absolute top-[5%] left-[5%]'
                        initial={{ x: 0, y: 0, scale: 1, rotate: 10 }}
                        animate={{
                            x: [0, 15, 0, -15, 0],
                            y: [0, -18, 0, 18, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 60, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <motion.img
                            src={Cloud1}
                            className='w-[600px]'
                            alt="Cloud 1"
                            initial={{ y: 0, scale: 1 }}
                            animate={{
                                y: -1000,
                                scale: 0.3
                            }}
                            transition={{
                                delay: 2.5,
                                duration: 1.5,
                                ease: "easeIn",
                            }}
                        />
                    </motion.div>
                </div>

            </div>
        </>
    );
};

export default Splashscreen;
