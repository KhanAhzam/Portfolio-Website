import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { IoIosArrowRoundUp } from "react-icons/io";
import { BsArrowUp } from "react-icons/bs";

const GoToTopBtn = ({ onScrollToHeroSection }) => {
    return (
        <>
            <motion.div
                className="bg-black fixed bottom-14 right-4 p-3 cursor-pointer text-white rounded-full flex items-center justify-center"
                onClick={onScrollToHeroSection}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                whileHover={{
                    scale: 1.25,
                    transition: {
                        duration: 0.4,
                        ease: "easeOut"
                    }
                }}
                whileTap={{
                    scale: 0.7,
                    transition: {
                        duration: 0.15,
                        ease: "easeOut"
                    }
                }}
            >
                {/* <IoIosArrowRoundUp fontSize={90}/> */}
                <BsArrowUp fontSize={60} />
            </motion.div>
        </>
    )
}

export default GoToTopBtn
