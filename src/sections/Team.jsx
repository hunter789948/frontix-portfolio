import { motion } from "framer-motion";

const team = [
  {
    name: "Samyadeep Mondal",
    role: "Founder & Frontend Lead",
    bio: "Builds premium, high-performance web experiences with a focus on UI clarity, motion, and scalable architecture.",
    image: "/team/Samya.jpeg",
    featured: true,
  },
  {
    name: "Megha Das",
    role: "Excel & Data Specialist",
    bio: "Designs structured dashboards, automation systems, and reporting workflows that bring clarity to business data.",
    image: "/team/Megha.jpg",
  },
  {
    name: "Bristi",
    role: "Presentation & PPT Designer",
    bio: "Creates high-impact decks and business presentations with strong storytelling and visual precision.",
    image: "/team/Bristi.jpeg",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative bg-black px-6 py-32 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#00C4C8]/10 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-white mb-6"
        >
          Meet the Team Behind <span className="text-[#00C4C8]">FrontIX</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mb-20"
        >
          A small, specialized studio combining design, technology, and business thinking
          to deliver high-quality digital solutions.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl p-8 backdrop-blur-xl transition
                ${
                  member.featured
                    ? "bg-[#0b0f10] border border-[#00C4C8]/40 shadow-[0_0_0_1px_rgba(0,196,200,0.2)]"
                    : "bg-[#0b0f10]/80 border border-white/10 hover:border-[#00C4C8]/30"
                }
              `}
            >
              {/* Glow for featured */}
              {member.featured && (
                <div className="absolute -inset-[1px] rounded-2xl bg-[#00C4C8]/10 blur-xl opacity-60 pointer-events-none" />
              )}

              <div className="relative z-10">
                {/* Image */}
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 
                                border border-white/10 ring-2 ring-[#00C4C8]/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-[#00C4C8] text-sm mb-4 tracking-wide">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Tagline */}
                <div className="mt-6 text-xs text-white/40">
                  {member.featured
                    ? "Leading design, architecture & client experience"
                    : "Focused on precision and quality delivery"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
