import React, { useEffect, useRef, useState } from 'react';
import Profile from '../../assets/images/profile/personalPhoto.png';
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiC } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import cv from '../../assets/images/profile/cv.pdf';

/* ── Hook: triggers CSS animation class when element enters viewport ── */
function useScrollReveal(className = 'animate-fadeInUp', threshold = 0.15) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(className);
                    obs.unobserve(el);
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [className, threshold]);
    return ref;
}

/* ── Animated skill bar (intersection-observer driven) ── */
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

function Home_3() {
    const skills = [
        { name: "React JS",      icon: <FaReact       className="text-cyan-400  size-10 sm:size-12" /> },
        { name: "Node JS",       icon: <FaNodeJs      className="text-green-500 size-10 sm:size-12" /> },
        { name: "MongoDB",       icon: <SiMongodb     className="text-green-600 size-10 sm:size-12" /> },
        { name: "Tailwind CSS",  icon: <SiTailwindcss className="text-sky-400   size-10 sm:size-12" /> },
        { name: "JavaScript",   icon: <SiJavascript  className="text-yellow-400 size-10 sm:size-12 bg-black" /> },
        { name: "Git & GitHub", icon: <FaGitAlt      className="text-orange-500 size-10 sm:size-12" /> },
        { name: "REST API",      icon: <TbApi         className="text-purple-400 size-10 sm:size-12" /> },
        { name: "Express JS",    icon: <SiExpress     className="text-gray-400  size-10 sm:size-12" /> },
        { name: "HTML",          icon: <TiHtml5       className="text-orange-600 size-10 sm:size-12" /> },
        { name: "CSS",           icon: <FaCss3Alt     className="text-blue-500  size-10 sm:size-12" /> },
        { name: "C",             icon: <SiC           className="text-blue-600  size-10 sm:size-12" /> },
    ];

    const PROJECTS = [
        {
            title: "Budget-App",
            tag: "Expense Tracker",
            desc: "A Budget App designed to help users manage their finances effectively by tracking income, expenses, and savings in an organized way.",
            tech: ["HTML", "CSS", "Javascript"],
            color: "#0EA5E9",
            link: "#",
            live: "#",
        },
        {
            title: "ELEVELT KNOWLEDGE",
            tag: "Learning Management System",
            desc: "A Learning Management System (LMS) to create, manage, deliver, and track educational content and training programs in a digital environment.",
            tech: ["React", "Node.js", "MongoDB", "Express.js"],
            color: "#8B5CF6",
            link: "#",
            live: "#",
        },
        {
            title: "PulseAPI",
            tag: "Developer Tooling",
            desc: "Open-source API monitoring platform with distributed tracing, anomaly detection, and Slack/PagerDuty alerting.",
            tech: ["Go", "TimescaleDB", "Prometheus", "React"],
            color: "#10B981",
            link: "#",
            live: "#",
        },
        {
            title: "Lexis AI",
            tag: "AI / NLP App",
            desc: "Legal document analyzer using LLMs to extract clauses, flag risks, and summarize contracts. Reduces review time by 70% for law firms.",
            tech: ["Python", "OpenAI", "LangChain", "FastAPI", "Next.js"],
            color: "#F59E0B",
            link: "#",
            live: "#",
        },
    ];

    const stats = [
        { value: "04+",     label: "Projects" },
        { value: "Fresher", label: "Experience" },
        { value: "10+",     label: "Skills" },
    ];

    const techStack = ["MongoDB", "Express", "React", "Node"];

    // scroll-reveal refs
    const heroLeftRef  = useScrollReveal('animate-slideInLeft');
    const heroRightRef = useScrollReveal('animate-slideInRight');
    const skillsTitleRef = useScrollReveal('animate-fadeInUp');

    return (
        <main className="dark:bg-[#0b1215] bg-gray-50">

            {/* ══ HERO ══════════════════════════════════════════════ */}
            <section
                id="about"
                className="min-h-[85vh] flex items-center
                           px-4 sm:px-8 md:px-12 lg:px-16
                           py-16 md:py-0
                           bg-gray-50 dark:bg-[#0b1215] text-black dark:text-white transition"
            >
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div ref={heroLeftRef} className="scroll-hidden space-y-5 text-center sm:text-left">
                        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full tracking-widest uppercase">
                            Full Stack Developer
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Hi, I'm{" "}
                            <span className="text-primary relative inline-block">
                                Prince
                                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary/40 rounded-full" />
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium">
                            Full Stack Developer
                        </p>

                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto sm:mx-0 leading-relaxed">
                            I build modern, responsive, and high-performance web applications
                            using React, Node.js, and MongoDB.
                        </p>

                        {/* Tech stack pills */}
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs text-gray-500">
                            {techStack.map((t, i) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 rounded-full bg-gray-200 dark:bg-white/5 hover:text-primary hover:bg-primary/10 transition-colors duration-200 cursor-default"
                                >
                                    {i > 0 && <span className="mr-1 text-gray-400">•</span>}{t}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-2">
                            <a
                                href="#contact"
                                className="px-6 py-2.5 bg-primary text-white font-semibold rounded-full text-sm
                                           hover:bg-teal-600 hover:shadow-lg hover:shadow-primary/25
                                           transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Contact Me
                            </a>
                            <a
                                href={cv}
                                download
                                className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 font-semibold rounded-full text-sm
                                           hover:border-primary hover:text-primary
                                           transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Download CV
                            </a>
                        </div>

                        {/* STATS */}
                        <div className="flex justify-center sm:justify-start gap-8 pt-3">
                            {stats.map((s, i) => (
                                <div key={i} className="text-center sm:text-left">
                                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{s.value}</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Profile Image */}
                    <div ref={heroRightRef} className="scroll-hidden flex justify-center sm:justify-end">
                        <div className="relative float">
                            {/* Image card */}
                            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80
                                            rounded-3xl overflow-hidden
                                            dark:bg-[#111827] bg-gray-100
                                            border-2 border-primary
                                            pulse-ring glow">
                                <img
                                    src={Profile}
                                    alt="Prince Movaliya — Full Stack Developer"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Floating tech badges */}
                            {[
                                { label: "Express.js", style: { bottom: "6px",  right: "-40px" }, color: "#0075C9" },
                                { label: "React",      style: { top:   "10px",  right: "-20px" }, color: "#38BDF8" },
                                { label: "Node.js",    style: { bottom: "20px", left:  "-32px" }, color: "#4ADE80" },
                                { label: "MongoDB",    style: { top:   "40px",  left:  "-40px" }, color: "#00A63E" },
                            ].map(({ label, color, style }) => (
                                <div
                                    key={label}
                                    className="absolute hidden sm:flex tag-pill px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border"
                                    style={{ ...style, color, borderColor: color + "40" }}
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ SKILLS ════════════════════════════════════════════ */}
            <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0b1215] transition">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">

                    {/* Title */}
                    <div ref={skillsTitleRef} className="scroll-hidden text-center mb-12">
                        <p className="text-gray-500 dark:text-gray-400 text-xs tracking-[0.3em] uppercase mb-3">
                            Technologies I work with
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
                            My Skills
                        </h2>
                    </div>

                    {/* Skill Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                        {skills.map((v, i) => (
                            <SkillCard key={v.name} skill={v} delay={i * 80} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ PROJECTS ══════════════════════════════════════════ */}
            <section id="projects" className="py-16 sm:py-24 bg-gray-50 dark:bg-[#0b1215]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">

                    {/* Title */}
                    <div className="text-center mb-12">
                        <p className="text-gray-500 dark:text-gray-400 text-xs tracking-[0.3em] uppercase mb-3">
                            Featured Projects
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
                            Projects That Define Me
                        </h2>
                    </div>

                    {/* Project Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECTS.map((p, i) => (
                            <ProjectCard key={p.title} project={p} delay={i * 150} />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}

/* ── Skill Card with scroll-reveal ── */
function SkillCard({ skill, delay }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add('animate-scaleIn');
                        el.classList.remove('scroll-hidden');
                    }, delay);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className="scroll-hidden group p-5 sm:p-6 rounded-2xl text-center cursor-pointer
                       bg-white dark:bg-[#111827]
                       shadow-sm hover:shadow-xl
                       dark:border dark:border-gray-700 hover:border-primary dark:hover:border-primary
                       transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]"
        >
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
            </div>
            <h3 className="font-semibold text-xs sm:text-sm text-primary leading-tight">
                {skill.name}
            </h3>
        </div>
    );
}

/* ── Project Card with scroll-reveal ── */
function ProjectCard({ project: p, delay }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add('animate-fadeInUp');
                        el.classList.remove('scroll-hidden');
                    }, delay);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className="scroll-hidden group bg-white dark:bg-[#111827]
                       shadow-md rounded-3xl p-6 sm:p-7
                       card-hover relative overflow-hidden
                       border border-transparent hover:border-primary/20
                       transition-all duration-300"
        >
            {/* Color glow on hover */}
            <div
                className="absolute top-0 right-0 w-52 h-52 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${p.color}18 0%, transparent 70%)`, transform: "translate(30%, -30%)" }}
            />

            {/* Header row */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="text-xs tracking-wider mb-1 font-semibold" style={{ color: p.color }}>
                        {p.tag}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">{p.title}</h3>
                </div>
                <div className="flex gap-2 shrink-0">
                    <a
                        href={p.link}
                        aria-label="GitHub"
                        className="w-8 h-8 rounded-full tag-pill flex items-center justify-center text-xs
                                   text-teal-500 hover:text-white hover:bg-teal-500 transition-all duration-200"
                    >
                        GH
                    </a>
                    <a
                        href={p.live}
                        aria-label="Live demo"
                        className="w-8 h-8 rounded-full tag-pill flex items-center justify-center text-xs
                                   text-teal-500 hover:text-white hover:bg-teal-500 transition-all duration-200"
                    >
                        ↗
                    </a>
                </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                    <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ background: p.color + "18", color: p.color }}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Home_3;