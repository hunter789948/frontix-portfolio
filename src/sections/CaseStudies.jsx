import { motion } from "framer-motion";

export default function Work() {
  return (
    <section id="work" className="relative bg-black px-6 py-32">
      
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#00C4C8]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT — About text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
            I design & build <br />
            frontend that <span className="text-[#00C4C8]">performs</span>.
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              I'm a frontend-focused developer helping startups, creators, and agencies
              turn ideas into high-performance, conversion-focused websites.
            </p>

            <p>
              My work blends clean UI systems, cinematic motion, and scalable React
              architecture — built to look premium, load fast, and grow with your product.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              "Performance-first",
              "Design-led engineering",
              "Clean React architecture",
              "Motion with restraint",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 bg-[#0b0f10]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Project cards */}
        <div className="space-y-8">

          {/* Card 1 */}
          <motion.a
            href="https://knowledge-sports-stories.vercel.app/" // <-- replace with real link
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="block group bg-[#0b0f10]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-[#00C4C8]/40 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Sports Stories Platform
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              A premium storytelling platform with smooth routing, scroll-based animations,
              and live sports data integration.
            </p>

            <div className="text-[#00C4C8] text-sm font-medium">
              React · Vite · Tailwind · Framer Motion
            </div>

            <div className="mt-6 text-white text-sm opacity-0 group-hover:opacity-100 transition">
              View Project →
            </div>
          </motion.a>

          {/* Card 2 */}
          <motion.a
            href="https://your-project-link-2.vercel.app" // <-- replace with real link
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="block group bg-[#0b0f10]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-[#00C4C8]/40 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Agency Portfolio Website
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              A high-conversion frontend agency site focused on typography,
              motion, and performance.
            </p>

            <div className="text-[#00C4C8] text-sm font-medium">
              React · Tailwind · Motion Design
            </div>

            <div className="mt-6 text-white text-sm opacity-0 group-hover:opacity-100 transition">
              View Project →
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
