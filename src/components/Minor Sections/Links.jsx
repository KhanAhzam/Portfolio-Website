import React, { useState } from 'react'

import { easeIn, easeOut, motion } from "framer-motion"

import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from "react-icons/fa";

const iconData = [
    {
        id: 'linkedin',
        name: "Linkedin",
        icon: <FaLinkedin color="white" size={28} />,
        link: 'https://www.linkedin.com/in/ahzam-khan-011107262',
        width: "160px"
    },
    {
        id: 'email',
        name: "Email",
        icon: <FaEnvelope color="white" size={26} />,
        link: 'mailto:ahzam003@gmail.com',
        width: "130px"
    },
    {
        id: 'resume',
        name: "Resume",
        icon: <FaFile color="white" size={26} />,
        link: 'https://drive.google.com/file/d/1aY2xjhcI6xxNbtIFR6Iu2J-iWL3LBzXV/view?usp=sharing',
        width: "150px"
    },
    {
        id: 'github',
        name: "Github",
        icon: <FaGithub color="white" size={28} />,
        link: 'https://github.com/KhanAhzam',
        width: "140px"
    }
];

const Links = () => {
    const [isHoverIndex, setisHoverIndex] = useState(null)

    return (
        <>
                <ul className="flex flex-col items-start gap-2">
                    {iconData.map((item, index) => (
                        <li key={index} className=''>

                            <motion.a
                                href={item.link}
                                className="bg-black rounded-full py-3 px-4 cursor-pointer h-[60px] w-[60px] flex items-center justify-start gap-5"
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
                                    ? { target: '_blank', rel: 'noopener noreferrer' }      //If the link does not start with mailto:, then spread the props target="_blank" and rel="noopener noreferrer" onto the element. Otherwise, don’t spread anything.
                                    : {})}

                            >
                                <span className={`${ index===2 ? "pl-[2px]" : "" } ${ index===1 ? "pl-[1px]" : "" }`}>
                                    {item.icon}
                                </span>

                                <motion.span
                                    className='font-semibold text-white text-xl'
                                    initial={{ opacity: 0, scale: 0, x: 50, width: 0 }}
                                    animate={isHoverIndex === index
                                        ? { opacity: 1, scale: 1, x: 0, width: "100%" }     // when hovered
                                        : { opacity: 0, scale: 0, x: 50, width: 0 }         // when not hovered
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
