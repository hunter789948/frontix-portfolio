import { motion } from "framer-motion";

const projects = [
  {
    title: "Sports Stories Platform",
    desc: "Premium storytelling platform with smooth UX, clean navigation, and real-time content integration.",
    tools: "Web Design · React · UX · Motion",
    preview: "/projects/sports.png",
    link: "https://knowledge-sports-stories.vercel.app/",
    button: "Visit Website →",
  },
  {
    title: "Product Performance Analytics Dashboard",
    desc: "Built a structured Excel dashboard that transforms raw product data into clear visual insights using comparative charts and organized layouts.",
    tools: "Microsoft Excel · Data Visualization · Dashboard Design",
    preview: "/projects/excel-dashboard.png",
    link: "/projects/excel-dashboard.pdf",
    button: "View Full Dashboard →",
  },
  {
    title: "Football as a Business – Presentation Deck",
    desc: "A professionally designed presentation exploring football as a global business industry, covering revenue models, branding, media impact, and economic value.",
    tools: "PowerPoint · Presentation Design · Visual Hierarchy · Content Structuring",
    preview: "/projects/ppt-desk.png",
    link: "/projects/FOOTBALL.pdf",
    button: "View Slides →",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative bg-black px-6 py-32 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#00C4C8]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* INTRO (full width now) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
            We build solutions that <br />
            help brands <span className="text-[#00C4C8]">grow</span>.
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              Frontix is a digital agency helping startups, founders, and businesses
              create premium websites, intelligent Excel systems, and high-impact presentations.
            </p>

            <p>
              Our work blends strong visual identity, clean systems, and thoughtful execution —
              designed to look premium, communicate clearly, and support real outcomes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {["Premium UI & UX", "Business-focused", "Excel clarity", "Story-driven decks"].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 bg-[#0b0f10]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="block group bg-[#0b0f10]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-[#00C4C8]/40 transition"
            >
              <img
                src={project.preview}
                alt={project.title}
                className="rounded-xl mb-6 border border-white/10 object-cover"
              />

              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.desc}
              </p>

              <div className="text-[#00C4C8] text-xs font-medium mb-4">
                {project.tools}
              </div>

              <div className="text-white text-sm opacity-0 group-hover:opacity-100 transition">
                {project.button}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
