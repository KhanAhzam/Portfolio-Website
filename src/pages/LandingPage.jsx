import React, { useRef } from 'react'

import { motion } from "framer-motion"

import { MapPin, MoveDown, Download, Bold } from 'lucide-react';

import ProfileImage from '../components/ProfileImage'
import Navbar from '../components/Navbar'
import Links from '../components/Links'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const LandingPage = () => {

  const AboutRef = useRef();
  const SkillsRef = useRef();
  const ExperienceRef = useRef();
  const ProjectsRef = useRef();
  const ContactRef = useRef();

  const ScrollToAbout = () => {
    AboutRef.current?.scrollIntoView({ behavior: 'smooth' }); //auto
  };

  return (
    <>
      <div>

        {/* Hero */}
        <div className='bg-white min-h-screen flex flex-col justify-between mb-5'>

          {/* Navbar */}
          <div className="navbar mb-5">
            <Navbar />
          </div>

          {/* Home-Content */}
          {/* This requires adjustments */}
          <div className="home container max-w-[1400px] my-5 mx-auto h-fit px-10 py-16 flex justify-between ">

            {/* Text */}
            <div className="text flex flex-col w-[800px] justify-center">

              <span className='font-medium text-xl pl-5'>Hello, I am</span>
              <span className='font-bold text-9xl'>Ahzam Khan</span>

              <div className='pt-4 pl-8'>
                <span className='font-bold text-5xl'>Full Stack Dev</span>
                <span className='font-semibold text-4xl italic text-gray-800'> & </span>
                <span className='font-bold text-5xl'>DSA Learner</span>
              </div>

              <span className='font-medium text-[22px] pt-14 text-gray-800 pl-4'>Full Stack Developer creating standout web apps with clean code, sleek design, and smooth functionality.</span>

              <div className='flex items-center pt-8 gap-2'>
                <MapPin size={35} />
                <span className=' font-bold text-2xl'>New Delhi, India</span>
              </div>

            </div>

            {/* Image */}
            <ProfileImage />

          </div>

          {/* Home-Arrow */}
          <div className="arrow my-5 flex items-center justify-center">
            <motion.span
              onClick={ScrollToAbout}
              className='cursor-pointer'
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.3
                }
              }}
              whileTap={{
                scale: 0.8,
                transition: {
                  duration: 0.1
                }
              }}
            >
              <MoveDown size={30} />
            </motion.span>
          </div>

          <Links />

        </div>

        {/* About */}
        <About AboutRef_Passed={AboutRef} />

        {/* Skills */}
        <Skills SkillsRef_Passed={SkillsRef} />

        {/* Experience */}
        <Experience ExperienceRef_Passed={ExperienceRef} />

        {/* Projects */}
        <Projects ProjectsRef_Passed={ProjectsRef} />

        {/* Contact */}
        {/* <Contact ContactRef_Passed={ContactRef} /> */}




      </div>
    </>
  )
}

export default LandingPage
