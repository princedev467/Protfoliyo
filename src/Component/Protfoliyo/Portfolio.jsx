import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
  Frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Vue.js", level: 75 },
  ],
  Backend: [
    { name: "Node.js / Express", level: 93 },
    { name: "Python / FastAPI", level: 85 },
    { name: "GraphQL", level: 80 },
    { name: "REST APIs", level: 95 },
  ],
  Database: [
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "Redis", level: 75 },
    { name: "Prisma ORM", level: 85 },
  ],
  DevOps: [
    { name: "Docker / K8s", level: 78 },
    { name: "AWS / GCP", level: 80 },
    { name: "CI/CD Pipelines", level: 85 },
    { name: "Linux / Bash", level: 82 },
  ],
};

const PROJECTS = [
  {
    title: "CloudCart",
    tag: "E-Commerce Platform",
    desc: "A high-performance multi-vendor marketplace with real-time inventory, AI-powered recommendations, and sub-200ms response times serving 50k+ users.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    color: "#0EA5E9",
    accent: "#BAE6FD",
    link: "#",
    live: "#",
  },
  {
    title: "FlowBoard",
    tag: "Project Management SaaS",
    desc: "Real-time collaborative workspace with WebSocket-driven updates, drag-and-drop kanban, Gantt charts, and team analytics dashboards.",
    tech: ["React", "FastAPI", "MongoDB", "Socket.io", "Docker"],
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
  // {
  //   title: "Lexis AI",
  //   tag: "AI / NLP App",
  //   desc: "Legal document analyzer using LLMs to extract clauses, flag risks, and summarize contracts. Reduces review time by 70% for law firms.",
  //   tech: ["Python", "OpenAI", "LangChain", "FastAPI", "Next.js"],
  //   color: "#F59E0B",
  //   accent: "#FDE68A",
  //   link: "#",
  //   live: "#",
  // },
];

const EXPERIENCE = [
  {
    role: "Senior Full Stack Engineer",
    company: "Stripe",
    period: "2022 — Present",
    bullets: [
      "Led migration of monolith to microservices, reducing latency by 40%.",
      "Built internal developer portal used by 200+ engineers daily.",
      "Mentored team of 5 engineers across frontend and backend stacks.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Razorpay",
    period: "2020 — 2022",
    bullets: [
      "Owned checkout SDK used by 500k+ merchants across India.",
      "Designed GraphQL API layer serving 10M+ daily transactions.",
      "Improved CI pipeline, cutting deployment time from 18min to 4min.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Freshworks",
    period: "2018 — 2020",
    bullets: [
      "Built React component library adopted across 3 product lines.",
      "Achieved 98 Lighthouse score on customer-facing marketing site.",
      "Implemented A/B testing framework driving 22% conversion uplift.",
    ],
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

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState("Frontend");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-white font-sans cursor-none selection:bg-sky-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        * { cursor: none !important; }
        body { font-family: 'Syne', sans-serif; }
        .mono { font-family: 'DM Mono', monospace; }
        .glow { box-shadow: 0 0 80px rgba(14,165,233,0.15); }
        .card-hover { transition: transform 0.3s, box-shadow 0.3s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .tag-pill { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); }
        section { scroll-margin-top: 80px; }
        .grid-dot-bg {
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent); background-size: 200% 100%; animation: shimmer 3s infinite; }
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(14,165,233,0.4) } 70% { box-shadow: 0 0 0 20px rgba(14,165,233,0) } 100% { box-shadow: 0 0 0 0 rgba(14,165,233,0) } }
        .float { animation: float 5s ease-in-out infinite; }
        .pulse-ring { animation: pulse-ring 2.5s ease-out infinite; }
      `}</style>

      <Cursor />

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#080C14]/90 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="mono text-sky-400 text-sm font-medium tracking-wider">
            {/* &lt;ARYAN.DEV /&gt; */}
          </div>
          {/* <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} data-hover
                className="text-sm text-white/50 hover:text-white transition-colors tracking-wide uppercase">
                {l}
              </button>
            ))}
            <button data-hover
              className="mono text-xs px-4 py-2 border border-sky-500/60 text-sky-400 hover:bg-sky-500/10 rounded transition-all">
              Hire Me
            </button>
          </div> */}
          <button className="md:hidden text-white/60" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block h-0.5 w-6 bg-current ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0D1421] border-t border-white/5 px-6 py-4 space-y-3">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="block text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wide">{l}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="about" className="min-h-screen grid-dot-bg relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-radial from-sky-900/20 via-transparent to-transparent" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(14,165,233,0.08) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.04] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="mono text-sky-400 text-xs tracking-[0.3em] uppercase mb-6">Full Stack Engineer</div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Aryan<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)" }}>
                Mehta
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-md mb-10">
              I architect and ship full-stack products — from database schema to pixel-perfect UIs — that scale to millions of users.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("Projects")} data-hover
                className="px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-lg transition-all text-sm tracking-wide">
                View Projects →
              </button>
              <button onClick={() => scrollTo("Contact")} data-hover
                className="px-7 py-3.5 tag-pill hover:bg-white/10 text-white/70 hover:text-white font-medium rounded-lg transition-all text-sm">
                Get in Touch
              </button>
            </div>
            <div className="flex gap-8 mt-12 border-t border-white/5 pt-8">
              {[["6+", "Years Exp."], ["40+", "Projects"], ["3M+", "Users Served"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white">{n}</div>
                  <div className="text-xs text-white/40 mono mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10 pulse-ring glow">
                <div className="w-full h-full flex items-center justify-center text-8xl font-extrabold text-white/10"
                  style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}>
                  AM
                </div>
              </div>
              {/* floating badges */}
              {[
                { label: "React", top: "-12px", right: "-24px", color: "#38BDF8" },
                { label: "Node.js", bottom: "20px", left: "-32px", color: "#4ADE80" },
                { label: "AWS", top: "60px", left: "-40px", color: "#FB923C" },
              ].map(({ label, color, ...pos }) => (
                <div key={label} className="absolute tag-pill px-3 py-1.5 rounded-full text-xs font-semibold mono backdrop-blur-sm"
                  style={{ ...pos, color, borderColor: color + "40" }}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-[#0A0F1A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="mono text-sky-400 text-xs tracking-[0.3em] uppercase mb-3">Expertise</div>
            <h2 className="text-4xl font-extrabold tracking-tight">Skills & Stack</h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {Object.keys(SKILLS).map(k => (
              <button key={k} data-hover onClick={() => setActiveSkill(k)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all mono ${activeSkill === k ? "bg-sky-500 text-white" : "tag-pill text-white/50 hover:text-white"}`}>
                {k}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {SKILLS[activeSkill].map(({ name, level }) => (
              <div key={name} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 card-hover">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-sm">{name}</span>
                  <span className="mono text-xs text-sky-400">{level}%</span>
                </div>
                <AnimatedBar level={level} color="#0EA5E9" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-[#080C14] grid-dot-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="mono text-sky-400 text-xs tracking-[0.3em] uppercase mb-3">Portfolio</div>
            <h2 className="text-4xl font-extrabold tracking-tight">Selected Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group bg-white/[0.025] border border-white/[0.07] rounded-3xl p-7 card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${p.color}15 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="mono text-xs tracking-wider mb-1" style={{ color: p.color }}>{p.tag}</div>
                    <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={p.link} data-hover className="w-8 h-8 rounded-full tag-pill flex items-center justify-center text-white/50 hover:text-white transition-colors text-xs">
                      GH
                    </a>
                    <a href={p.live} data-hover className="w-8 h-8 rounded-full tag-pill flex items-center justify-center text-white/50 hover:text-white transition-colors text-xs">
                      ↗
                    </a>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{p.desc}</p>
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

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-[#0A0F1A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="mono text-sky-400 text-xs tracking-[0.3em] uppercase mb-3">Career</div>
            <h2 className="text-4xl font-extrabold tracking-tight">Experience</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
            <div className="space-y-10 pl-8">
              {EXPERIENCE.map((e, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-8 top-1 w-2.5 h-2.5 rounded-full border-2 border-sky-500 bg-[#080C14] transition-all group-hover:bg-sky-500" />
                  <div className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-bold text-lg">{e.role}</h3>
                        <div className="text-sky-400 text-sm font-medium mono">{e.company}</div>
                      </div>
                      <span className="mono text-xs text-white/40 tag-pill px-3 py-1.5 rounded-full">{e.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {e.bullets.map((b, bi) => (
                        <li key={bi} className="text-sm text-white/50 flex gap-2">
                          <span className="text-sky-500 flex-shrink-0 mt-0.5">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#080C14] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(14,165,233,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="mono text-sky-400 text-xs tracking-[0.3em] uppercase mb-4">Let's Work Together</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Have a project<br />in mind?
          </h2>
          <p className="text-white/40 mb-10 text-lg max-w-md mx-auto">
            I'm open to full-time roles, freelance contracts, and interesting collaborations.
          </p>
          <a href="mailto:aryan@example.com" data-hover
            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all text-base tracking-wide">
            aryan@example.com
            <span>→</span>
          </a>
          <div className="flex justify-center gap-6 mt-12">
            {["GitHub", "LinkedIn", "Twitter", "Resume"].map(l => (
              <a key={l} href="#" data-hover className="mono text-xs text-white/30 hover:text-white transition-colors uppercase tracking-wider">
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <div className="mono text-xs text-white/20">&lt;ARYAN.DEV /&gt;</div>
          <div className="mono text-xs text-white/20">Designed & Built by Aryan Mehta · 2025</div>
        </div>
      </footer>
    </div>
  );
}
