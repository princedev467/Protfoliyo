import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    category: "System design",
    title: "Scaling Node.js to 1M requests per day with Redis caching",
    excerpt:
      "How I took a sluggish Express API from 200ms average response time down to under 20ms using strategic Redis caching, query optimization, and connection pooling.",
    date: "Apr 10, 2026",
    readTime: "8 min read",
    tags: ["Node", "Redis"],
    icon: "🗄️",
    featured: true,
  },
  {
    id: 2,
    category: "React",
    title: "React 19 — what actually changed and why it matters",
    excerpt:
      "Breaking down the new compiler, server components, and the death of useMemo.",
    date: "Mar 28, 2026",
    readTime: "6 min read",
    tags: ["React", "Frontend"],
    icon: "⚛️",
  },
  {
    id: 3,
    category: "DevOps",
    title: "Docker in production — mistakes I made so you don't have to",
    excerpt:
      "From bloated images to memory leaks — a brutally honest post-mortem.",
    date: "Mar 14, 2026",
    readTime: "5 min read",
    tags: ["Docker", "DevOps"],
    icon: "🐳",
  },
  {
    id: 4,
    category: "Node.js",
    title: "JWT vs sessions — stop using the wrong one for your use case",
    excerpt:
      "An opinionated breakdown of auth strategies with real tradeoffs, not just theory.",
    date: "Feb 27, 2026",
    readTime: "7 min read",
    tags: ["Auth", "Node"],
    icon: "🔐",
  },
  {
    id: 5,
    category: "System design",
    title: "Designing a URL shortener that handles 10k writes per second",
    excerpt:
      "A system design deep-dive covering hashing, database sharding, and CDN strategy.",
    date: "Feb 12, 2026",
    readTime: "10 min read",
    tags: ["Design", "SQL"],
    icon: "🗄️",
  },
  {
    id: 6,
    category: "Career",
    title: "How I landed my first senior role without a CS degree",
    excerpt:
      "Projects, open source, and the unconventional resume that got past every ATS.",
    date: "Jan 30, 2026",
    readTime: "4 min read",
    tags: ["Career"],
    icon: "💼",
  },
  {
    id: 7,
    category: "React",
    title: "Testing React apps in 2026 — Vitest + RTL is the only stack you need",
    excerpt:
      "Why I dropped Jest and Enzyme and never looked back. With full setup guide.",
    date: "Jan 18, 2026",
    readTime: "9 min read",
    tags: ["Testing", "React"],
    icon: "🧪",
  },
];

const filters = ["All posts", "React", "Node.js", "System design", "Career", "DevOps"];

const featured = posts[0];
const gridPosts = posts.slice(1);

function Blog(props) {
     const [activeFilter, setActiveFilter] = useState("All posts");
      const [search, setSearch] = useState("");
    
      const filtered = gridPosts.filter((p) => {
        const matchFilter =
          activeFilter === "All posts" ||
          p.category.toLowerCase() === activeFilter.toLowerCase() ||
          p.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase());
        const matchSearch =
          search === "" ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
      });
    
    return (
         <div className="min-h-screen bg-gray-50   dark:bg-[#0d0d0f] dark:text-[#e2e2e2] font-sans">
   

      {/* Hero */}
      <div className="px-12 py-16 border-b border-[#1e1e22]">
        <span className="inline-block text-[11px] uppercase tracking-widest text-[#7f77dd] bg-[#7f77dd]/10 px-3 py-1 rounded-full mb-4">
          Writing & Thoughts
        </span>
        <h1 className="text-4xl  text-primary dark:text-white mb-4  font-extrabold ">Blog & Articles</h1>
        <p className="text-[15px] text-[#888] max-w-lg leading-relaxed">
          Deep dives into software engineering, system design, and the occasional rant
          about code quality. Written for developers, by a developer.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 px-12 py-5 border-b border-[#1e1e22]">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`text-[13px] px-4 py-1.5 rounded-full border transition-all ${
              activeFilter === f
                ? " dark:bg-[#7f77dd]/15 border-[#7f77dd] text-[#b0a8f8]"
                : "dark:border-[#2a2a2e] text-[#888] hover:border-[#7f77dd] hover:text-[#b0a8f8]"
            }`}
          >
            {f}
          </button>
        ))}
        <div className="ml-auto">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className= "bg-gray-50 text-black dark:bg-[#1a1a1f] border border-[#2a2a2e] focus:border-[#7f77dd] rounded-full px-4 py-1.5 text-[13px] text-[#e2e2e2] placeholder-[#555] outline-none w-52 transition-colors"
          />
        </div>
      </div>

      {/* Featured post */}
      <div className="px-12 py-10 border-b border-[#1e1e22]">
        <p className="text-[11px] uppercase tracking-widest text-[#555] mb-5">
          Featured post
        </p>
        <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-[#2a2a2e] bg-[#13131a]">
          {/* Code preview panel */}
          <div className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] flex items-center justify-center p-10 min-h-[260px]">
            <pre className="font-mono text-[13px] text-[#a5b4fc] leading-loose">
              <span className="text-[#f472b6]">const</span>{" "}
              <span className="text-[#60a5fa]">optimize</span> ={" "}
              <span className="text-[#f472b6]">async</span> (query) =&gt; {"{"}
              {"\n"}
              {"  "}
              <span className="text-[#f472b6]">const</span> cache ={" "}
              <span className="text-[#f472b6]">await</span> redis.
              <span className="text-[#60a5fa]">get</span>(query);{"\n"}
              {"  "}
              <span className="text-[#f472b6]">if</span> (cache){" "}
              <span className="text-[#f472b6]">return</span> cache;{"\n"}
              {"  "}
              <span className="text-[#f472b6]">const</span> result ={" "}
              <span className="text-[#f472b6]">await</span> db.
              <span className="text-[#60a5fa]">query</span>({"\n"}
              {"    "}
              <span className="text-[#34d399]">`SELECT * FROM posts`</span>
              {"\n"}
              {"  "});{"\n"}
              {"  "}
              <span className="text-[#f472b6]">return</span> result;{"\n"}
              {"}"}
            </pre>
          </div>

          {/* Featured body */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] bg-[#7f77dd]/15 text-[#b0a8f8] px-3 py-1 rounded">
                  {featured.category}
                </span>
                <span className="text-[12px] text-[#555]">{featured.readTime}</span>
              </div>
              <h2 className="text-[22px] font-medium text-white leading-snug mb-3">
                {featured.title}
              </h2>
              <p className="text-[14px] text-[#888] leading-relaxed mb-6">
                {featured.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7f77dd]/20 flex items-center justify-center text-[12px] font-medium text-[#b0a8f8]">
                YN
              </div>
              <div>
                <p className="text-[13px] text-[#ccc]">PRINCE</p>
                <p className="text-[12px] text-[#555]">{featured.date}</p>
              </div>
              <button className="ml-auto text-[13px] px-5 py-2 bg-[#7f77dd] hover:bg-[#9d97e8] text-white rounded-md transition-colors">
                Read →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-3 divide-x divide-y divide-[#1e1e22] border-t border-[#1e1e22]">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="p-8 hover:bg-[#13131a] transition-colors cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-[#7f77dd]/10 flex items-center justify-center text-base mb-4">
              {post.icon}
            </div>
            <p className="text-[11px] uppercase tracking-widest text-[#555] mb-2">
              {post.category}
            </p>
            <h3 className="text-[16px] font-medium text-[#e2e2e2] leading-snug mb-2">
              {post.title}
            </h3>
            <p className="text-[13px] text-[#666] leading-relaxed mb-5">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#444]">{post.date}</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-[#7f77dd] bg-[#7f77dd]/10 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-3 py-20 text-center text-[#444] text-sm">
            No articles found. Try a different filter or search term.
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className="px-12 py-14 border-t border-[#1e1e22] text-center">
        <h3 className="text-xl font-medium text-white mb-2">Stay in the loop</h3>
        <p className="text-[14px] text-[#666] mb-6">
          New articles every two weeks. No spam, no fluff — just dev content worth reading.
        </p>
        <div className="flex gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-[#1a1a1f] border border-[#2a2a2e] focus:border-[#7f77dd] rounded-md px-4 py-2.5 text-[14px] text-[#e2e2e2] placeholder-[#555] outline-none transition-colors"
          />
          <button className="px-5 py-2.5 bg-[#7f77dd] hover:bg-[#9d97e8] text-white text-[14px] rounded-md transition-colors">
            Subscribe
          </button>
        </div>
      </div>


    </div>
    );
}

export default Blog;