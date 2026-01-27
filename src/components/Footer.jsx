import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaGithub,
} from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586868403660",
    icon: <FaFacebookF />,
    hover: "hover:text-[#1877F2] hover:border-[#1877F2]/40",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/frontix.web?igsh=NmVoeHY4MXI3M2pw",
    icon: <FaInstagram />,
    hover: "hover:text-[#E4405F] hover:border-[#E4405F]/40",
  },
  {
    name: "Snapchat",
    href: "https://snapchat.com/t/wqZ2gHbb",
    icon: <FaSnapchatGhost />,
    hover: "hover:text-[#FFFC00] hover:border-[#FFFC00]/40",
  },
  {
    name: "GitHub",
    href: "https://github.com/hunter789948",
    icon: <FaGithub />,
    hover: "hover:text-white hover:border-white/40",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black px-6 pt-20 pb-10 overflow-hidden">
      {/* Subtle top fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Brand */}
        <div className="text-xl font-semibold tracking-wide text-white">
          Front<span className="text-[#00C4C8]">IX</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#0b0f10] text-xl text-white transition-colors ${social.hover}`}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-10" />

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} FrontIX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
