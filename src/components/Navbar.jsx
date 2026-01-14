import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="relative group text-base font-medium tracking-wide text-gray-300 hover:text-white transition"
    >
      {children}

      {/* Underline only on hover */}
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#00C4C8] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between font-nav">
          
          {/* Logo */}
          <a
            href="#top"
            className="text-2xl md:text-3xl font-bold tracking-tight text-white"
          >
            Front<span className="text-[#00C4C8]">IX</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">About</NavLink>

            {/* Contact button */}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-xl bg-[#00C4C8] text-black font-semibold text-base hover:opacity-90 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* Divider */}
      <div
        className="fixed top-[84px] left-0 w-full h-px z-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,196,200,0.6), transparent)",
        }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10 text-4xl font-nav"
          >
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="text-white hover:text-[#00C4C8]"
            >
              Services
            </a>

            <a
              href="#work"
              onClick={() => setOpen(false)}
              className="text-white hover:text-[#00C4C8]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-[#00C4C8] font-semibold"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
