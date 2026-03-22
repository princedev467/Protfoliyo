import React from 'react';
import homelogo from '../../assets/images/Home_art 1.svg'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Profile from '../../assets/images/profile/profileimge.png'


function Home(props) {
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

    const socialapp = [
        { label: 'gihub', icon: <IoLogoGithub /> },
        { label: 'Linkedin', icon: <FaLinkedin /> },
        { label: 'email', icon: <CgMail /> },
    ]
    return (
        <main >
           <section className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center ">
      
        {/* left-side */}
         <div>
        <span className="dark:bg-green-900/40 bg-black text-white dark:text-green-400 px-4 py-1 rounded-full text-sm">
          Frontend Developer & Backend Developer
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight dark:text-green-500">
          Full Stack Developer Portfolio
        </h1>

        <p className="text-gray-400 mt-6 max-w-lg">
          Building modern scalable web applications with React, JavaScript,
          and cutting-edge technologies.
        </p>

        <button className="mt-8 dark:bg-green-400  bg-black text-white  dark:text-black font-bold px-6 py-3 rounded-full">
          Get in Touch
        </button>

      
        <div className="flex gap-10 mt-10 text-center">
          <div>
            <h2 className="text-neon text-2xl font-bold">3+</h2>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <h2 className="text-neon text-2xl font-bold">50+</h2>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div>
            <h2 className="text-neon text-2xl font-bold">15+</h2>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          <div>
            <h2 className="text-neon text-2xl font-bold">98%</h2>
            <p className="text-gray-400 text-sm">Satisfaction</p>
          </div>
        </div>
         </div>

      {/* right side */}
      
      <div className="relative items-center" >
               <img
        
          src={Profile}
          alt=""
          className="rounded-2xl shadow-lg w-[400px]  mx-auto  hover:border-2 text-green-300"
        />
        
      
      </div>
    </section>

{/* skill section */}
    <section>
         <div className="dark:bg-black dark:text-white py-20 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full dark:bg-green-900 dark:text-green-400 text-sm">
          ✨ My Expertise
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className="dark:bg-[#0f0f0f] rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-green-500 transition"
          >
            <h3 className="text-xl font-semibold mb-6 border-l-4 dark:border-green-500 pl-3">
              {section.title}
            </h3>

            {section.skills.map((skill, i) => (
              <div key={i} className="mb-6">
                
                {/* Top Row */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-xs px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-400">
                    {skill.tag}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full dark:bg-gray-800 h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </section>
            

        </main>
    );
}

export default Home;