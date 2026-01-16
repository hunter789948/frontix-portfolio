import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="text-white/80 hover:text-white transition text-lg"
    >
      {children}
    </a>
  );

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="text-2xl font-bold text-white">
            Front<span className="text-[#00C4C8]">IX</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-white/70 hover:text-white">
              Services
            </a>
            <a href="#work" className="text-white/70 hover:text-white">
              About
            </a>
            <a
              href="#cta"
              className="px-6 py-2 rounded-xl bg-[#00C4C8] text-black font-semibold"
            >
              Contact
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-black/60 text-white text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* THIN DIVIDER */}
      <div className="fixed top-[72px] left-0 w-full h-[1px] z-40 bg-gradient-to-r from-transparent via-[#00C4C8]/40 to-transparent pointer-events-none" />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed top-[72px] left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/5"
            >
              <div className="flex flex-col gap-6 px-6 py-8">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#work">About</NavLink>
                <NavLink href="#cta">
                  <span className="inline-block px-6 py-3 rounded-xl bg-[#00C4C8] text-black font-semibold">
                    Contact
                  </span>
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
