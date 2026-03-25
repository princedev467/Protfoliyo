import React from 'react';
import { FaReact } from "react-icons/fa";
import Profile from '../../assets/images/profile/personalPhoto.png';
import { SiMongodb } from "react-icons/si";
function Home_2(props) {

    const skills = [
  { name: "React JS", percent: "99%", color: "bg-black",icon :<FaReact className='text-cyan-400 text-2xl' />},
  { name: "Mongo DB", percent: "95%", color: "bg-gray-200",icon:<SiMongodb   className='text-green-400'/> },
  { name: "Photoshop", percent: "97%", color: "bg-blue-600",icon:<FaReact /> },
  { name: "Invision", percent: "85%", color: "bg-pink-500",icon:<FaReact /> },
  { name: "Sketch", percent: "95%", color: "bg-yellow-500",icon:<FaReact /> },
  { name: "Figma", percent: "98%", color: "bg-green-500",icon:<FaReact /> },
]; 
    return (
        <div className="font-sans">
      {/* HERO SECTION */}
      <section className="bg-teal-800 text-white  dark:bg-black  dark:text-teal-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-3 gap-8 items-center">
          
          {/* LEFT TEXT */}
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-gray-200  dark:text-gray-200 ">Hey, my name is</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight  dark:text-teal-400 ">
              PRINCE <br /> MOVALIYA
            </h1>
            <div className="w-20 h-2 bg-yellow-400 mx-auto lg:mx-0 rounded-full"></div>
            <p className="text-gray-300 tracking-widest text-sm  dark:text-yellow-500">
              FULL STACK DEVELOPER
            </p>
          </div>

         
          <div className="flex justify-center">
            <div className="bg-yellow-400 rounded-full w-64 h-80 flex items-end justify-center overflow-hidden">
              <img
                src={Profile}
                alt="profile"
                className="h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="space-y-6 text-center lg:text-right">
            <div>
              <p className="text-gray-300 dark:text-gray-200">Years of experience</p>
              <h2 className="text-3xl font-bold  dark:text-teal-400">Fresher</h2>
            </div>
            <div>
              <p className="text-gray-300 dark:text-gray-200">Projects done</p>
              <h2 className="text-3xl font-bold  dark:text-teal-400">04</h2>
            </div>
            <div>
              <p className="text-gray-300 dark:text-gray-200">Clients</p>
              <h2 className="text-3xl font-bold  dark:text-teal-400">89</h2>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((v, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center space-y-3 hover:shadow-md transition"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${v.color} flex items-center justify-center text-white font-bold`}
                >
                  {v.icon}
                </div>
                <p className="font-medium text-black">{v.name}</p>
                <p className="text-gray-500">{v.percent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gray-100 py-12'>
            
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 items-center">
              <h2 className='text-center  text-yellow-400 text-4xl sm:text-5xl font-bold leading-tight '>WHAT I DO</h2>
        </div>
      </section>
    </div>
    );
}

export default Home_2;