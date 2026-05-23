import { useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import LanguageToggle from "@/components/LanguageToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const activeSection = useActiveSection([
    "home",
    "about",
    "skills",
    "friends",
    "projects",
    "cv",
    "contact",
  ]);

  const navItems = useMemo(
    () => [
      { id: "home", label: t?.nav?.home },
      { id: "about", label: t?.nav?.about },
      { id: "skills", label: t?.nav?.skills },
      { id: "cv", label: t?.nav?.cv },
      { id: "projects", label: t?.nav?.projects },
      { id: "contact", label: t?.nav?.contact },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* === Mobile: burger (top-left) === */}
      <button
        className="
          fixed left-4 top-4 z-[60] md:hidden
          w-10 h-10 flex items-center justify-center
          rounded-full bg-white/5 border border-white/15
          backdrop-blur-xl text-white/85
          hover:bg-white/10 hover:text-cyan-200
          transition-colors
          focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
        "
        onClick={() => setMenuOpen((p) => !p)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={menuOpen ? "x" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex"
          >
            {menuOpen ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* === Mobile: language toggle (top-right) === */}
      <LanguageToggle variant="floating" />

      {/* === Desktop: centered pill with embedded language toggle === */}
      <motion.nav
        initial={false}
        animate={{
          y: scrolled ? -2 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          hidden md:flex
        `}
      >
        <div
          className={`
            flex items-center gap-1 pl-3 pr-2 py-2 rounded-full
            border backdrop-blur-2xl
            transition-all duration-300
            ${
              scrolled
                ? "bg-[#0a1c28]/70 border-white/15 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
                : "bg-white/5 border-white/10 shadow-lg"
            }
          `}
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth
                    duration={500}
                    spy
                    offset={-100}
                    className="relative cursor-pointer px-4 py-1.5 rounded-full block"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-cyan-400/15 border border-cyan-300/25"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`
                        relative z-10 text-[13px] font-semibold tracking-wide transition-colors
                        ${isActive ? "text-cyan-200" : "text-white/75 hover:text-white"}
                      `}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={`${item.id}-${language}`}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.18 }}
                          className="inline-block"
                        >
                          {item.label}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <span className="mx-2 h-5 w-px bg-white/15" aria-hidden />

          {/* Embedded language toggle */}
          <LanguageToggle variant="inline" />
        </div>
      </motion.nav>

      {/* === Mobile: dropdown menu === */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="
                fixed top-[68px] left-4 right-4 z-50 md:hidden
                rounded-2xl bg-[#0a1c28]/85 border border-white/15
                backdrop-blur-2xl shadow-2xl
                px-3 py-3
              "
            >
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <Link
                        to={item.id}
                        smooth
                        duration={500}
                        offset={-80}
                        onClick={() => setMenuOpen(false)}
                        className={`
                          block px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors
                          ${
                            isActive
                              ? "bg-cyan-400/15 text-cyan-200 border border-cyan-300/25"
                              : "text-white/85 hover:bg-white/5 hover:text-white border border-transparent"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
