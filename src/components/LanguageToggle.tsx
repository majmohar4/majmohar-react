import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const isEN = language === "EN";

  return (
    <button
      onClick={() => setLanguage(isEN ? "SLO" : "EN")}
      aria-label="Toggle language"
      className="
        fixed right-4 top-4 md:right-6 md:top-5 z-[60]
        flex items-center
        w-[78px] h-[34px] rounded-full
        bg-white/5 border border-white/15
        backdrop-blur-xl shadow-lg
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
          absolute top-1/2 -translate-y-1/2 left-0
          w-[38px] h-[28px] rounded-full
          bg-gradient-to-b from-cyan-400/35 to-cyan-500/20
          border border-cyan-300/35
          shadow-[0_0_12px_-2px_rgba(34,211,238,0.5)]
        "
      />

      {/* Labels */}
      <span
        className={`relative z-10 flex-1 text-center text-[11px] font-bold tracking-wider transition-colors ${
          isEN ? "text-cyan-200" : "text-white/55"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-[11px] font-bold tracking-wider transition-colors ${
          !isEN ? "text-cyan-200" : "text-white/55"
        }`}
      >
        SLO
      </span>
    </button>
  );
};

export default LanguageToggle;
