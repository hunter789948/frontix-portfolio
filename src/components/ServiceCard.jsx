import { motion } from "framer-motion";

const cardReveal = {
  hidden: {
    opacity: 0.3,
    y: 28
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ServiceCard({ title, desc }) {
  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -6 }}
      className="relative group rounded-2xl"
    >
      {/* Glow ring */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#00C4C8]/30 via-[#40A4A9]/20 to-[#009BB2]/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />

      {/* Card content */}
      <div className="relative z-10 rounded-2xl border border-white/10 bg-[#0b0f10] p-8">
        <h3 className="text-xl font-semibold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
