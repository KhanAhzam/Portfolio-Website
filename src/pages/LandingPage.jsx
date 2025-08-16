import React, { useRef } from 'react'

import { motion } from "framer-motion"

import { MapPin, MoveDown, Download, Bold } from 'lucide-react';


import Cloud1 from "../assets/Clouds/1.jpg";
import Cloud2 from "../assets/Clouds/2.jpg";
import Cloud3 from "../assets/Clouds/3.jpg";
import Cloud4 from "../assets/Clouds/4.jpg";
import Cloud5 from "../assets/Clouds/5.jpg";
import Cloud6 from "../assets/Clouds/6.jpg";
import Cloud7 from "../assets/Clouds/7.jpg";

import ProfileImage from '../components/ProfileImage'
import Navbar from '../components/Navbar'
import Links from '../components/Links'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer';
import Clouds from '../components/Clouds';

const LandingPage = () => {

  const AboutRef = useRef();
  const SkillsRef = useRef();
  const ExperienceRef = useRef();
  const ProjectsRef = useRef();
  const ContactRef = useRef();

  const ScrollToAbout = () => {
    AboutRef.current?.scrollIntoView({ behavior: 'smooth' }); //auto
  };
  const ScrollToSkills = () => {
    SkillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const ScrollToExperience = () => {
    ExperienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const ScrollToProjects = () => {
    ProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const ScrollToContact = () => {
    ContactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <>
      <div className='overflow-x-hidden'>

        {/* Background-Clouds */}
        {/* <Clouds /> */}

        {/* Hero */}
        <div className='min-h-screen flex flex-col justify-between mb-5'>

          {/* Navbar */}
          <div className="navbar mb-5">
            <Navbar
              onScrollToAbout={ScrollToAbout}
              onScrollToSkills={ScrollToSkills}
              onScrollToExperience={ScrollToExperience}
              onScrollToProjects={ScrollToProjects}
              onScrollToContact={ScrollToContact}
            />
          </div>









          {/* Home-Content */}
          {/* This requires adjustments */}
          <div className="relative home container max-w-[1400px] my-5 mx-auto h-fit px-10 py-16 flex justify-between ">

            {/* Text */}
            <div className="text flex flex-col w-[800px] justify-center">

              <span className='font-bold text-xl pl-5'>Hello, I am</span>
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

              {/* Cloud 1 */}
              <div className="pointer-events-none absolute inset-0 -z-20"
                style={{ background: "transparent" }}
              >
                <motion.div
                  className='absolute -top-[10%] -left-[15%]'
                  initial={{ x: 0, y: 0, scale: 1 }}
                  animate={{
                    x: [0, 50, 0, -50, 0],
                    y: [0, -10, 0, 10, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    x: {
                      duration: 60,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    y: {
                      duration: 15,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <img src={Cloud1} className='w-[550px]' alt="" />
                </motion.div>

              </div>

              {/* Cloud 6 */}
              <div className="pointer-events-none absolute inset-0 -z-20"
                style={{ background: "transparent" }}
              >
                <motion.div
                  className='absolute bottom-0 right-[14%]'
                  initial={{ x: 0, y: 0, scale: 1, rotate: 3 }}
                  animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    x: {
                      duration: 60,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    y: {
                      duration: 15,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <img src={Cloud6} className='w-[550px]' alt="" />
                </motion.div>
              </div>

              {/* Cloud 4 */}
              <div className="pointer-events-none absolute inset-0 -z-20"
                style={{ background: "transparent" }}
              >
                <motion.div
                  className='absolute -top-[5%] -right-[15%]'
                  initial={{ x: 0, y: 0, scale: 1, rotate: 5 }}
                  animate={{
                    x: [0, 5, 0, -5, 0],
                    y: [0, -10, 0, 10, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    x: {
                      duration: 60,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    y: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <img src={Cloud4} className='w-[500px]' alt="" />
                </motion.div>
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
        <Contact ContactRef_Passed={ContactRef} />

        {/* Footer */}
        <Footer />


      </div>
    </>
  )
}

export default LandingPage
