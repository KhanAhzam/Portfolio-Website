import React from 'react'

import { motion } from "framer-motion"

const Contact = ({ ContactRef_Passed }) => {
    return (
        <>

            <div
                className='container mx-auto min-h-fit w-[1400px] p-10'
                ref={ContactRef_Passed}
            >

                {/* Heading */}
                <motion.div
                    className="heading font-bold text-6xl"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Contact Me.
                </motion.div>

                {/* Content */}
                <motion.div
                    className="my-10 px-16 text-center flex flex-col gap-10 items-center justify-center"
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >

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

                </motion.div>

            </div>

        </>
    )
}

export default Contact
