import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import work from '../src/assets/Your Tok HUB.png';
import education from '../src/assets/education background.png'
import python from '../src/assets/python.jpeg';
import java from '../src/assets/Java.jpeg';
import javascript from '../src/assets/JavaScript.png'
import c from '../src/assets/c++.jpeg';
import HTML from '../src/assets/HTML.png';
import css from '../src/assets/css.webp';
import framew from '../src/assets/frame.png';
import sql from '../src/assets/mysql.png';
import mongo from '../src/assets/mongo.png';
import oracle from '../src/assets/Oracle.jpeg';
import contact from '../src/assets/contact.gif';
import experience from '../src/assets/experience .gif';
import project from '../src/assets/project.gif';
import logo from '../src/assets/Davids logo2.png';
import aws from '../src/assets/aws.jpeg';
import azure from '../src/assets/azure.webp';
import cisco from '../src/assets/cisco.jpeg';
import git from '../src/assets/git.png';
import github from '../src/assets/github.webp';
import jira from '../src/assets/jira.png';
import visual from '../src/assets/visual.jpeg';
import lucid from '../src/assets/lucid.jpeg';
import figma from '../src/assets/figma.jpeg';
import luke from '../src/assets/luke.png';
import chioma from '../src/assets/Chioma.png';
import jet from '../src/assets/JetSetJoy.png';
import translate from '../src/assets/Translatepic.png';
import plant from '../src/assets/PlantApp.png';
import lash from '../src/assets/lash.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ReactTyped } from "react-typed";
import {  useInView, useAnimation } from "framer-motion";


import { frame } from "motion";




export const Bento = () => {
  const [expandedBlock, setExpandedBlock] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isToolsModalOpen, setIsToolsModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);


  const toggleExpand = (blockId) => {
    if (expandedBlock === blockId) {
      setExpandedBlock(null);
      if (blockId === 'education') {
        setIsEducationModalOpen(false); // Close modal when Education block is collapsed
      }
      if (blockId === 'projects') {
        setIsProjectsModalOpen(false); // Close modal when Projects block is collapsed
      }
      if (blockId === 'about') {
        setIsAboutModalOpen(false);
      }
      if (blockId === 'experience') {
        setIsExperienceModalOpen(false);
      }
      if (blockId === 'tools') {
        setIsToolsModalOpen(false);
      }
      if (blockId === 'contact') {
        setIsContactModalOpen(false);
      }
      if (blockId === 'profile') {
        setIsProfileModalOpen(false); // Close modal when Profile block is collapsed
      }
      
    } else {
      setExpandedBlock(blockId);
      if (blockId === 'education') {
        setIsEducationModalOpen(true); // Open modal when Education block is clicked
      }
      if (blockId === 'projects') {
        setIsProjectsModalOpen(true); // Open modal when Projects block is clicked
      }
      if (blockId === 'about') {
        setIsAboutModalOpen(true); // Open modal when Profile block is clicked
      }
      if (blockId === 'experience') {
        setIsExperienceModalOpen(true); // Open modal when Profile block is clicked
      }
      if (blockId === 'tools') {
        setIsToolsModalOpen(true); // Open modal when Profile block is clicked
      }
      if (blockId === 'contact') {
        setIsContactModalOpen(true); // Open modal when Profile block is clicked
      }
      if (blockId === 'profile') {
        setIsProfileModalOpen(true); // Open modal when Profile block is clicked
      }
     
    }
  };

  
  

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update the body class to reflect the current theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-gradient-to-r", "from-[#2d2d2d]", "to-[#1c1c1c]", "text-gray-50");
      document.body.classList.remove("bg-white", "text-zinc-900");
    } else {
      document.body.classList.add("bg-white", "text-zinc-900");
      document.body.classList.remove("bg-gradient-to-r", "from-[#2d2d2d]", "to-[#1c1c1c]", "text-gray-50");
    }
  }, [isDarkMode]);

  // Close modal function
  const closeModal = () => {
    setIsEducationModalOpen(false);
    setIsProjectsModalOpen(false);
    setIsAboutModalOpen(false);
    setIsExperienceModalOpen(false);
    setIsToolsModalOpen(false);
    setIsContactModalOpen(false);
    setIsProfileModalOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-r from-[#2d2d2d] to-[#1c1c1c] text-gray-50' : 'bg-white text-zinc-900'}`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#2d2d2d] to-[#1c1c1c] border-b border-zinc-700">
  <div className="container mx-auto flex justify-between items-center px-6 py-4">
    {/* Logo Section */}
    <a href="#" className="flex items-center">
      <img
        src={logo} // Replace this with the actual path to your logo image
        alt="Logo"
        className="h-14" // Adjust the size of the logo as needed
      />
    </a>

    <ul className="hidden md:flex space-x-6 text-gray-50">
      <li>
        <a href="#contact" className="hover:text-blue-300 transition-colors">
          My Cv
        </a>
      </li>
    </ul>

    <button
      className="md:hidden text-gray-50 hover:text-blue-300 focus:outline-none"
      onClick={() => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu?.classList.toggle("hidden");
      }}
    >
      ☰
    </button>
  </div>

  <div id="mobile-menu" className="hidden md:hidden bg-zinc-800 border-t border-zinc-700">
    <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-50">
      <li>
        <a href="#contact" className="hover:text-blue-300 transition-colors">
          My Cv
        </a>
      </li>
    </ul>
  </div>
</nav>


      {/* Light/Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 bg-slate-600 text-white p-3 rounded-full shadow-lg"
      >
        {isDarkMode ? "🌞" : "🌙"}
      </button>

      {/* Content Grid */}
      <div className="grid grid-cols-12 grid-rows-11 h-screen gap-4 pt-24 px-4">
        {/* Blocks */}
       

     {/* Tools */}
    <div className="bg-gradient-to-r from-[#5a5a5a] to-[#434343] p-6 col-span-4 rounded-xl row-span-7 hover:shadow-lg hover:scale-105 flex flex-col items-start gap-6 transition-all duration-300 ease-in-out animated-bg max-h-[80vh] "
    onClick={() => toggleExpand("tools")}>
  
    <h1 className="text-3xl font-semibold text-center text-white heading">Tools</h1>

    {/* Programming Languages */}
    <div className="w-full">
     <h3 className="text-xl font-semibold text-white mb-2 heading">Programming Languages</h3>
        <div className="flex flex-wrap gap-4 text-white text-sm">
             <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
             <img src={python} alt="Python Logo" className="w-5 h-5 icon" />
                Python
            </p>
            <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
                <img src={java} alt="Java Logo" className="w-5 h-5 icon" />
                 Java
            </p>
            <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={javascript} alt="JavaScript Logo" className="w-5 h-5 icon" />
            JavaScript
            </p>
            <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={c} alt="C++ Logo" className="w-5 h-5 icon" />
            C++
            </p>
        </div>
    </div>

  {/* Web Development */}
  <div className="w-full">
    <h3 className="text-xl font-semibold text-white mb-2 heading">Web Development</h3>
    <div className="flex flex-wrap gap-4 text-white text-sm">
      <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
        <img src={HTML} alt="HTML Logo" className="w-5 h-5 icon" />
        HTML (HTML5)
      </p>
      <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
        <img src={css} alt="CSS Logo" className="w-5 h-5 icon" />
        CSS (TailwindCSS, SCSS)
      </p>
      <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
        <img src={framew} alt="JavaScript Logo" className="w-5 h-5 icon" />
        JavaScript (React.js, Node.js, Next.js)
      </p>
    </div>
  </div>

  {/* Database Systems */}
    <div className="w-full">
        <h3 className="text-xl font-semibold text-white mb-2 heading">Database Systems</h3>
        <div className="flex flex-wrap gap-4 text-white text-sm">
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={sql} alt="MySQL Logo" className="w-5 h-5 icon" />
            MySQL
        </p>
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={mongo} alt="MongoDB Logo" className="w-5 h-5 icon" />
            MongoDB
        </p>
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={oracle} alt="Oracle Logo" className="w-5 h-5 icon" />
            Oracle
        </p>
        </div>
    </div>
</div>



        

        {/*Education*/}
        <div className="bg-gradient-to-r from-[#5a5a5a] to-[#434343] p-4 col-span-3 rounded-xl row-span-3 hover:shadow-lg hover:scale-105 flex flex-col items-center transition-all duration-300 ease-in-out"
                 onClick={() => toggleExpand("education")}
                 style={{
                    backgroundImage: `url('${education}')`, // Make sure the `education` variable contains the image path
                    backgroundSize: 'cover',          // Ensure the image covers the entire div
                    backgroundPosition: 'center'      // Center the image
                        }}>
                        <h3 className="text-2xl font-semibold text-center">Education</h3>
        </div>



         {/* Projects block */}
         <div className="bg-gradient-to-r from-[#5a5a5a] to-[#434343] p-4 col-span-5 rounded-xl row-span-6 hover:shadow-lg hover:scale-105 flex flex-col items-center transition-all duration-300 ease-in-out"
              onClick={() => toggleExpand("projects")}
              style={{
                backgroundImage: `url('${project}')`, // Make sure the `project` variable contains the image path
                backgroundSize: 'cover',          // Ensure the image covers the entire div
                backgroundPosition: 'center'      // Center the image
                    }}>
                    <h3 className="text-2xl font-semibold text-center">Projects</h3>
         </div>

        

         

        {/* Profile block */}
        <div className="bg-gradient-to-r from-[#5a5a5a] to-[#434343] p-4 col-span-3 rounded-xl row-span-4 hover:shadow-lg hover:scale-105 flex flex-col items-center transition-all duration-300 ease-in-out"
             onClick={() => toggleExpand("profile")}
             style={{
               // backgroundImage: `url('${}')`, // Make sure the `work` variable contains the image path
                backgroundSize: 'cover',          // Ensure the image covers the entire div
                backgroundPosition: 'center'      // Center the image
                   }} >
                    <h3 className="text-2xl font-semibold text-center">Profile</h3>
        </div>

        
        {/*Experience block*/}
        <div className="bg-gradient-to-r from-[#5a5a5a] to-[#434343] p-4 col-span-5 rounded-xl row-span-5 hover:shadow-lg hover:scale-105 flex flex-col items-center transition-all duration-300 ease-in-out"
             onClick={() => toggleExpand("experience")}
             style={{
                backgroundImage: `url('${experience}')`, // Make sure the `experience` variable contains the image path
                backgroundSize: 'cover',          // Ensure the image covers the entire div
                backgroundPosition: 'center'      // Center the image
                    }}>
                    <h3 className="text-3xl text-black font-semibold text-center">Experience</h3>
        </div>
        

        {/*Contact block*/}
        <div
            className="bg-gradient-to-r from-[#5a5a5a] to-[#434343] p-4 col-span-3 rounded-xl row-span-4 hover:shadow-lg hover:scale-105 flex flex-col items-center transition-all duration-300 ease-in-out"
            onClick={() => toggleExpand("contact")}
            style={{
                backgroundImage: `url('${contact}')`, // Make sure the `contact` variable contains the image path
                backgroundSize: 'cover',          // Ensure the image covers the entire div
                backgroundPosition: 'center'      // Center the image
            }}
            >
            <h3 className="text-3xl text-black font-semibold text-center">Contact Me</h3>
            
            </div>


        
        {/*About block*/}
        
        <div
            className="bg-gradient-to-r from-[#5a5a5a] to-[#434343] p-6 col-span-4 rounded-xl row-span-4 hover:shadow-lg hover:scale-105 flex flex-col justify-center items-center gap-2 transition-all duration-300 ease-in-out animated-bg border-4 bg-clip-border border-solid border-[#ffffff]/30 relative"
            onClick={() => toggleExpand("about")}
            >
            <div className="absolute top-0 left-0 right-0 bottom-0 border-4 my-2 mx-2 rounded-lg border-[#ffffff]/40 pointer-events-none"></div>

            {/* Glowing Title */}
            <h3 className="text-3xl text-white font-semibold text-center text-shadow-lg">
                About
            </h3>

            {/* Horizontal Divider with Gradient */}
            <hr className="border-t border-[#ffffff]/40 w-full my-2" />

            {/* Subtitle */}
            <p className="text-lg text-gray-300 text-center">
                Learn more about me
            </p>

            {/* Decorative elements - borders and shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/20 to-[#ffffff]/10 rounded-xl shadow-lg pointer-events-none"></div>
        </div>




      </div>

      {/* Education Modal */}
      {isEducationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold">Education Details</h2>
            <p className="mt-4">
              {`BSc Computer Science (Software Engineering - 2:1), University of Hertfordshire`}
            </p>
            <p className="mt-4">
              Hertfordshire International College, January 2019 – September 2019
              Achieved distinction in Mathematics, Programming, and Principles of Computing.
            </p>
            <p className="mt-4">
              Modules: Software Engineering Practices, Data Structures, Algorithms, Agile Development, Computer Systems Security
            </p>
            <p className="mt-4">
              Dissertation: Developed a Student Debt Calculation Tool focusing on backend logic, financial modeling, and data privacy.
            </p>
            <p className="mt-4">
              Leadership: Leader in a university faith society, organizing workshops and outreach events that impacted over 100 students.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold">Certifications:</h3>
              <ul className="list-disc pl-5 ">
                <li className="hover:text-blue-500 hover:scale-105">JavaScript Essential Training – LinkedIn Learning</li>
                <li className="hover:text-blue-500 hover:scale-105">React.js Essential Training – LinkedIn Learning</li>
                <li className="hover:text-blue-500 hover:scale-105">Entry to Frontend Web Development – FreeCodeCamp Academy</li>
                <li className="hover:text-blue-500 hover:scale-105">Bright Network IEUK Technology Scheme (2022, 2024)</li>
              </ul>
            </div>
            {/* Close button changed to an X */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-semibold hover:text-red-500 focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>
      )}




      {/* Projects Modal */}
{isProjectsModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-black p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
      <h2 className="text-xl font-semibold text-white">Projects Details</h2>
      <p className="mt-4 text-gray-300">
        Details about my projects and achievements.
      </p>

      {/* Project Example */}
      <div className="mt-4">
        <div
          style={{ backgroundImage: `url('${jet}')`}}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-40 bg-cover bg-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-white bg-opacity-90 rounded-md text-center">
            <span className="text-2xl font-bold text-black tracking-wider">
              Holiday Booking Site
            </span>
            <div className="pt-4">
              <a href="https://jet-set-joy-asem.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Demo
                </button>
              </a>
              <a href="https://github.com/Cu19aaa/Jet-Set-Joy" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${luke})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-40 bg-cover bg-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-white bg-opacity-90 rounded-md text-center">
            <span className="text-2xl font-bold text-black tracking-wider">
            Personal Trainer Site
            </span>
            <div className="pt-4">
              <a href="https://lukesratfordpt.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Demo
                </button>
              </a>
              <a href="https://github.com/Cu19aaa/Luke" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${chioma})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-40 bg-cover bg-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-white bg-opacity-90 rounded-md text-center">
            <span className="text-2xl font-bold text-black tracking-wider">
            UX/UI Designer Portfolio
            </span>
            <div className="pt-4">
              <a href="https://cou-designs.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Demo
                </button>
              </a>
              <a href="https://github.com/Cu19aaa/Cou-Designs" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${plant})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-40 bg-cover bg-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-white bg-opacity-90 rounded-md text-center">
            <span className="text-2xl font-bold text-black tracking-wider">
            Plant Disease Classification
            </span>
            <div className="pt-4">
              <a href="https://plantapp-4px6bmbdbq-uc.a.run.app" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Demo
                </button>
              </a>
              <a href="https://github.com/igbodani/new-plant-diseases" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${translate})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-40 bg-cover bg-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-white bg-opacity-90 rounded-md text-center">
            <span className="text-2xl font-bold text-black tracking-wider">
            English to Igbo ML Translator
            </span>
            <div className="pt-4">
              <a href="https://translatorapp-4px6bmbdbq-uw.a.run.app/" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Demo
                </button>
              </a>
              <a href="https://github.com/igbodani/En-Ig_Translator" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${lash})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-40 bg-cover bg-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="opacity-0 group-hover:opacity-100 p-4 bg-white bg-opacity-90 rounded-md text-center">
            <span className="text-2xl font-bold text-black tracking-wider">
            Lash Technician E-Commerce Site
            </span>
            <div className="pt-4">
              <a href="https://mylashnme.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Demo
                </button>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-900 text-white font-bold text-lg hover:bg-gray-700">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-white text-2xl font-semibold hover:text-red-500 focus:outline-none"
        aria-label="Close Modal"
      >
        ×
      </button>
    </div>
  </div>
)}

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
            <h1 className="text-xl font-semibold">Hey, My Name is  David</h1>
            
            {/* You can add more details about your projects here */}
            <div className='flex flex-col justify-center'>
                <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I am a </h2>
            <ReactTyped className='text-4xl sm:text-5xl font-bold text-[#8892b0]'
                strings={['Web Developer', 'Web Designer', 'Full Stack Developer']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-semibold hover:text-red-500 focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>
      )}

        {/* About Modal */}
        {isAboutModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-black p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
                    <h2 className="text-xl font-semibold">About Me</h2>
                    
                    {/* You can add more details about  here */}
                    <div className="mt-4">
                    
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a web designer developer as well as a full stack  developer focusing on making exceptional digital products for clients and employers. I am focused on building fully responsive full-stack web applications. </p>
                    <p>I am a versatile web designer and full-stack developer with a passion for crafting exceptional digital products that combine creativity, functionality, and user experience. My focus lies in designing and building fully responsive, high-performance web applications tailored to meet the unique needs of clients and employers.
                        With a BSc in Software Engineering from the University of Hertfordshire, I have a strong academic foundation, complemented by a commitment to continuous learning. As a primarily self-taught developer, I thrive on staying ahead of industry trends, mastering emerging technologies, and consistently upskilling to deliver innovative solutions.        
                        Beyond technical expertise, I bring a problem-solving mindset, collaborative spirit, and meticulous attention to detail to every project. Whether it's designing sleek interfaces, optimizing backend systems, or delivering end-to-end web solutions, I am driven to exceed expectations and create impactful results.</p>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    When I'm not coding, you'll often find me exploring new tools, contributing to open-source projects, or sharing knowledge within developer communities..
                    </p>
                    </div>
                    <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-white text-2xl font-semibold hover:text-red-500 focus:outline-none"
                    >
                    ×
                    </button>
                </div>
                </div>
            )}

            {/* Experience Modal */}
             {isExperienceModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-black p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
                    <h2 className="text-xl font-semibold">Experience Details</h2>
                    <p className="mt-4">
                    This shows a brief display of my work experience, for a more detailed look through please access my cv
                    </p>
                    {/* You can add more details about  here */}
                    <div className='flex flex-col items-center pt-14'>
                        <div className='max-w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-8 px-4'>
                            <div className='text-left text-sm font-thin'>
                                <p className='pb-6'>This is a brief mention of just some of my extensive work experience across various sectors</p>
                            </div>
                            <div className='text-left'>
                                <div className='space-y-4 border-b border-gray-400 pb-4'>
                                    <p className='font-bold text-gray'>Freelance Software Developer - Self Employed</p>
                                    <p>Jan 2023 -  DATE</p>
                                </div>
                                <div className='space-y-4 pt-4 border-b border-gray-400 pb-4'>
                                    <p className='font-bold text-gray'>Bright Network - Software Engineering Intern</p>
                                    <p>June, 2022 - July, 2022</p>
                                    <p>June, 2024 - July, 2024</p>
                                </div>
                                <div className='space-y-4 pt-4 border-b border-gray-400 pb-4'>
                                    <p className='font-bold text-gray'>Avera Clothing — Software Enginenering Intern</p>
                                    <p>January, 2023 - September, 2023</p>
                                </div>
                                <div className='space-y-4 pt-4 border-b border-gray-400 pb-4'>
                                    <p className='font-bold text-gray'>Coop Foods</p>
                                    <p>July, 2022 - October, 2024</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-white text-2xl font-semibold hover:text-red-500 focus:outline-none"
                    >
                    ×
                    </button>
                </div>
                </div>
            )}

             {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-lg max-w-lg w-full relative">
          <form method='POST' action="https://getform.io/f/7783e2dd-0cc0-4c3d-915f-a774de6ae892" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-slate-400'>Contact</p>
                <p className='text-slate-400 py-4'>Dont be shy, Get in touch!</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Message'></textarea>
            <button className='rounded-lg text-blue-200 border-2 border-blue-200 hover:bg-black hover:text-white hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate</button>
        </form>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-semibold hover:text-red-500 focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Tools Modal */}
      {isToolsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
          <div className="w-full">
     <h3 className="text-xl font-semibold text-white mb-2 heading">Programming Languages</h3>
        <div className="flex flex-wrap gap-4 text-white text-sm">
             <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
             <img src={python} alt="Python Logo" className="w-5 h-5 icon" />
                Python
            </p>
            <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
                <img src={java} alt="Java Logo" className="w-5 h-5 icon" />
                 Java
            </p>
            <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={javascript} alt="JavaScript Logo" className="w-5 h-5 icon" />
            JavaScript
            </p>
            <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={c} alt="C++ Logo" className="w-5 h-5 icon" />
            C++
            </p>
        </div>
        <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-semibold hover:text-red-500 focus:outline-none"
            >
              ×
            </button>
    </div>

  {/* Web Development */}
  <div className="w-full">
    <h3 className="text-xl font-semibold text-white mb-2 heading">Web Development</h3>
    <div className="flex flex-wrap gap-4 text-white text-sm">
      <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
        <img src={HTML} alt="HTML Logo" className="w-5 h-5 icon" />
        HTML (HTML5)
      </p>
      <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
        <img src={css} alt="CSS Logo" className="w-5 h-5 icon" />
        CSS (TailwindCSS, SCSS)
      </p>
      <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
        <img src={framew} alt="JavaScript Logo" className="w-5 h-5 icon" />
        JavaScript (React.js, Node.js, Next.js)
      </p>
    </div>
  </div>

  {/* Database Systems */}
    <div className="w-full">
        <h3 className="text-xl font-semibold text-white mb-2 heading">Database Systems</h3>
        <div className="flex flex-wrap gap-4 text-white text-sm">
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={sql} alt="MySQL Logo" className="w-5 h-5 icon" />
            MySQL
        </p>
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={mongo} alt="MongoDB Logo" className="w-5 h-5 icon" />
            MongoDB
        </p>
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={oracle} alt="Oracle Logo" className="w-5 h-5 icon" />
            Oracle
        </p>
        </div>
    </div>

    {/* Cloud Platforms */}
    <div className="w-full">
        <h3 className="text-xl font-semibold text-white mb-2 heading">Cloud Platforms</h3>
        <div className="flex flex-wrap gap-4 text-white text-sm">
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={aws} alt="MySQL Logo" className="w-5 h-5 icon" />
            AWS
        </p>
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={azure} alt="MongoDB Logo" className="w-5 h-5 icon" />
            Azure
        </p>
        
        </div>
    </div>

    {/* Web Design, UI, Wireframe Platforms */}
    <div className="w-full">
        <h3 className="text-xl font-semibold text-white mb-2 heading">Web Design, UI and WireFrame Platforms</h3>
        <div className="flex flex-wrap gap-4 text-white text-sm">
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={figma} alt="MySQL Logo" className="w-5 h-5 icon" />
            Figma
        </p>
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={lucid} alt="MongoDB Logo" className="w-5 h-5 icon" />
            Lucid
        </p>
        
        </div>
    </div>

    {/* Collaboration and Technology Platforms */}
    <div className="w-full">
        <h3 className="text-xl font-semibold text-white mb-2 heading">Collaboration and Technology</h3>
        <div className="flex flex-wrap gap-4 text-white text-sm">
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={git} alt="MySQL Logo" className="w-5 h-5 icon" />
            Git
        </p>
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={github} alt="MongoDB Logo" className="w-5 h-5 icon" />
            GitHub
        </p>
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={visual} alt="MongoDB Logo" className="w-5 h-5 icon" />
            Visual Studio Code
        </p>
        
        </div>
    </div>

    {/* Network Tools */}
    <div className="w-full">
        <h3 className="text-xl font-semibold text-white mb-2 heading">Network Tools</h3>
        <div className="flex flex-wrap gap-4 text-white text-sm">
        <p className="flex items-center gap-2 bg-[#6a6a6a] p-2 rounded-md skill-card transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#818181]">
            <img src={cisco} alt="MySQL Logo" className="w-5 h-5 icon" />
            Cisco Packet Tracer
        </p>
       
        
        </div>
    </div>

    
          </div>
        </div>
      )}


      {/* Footer */}
<footer className="bg-zinc-800 p-4 text-center">
  <p>© David.</p>
  <div className="flex justify-center mt-2 space-x-4">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <i className="fab fa-facebook-f text-white hover:text-blue-500"></i>
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <i className="fab fa-twitter text-white hover:text-blue-400"></i>
    </a>
    <a href="https://www.linkedin.com/in/david-ugwu-06503a14b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <i className="fab fa-linkedin-in text-white hover:text-blue-700"></i>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <i className="fab fa-instagram text-white hover:text-pink-500"></i>
    </a>
  </div>
</footer>

    </div>
  );
};






{/*<Block
className="bg-gradient-to-r from-[#3a3a3a] to-[#2d2d2d] p-4 col-span-4 row-span-7 hover:shadow-lg hover:scale-105"
title="Tools"
details="Details about tools and technologies I use."
isExpanded={expandedBlock === "tools"}
onClick={() => toggleExpand("tools")}
/>

const Block = ({ className, title, subtitle, details, isExpanded, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={twMerge(
        "rounded-lg border border-zinc-700 bg-zinc-800 p-6 cursor-pointer transition-all duration-300",
        isExpanded ? "col-span-12 row-span-12 z-10" : "",
        className
      )}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <h4 className="text-lg">{subtitle}</h4>}
      {details && <p className="text-sm mt-4">{details}</p>}
    </motion.div>
  );
};

export default Bento;
*/}