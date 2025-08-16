import React from 'react'

import { motion } from "framer-motion"

const Contact = ({ ContactRef_Passed }) => {
    return (
        <>

            <div
                className=' container mx-auto min-h-fit w-[1400px] p-10'
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
                    <button className='font-bold text-3xl px-6 py-3 w-fit bg-blue-500 rounded-3xl text-white'>
                        <span>Get in Touch</span>
                    </button>

                </div>

            </div>

        </>
    )
}

export default Contact
