import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TRACK_W = 78;
const TRACK_H = 34;
const PAD = 3;
const PILL_W = (TRACK_W - PAD * 2) / 2; // 36
const PILL_H = TRACK_H - PAD * 2;       // 28

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const isEN = language === "EN";

  return (
    <button
      onClick={() => setLanguage(isEN ? "SLO" : "EN")}
      aria-label="Toggle language"
      style={{ width: TRACK_W, height: TRACK_H }}
      className="
        fixed right-4 top-4 md:right-6 md:top-5 z-[60]
        flex items-center
        rounded-full
        bg-white/5 border border-white/15
        backdrop-blur-xl shadow-lg
        transition-colors duration-200
        hover:bg-white/10
        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
      "
    >
      {/* Sliding highlight (positioned via top/left only — no Tailwind transforms) */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ x: isEN ? 0 : PILL_W }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        style={{
          position: "absolute",
          top: PAD,
          left: PAD,
          width: PILL_W,
          height: PILL_H,
        }}
        className="
          rounded-full
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
