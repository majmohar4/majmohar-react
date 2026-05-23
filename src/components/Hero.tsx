import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const FALLBACK_ROLES = ["Developer", "Musician", "Dancer", "Engineer", "Creator"];

const Hero = () => {
  const { t } = useLanguage();
  const roles: string[] = Array.isArray(t?.hero?.roles)
    ? t.hero.roles
    : FALLBACK_ROLES;
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-pulse-slow" />

      <div className="text-center space-y-6 relative z-10">
        {/* Static title — never changes */}
        <h1 className="text-6xl md:text-8xl font-bold font-grotesk tracking-wide animate-fade-in-up">
          Maj Mohar
        </h1>

        {/* 1️⃣ Rotating roles */}
        <div className="h-16 flex flex-col items-center justify-center gap-3">
          <p className="text-2xl md:text-3xl text-muted-foreground font-inter">
            <span className="inline-block min-w-[240px] relative h-10">
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    index === currentRole
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {role}
                </span>
              ))}
            </span>
          </p>
        </div>

        {/* 2️⃣ Static tagline (animates on language change) */}
        <div className="h-6 md:h-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed px-2"
            >
              {t?.hero?.tagline}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll arrow */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="absolute bottom-12 cursor-pointer group z-10"
      >
        <ChevronDown
          className="w-10 h-10 text-primary animate-bounce-subtle group-hover:text-accent group-hover:scale-110 transition-all duration-300 drop-shadow-glow"
          strokeWidth={2}
        />
      </Link>
    </section>
  );
};

export default Hero;
