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
        fixed right-4 top-4 md:right-6 md:top-4 bottom-4 md:bottom-auto
        z-[60]
        w-[88px] h-[36px]
        rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-md
        flex items-center justify-between
        transition-all duration-300 hover:bg-white/15 active:scale-95
        outline-none focus:outline-none
      "
    >
      {/* === Sliding highlight === */}
      <motion.div
        layout
        initial={false}
        animate={{ x: isEN ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="
          absolute top-[5px] left-[4px]
          w-[calc(50%-6px)] h-[26px]
          rounded-full bg-white/25 backdrop-blur-md shadow-inner
        "
        style={{ transformOrigin: "center" }}
      >
        {/* Reflection */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent opacity-40 pointer-events-none" />
      </motion.div>

      {/* === Labels === */}
      <div className="w-full h-full grid grid-cols-2 items-center text-[13px] font-bold leading-none select-none">
        <span
          className={`text-center pl-[3px] ${
            isEN ? "text-cyan-300" : "text-white/85"
          }`}
        >
          EN
        </span>
        <span
          className={`text-center pr-[3px] ${
            !isEN ? "text-cyan-300" : "text-white/85"
          }`}
        >
          SLO
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;
