import React from 'react'

const Contact = ({ ContactRef_Passed }) => {
    return (
        <>

            <div
                className=' container mx-auto min-h-screen w-[1400px] p-10'
                ref={ ContactRef_Passed }
            >

                {/* Heading */}
                <div className="heading font-bold text-6xl">
                    Contact Me.
                </div>

                {/* Content */}
                <div className="my-10 px-16 text-center">
                    <div className="">
                        HELLO
                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact
