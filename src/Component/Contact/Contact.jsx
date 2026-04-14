import React, { useEffect, useRef, useState } from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { HiPaperAirplane } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";

/* hook: add animate class on scroll */
function useReveal(cls = 'animate-fadeInUp') {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add(cls); obs.unobserve(el); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [cls]);
    return ref;
}

const contactInfo = [
    {
        icon: <CgMail className="text-2xl text-primary" />,
        label: 'Email',
        value: 'princedev467@gmail.com',
        href: 'mailto:princedev467@gmail.com',
    },
    {
        icon: <FaPhoneAlt className="text-xl text-primary" />,
        label: 'Phone',
        value: '+91 99999 00000',
        href: 'tel:+919999900000',
    },
    {
        icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
        label: 'Location',
        value: 'Gujarat, India',
        href: null,
    },
];

const socialLinks = [
    {
        icon: <IoLogoGithub className="text-xl" />,
        label: 'GitHub',
        href: 'https://github.com/princedev467',
        color: 'hover:border-gray-400 hover:text-gray-200',
    },
    {
        icon: <FaLinkedin className="text-xl text-blue-500" />,
        label: 'LinkedIn',
        href: '#',
        color: 'hover:border-blue-500 hover:text-blue-400',
    },
    {
        icon: <CgMail className="text-xl text-yellow-500" />,
        label: 'Email',
        href: 'mailto:princedev467@gmail.com',
        color: 'hover:border-yellow-400 hover:text-yellow-300',
    },
];

function Contact() {
    const titleRef  = useReveal('animate-fadeInUp');
    const leftRef   = useReveal('animate-slideInLeft');
    const rightRef  = useReveal('animate-slideInRight');

    const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors]   = useState({});
    const [sent, setSent]       = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim())    e.name    = 'Name is required';
        if (!form.email.trim())   e.email   = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
        if (!form.message.trim()) e.message = 'Message is required';
        return e;
    };

    const handleChange = (e) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
        setErrors(err => ({ ...err, [e.target.name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const v = validate();
        if (Object.keys(v).length) { setErrors(v); return; }
        setLoading(true);
        // Simulate send (replace with real API / EmailJS / etc.)
        setTimeout(() => {
            setLoading(false);
            setSent(true);
            setForm({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <main className="bg-gray-50 dark:bg-[#0b1215] text-black dark:text-white transition min-h-screen">

            {/* ── HERO BANNER ─────────────────────────────────── */}
            <section className="relative py-20 px-4 text-center overflow-hidden">
                <div className="absolute top-0 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div ref={titleRef} className="scroll-hidden relative max-w-2xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
                        Get In Touch
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Let's{' '}
                        <span className="text-primary">Work Together</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's build something great.
                    </p>
                </div>
            </section>

            {/* ── MAIN GRID ───────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

                    {/* LEFT — Info Cards */}
                    <div ref={leftRef} className="scroll-hidden space-y-5">

                        <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h2>

                        {contactInfo.map((info, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-5 rounded-2xl
                                           bg-white dark:bg-[#111827]
                                           border border-gray-200 dark:border-gray-700 hover:border-primary
                                           transition-all duration-300 hover:-translate-x-1 hover:shadow-md"
                            >
                                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{info.label}</p>
                                    {info.href ? (
                                        <a href={info.href} className="text-sm font-semibold hover:text-primary transition-colors duration-200">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-semibold">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Social */}
                        <div className="pt-4">
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Find me on</p>
                            <div className="flex gap-3">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target={s.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full
                                                    border border-gray-300 dark:border-gray-600
                                                    text-sm font-medium
                                                    transition-all duration-200 hover:-translate-y-0.5 ${s.color}`}
                                    >
                                        {s.icon}
                                        <span className="hidden sm:inline">{s.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability badge */}
                        <div className="flex items-center gap-2 pt-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Available for freelance & full-time roles
                            </span>
                        </div>
                    </div>

                    {/* RIGHT — Contact Form */}
                    <div ref={rightRef} className="scroll-hidden">
                        <div className="bg-white dark:bg-[#111827]
                                        rounded-3xl p-6 sm:p-8
                                        border border-gray-200 dark:border-gray-700
                                        shadow-sm">
                            {sent ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center animate-scaleIn">
                                    <MdCheckCircle className="text-6xl text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Message Sent! 🎉</h3>
                                    <p className="text-gray-400 text-sm mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                                    <button
                                        onClick={() => setSent(false)}
                                        className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold
                                                   hover:bg-teal-600 transition-colors duration-200"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                    <h2 className="text-xl font-bold mb-1">Send a Message</h2>
                                    <p className="text-sm text-gray-400 mb-4">I usually reply within 24 hours.</p>

                                    {/* Name + Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField
                                            label="Your Name"
                                            name="name"
                                            type="text"
                                            placeholder="Prince Movaliya"
                                            value={form.name}
                                            error={errors.name}
                                            onChange={handleChange}
                                        />
                                        <FormField
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={form.email}
                                            error={errors.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Subject */}
                                    <FormField
                                        label="Subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Project inquiry / Just saying hi"
                                        value={form.subject}
                                        error={errors.subject}
                                        onChange={handleChange}
                                    />

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            placeholder="Tell me about your project..."
                                            value={form.message}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl text-sm resize-none
                                                        bg-gray-50 dark:bg-[#0b1215]
                                                        border ${errors.message ? 'border-red-400' : 'border-gray-200 dark:border-gray-600'}
                                                        focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                                                        placeholder:text-gray-400 transition-colors duration-200`}
                                        />
                                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full flex items-center justify-center gap-2
                                                   px-6 py-3 bg-primary text-white font-bold rounded-full text-sm
                                                   hover:bg-teal-600 hover:shadow-lg hover:shadow-primary/25
                                                   transition-all duration-300 hover:-translate-y-0.5
                                                   disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                </svg>
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                <HiPaperAirplane className="text-lg rotate-90" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function FormField({ label, name, type, placeholder, value, error, onChange }) {
    return (
        <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-3 rounded-xl text-sm
                            bg-gray-50 dark:bg-[#0b1215]
                            border ${error ? 'border-red-400' : 'border-gray-200 dark:border-gray-600'}
                            focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                            placeholder:text-gray-400 transition-colors duration-200`}
            />
            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
        </div>
    );
}

export default Contact;
