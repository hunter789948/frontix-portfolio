import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
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
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#00C4C8]/10 blur-[200px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={reveal}>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
            Let’s build something{" "}
            <span className="text-[#00C4C8]">premium</span>
          </h2>

          <p className="text-white/60 max-w-md leading-relaxed mb-8">
            Have a project in mind? Share the details and I’ll personally reach out
            to discuss how we can craft something fast, cinematic, and scalable.
          </p>

          <div className="text-sm text-white/40 space-y-2">
            <p className="text-white text-lg font-semibold tracking-wide">
              Samyadeep Mondal
            </p>
            <p>Frontend Developer · Available for projects</p>

            <div className="pt-3 space-y-1">
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
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 backdrop-blur-sm"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your contact number"
              required
              className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Tell me about your project"
              required
              className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition resize-none"
            />

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="w-full mt-4 py-4 rounded-full border border-white/20 text-white hover:border-white/40 transition"
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

      {/* Top fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-gradient-to-t from-transparent to-black" />
    </section>
  );
}
