import React from "react";
import { motion } from "framer-motion";

const Splashscreen = () => {
    return (
        <>
            <motion.div
                className="flex items-center justify-center min-h-screen overflow-hidden bg-white"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    scale: { duration: 1.5, ease: "easeOut" },                          // scale slower
                    opacity: { duration: 2, ease: "easeInOut" },                        // opacity longer
                }}
            >
                <motion.span
                    className="text-black font-bold text-9xl pb-20"
                    
                >
                    Ahzam Khan
                </motion.span>
            </motion.div>
        </>
    );
};

export default Splashscreen;
