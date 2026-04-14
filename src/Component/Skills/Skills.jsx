import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiC, SiFigma, SiVite, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";

/* hook: add animate class on scroll */
function useReveal(cls = 'animate-fadeInUp') {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add(cls); obs.unobserve(el); } },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [cls]);
    return ref;
}

const skillCategories = [
    {
        category: 'Frontend',
        color: '#38BDF8',
        skills: [
            { name: 'React JS',     icon: <FaReact       className="size-10 text-cyan-400" />,  level: 90 },
            { name: 'JavaScript',   icon: <SiJavascript  className="size-10 text-yellow-400 bg-black p-0.5" />, level: 95 },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="size-10 text-sky-400" />,   level: 90 },
            { name: 'HTML5',        icon: <TiHtml5       className="size-10 text-orange-500" />, level: 95 },
            { name: 'CSS3',         icon: <FaCss3Alt     className="size-10 text-blue-500" />,  level: 97 },
        ],
    },
    {
        category: 'Backend & DB',
        color: '#4ADE80',
        skills: [
            { name: 'Node JS',      icon: <FaNodeJs   className="size-10 text-green-500" />,  level: 75 },
            { name: 'Express JS',   icon: <SiExpress  className="size-10 text-gray-400" />,   level: 70 },
            { name: 'MongoDB',      icon: <SiMongodb  className="size-10 text-green-600" />,  level: 72 },
            { name: 'REST API',     icon: <TbApi      className="size-10 text-purple-400" />, level: 85 },
        ],
    },
    {
        category: 'Tools',
        color: '#F59E0B',
        skills: [
            { name: 'Git & GitHub', icon: <FaGitAlt   className="size-10 text-orange-500" />, level: 90 },
            { name: 'Figma',        icon: <SiFigma    className="size-10 text-pink-500" />,   level: 68 },
            { name: 'Vite',         icon: <SiVite     className="size-10 text-purple-500" />, level: 82 },
            { name: 'Postman',      icon: <SiPostman  className="size-10 text-orange-400" />, level: 95 },
            { name: 'C',            icon: <SiC        className="size-10 text-blue-600" />,   level: 80 },
        ],
    },
];

const tagColors = {
    Expert:       'bg-green-100  text-green-700  dark:bg-green-900/40 dark:text-green-400',
    Advanced:     'bg-blue-100   text-blue-700   dark:bg-blue-900/40  dark:text-blue-400',
    Intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400',
    Beginner:     'bg-gray-100   text-gray-600   dark:bg-gray-700     dark:text-gray-300',
};

function getTag(level) {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
}

/* animated progress bar driven by IntersectionObserver */
function AnimatedBar({ level, color }) {
    const [width, setWidth] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setWidth(level); },
            { threshold: 0.3 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [level]);
    return (
        <div ref={ref} className="h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${width}%`, backgroundColor: color }}
            />
        </div>
    );
}

function Skills() {
    const titleRef = useReveal('animate-fadeInUp');

    return (
        <main className="bg-gray-50 dark:bg-[#0b1215] text-black dark:text-white transition min-h-screen">

            {/* ── HERO BANNER ───────────────────────────────── */}
            <section className="relative py-20 px-4 text-center overflow-hidden">
                <div className="absolute top-10 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div ref={titleRef} className="scroll-hidden relative max-w-2xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
                        My Expertise
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Skills &{' '}
                        <span className="text-primary">Technologies</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                        A comprehensive overview of my technical toolkit and proficiency levels.
                    </p>
                </div>
            </section>

            {/* ── SKILLS ────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-20 space-y-14">
                {skillCategories.map((cat, ci) => (
                    <CategorySection key={ci} cat={cat} delay={ci * 120} />
                ))}
            </div>
        </main>
    );
}

function CategorySection({ cat, delay }) {
    const ref = useReveal('animate-fadeInUp');

    return (
        <div ref={ref} className="scroll-hidden">
            {/* Category heading */}
            <div className="flex items-center gap-3 mb-6">
                <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: cat.color }}
                />
                <h2 className="text-lg sm:text-xl font-bold">{cat.category}</h2>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 rounded-full" />
            </div>

            {/* Two-column layout: icon cards left, progress bars right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Icon cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {cat.skills.map((skill, i) => (
                        <SkillIconCard key={skill.name} skill={skill} delay={delay + i * 60} />
                    ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-5">
                    {cat.skills.map((skill, i) => {
                        const tag = getTag(skill.level);
                        return (
                            <div key={skill.name}>
                                <div className="flex justify-between items-center mb-1.5">
                                    <span className="text-sm font-medium">{skill.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">{skill.level}%</span>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${tagColors[tag]}`}>
                                            {tag}
                                        </span>
                                    </div>
                                </div>
                                <AnimatedBar level={skill.level} color={cat.color} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function SkillIconCard({ skill, delay }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
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
            className="scroll-hidden group p-4 rounded-2xl text-center cursor-default
                       bg-white dark:bg-[#111827]
                       border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary
                       shadow-sm hover:shadow-lg
                       transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03]"
        >
            <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
            </div>
            <p className="text-xs font-semibold text-primary leading-tight">{skill.name}</p>
        </div>
    );
}

export default Skills;
