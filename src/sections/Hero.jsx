import { motion } from "framer-motion";
import TextType from "../components/TextType";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden bg-black text-white flex items-center">
      {/* Glow Blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#00C4C8] rounded-full blur-[160px] opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute top-1/3 -right-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#009BB2] rounded-full blur-[180px] opacity-25"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="font-heading font-extrabold leading-tight 
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I build{" "}
          <span className="text-[#00C4C8] inline-block min-w-[12ch]">
            <TextType
              text={["premium", "high-converting", "modern", "animated"]}
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
            />
          </span>
          <br />
          frontend websites
          <br />
          that convert.
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-gray-300 font-body leading-relaxed"
        >
          Modern, animated, high-performance websites built with React,
          Tailwind, and cinematic UI motion.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 font-body"
        >
          <a
            href="#contact"
            className="relative px-7 py-4 rounded-xl bg-[#00C4C8] text-black font-semibold overflow-hidden group text-center"
          >
            <span className="relative z-10">Let’s Work</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition" />
          </a>

          <a
            href="#work"
            className="px-7 py-4 rounded-xl border border-gray-600 hover:border-[#00C4C8] transition text-center"
          >
            View Work
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 sm:h-48 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
