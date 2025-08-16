import React from 'react'

import { motion } from "framer-motion"

import Listly from "../assets/Projects/Listly.png";

import { GrGithub } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";

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
        },
        {
            title: "WeatherNow",
            img: null, // replace with your image import if available
            desc: "WeatherNow is a live weather dashboard that shows current conditions and forecasts for any location, powered by real-time API data and a responsive design.",
            stack: ["ReactJS", "TailwindCSS", "OpenWeather API"],
            github_link: "https://github.com/your-username/weather-now",
            is_hosted: true,
            hosting_link: "https://weathernow-demo.vercel.app",
        },
        {
            title: "NoteSpace",
            img: null, // replace with your image import if available
            desc: "NoteSpace is a simple note-taking app that allows you to create, edit, and organize notes with markdown support and quick search functionality.",
            stack: ["Next.js", "TailwindCSS", "LocalStorage"],
            github_link: "https://github.com/your-username/note-space",
            is_hosted: true,
            hosting_link: "https://notespaces-demo.vercel.app",
        },
        {
            title: "BudgetBuddy",
            img: null, // replace with your image import if available
            desc: "BudgetBuddy helps you track expenses, categorize spending, and visualize your budget trends with intuitive charts and reports.",
            stack: ["ReactJS", "Chart.js", "TailwindCSS"],
            github_link: "https://github.com/your-username/budget-buddy",
            is_hosted: false,
            hosting_link: null,
        }
    ]

    return (
        <>

            <div
                className=' container mx-auto min-h-screen w-[1400px] p-10'
                ref={ProjectsRef_Passed}
            >

                {/* Heading */}
                <div className="heading font-bold text-6xl">
                    Projects.
                </div>

                {/* Content */}
                <div className="my-10 px-16">

                    {Projects.map((item) =>
                        <div key={item.title} className='relative overflow-hidden bg-[#f5f5f5] border border-[#f5f5f5] h-[500px] w-full rounded-3xl py-10 pl-10 flex mt-20'>

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
                                    <div className="stack flex flex-wrap gap-3">
                                        {item.stack.map((item2) =>
                                            <div key={item2} className='bg-[#e5dbff] text-[#9571ff] px-4 py-1 rounded-[20px] font-semibold text-center text-xl'>
                                                {item2}
                                            </div>
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
                                                scale: 1.2,
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
                                                    scale: 1.2,
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
                                    className='rounded-xl w-[1500px] left-[40%] top-[10%] absolute cursor-pointer'
                                    alt=""
                                    whileHover={{
                                        rotateZ: -5,
                                        transition: {
                                            duration: 0.35,
                                            ease: "easeOut"
                                        }
                                    }}
                                />
                            </div>

                        </div>
                    )}

                </div>

            </div>

        </>
    )
}

export default Projects
