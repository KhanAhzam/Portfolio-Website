import React from 'react'

const Projects = ({ ProjectsRef_Passed }) => {
    return (
        <>

            <div
                className=' container mx-auto min-h-screen w-[1400px] p-10'
                ref={ ProjectsRef_Passed }
            >

                {/* Heading */}
                <div className="heading font-bold text-6xl">
                    Projects.
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

export default Projects
