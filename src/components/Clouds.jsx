import React from 'react'

import { motion } from "framer-motion"

import Cloud1 from "../assets/Clouds/1.jpg";
import Cloud2 from "../assets/Clouds/2.jpg";
import Cloud3 from "../assets/Clouds/3.jpg";
import Cloud4 from "../assets/Clouds/4.jpg";
import Cloud5 from "../assets/Clouds/5.jpg";
import Cloud6 from "../assets/Clouds/6.jpg";
import Cloud7 from "../assets/Clouds/7.jpg";

const Clouds_arr = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6, Cloud7]

const Clouds = () => {
    return (
        <>
            <div
                className="pointer-events-none fixed inset-0 -z-20 overflow-x-hidden"
                style={{ background: "transparent" }} // no bg color to block content
            >

                <div className="absolute pt-40 flex flex-col gap-10 justify-evenly">

                    {/* Cloud1 */}
                    <motion.div
                        initial={{ x: "10vw" }} // Start at left
                        animate={{
                            x: "calc(60vw - 450px)", // Move to right edge (screen width - cloud width)
                            scale: [1, 1.15, 1]
                        }}
                        transition={{
                            x: {
                                duration: 60,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            },
                            scale: {
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    >
                        <img src={Cloud1} className='w-[450px]' alt="" />
                    </motion.div>

                    {/* Cloud2 */}
                    <motion.div
                        initial={{ x: "40vw" }}
                        animate={{ 
                            x: 0 ,
                            scale: [1, 1.15, 1]
                                }}
                        transition={{
                            x: {
                                duration: 60,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            },
                            scale: {
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    >
                        <img src={Cloud2} className='w-[550px]' alt="" />
                    </motion.div>

                    {/* Cloud3 */}
                    <motion.div
                        initial={{ x: 0, scale: 1.15 }}
                        animate={{
                            x: "calc(80vw - 450px)",
                            scale: [1.15, 1, 1.15]
                        }}
                        transition={{
                            x: {
                                duration: 60,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            },
                            scale: {
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    >
                        <img src={Cloud3} className='w-[450px]' alt="" />
                    </motion.div>

                </div>

            </div>
        </>
    )
}

export default Clouds
