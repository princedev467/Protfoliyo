import React from 'react';
import Profile from '../../assets/images/profile/profileimge.png';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Home() {

  const skillsData = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, tag: "Expert" },
        { name: "JavaScript", level: 95, tag: "Expert" },
        { name: "Tailwind CSS", level: 90, tag: "Expert" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: 70, tag: "Intermediate" },
        { name: "Express.js", level: 70, tag: "Intermediate" },
        { name: "REST APIs", level: 85, tag: "Advanced" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90, tag: "Advanced" },
        { name: "Responsive Design", level: 95, tag: "Expert" },
        { name: "Figma", level: 70, tag: "Intermediate" },
        { name: "Vite", level: 80, tag: "Advanced" },
      ],
    },
  ];

  return (
    <main>

      {/* hero Section */}
      <section className="grid md:grid-cols-2 px-4 sm:px-6 md:px-12 py-12 md:py-12 gap-10 items-center">

        {/* Left */}
        <div className='mt-0 p-2'>
          <span className="bg-black text-white dark:bg-green-900/40 dark:text-green-400 px-3 py-2 rounded-full text-xs sm:text-sm">
            Frontend Developer & Backend Developer
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl  text-green-900 font-bold mt-4 md:mt-5 leading-tight dark:text-green-500">
            Full Stack Developer Portfolio
          </h1>

          <p className="text-gray-400 mt-3 md:mt-6 max-w-lg text-sm sm:text-sm">
          Crafting high-performance, scalable full stack web applications using React, Node.js, JavaScript, and modern technologies.
          </p>

          <button className="mt-5 md:mt-8 bg-black text-white dark:bg-green-400 dark:text-black font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm">
            Get in Touch
          </button>

         <div className="flex gap-5 mt-6 text-xl text-gray-400 dark:text-green-400">
            <a href="github.com/princedev467" className="hover:scale-110 transition">
              <IoLogoGithub  className='text-black xs:text-sm text-2xl dark:text-white'/>
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaLinkedin  className='text-blue-800 text-2xl xs:text-sm  dark:text-blue-500'/>
            </a>
            <a href="#" className="hover:scale-110 transition">
              <CgMail className='text-yellow-700 text-2xl xs:text-sm dark:text-amber-100' />
            </a>
          </div>
        
        </div>

       {/* right */}
        <div className="flex justify-center">
          <img
            src={Profile}
            alt="profile"
            className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[420px] md:mt-4 rounded-2xl shadow-lg hover:scale-105 transition duration-100"
          />
        </div>

      </section>

<hr  className=' container w-300 mx-auto dark:text-green-700  px-10'/>
      {/* skill Section */}
      <section className="dark:text-white py-10 md:py-7 px-4 sm:px-6 md:px-20">

      
        <div className="text-center mb-10 md:mb-16">
          <span className="px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-400 text-xs sm:text-sm">
            My Expertise
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:mt-4">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

      
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {skillsData.map((section, index) => (
            <div
              key={index}
              className="dark:bg-[#0f0f0f] rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-800 hover:border-green-500 transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 border-l-4 dark:border-green-500 pl-3">
                {section.title}
              </h3>

              {section.skills.map((skill, i) => (
                <div key={i} className="mb-5">

                  {/* TOP */}
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm">{skill.name}</span>
                    <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-400">
                      {skill.tag}
                    </span>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="w-full bg-gray-800 h-2 rounded-full">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600"
                    ></div>
                  </div>

                </div>
              ))}

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;