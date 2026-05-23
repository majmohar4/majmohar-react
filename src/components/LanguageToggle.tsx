import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Variant = "inline" | "floating";

interface LanguageToggleProps {
  variant?: Variant;
  className?: string;
}

const LanguageToggle = ({ variant = "inline", className = "" }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();
  const isEN = language === "EN";

  const wrapperBase =
    variant === "floating"
      ? "fixed right-4 top-4 z-[60] md:hidden"
      : "";

  return (
    <div className={`${wrapperBase} ${className}`}>
      <button
        onClick={() => setLanguage(isEN ? "SLO" : "EN")}
        aria-label="Toggle language"
        className="
          relative flex items-center
          w-[76px] h-[32px] rounded-full
          bg-white/5 border border-white/15
          backdrop-blur-xl
          transition-colors duration-200
          hover:bg-white/10
          focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
        "
      >
        {/* Sliding highlight */}
        <motion.span
          aria-hidden
          initial={false}
          animate={{ x: isEN ? 2 : 38 }}
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          className="
            absolute top-1/2 -translate-y-1/2
            w-[36px] h-[26px] rounded-full
            bg-gradient-to-b from-cyan-400/30 to-cyan-500/20
            border border-cyan-300/30
            shadow-[0_0_12px_-2px_rgba(34,211,238,0.45)]
          "
        />

        {/* Labels */}
        <span
          className={`relative z-10 flex-1 text-center text-[11px] font-bold tracking-wide transition-colors ${
            isEN ? "text-cyan-200" : "text-white/55"
          }`}
        >
          EN
        </span>
        <span
          className={`relative z-10 flex-1 text-center text-[11px] font-bold tracking-wide transition-colors ${
            !isEN ? "text-cyan-200" : "text-white/55"
          }`}
        >
          SLO
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;
