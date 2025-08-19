import React from 'react'

import { motion } from "framer-motion"

import Listly from "../../assets/Projects/Listly.png";

import { GrGithub } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";

import Cloud3 from "../../assets/Clouds/3.jpg";
import Cloud4 from "../../assets/Clouds/4.png";
import Cloud8 from "../../assets/Clouds/8.png";
import Cloud10 from "../../assets/Clouds/10.png";

const Projects = ({ ProjectsRef_Passed }) => {

    const Projects = [
        {
            title: "Listly",
            img: Listly,
            desc: "Listly is a minimal to-do app that lets you add tasks, mark them done with a circular checkbox, strike them through, and hide or show completed items for a clutter-free view.",
            stack: ["ReactJS", "TailwindCSS"],
            github_link: "https://github.com/KhanAhzam/Listly-todo",
            is_hosted: false,
            hosting_link: null,
            key_index: 1
        },
        {
            title: "WeatherNow",
            img: null, // replace with your image import if available
            desc: "WeatherNow is a live weather dashboard that shows current conditions and forecasts for any location, powered by real-time API data and a responsive design.",
            stack: ["ReactJS", "TailwindCSS", "OpenWeather API"],
            github_link: "https://github.com/your-username/weather-now",
            is_hosted: true,
            hosting_link: "https://weathernow-demo.vercel.app",
            key_index: 2
        },
        {
            title: "BudgetBuddy",
            img: null, // replace with your image import if available
            desc: "BudgetBuddy helps you track expenses, categorize spending, and visualize your budget trends with intuitive charts and reports.",
            stack: ["ReactJS", "Chart.js", "TailwindCSS"],
            github_link: "https://github.com/your-username/budget-buddy",
            is_hosted: false,
            hosting_link: null,
            key_index: 3
        }
    ]

    return (
        <>

            <div
                className=' container mx-auto min-h-screen w-[1400px] p-10'
                ref={ProjectsRef_Passed}
            >

                {/* Heading */}
                <motion.div
                    className="heading font-bold text-6xl"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Projects.
                </motion.div>

                {/* Content */}
                <div className="my-10 px-16">

                    {Projects.map((item, Proj_index) =>
                        <div key={item.title} className='relative'>

                            {/* Card Content */}
                            <motion.div
                                className='relative overflow-hidden bg-[#f5f5f5] h-[500px] w-full rounded-3xl pt-10 pb-5 pl-10 flex mt-20 shadow-lg'
                                whileHover="hover"
                                initial={{ x: 300, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >

                                <div className="left w-[35%] flex flex-col justify-between">

                                    {/* Upper */}
                                    <div className="upper flex flex-col gap-3">

                                        {/* Title */}
                                        <div className="title text-5xl font-bold mb-5">
                                            {item.title}
                                        </div>

                                        {/* Description */}
                                        <div className="desc text-2xl">
                                            {item.desc}
                                        </div>

                                        {/* Stack used */}
                                        <div className="stack flex flex-wrap gap-x-3 gap-y-2">
                                            {item.stack.map((item2) =>
                                                <motion.div
                                                    key={item2}
                                                    className='bg-blue-500 text-white px-4 py-1 rounded-[15px] font-semibold text-center text-xl cursor-pointer'
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
                                                className="flex justify-between px-4 items-center w-[130px] h-[50px] rounded-[22px] bg-black text-white cursor-pointer"
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
                                                <span className='text-xl font-semibold'>Github</span>
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
                                                    className="flex justify-between px-4 items-center w-[110px] h-[50px] rounded-[22px] bg-black text-white cursor-pointer"
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
                                                    <span className='text-xl font-semibold'>Link</span>
                                                </motion.button>
                                            </a>
                                        }

                                    </div>

                                </div>

                                <div className="right w-[65%]">
                                    <motion.img
                                        src={Listly}
                                        className='rounded-xl w-[1500px] left-[40%] top-[10%] absolute'
                                        alt=""
                                        variants={{
                                            hover: { rotateZ: -5, transition: { duration: 0.4, ease: "easeOut" } }
                                        }}
                                    />
                                </div>

                            </motion.div>

                            {/* Cloud 10 */}
                            {Proj_index === 0 &&
                                <motion.div
                                    className="pointer-events-none absolute inset-0 -z-20"
                                    style={{ background: "transparent" }}
                                    initial={{ x: 300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    viewport={{ once: true, amount: 0.4 }}
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

                            {/* Cloud 3 */}
                            {Proj_index === 2 &&
                                <motion.div
                                    className="pointer-events-none absolute inset-0 -z-20"
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

                            {/* Cloud 8 */}
                            {Proj_index === 1 &&
                                <motion.div
                                    className="pointer-events-none absolute inset-0 -z-20"
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

                            {/* Cloud 4 */}
                            {Proj_index === 2 &&
                                <motion.div
                                    className="pointer-events-none absolute inset-0 -z-20"
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

                        </div>
                    )}

                </div>

            </div>

        </>
    )
}

export default Projects
