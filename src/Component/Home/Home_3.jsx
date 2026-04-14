import React, { useEffect, useRef, useState } from 'react';
import Profile from '../../assets/images/profile/personalPhoto.png'
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiC } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import cv from '../../assets/images/profile/cv.pdf'

function Home_3(props) {
    const [activeSkill, setActiveSkill] = useState("Frontend");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    const PROJECTS = [
  {
    title: "Budget-App",
    tag: "Expence Tracker",
    desc: "A Budget App is a software application designed to help users manage their finances effectively by tracking income, expenses, and savings in an organized way.",
    tech: ["HTML","CSS","Javascript"],
    color: "#0EA5E9",
    accent: "#BAE6FD",
    link: "#",
    live: "#",
  },
  {
    title: "ELEVELT_KNOWLWDGE",
    tag: "Learning Management System",
     desc:"A Learning Management System (LMS) is a software application used to create, manage, deliver, and track educational content and training programs in a digital environment.",
     tech: ["React", "Node.js","MongoDB","Express.js"],
    color: "#8B5CF6",
    accent: "#DDD6FE",
    link: "#",
    live: "#",
  },
  {
    title: "PulseAPI",
    tag: "Developer Tooling",
    desc: "Open-source API monitoring platform with distributed tracing, anomaly detection, and Slack/PagerDuty alerting. 2k+ GitHub stars.",
    tech: ["Go", "TimescaleDB", "Prometheus", "React", "K8s"],
    color: "#10B981",
    accent: "#A7F3D0",
    link: "#",
    live: "#",
  },
  {
    title: "Lexis AI",
    tag: "AI / NLP App",
    desc: "Legal document analyzer using LLMs to extract clauses, flag risks, and summarize contracts. Reduces review time by 70% for law firms.",
    tech: ["Python", "OpenAI", "LangChain", "FastAPI", "Next.js"],
    color: "#F59E0B",
    accent: "#FDE68A",
    link: "#",
    live: "#",
  },
];
    function AnimatedBar({ level, color }) {
        const [width, setWidth] = useState(0);
        const ref = useRef(null);
        useEffect(() => {
            const obs = new IntersectionObserver(
                ([e]) => { if (e.isIntersecting) setWidth(level); },
                { threshold: 0.4 }
            );
            if (ref.current) obs.observe(ref.current);
            return () => obs.disconnect();
        }, [level]);
        return (
            <div ref={ref} className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${width}%`, backgroundColor: color }}
                />
            </div>
        );
    }

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    function Cursor() {
        const [pos, setPos] = useState({ x: -100, y: -100 });
        const [hov, setHov] = useState(false);
        useEffect(() => {
            const move = (e) => setPos({ x: e.clientX, y: e.clientY });
            const over = (e) => setHov(e.target.closest("a,button,[data-hover]") !== null);
            window.addEventListener("mousemove", move);
            window.addEventListener("mouseover", over);
            return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
        }, []);
        return (
            <>
                <div
                    className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference transition-transform duration-100"
                    style={{
                        width: hov ? 48 : 12, height: hov ? 48 : 12,
                        background: "#fff",
                        transform: `translate(${pos.x - (hov ? 24 : 6)}px, ${pos.y - (hov ? 24 : 6)}px)`,
                        transition: "width 0.2s, height 0.2s, transform 0.08s"
                    }}
                />
            </>
        );
    }
    return (
        <main className='dark:bg-[#0b1215]  bg-gray-50'>
            <section className="min-h-screen flex items-center justify-between px-10 
      bg-gray-50 dark:bg-[#0b1215] text-black dark:text-white transition grid xs:grid-row-2  sm:grid-cols-2 max-w-7xl mx-auto">

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
                        <span className="hover:dark:text-amber-50  hover:text-primary">
                            MongoDB
                        </span>
                        <span className="hover:dark:text-amber-50  hover:text-primary">
                            • Express
                        </span>
                        <span className="hover:dark:text-amber-50  hover:text-primary">
                            • React
                        </span>
                        <span className="hover:dark:text-amber-50  hover:text-primary">
                            • Node
                        </span>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:cursor-pointer">
                            Contact Me
                        </button>
                        <a href={cv} download>
                            <button className="border px-6 py-2 rounded-lg hover:cursor-pointer ">
                                Download CV
                            </button>
                        </a>
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


                <div className="flex justify-center lg:justify-end">
                    <div className="relative float">

                        {/* IMAGE CONTAINER */}
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden dark:bg-[#111827] bg-gray-50 border-2 border-primary backdrop-blur-sm dark:border-gray-900 pulse-ring glow">

                            <img
                                src={Profile}
                                alt="profile"
                                className="w-67 h-100 mx-auto pl-2.5"
                            />
                        </div>

                        {/* floating badges */}
                        {[
                            { label: "Express.js", bottom: "6px", right: "-40px", color: "#0075C9" },
                            { label: "React", top: "10px", right: "-20px", color: "#38BDF8" },
                            { label: "Node.js", bottom: "20px", left: "-32px", color: "#4ADE80" },
                            { label: "Mongo DB", top: "40px", left: "-40px", color: "#00A63E" },
                        ].map(({ label, color, ...pos }) => (
                            <div
                                key={label}
                                className="absolute tag-pill px-3 py-1.5 rounded-full text-xs font-semibold mono backdrop-blur-sm border"
                                style={{ ...pos, color, borderColor: color + "40" }}
                            >
                                {label}
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* skills */}
            <section className="py-6 mx-18 bg-gray-50 dark:bg-[#0b1215] transition">

                {/* TITLE */}
                <div className="max-w-7xl mx-auto  mb-13 text-center ">
                       <p className="text-gray-500 dark:text-gray-400 mt-2 text-xs tracking-[0.3em] uppercase mb-3">
                        Technologies I work with
                    </p>
                    <h2 className="text-4xl font-extrabold tracking-tigh text-primary">
                        My Skills
                    </h2>
                 
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
              {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-[#0b1215] grid-dot-bg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-14">
            <div className="mono text-gray-500 dark:text-gray-400 text-xs tracking-[0.3em] uppercase mb-3">Featured Projects</div>
            <h2 className="text-4xl font-extrabold tracking-tigh text-primary">Projects That Define Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group bg-white  dark:bg-[#111827] shadow-md    rounded-3xl p-7 card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${p.color}15 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="mono text-xs tracking-wider mb-1 text-start" style={{ color: p.color }}>{p.tag}</div>
                    <h3 className="text-xl font-bold tracking-tight text-start">{p.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={p.link} data-hover className="w-8 h-8 rounded-full tag-pill  shadow-md  flex items-center justify-center  text-teal-400 hover:text-teal-900    dark:text-white/50 dark:hover:text-white transition-colors text-xs" >
                      GH
                    </a>
                    <a href={p.live} data-hover className="w-8 h-8 rounded-full tag-pill  shadow-md  flex items-center justify-center   text-teal-400 hover:text-teal-900  dark:text-white/50 dark:hover:text-white transition-colors text-xs">
                      ↗
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 text-start">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="mono text-xs px-3 py-1 rounded-full" style={{ background: p.color + "15", color: p.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </main>
    );
}

export default Home_3;