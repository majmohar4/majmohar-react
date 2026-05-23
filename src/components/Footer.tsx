import React from "react";
import { Github, Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { SiDiscord } from "react-icons/si";

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const links = [
    { id: "home", label: t?.footer?.home, href: "#home" },
    { id: "about", label: t?.footer?.about, href: "#about" },
    { id: "skills", label: t?.footer?.skills, href: "#skills" },
    { id: "friends", label: t?.footer?.friends, href: "#friends" },
    { id: "projects", label: t?.footer?.projects, href: "#projects" },
    { id: "cv", label: t?.footer?.cv, href: "#cv" },
    { id: "contact", label: t?.footer?.contact, href: "#contact" },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-[#0a1c28]/95 to-[#061820]/95 backdrop-blur-xl border-t border-white/10 text-white/80 pt-20 pb-8 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 📬 Contact */}
        <div>
          <AnimatePresence mode="wait">
            <motion.h3
              key={`contact-${language}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-xl font-semibold mb-4 text-white"
            >
              {t?.footer?.contactTitle}
            </motion.h3>
          </AnimatePresence>

          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />
              <a
                href="mailto:info@majmohar.eu"
                className="hover:text-cyan-300 transition-all duration-200"
              >
                info@majmohar.eu
              </a>
            </li>

            <AnimatePresence mode="wait">
              <motion.li
                key={`callsign-${language}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-sm"
              >
                <span className="text-cyan-400 font-semibold">S59MU</span>{" "}
                <span>— {t?.footer?.radio}</span>
              </motion.li>
            </AnimatePresence>
          </ul>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <AnimatePresence mode="wait">
            <motion.h3
              key={`explore-${language}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-xl font-semibold mb-4 text-white"
            >
              {t?.footer?.exploreTitle}
            </motion.h3>
          </AnimatePresence>

          <ul className="space-y-2">
            {links.map((link) => (
              <AnimatePresence mode="wait" key={`${link.id}-${language}`}>
                <motion.li
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    className="hover:text-cyan-300 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              </AnimatePresence>
            ))}
          </ul>
        </div>

        {/* 🌐 Connect */}
        <div>
          <AnimatePresence mode="wait">
            <motion.h3
              key={`connect-${language}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-xl font-semibold mb-4 text-white"
            >
              {t?.footer?.connectTitle}
            </motion.h3>
          </AnimatePresence>

          <div className="flex items-center gap-5">
            {[
              { Icon: Github, href: "https://github.com/majmohar4" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/maj-mohar-393984305/" },
              { Icon: Instagram, href: "https://instagram.com/majmohar4" },
              { Icon: Youtube, href: "https://youtube.com/@majmohar" },
              { Icon: SiDiscord, href: "https://discord.com/users/1014769833688182825" },
              { Icon: Mail, href: "mailto:info@majmohar.eu" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -2 }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + Bottom line */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
        <p>© {new Date().getFullYear()} Maj Mohar — {t?.footer?.quote}</p>

        <div className="flex items-center mt-3 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.a
              key={`backtop-${language}`}
              href="#home"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              {t?.footer?.backToTop}
            </motion.a>
          </AnimatePresence>
          <span className="text-cyan-400 ml-1">↑</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
