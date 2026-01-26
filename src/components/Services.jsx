import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Design & Frontend Development",
    desc: "Premium websites built with React, modern UI, smooth animations, and conversion-focused structure."
  },
  {
    title: "Excel Dashboards & Automation",
    desc: "Advanced Excel systems, dashboards, trackers, and automated reports for smarter business decisions."
  },
  {
    title: "PowerPoint & Pitch Deck Design",
    desc: "High-impact presentations for startups, founders, agencies, and corporate teams."
  },
  {
    title: "UI Systems & Design Consistency",
    desc: "Reusable design systems that keep your product visually strong and scalable."
  },
  {
    title: "Performance & UX Optimization",
    desc: "Speed, clarity, accessibility, and UX improvements for existing products."
  },
  {
    title: "Ongoing Support & Retainers",
    desc: "Long-term technical and design support for growing teams and businesses."
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
          className="text-4xl md:text-5xl font-serif text-[#00C4C8] mb-6"
        >
          Services
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={scrollReveal}
          className="text-gray-400 max-w-2xl mb-20"
        >
         I help startups and businesses with premium websites, intelligent Excel systems, and high-impact presentations.

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
