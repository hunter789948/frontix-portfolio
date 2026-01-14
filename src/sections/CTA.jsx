import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/60 max-w-xl mx-auto mb-12"
        >
          Let’s build something fast, cinematic, and unforgettable.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-10 py-4 border border-white/20 rounded-full text-white hover:border-white/40 transition"
        >
          Start a conversation
        </motion.a>

      </div>
    </section>
  );
}
