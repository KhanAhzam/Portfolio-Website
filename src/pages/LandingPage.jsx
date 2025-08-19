import React, { useRef } from 'react'

import { motion } from "framer-motion"

import { MapPin, MoveDown, Download, Bold } from 'lucide-react';

import Cloud1 from "../assets/Clouds/1.jpg";
import Cloud2 from "../assets/Clouds/2.jpg";
import Cloud3 from "../assets/Clouds/3.jpg";

import ProfileImage from '../components/Minor Sections/ProfileImage'
import Navbar from '../components/Minor Sections/Navbar'
import Links from '../components/Minor Sections/Links'

import HeroSection from "../components/Main Sections/HeroSection";
import About from '../components/Main Sections/About'
import Skills from '../components/Main Sections/Skills'
import Experience from '../components/Main Sections/Experience'
import Projects from '../components/Main Sections/Projects'
import Contact from '../components/Main Sections/Contact'
import Footer from '../components/Minor Sections/Footer';

const LandingPage = () => {

  const HeroSectionRef = useRef();                                                                //Work Here
  const AboutRef = useRef();
  const SkillsRef = useRef();
  const ExperienceRef = useRef();
  const ProjectsRef = useRef();
  const ContactRef = useRef();

  const ScrollToHeroSection = () => {
    HeroSectionRef.current?.scrollIntoView({ behavior: 'smooth' });                                //Work Here
  };
  const ScrollToAbout = () => {
    AboutRef.current?.scrollIntoView({ behavior: 'smooth' });
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

        {/* Hero */}
        <HeroSection
          HeroSectionRef_Passed={HeroSectionRef}
          onScrollToAbout={ScrollToAbout}
          onScrollToSkills={ScrollToSkills}
          onScrollToExperience={ScrollToExperience}
          onScrollToProjects={ScrollToProjects}
          onScrollToContact={ScrollToContact}
        />

        {/* About */}
        <About AboutRef_Passed={AboutRef} />

        {/* Skills */}
        <Skills SkillsRef_Passed={SkillsRef} />

        {/* Experience */}
        <Experience
          ExperienceRef_Passed={ExperienceRef}
          onScrollToExperience={ScrollToExperience}
        />

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
