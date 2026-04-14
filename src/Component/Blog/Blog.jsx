import React, { useEffect, useRef, useState } from 'react';
import { FaNodeJs, FaDocker, FaBriefcase } from 'react-icons/fa';
import { SiRedis, SiReact, SiJsonwebtokens } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { BiTestTube } from 'react-icons/bi';
import { CgArrowLongRight } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';

/* ─── Scroll Reveal hook ─────────────────────────── */
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

/* ─── Blog data ──────────────────────────────────── */
const posts = [
    {
        id: 1,
        category: 'System Design',
        title: 'Scaling Node.js to 1M requests per day with Redis caching',
        excerpt:
            'How I took a sluggish Express API from 200ms average response time down to under 20ms using strategic Redis caching, query optimization, and connection pooling.',
        date: 'Apr 10, 2026',
        readTime: '8 min read',
        tags: ['Node', 'Redis'],
        icon: <SiRedis className="text-red-400 text-2xl" />,
        featured: true,
        color: '#4ADE80',
    },
    {
        id: 2,
        category: 'React',
        title: 'React 19 — what actually changed and why it matters',
        excerpt:
            'Breaking down the new compiler, server components, and the death of useMemo.',
        date: 'Mar 28, 2026',
        readTime: '6 min read',
        tags: ['React', 'Frontend'],
        icon: <SiReact className="text-cyan-400 text-2xl" />,
        color: '#38BDF8',
    },
    {
        id: 3,
        category: 'DevOps',
        title: 'Docker in production — mistakes I made so you don\'t have to',
        excerpt:
            'From bloated images to memory leaks — a brutally honest post-mortem.',
        date: 'Mar 14, 2026',
        readTime: '5 min read',
        tags: ['Docker', 'DevOps'],
        icon: <FaDocker className="text-blue-400 text-2xl" />,
        color: '#60A5FA',
    },
    {
        id: 4,
        category: 'Node.js',
        title: 'JWT vs sessions — stop using the wrong one for your use case',
        excerpt:
            'An opinionated breakdown of auth strategies with real tradeoffs, not just theory.',
        date: 'Feb 27, 2026',
        readTime: '7 min read',
        tags: ['Auth', 'Node'],
        icon: <SiJsonwebtokens className="text-yellow-400 text-2xl" />,
        color: '#FACC15',
    },
    {
        id: 5,
        category: 'System Design',
        title: 'Designing a URL shortener that handles 10k writes per second',
        excerpt:
            'A system design deep-dive covering hashing, database sharding, and CDN strategy.',
        date: 'Feb 12, 2026',
        readTime: '10 min read',
        tags: ['Design', 'SQL'],
        icon: <MdDesignServices className="text-purple-400 text-2xl" />,
        color: '#C084FC',
    },
    {
        id: 6,
        category: 'Career',
        title: 'How I landed my first senior role without a CS degree',
        excerpt:
            'Projects, open source, and the unconventional resume that got past every ATS.',
        date: 'Jan 30, 2026',
        readTime: '4 min read',
        tags: ['Career'],
        icon: <FaBriefcase className="text-orange-400 text-2xl" />,
        color: '#FB923C',
    },
    {
        id: 7,
        category: 'React',
        title: 'Testing React apps in 2026 — Vitest + RTL is the only stack you need',
        excerpt:
            'Why I dropped Jest and Enzyme and never looked back. With full setup guide.',
        date: 'Jan 18, 2026',
        readTime: '9 min read',
        tags: ['Testing', 'React'],
        icon: <BiTestTube className="text-green-400 text-2xl" />,
        color: '#4ADE80',
    },
];

const filters = ['All Posts', 'React', 'Node.js', 'System Design', 'DevOps', 'Career'];

/* ─── Main Component ─────────────────────────────── */
function Blog() {
    const titleRef  = useReveal('animate-fadeInUp');
    const featRef   = useReveal('animate-scaleIn');

    const [activeFilter, setActiveFilter] = useState('All Posts');
    const [search, setSearch]             = useState('');
    const [visibleCount, setVisibleCount] = useState(6);

    const featured   = posts[0];
    const gridPosts  = posts.slice(1);

    const filtered = gridPosts.filter((p) => {
        const matchFilter =
            activeFilter === 'All Posts' ||
            p.category.toLowerCase() === activeFilter.toLowerCase() ||
            p.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase());
        const matchSearch =
            search === '' ||
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });

    const visible = filtered.slice(0, visibleCount);

    return (
        <main className="bg-gray-50 dark:bg-[#0b1215] text-black dark:text-white transition min-h-screen">

            {/* ── HERO BANNER ─────────────────────────────── */}
            <section className="relative py-20 px-4 text-center overflow-hidden">
                {/* decorative blobs */}
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

                <div ref={titleRef} className="scroll-hidden relative max-w-2xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
                        Writing & Thoughts
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Blog &{' '}
                        <span className="text-primary">Articles</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
                        Deep dives into software engineering, system design, and the developer life.
                        Written for developers, by a developer.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-24 space-y-14">

                {/* ── SEARCH + FILTERS ────────────────────── */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between flex-wrap">
                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => { setActiveFilter(f); setVisibleCount(6); }}
                                className={`text-xs sm:text-sm px-4 py-1.5 rounded-full border font-medium transition-all duration-200
                                    ${activeFilter === f
                                        ? 'bg-primary border-primary text-white'
                                        : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary dark:hover:text-primary'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full sm:w-56">
                        <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setVisibleCount(6); }}
                            className="w-full bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700
                                       focus:border-primary focus:ring-1 focus:ring-primary
                                       rounded-full pl-9 pr-4 py-2 text-sm placeholder:text-gray-400
                                       outline-none transition-all duration-200"
                        />
                    </div>
                </div>

                {/* ── FEATURED POST ────────────────────────── */}
                <div ref={featRef} className="scroll-hidden">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
                        ★ Featured Post
                    </p>
                    <div
                        className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700
                                   hover:border-primary transition-all duration-300
                                   bg-white dark:bg-[#111827] shadow-sm hover:shadow-xl
                                   grid grid-cols-1 md:grid-cols-2"
                    >
                        {/* Code preview panel */}
                        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]
                                        flex items-center justify-center p-8 sm:p-10 min-h-[220px] md:min-h-[280px]">
                            <pre className="font-mono text-[12px] sm:text-[13px] text-[#a5b4fc] leading-loose whitespace-pre-wrap">
                                <span className="text-[#f472b6]">const</span>{" "}
                                <span className="text-[#60a5fa]">optimize</span> ={" "}
                                <span className="text-[#f472b6]">async</span> (query) =&gt; {"{"}{"\n"}
                                {"  "}<span className="text-[#f472b6]">const</span> cache ={" "}
                                <span className="text-[#f472b6]">await</span> redis.
                                <span className="text-[#60a5fa]">get</span>(query);{"\n"}
                                {"  "}<span className="text-[#f472b6]">if</span> (cache){" "}
                                <span className="text-[#f472b6]">return</span> cache;{"\n"}
                                {"  "}<span className="text-[#f472b6]">const</span> result ={" "}
                                <span className="text-[#f472b6]">await</span> db.
                                <span className="text-[#60a5fa]">query</span>({"  "}
                                <span className="text-[#34d399]">`SELECT * FROM posts`</span>
                                {"  "});{"\n"}
                                {"  "}<span className="text-[#f472b6]">return</span> result;{"\n"}
                                {"}"}
                            </pre>
                        </div>

                        {/* Featured body */}
                        <div className="p-6 sm:p-8 flex flex-col justify-between gap-6">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                                        {featured.category}
                                    </span>
                                    <span className="text-xs text-gray-400">{featured.readTime}</span>
                                </div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-3">
                                    {featured.title}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {featured.excerpt}
                                </p>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {featured.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-primary bg-primary/10 px-2.5 py-0.5 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3 flex-wrap">
                                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                    P
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">Prince Movaliya</p>
                                    <p className="text-xs text-gray-400">{featured.date}</p>
                                </div>
                                <button
                                    className="ml-auto flex items-center gap-2 px-5 py-2 bg-primary
                                               hover:bg-teal-600 text-white text-sm font-semibold
                                               rounded-full transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    Read Article <CgArrowLongRight className="text-lg" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── POSTS GRID ───────────────────────────── */}
                {visible.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visible.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-gray-400 text-sm">
                        <p className="text-4xl mb-4">🔍</p>
                        No articles found. Try a different filter or search term.
                    </div>
                )}

                {/* Load more */}
                {visible.length < filtered.length && (
                    <div className="text-center">
                        <button
                            onClick={() => setVisibleCount((c) => c + 3)}
                            className="px-8 py-3 border border-primary text-primary font-semibold
                                       rounded-full text-sm hover:bg-primary hover:text-white
                                       transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Load More Articles
                        </button>
                    </div>
                )}

                {/* ── NEWSLETTER ───────────────────────────── */}
                <NewsletterSection />
            </div>
        </main>
    );
}

/* ─── Blog Card ──────────────────────────────────── */
function BlogCard({ post, index }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add('animate-fadeInUp');
                        el.classList.remove('scroll-hidden');
                    }, index * 80);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [index]);

    return (
        <div
            ref={ref}
            className="scroll-hidden group flex flex-col
                       bg-white dark:bg-[#111827]
                       rounded-2xl p-6
                       border border-gray-200 dark:border-gray-700 hover:border-primary
                       shadow-sm hover:shadow-lg
                       transition-all duration-300 hover:-translate-y-1.5
                       cursor-pointer"
        >
            {/* Icon */}
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0"
                style={{ backgroundColor: `${post.color}18` }}
            >
                {post.icon}
            </div>

            {/* Category + read time */}
            <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                    {post.category}
                </span>
                <span className="text-[10px] text-gray-400">· {post.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <span className="text-xs text-gray-400">{post.date}</span>
                <div className="flex gap-1.5 flex-wrap justify-end">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── Newsletter Section ─────────────────────────── */
function NewsletterSection() {
    const ref = useReveal('animate-scaleIn');
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) { setSubscribed(true); setEmail(''); }
    };

    return (
        <div
            ref={ref}
            className="scroll-hidden bg-white dark:bg-[#111827]
                       rounded-3xl p-8 sm:p-12 text-center
                       border border-gray-200 dark:border-gray-700
                       shadow-sm relative overflow-hidden"
        >
            {/* decorative blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {subscribed ? (
                <div className="animate-scaleIn flex flex-col items-center gap-3">
                    <span className="text-4xl">🎉</span>
                    <h3 className="text-lg font-bold">You're subscribed!</h3>
                    <p className="text-sm text-gray-400">New articles will land in your inbox.</p>
                    <button
                        onClick={() => setSubscribed(false)}
                        className="mt-2 text-xs text-primary underline underline-offset-2"
                    >
                        Subscribe another email
                    </button>
                </div>
            ) : (
                <>
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
                        Newsletter
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay in the loop</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                        New articles every two weeks. No spam, no fluff — just dev content worth reading.
                    </p>
                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 bg-gray-50 dark:bg-[#0b1215]
                                       border border-gray-200 dark:border-gray-600
                                       focus:border-primary focus:ring-1 focus:ring-primary
                                       rounded-full px-5 py-2.5 text-sm placeholder:text-gray-400
                                       outline-none transition-all duration-200"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-primary hover:bg-teal-600 text-white
                                       text-sm font-semibold rounded-full transition-all duration-200
                                       hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                        >
                            Subscribe
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}

export default Blog;