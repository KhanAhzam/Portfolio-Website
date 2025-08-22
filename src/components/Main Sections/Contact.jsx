import React from 'react'

import { motion } from "framer-motion"

import { FaLinkedin, FaFile, FaGithub } from "react-icons/fa"

const Contact = ({ ContactRef_Passed }) => {

    const socialLinks = [
        {
            id: "linkedin",
            name: "LinkedIn",
            icon: <FaLinkedin size={30} />,
            link: "https://www.linkedin.com/in/ahzam-khan-011107262"
        },
        {
            id: "resume",
            name: "Resume",
            icon: <FaFile size={28} />,
            link: "https://drive.google.com/file/d/1aY2xjhcI6xxNbtIFR6Iu2J-iWL3LBzXV/view?usp=sharing"
        },
        {
            id: "github",
            name: "GitHub",
            icon: <FaGithub size={30} />,
            link: "https://github.com/KhanAhzam"
        }
    ]

    return (
        <>

            <div
                className='container mx-auto min-h-fit max-w-[1400px] p-10'
                ref={ContactRef_Passed}
            >

                {/* Heading */}
                <motion.div
                    className="heading font-bold text-5xl mini_smaller:text-6xl"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0 }}
                >
                    Contact Me.
                </motion.div>

                {/* Content */}
                <motion.div
                    className="my-10 sm:px-16 text-center flex flex-col gap-5 sm:gap-10 items-center justify-center"
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0 }}
                >

                    {/* Title */}
                    <div className="font-bold text-3xl smaller:text-4xl sm:text-5xl">
                        Let's Get in Touch
                    </div>

                    {/* Content */}
                    <div className="content text-lg mini_smaller:text-xl xs:text-2xl sm:text-3xl font-semibold w-[80%] md:w-[60%]">
                        I'm always open to new opportunities, collaborations, or just a friendly chat.
                        Feel free to reach out and let's create something amazing together!
                    </div>

                    {/* Connect */}
                    <motion.a
                        className='font-bold text-3xl px-6 py-3 w-fit bg-blue-500 rounded-3xl text-white'
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{
                            scale: 1.15,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut"
                            }
                        }}
                        whileTap={{
                            scale: 0.9,
                            transition: {
                                duration: 0.1,
                                ease: "easeIn"
                            }
                        }}
                        href={'mailto:ahzam003@gmail.com'}
                    >
                        <span>Get in Touch</span>
                    </motion.a>

                    {/* Social Links */}
                    <div className="flex lg:hidden justify-evenly items-center w-full mt-5 text-white">
                        {socialLinks.map((item) => (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center bg-black p-4 rounded-3xl"
                                initial={{ y: 70, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 0.5 
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{
                                    scale: 1.25,
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }
                                }}
                                whileTap={{
                                    scale: 0.6,
                                    transition: {
                                        duration: 0.15,
                                        ease: "easeOut"
                                    }
                                }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>

                </motion.div>

            </div>

        </>
    )
}

export default Contact
