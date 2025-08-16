import React from 'react'

import { motion } from "framer-motion"

import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from "react-icons/fa";

const iconData = [
    {
        id: 'linkedin',
        icon: <FaLinkedin color="white" size={28} />,
        link: 'https://www.linkedin.com/in/ahzam-khan-011107262'
    },
    {
        id: 'email',
        icon: <FaEnvelope color="white" size={26} />,
        link: 'mailto:ahzam003@gmail.com'
    },
    {
        id: 'resume',
        icon: <FaFile color="white" size={26} />,
        link: 'https://drive.google.com/file/d/1aY2xjhcI6xxNbtIFR6Iu2J-iWL3LBzXV/view?usp=sharing'
    },
    {
        id: 'github',
        icon: <FaGithub color="white" size={28} />,
        link: 'https://github.com/KhanAhzam'
    }
];


const Links = () => {
    return (
        <>
            <div className="links fixed bottom-14 left-4">
                <ul className="flex flex-col items-center gap-1">
                    
                    {iconData.map(({ id, icon, link }) => (
                        <li key={id} className='h-fit w-fit'>
                            <motion.a
                                href={link}
                                className="bg-black rounded-full p-4 inline-block cursor-pointer"
                                whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
                                whileTap={{ scale: 0.8, transition: { duration: 0.15 } }}
                                {...(!link.startsWith('mailto:')    
                                    ? { target: '_blank', rel: 'noopener noreferrer' }                  //If the link does not start with mailto:, then spread the props target="_blank" and rel="noopener noreferrer" onto the element. Otherwise, don’t spread anything.
                                    : {})}
                            >
                                {icon}
                            </motion.a>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}

export default Links
