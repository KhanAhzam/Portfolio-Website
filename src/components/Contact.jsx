import React from 'react'

import { motion } from "framer-motion"

import Cloud1 from "../assets/Clouds/1.jpg";
import Cloud2 from "../assets/Clouds/2.jpg";
import Cloud3 from "../assets/Clouds/3.jpg";
import Cloud4 from "../assets/Clouds/4.jpg";
import Cloud5 from "../assets/Clouds/5.jpg";
import Cloud6 from "../assets/Clouds/6.jpg";
import Cloud7 from "../assets/Clouds/7.jpg";
import Cloud8 from "../assets/Clouds/Potential1.png";
import Cloud9 from "../assets/Clouds/Potential2.png";
import Cloud10 from "../assets/Clouds/Potential3.png";
import Cloud11 from "../assets/Clouds/Potential4.png";
import Cloud12 from "../assets/Clouds/Potential5.png";
import Cloud13 from "../assets/Clouds/Potential6.png";
import Cloud14 from "../assets/Clouds/dark1.png";
import Cloud15 from "../assets/Clouds/dark2.png";
import Cloud16 from "../assets/Clouds/dark3.png";
import Cloud17 from "../assets/Clouds/dark4.png";

const Contact = ({ ContactRef_Passed }) => {
    return (
        <>

            <div
                className='container mx-auto min-h-fit w-[1400px] p-10'
                ref={ContactRef_Passed}
            >

                {/* Heading */}
                <div className="heading font-bold text-6xl">
                    Contact Me.
                </div>

                {/* Content */}
                <div className="my-10 px-16 text-center flex flex-col gap-10 items-center justify-center">

                    {/* Title */}
                    <div className="font-bold text-5xl">
                        Let's Get in Touch
                    </div>

                    {/* Content */}
                    <div className="content text-3xl font-semibold w-[60%]">
                        I'm always open to new opportunities, collaborations, or just a friendly chat.
                        Feel free to reach out and let's create something amazing together!
                    </div>

                    {/* Connect */}
                    <motion.a
                        className='font-bold text-3xl px-6 py-3 w-fit bg-blue-500 rounded-3xl text-white'
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

                </div>

            </div>

        </>
    )
}

export default Contact
