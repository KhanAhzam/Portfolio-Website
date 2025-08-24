import React, { useState } from 'react'

import { easeIn, easeOut, motion } from "framer-motion"

import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from "react-icons/fa";

const iconData = [
    {
        id: 'linkedin',
        name: "Linkedin",
        icon1: <FaLinkedin color="white" size={28} />,
        icon2: <FaLinkedin color="white" size={24} />,
        link: 'https://www.linkedin.com/in/ahzam-khan-011107262',
        width: "160px"
    },
    {
        id: 'email',
        name: "Email",
        icon1: <FaEnvelope color="white" size={26} />,
        icon2: <FaEnvelope color="white" size={22} />,
        link: 'mailto:ahzam003@gmail.com',
        width: "130px"
    },
    {
        id: 'resume',
        name: "Resume",
        icon1: <FaFile color="white" size={26} />,
        icon2: <FaFile color="white" size={22} />,
        link: 'https://drive.google.com/file/d/12HaeqDbWni7-ciHmfH1V478CYjw1JtpR/view?usp=drive_link',
        width: "150px"
    },
    {
        id: 'github',
        name: "Github",
        icon1: <FaGithub color="white" size={28} />,
        icon2: <FaGithub color="white" size={24} />,
        link: 'https://github.com/KhanAhzam',
        width: "140px"
    }
];

const Links = () => {
    const [isHoverIndex, setisHoverIndex] = useState(null)

    return (
        <>
            <ul className="hidden lg:flex flex-col items-start gap-2 z-50">
                {iconData.map((item, index) => (
                    <li key={index} className=''>

                        <motion.a
                            href={item.link}
                            className=" bg-black rounded-full py-3 px-4 cursor-pointer h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] flex items-center justify-center xl:justify-start gap-5 "
                            whileHover={{
                                width: item.width,
                                transition: {
                                    duration: 0.4,
                                    ease: "easeOut"
                                }
                            }}
                            onHoverStart={() => setisHoverIndex(index)}
                            onHoverEnd={() => setisHoverIndex(null)}
                            whileTap={{ scale: 0.8, transition: { duration: 0.15 } }}
                            {...(!item.link.startsWith('mailto:')
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                        >

                            {/* Icon */}
                            <span className={`${index === 2 ? "pl-[2px]" : ""} ${index === 1 ? "pl-[1px]" : ""}`}>
                                <span className="xl:hidden">{item.icon2}</span>
                                <span className="hidden xl:block">{item.icon1}</span>
                            </span>

                            {/* hide text below xl, only show on hover from xl up */}
                            <motion.span
                                className="font-semibold text-white text-xl hidden xl:inline"
                                initial={{ opacity: 0, scale: 0, x: 50, width: 0 }}
                                animate={
                                    isHoverIndex === index
                                        ? { opacity: 1, scale: 1, x: 0, width: "100%" }
                                        : { opacity: 0, scale: 0, x: 50, width: 0 }
                                }
                                transition={{ duration: 0.5 }}
                            >
                                {item.name}
                            </motion.span>

                        </motion.a>

                    </li>
                ))}

            </ul>
        </>
    )
}

export default Links
