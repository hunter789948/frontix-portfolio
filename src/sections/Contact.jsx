import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center px-6 bg-black overflow-hidden scroll-mt-28"
    >
      {/* Ambient cinematic glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#00C4C8]/10 blur-[200px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={reveal}>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
            Let’s build something{" "}
            <span className="text-[#00C4C8]">premium</span>
          </h2>

          <p className="text-white/60 max-w-md leading-relaxed mb-10">
            Have a project in mind? Share the details and I’ll personally reach
            out to craft something fast, cinematic, and scalable.
          </p>

          <div className="text-sm text-white/40 space-y-2">
            <p className="text-white text-lg font-semibold tracking-wide">
              Samyadeep Mondal
            </p>
            <p>Frontend Developer · Available for projects</p>

            <div className="pt-4 space-y-1">
              <p>
                <span className="text-white/30">Email:</span>{" "}
                <a
                  href="mailto:smondal14168@gmail.com"
                  className="hover:text-[#00C4C8] transition"
                >
                  smondal14168@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          variants={reveal}
          className="relative bg-white/[0.035] border border-white/10 rounded-3xl p-10 md:p-12 backdrop-blur-xl shadow-[0_0_80px_rgba(0,196,200,0.08)] min-h-[540px] flex flex-col justify-center"
        >
          {/* subtle inner lighting */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent" />

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="relative space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00C4C8]/40 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00C4C8]/40 transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your contact number"
              required
              className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00C4C8]/40 transition"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Tell me about your project"
              required
              className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00C4C8]/40 transition resize-none"
            />

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              type="submit"
              className="w-full mt-3 py-4 rounded-full bg-[#00C4C8] text-black font-medium hover:opacity-90 transition"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message sent ✓"
                : status === "error"
                ? "Failed — try again"
                : "Send message"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
