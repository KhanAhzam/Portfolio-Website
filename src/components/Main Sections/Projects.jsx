import React from 'react'

import { motion } from "framer-motion"

import Listly from "../../assets/Projects/Listly.png";
import Portfolio from "../../assets/Projects/Portfolio.png";

import { GrGithub } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";

import Cloud3 from "../../assets/Clouds/3.png";
import Cloud4 from "../../assets/Clouds/4.png";
import Cloud8 from "../../assets/Clouds/8.png";
import Cloud10 from "../../assets/Clouds/10.png";

const Projects = ({ ProjectsRef_Passed }) => {

    const Projects = [
        {
            title: "Portfolio",
            img: Portfolio,
            desc: "A personal portfolio website designed to showcase skills, projects and experience in a sleek, clean and responsive layout.",
            stack: ["ReactJS", "JavaScript", "TailwindCSS", "Framer-Motion"],
            github_link: "https://github.com/KhanAhzam/Portfolio-Website",
            is_hosted: false,
            hosting_link: null,
            key_index: 1
        },
        {
            title: "Listly",
            img: Listly,
            desc: "Listly is a minimal to-do app that lets you add tasks, mark them done with a circular checkbox, strike them through, and hide or show completed items for a clutter-free view.",
            stack: ["ReactJS", "JavaScript", "TailwindCSS"],
            github_link: "https://github.com/KhanAhzam/Listly-todo",
            is_hosted: false,
            hosting_link: null,
            key_index: 2
        },
        // {
        //     title: "BudgetBuddy",
        //     img: Listly, // replace with your image import if available
        //     desc: "BudgetBuddy helps you track expenses, categorize spending, and visualize your budget trends with intuitive charts and reports.",
        //     stack: ["ReactJS", "Chart.js", "TailwindCSS"],
        //     github_link: "https://github.com/your-username/budget-buddy",
        //     is_hosted: false,
        //     hosting_link: null,
        //     key_index: 3
        // }
    ]

    return (
        <>

            <div
                className=' container mx-auto min-h-screen max-w-[1400px] p-10'
                ref={ProjectsRef_Passed}
            >

                {/* Heading */}
                <motion.div
                    className="heading font-bold text-5xl mini_smaller:text-6xl"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Projects.
                </motion.div>

                {/* Content */}
                <div className="my-10 md:px-16">

                    {Projects.map((item, Proj_index) =>
                        <div key={item.title} className='map_div relative'>

                            {/* Card Content */}
                            <motion.div
                                className='flex flex-col projects_1400:flex-row bg-[#f5f5f5] min-h-[600px] mini_smaller:min-h-[630px] xs:min-h-[700px] lg:min-h-[750px] projects_1400:min-h-[500px] w-full rounded-3xl py-6 xs:pt-10 xs:pb-5 px-6 xs:px-10 mt-20 shadow-lg overflow-hidden'
                                whileHover="hover"
                                initial={{ x: 300, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: true, amount: 0.1 }}
                            >

                                <div className="left w-full projects_1400:w-[35%] flex flex-col justify-between gap-5">

                                    {/* Upper */}
                                    <div className="upper flex flex-col gap-3">

                                        {/* Title */}
                                        <div className="title text-4xl mini_smaller:text-[40px] xs:text-5xl font-bold xs:mb-2 sm:mb-5">
                                            {item.title}
                                        </div>

                                        {/* Description */}
                                        <div className="desc smaller:text-lg mini_smaller:text-xl xs:text-2xl">
                                            {item.desc}
                                        </div>

                                        {/* Stack used */}
                                        <div className="stack flex flex-wrap gap-2">
                                            {item.stack.map((item2) =>
                                                <motion.div
                                                    key={item2}
                                                    className='bg-blue-500 text-white px-3 py-1 rounded-[16px] font-semibold text-center text-lg smaller:text-xl cursor-pointer'
                                                    whileHover={{
                                                        scale: 1.1,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                >
                                                    {item2}
                                                </motion.div>
                                            )}
                                        </div>

                                    </div>

                                    {/* Github and Hosted links */}
                                    <div className="links flex gap-3 mb-5">

                                        {/* Github */}
                                        <a
                                            href={item.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="Github text-white rounded-[20px]"
                                        >
                                            <motion.button
                                                className="flex justify-between px-4 items-center gap-3 py-3 rounded-[22px] bg-black text-white cursor-pointer"
                                                whileHover={{
                                                    scale: 1.15,
                                                    transition: { duration: 0.3 }
                                                }}
                                                whileTap={{
                                                    scale: 0.8,
                                                    transition: { duration: 0.1 }
                                                }}
                                            >
                                                <GrGithub fontSize={30} />
                                                <span className='hidden smaller:block text-xl font-semibold'>Github</span>
                                            </motion.button>
                                        </a>

                                        {/* Hosted */}
                                        {item.is_hosted &&
                                            <a
                                                href={item.hosting_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="Github text-white rounded-[20px]"
                                            >
                                                <motion.button
                                                    className="flex justify-between px-4 items-center gap-3 py-3 rounded-[22px] bg-black text-white cursor-pointer"
                                                    whileHover={{
                                                        scale: 1.15,
                                                        transition: { duration: 0.3 }
                                                    }}
                                                    whileTap={{
                                                        scale: 0.8,
                                                        transition: { duration: 0.1 }
                                                    }}
                                                >
                                                    <FiExternalLink fontSize={30} />
                                                    <span className='hidden smaller:block text-xl font-semibold'>Link</span>
                                                </motion.button>
                                            </a>
                                        }

                                    </div>

                                </div>

                                <div className="relative right w-full projects_1400:w-[75%]">
                                    <div className="flex w-[200%] sm:w-[140%] absolute smaller:top-2 smaller:left-5 xs:left-10 sm:left-20 xs:top-4 projects_1400:left-20 projects_1400:-bottom-20">
                                        <motion.img
                                            src={item.img}
                                            className="h-auto w-full grow rounded-xl"
                                            alt="Project Preview"
                                            variants={{
                                                rest: {
                                                    rotateZ: 0,
                                                    transition: { duration: 0.3, ease: "easeInOut" }
                                                },
                                                hover: {
                                                    rotateZ: -5,
                                                    transition: { duration: 0.3, ease: "easeOut" }
                                                }
                                            }}
                                            whileHover="hover"
                                            animate="rest" // 👈 ensures it returns using the `rest` transition
                                            initial={{ y: 200, opacity: 0 }}
                                            whileInView={{
                                                y: 0,
                                                opacity: 1,
                                                transition: { duration: 1, ease: "easeOut", delay: 0.2 }
                                            }}
                                            viewport={{ once: true, amount: 0 }}
                                        />

                                    </div>
                                </div>

                            </motion.div>

                            {/* Cloud 10 for bigger screens above xs, 450px */}
                            {Proj_index === 0 &&
                                <motion.div className="hidden xs:block pointer-events-none absolute inset-0 -z-20"
                                    style={{ background: "transparent" }}
                                    initial={{ x: 400, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                                    viewport={{ once: true, amount: 0 }}
                                >
                                    <motion.div
                                        className='absolute -top-[20%] -right-[16%]'
                                        initial={{ x: 0, y: 0, scale: 1, rotate: 15 }}
                                        animate={{
                                            x: [0, 15, 0, -15, 0],
                                            y: [0, -10, 0, 10, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{
                                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                                            scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    >
                                        <img src={Cloud10} className='w-[350px]' alt="Cloud 10" />
                                    </motion.div>
                                </motion.div>
                            }

                            {/* Cloud 8 for bigger screens above xs, 450px */}
                            {Proj_index === 1 &&
                                <motion.div className="hidden xs:block pointer-events-none absolute inset-0 -z-20"
                                    style={{ background: "transparent" }}
                                    initial={{ x: -200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <motion.div
                                        className='absolute -top-[20%] -left-[24%]'
                                        initial={{ x: 0, y: 0, scale: 1, rotate: -5 }}
                                        animate={{
                                            x: [0, 15, 0, -15, 0],
                                            y: [0, -10, 0, 10, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{
                                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                                            scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    >
                                        <img src={Cloud8} className='w-[400px]' alt="Cloud 8" />
                                    </motion.div>
                                </motion.div>
                            }

{/* Need to Work On */}     {/* Cloud 3 */}
                            {Proj_index === 2 &&
                                <motion.div className="pointer-events-none absolute inset-0 -z-20"
                                    style={{ background: "transparent" }}
                                    initial={{ x: 200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <motion.div
                                        className='absolute -top-[20%] -right-[25%]'
                                        initial={{ x: 0, y: 0, scale: 1, rotate: 15 }}
                                        animate={{
                                            x: [0, 15, 0, -15, 0],
                                            y: [0, -10, 0, 10, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{
                                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                                            scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    >
                                        <img src={Cloud3} className='w-[450px]' alt="Cloud 3" />
                                    </motion.div>
                                </motion.div>
                            }

{/* Need to Work On */}     {/* Cloud 4 */}
                            {Proj_index === 2 &&
                                <motion.div className="pointer-events-none absolute inset-0 -z-20"
                                    style={{ background: "transparent" }}
                                    initial={{ x: -200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <motion.div
                                        className='absolute -bottom-[15%] -left-[15%]'
                                        initial={{ x: 0, y: 0, scale: 1, rotate: -15, scaleX: -1, opacity: "90%" }}
                                        animate={{
                                            x: [0, 15, 0, -15, 0],
                                            y: [0, -10, 0, 10, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{
                                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                                            scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    >
                                        <img src={Cloud4} className='w-[350px]' alt="Cloud 4" />
                                    </motion.div>
                                </motion.div>
                            }

                            {/* Top Cloud 10 for smaller screens below xs, 450px */}
                            {Proj_index === 0 &&
                                <motion.div className="block xs:hidden pointer-events-none absolute inset-0 -z-20"
                                    style={{ background: "transparent" }}
                                    initial={{ x: 300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                                    viewport={{ once: true, amount: 0.05 }}
                                >
                                    <motion.div
                                        className='absolute -top-[20%] -right-[16%]'
                                        initial={{ x: 0, y: 0, scale: 1, rotate: 15 }}
                                        animate={{
                                            x: [0, 15, 0, -15, 0],
                                            y: [0, -10, 0, 10, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{
                                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                                            scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    >
                                        <img src={Cloud10} className='w-[250px]' alt="Cloud 10" />
                                    </motion.div>
                                </motion.div>
                            }

                            {/* Middle Cloud 8 for smaller screens below xs, 450px */}
                            {Proj_index === 1 &&
                                <motion.div className="block xs:hidden pointer-events-none absolute inset-0 -z-20"
                                    style={{ background: "transparent" }}
                                    initial={{ x: -300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    viewport={{ once: true, amount: 0.05 }}
                                >
                                    <motion.div
                                        className='absolute -top-[15%] -left-[20%]'
                                        initial={{ x: 0, y: 0, scale: 1, rotate: -5 }}
                                        animate={{
                                            x: [0, 15, 0, -15, 0],
                                            y: [0, -10, 0, 10, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{
                                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                                            scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    >
                                        <img src={Cloud8} className='w-[300px]' alt="Cloud 8" />
                                    </motion.div>
                                </motion.div>
                            }

                            {/* Bottom Cloud 4 Inverted for smaller screens below xs, 450px */}
                            {Proj_index === 1 &&
                                <motion.div className="pointer-events-none absolute inset-0 -z-20"
                                    style={{ background: "transparent" }}
                                    initial={{ x: -300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    <motion.div
                                        className='absolute -bottom-[10%] -right-[17%]'
                                        initial={{ x: 0, y: 0, scale: 1, rotate: -5, scaleX: 1, opacity: "90%" }}
                                        animate={{
                                            x: [0, 15, 0, -15, 0],
                                            y: [0, -10, 0, 10, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{
                                            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                                            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                                            scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    >
                                        <img src={Cloud4} className='w-[250px]' alt="Cloud 4" />
                                    </motion.div>
                                </motion.div>
                            }

                        </div>
                    )}

                </div>

            </div>

        </>
    )
}

export default Projects
