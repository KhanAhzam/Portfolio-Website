import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { IoIosArrowRoundUp } from "react-icons/io";
import { BsArrowUp } from "react-icons/bs";

const GoToTopBtn = ({ onScrollToHeroSection }) => {
    return (
        <>
            <motion.div
                className="bg-black fixed bottom-14 right-4 p-2 lg:p-3 cursor-pointer text-white rounded-full flex items-center justify-center z-50"
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
                    scale: 0.6,
                    transition: {
                        duration: 0.15,
                        ease: "easeOut"
                    }
                }}
            >
                {/* Arrow responsive spans */}
                <span className="block lg:hidden">
                    <BsArrowUp fontSize={35} />
                </span>
                <span className="hidden lg:block xl:hidden">
                    <BsArrowUp fontSize={45} />
                </span>
                <span className="hidden xl:block">
                    <BsArrowUp fontSize={60} />
                </span>
            </motion.div>
        </>
    )
}

export default GoToTopBtn
