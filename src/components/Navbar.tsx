import { useState, useEffect, useMemo } from "react";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Burger (mobile, top-left) */}
      <button
        className="fixed left-4 top-4 z-[60] md:hidden bg-white/10 border border-white/20 backdrop-blur-xl shadow-md rounded-full p-2.5 text-white/80 hover:text-cyan-300 transition-colors"
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Floating language toggle (top-right / bottom-right) */}
      <LanguageToggle />

      {/* Center pill (desktop) */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "scale-95 opacity-95" : "scale-100"
        }`}
      >
        <div className="hidden md:flex items-center justify-center rounded-[20px] px-8 py-2.5 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth
                  duration={500}
                  spy
                  offset={-100}
                  className={`cursor-pointer text-sm font-semibold tracking-wide transition-all relative ${
                    activeSection === item.id
                      ? "text-cyan-300"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <div className="overflow-hidden h-[22px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${item.id}-${language}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        {item.label}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile dropdown (under burger) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 px-6 py-4 rounded-[16px] bg-white/10 backdrop-blur-xl border border-white/20 text-center shadow-lg"
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.id}
                      smooth
                      duration={500}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-1 text-base font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-cyan-300"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
