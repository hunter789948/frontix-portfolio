import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Frontend Development",
    desc: "High-performance React and Tailwind interfaces built for speed, clarity, and scale."
  },
  {
    title: "Landing Pages",
    desc: "Conversion-focused landing pages for startups, creators, and agencies."
  },
  {
    title: "Figma to React",
    desc: "Pixel-perfect Figma designs transformed into clean, responsive React code."
  },
  {
    title: "Dashboards & UI Systems",
    desc: "Modern dashboards, admin panels, and reusable component libraries."
  },
  {
    title: "Performance & UX Audits",
    desc: "Speed, accessibility, and UX improvements for existing websites."
  },
  {
    title: "Maintenance Retainers",
    desc: "Ongoing updates, fixes, and long-term frontend support."
  }
];

/* Parent container controls scroll reveal */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

/* React Bits–style scroll reveal text */
const scrollReveal = {
  hidden: {
    opacity: 0.35,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Ambient background light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#00C4C8]/10 blur-[160px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={scrollReveal}
          className="text-4xl md:text-5xl font-serif text-white mb-6"
        >
          Services
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={scrollReveal}
          className="text-gray-400 max-w-2xl mb-20"
        >
          I help startups and agencies build premium, high-performance frontend experiences.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
