import React from 'react';
import Profile from '../../assets/images/profile/personalPhoto.png'
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiC } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import cv from '../../assets/images/profile/cv.pdf'

function Home_3(props) {
    const skills = [
        { name: "React JS", icon: < FaReact className='text-cyan-400 size-12' /> },
        { name: "Node JS", icon: <FaNodeJs className='text-green-500 size-12' /> },
        { name: "MongoDB", icon: <SiMongodb className='text-green-600 size-12' /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className='text-sky-400 size-12' /> },
        { name: "JavaScript", icon: <SiJavascript className='text-yellow-400 size-12  bg-black' /> },
        { name: "Git & GitHub", icon: <FaGitAlt className='text-orange-500 size-12 ' /> },
        { name: "REST API", icon: <TbApi className='text-purple-400 size-12' /> },
        { name: "Express JS", icon: <SiExpress className='text-gray-400 size-12' /> },
        { name: "HTML", icon: <TiHtml5 className='text-orange-600 size-12' /> },
        { name: "CSS", icon: <FaCss3Alt className='text-blue-500 size-12' /> },
        { name: "C", icon: <SiC className='text-blue-600 size-12' /> },
    ];

    return (
        <main>
            <section className="min-h-screen flex items-center justify-between px-10 
      bg-white dark:bg-darkBg text-black dark:text-white transition grid xs:grid-row-2  sm:grid-cols-2 ">

                {/* LEFT */}
                <div>
                    <h1

                        className="text-5xl font-bold">
                        Hi, I'm <span className="text-primary">Prince</span>
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 mt-4">
                        Full Stack Developer
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        I build modern, responsive, and high-performance web applications
                        using React, Node.js, and MongoDB.
                    </p>

                    <div className='flex mt-3 text-sm text-gray-500 space-x-3'>
                        <p className="hover:dark:text-amber-50  hover:text-primary">
                            MongoDB
                        </p>
                        <p className="hover:dark:text-amber-50  hover:text-primary">
                            • Express
                        </p>
                        <p className="hover:dark:text-amber-50  hover:text-primary">
                            • React
                        </p>
                        <p className="hover:dark:text-amber-50  hover:text-primary">
                            • Node
                        </p>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:cursor-pointer">
                            Contact Me
                        </button>
                        <button className="border px-6 py-2 rounded-lg hover:cursor-pointer " onClick={cv}>
                            Download CV
                        </button>
                    </div>
                    {/* STATS */}
                    <div className="mt-8 flex gap-8">
                        <div>
                            <h3 className="text-2xl font-bold">04+</h3>
                            <p className="text-sm text-gray-500">Projects</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Fresher</h3>
                            <p className="text-sm text-gray-500">Experience</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">10+</h3>
                            <p className="text-sm text-gray-500">Skills</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div

                    className="relative md:w-[380px] md:h-[370px] sm:w-[220px] sm:h-[320px] mx-auto overflow-hidden shadow-lg rounded-full items-center"
                >
                {/* <div className=" inset-0  border-2  bg-cyan-100  rounded-full"></div> */}
                <div className="absolute inset-0   dark:bg-teal-700 bg-gray-600  blur-2xl scale-120 "></div>

                    <img
                        src={Profile}
                        className="relative w-75 rounded-xl dark:shadow-3xl mx-auto"
                    />
                </div>
               </section>
                    <section className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#0b1215] transition">

                        {/* TITLE */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                My Skills
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                Technologies I work with
                            </p>
                        </div>

                        {/* GRID */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                            {skills.map((v, i) => {
                               
                                return (
                                    <div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -8, scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="
              group p-6 rounded-2xl text-center cursor-pointer
              bg-white dark:bg-[#111827]
              shadow-sm hover:shadow-lg
              dark:border dark:border-gray-700
              transition duration-300
              "
                                    >
                                        {/* ICON */}
                                        <div className="
                flex justify-center mb-4 
               
                group-hover:scale-110 
                transition
              ">{
                                                v.icon
                                            }
                                            {/* <Icon size={32} /> */}
                                        </div>

                                        {/* NAME */}
                                        <h3 className="font-semibold text-sm md:text-base text-primary">
                                            {v.name}
                                        </h3>
                                    </div>
                                );
                            })}

                        </div>
                    </section>
                </main>
                );
}

                export default Home_3;