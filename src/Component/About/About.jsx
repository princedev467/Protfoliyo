import React, { useEffect, useRef } from 'react';
import Profile from '../../assets/images/profile/personalPhoto.png';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin, FaCode, FaUserGraduate, FaBriefcase } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { HiDownload } from "react-icons/hi";
import cv from '../../assets/images/profile/cv.pdf';

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

const timelineItems = [
    {
        icon: <FaUserGraduate className="text-primary" />,
        year: '2022',
        title: 'Completed Higher Secondary Education',
        subtitle: 'Risen Modern School-Tapovan Group of Schools.',
        desc: 'I completed my 12th grade from Risen Modern School – Tapovan Group of Schools with a commerce background. Although my academic stream was not technical, I developed strong analytical and problem-solving skills. My growing interest in technology inspired me to explore web development and begin my journey as a self-taught developer.',
    },
    {
        icon: <FaCode className="text-primary" />,
        year: '2023',
        title: 'Started Full Stack Development (Self-Taught)',
        subtitle: 'MERN Stack Journey',
        desc: 'I began my journey as a self-taught developer, diving deep into the MERN stack (MongoDB, Express.js, React.js, Node.js). Through online learning and hands-on projects, I developed practical skills in building modern, responsive, and scalable web applications',
    },
    {
        icon: <FaBriefcase className="text-primary" />,
        year: '2025 – Present',
        title: 'Real-World Projects & Deployment',
        subtitle: 'Building & Launching Applications',
        desc: 'Built and deployed multiple projects including a Learning Management System, Movie Booking App, and a Travel Website. Focused on real-world problem solving, UI/UX, and performance optimization.',
    },
];

const highlights = [
    { value: '04+',     label: 'Projects Built' },
    { value: '10+',     label: 'Technologies' },
    { value: '100%',    label: 'Passion' },
    { value: 'Always',  label: 'Learning' },
];

function About() {
    const topRef    = useReveal('animate-fadeInUp');
    const imgRef    = useReveal('animate-slideInLeft');
    const textRef   = useReveal('animate-slideInRight');
    const timeRef   = useReveal('animate-fadeInUp');

    return (
        <main className="bg-gray-50 dark:bg-[#0b1215] text-black dark:text-white transition min-h-screen">

            {/* ── HERO BANNER ───────────────────────────────────── */}
            <section className="relative py-20 px-4 text-center overflow-hidden">
                {/* background glow blobs */}
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div ref={topRef} className="scroll-hidden relative max-w-2xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
                        About Me
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Passionate{' '}
                        <span className="text-primary">Full Stack</span>{' '}
                        Developer
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                        I love turning ideas into beautifully crafted, high-performance web experiences.
                    </p>
                </div>
            </section>

            {/* ── PROFILE + BIO ─────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div ref={imgRef} className="scroll-hidden flex justify-center md:justify-start">
                        <div className="relative">
                            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden
                                            border-2 border-primary pulse-ring glow float">
                                <img
                                    src={Profile}
                                    alt="Prince Movaliya"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* decorative corner accent */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border-2 border-primary/30 -z-10" />
                            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary/10 -z-10" />
                        </div>
                    </div>

                    {/* Bio */}
                    <div ref={textRef} className="scroll-hidden space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-bold">
                            Hi, I'm <span className="text-primary">Prince Movaliya</span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                            I'm a passionate Full Stack Developer with hands-on experience building
                            modern web applications using the <strong className="text-primary">MERN stack</strong>.
                            I love clean code, thoughtful UI, and performant backends.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                            From pixel-perfect frontend interfaces to robust REST APIs, I bring
                            ideas to life with care and craftsmanship. Currently open to exciting
                            freelance projects and full-time opportunities.
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a href="https://github.com/princedev467" target="_blank" rel="noopener noreferrer"
                               className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600
                                          text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-0.5">
                                <IoLogoGithub className="text-lg" /> GitHub
                            </a>
                            <a href="https://linkedin.com/in/prince-movaliya-7246242b3" target="_blank" rel="noopener noreferrer"
                               className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600
                                          text-sm font-medium hover:border-blue-500 hover:text-blue-500 transition-all duration-200 hover:-translate-y-0.5">
                                <FaLinkedin className="text-lg text-blue-500" /> LinkedIn
                            </a>
                            <a href="mailto:princemovaliya467@example.com"
                               className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600
                                          text-sm font-medium hover:border-yellow-500 hover:text-yellow-500 transition-all duration-200 hover:-translate-y-0.5">
                                <CgMail className="text-lg text-yellow-500" /> Email
                            </a>
                        </div>

                        <a href={cv} download
                           className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-full text-sm
                                      hover:bg-teal-600 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                            <HiDownload className="text-lg" /> Download CV
                        </a>
                    </div>
                </div>

                {/* ── STATS ─────────────────────────────────────── */}
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {highlights.map((h, i) => (
                        <StatCard key={i} value={h.value} label={h.label} delay={i * 100} />
                    ))}
                </div>

                {/* ── TIMELINE ──────────────────────────────────── */}
                <div ref={timeRef} className="scroll-hidden mt-20">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                        My <span className="text-primary">Journey</span>
                    </h2>
                    <div className="relative max-w-2xl mx-auto">
                        {/* vertical line */}
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary/20 rounded-full" />

                        <div className="space-y-10">
                            {timelineItems.map((item, i) => (
                                <TimelineItem key={i} item={item} delay={i * 150} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function StatCard({ value, label, delay }) {
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
        <div ref={ref} className="scroll-hidden text-center p-6 rounded-2xl
                                   bg-white dark:bg-[#111827]
                                   border border-gray-200 dark:border-gray-700
                                   hover:border-primary transition-colors duration-300
                                   shadow-sm hover:shadow-md">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-primary">{value}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{label}</p>
        </div>
    );
}

function TimelineItem({ item, delay }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add('animate-slideInLeft');
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
        <div ref={ref} className="scroll-hidden relative flex gap-6">
            {/* circle dot */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-[#111827]
                            border-2 border-primary flex items-center justify-center z-10 shadow-md">
                {item.icon}
            </div>
            {/* content */}
            <div className="flex-1 bg-white dark:bg-[#111827] rounded-2xl p-5
                            border border-gray-200 dark:border-gray-700 hover:border-primary
                            transition-colors duration-300 hover:shadow-md">
                <span className="text-xs text-primary font-semibold tracking-widest uppercase">{item.year}</span>
                <h3 className="font-bold text-base sm:text-lg mt-1">{item.title}</h3>
                <p className="text-xs text-gray-400 mb-2">{item.subtitle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
        </div>
    );
}

export default About;
