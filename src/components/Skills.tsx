import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  icon: string;
}

const SkillCard: React.FC<{ title: string; skills: Skill[]; language: string }> = ({
  title,
  skills,
  language,
}) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={`${title}-${language}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-xl flex flex-col items-center text-center"
    >
      <h4 className="font-semibold text-white mb-4">{title}</h4>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/90 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <img
              src={`/files/icons/${s.icon}`}
              alt={s.name}
              className="w-5 h-5 object-contain"
              loading="lazy"
            />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </AnimatePresence>
);

const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const transition = { duration: 0.4, ease: "easeOut" };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full space-y-12">
        {/* Animated title & paragraph */}
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${language}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={transition}
              className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-200"
            >
              {t?.skills?.title || "My Skills"}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${language}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={transition}
              className="mt-3 text-white/80 max-w-2xl mx-auto"
            >
              {t?.skills?.description ||
                "I enjoy working with JavaScript, Java, and C++ (especially with Arduino and ESP32). I use a mix of frameworks and tools to build efficient, creative solutions."}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard
            title={t?.skills?.learning || "Languages I'm Learning"}
            language={language}
            skills={[
              { name: "JavaScript", icon: "js-icon.svg" },
              { name: "Java", icon: "assembly-icon.svg" },
              { name: "C++ (Arduino & ESP32)", icon: "react-icon.svg" },
            ]}
          />

          <SkillCard
            title={t?.skills?.used || "Languages & Technologies I've Used"}
            language={language}
            skills={[
              { name: "Node.js", icon: "js-icon.svg" },
              { name: "React Native", icon: "react-icon.svg" },
              { name: "CMD", icon: "dark-mode.svg" },
              { name: "Batch", icon: "light-mode.svg" },
              { name: "Git", icon: "github-icon.svg" },
              { name: "C++", icon: "assembly-icon.svg" },
            ]}
          />

          <SkillCard
            title={t?.skills?.frameworks || "Frameworks & Libraries"}
            language={language}
            skills={[
              { name: "React Native", icon: "react-icon.svg" },
              { name: "ESP32 Framework", icon: "html-icon.svg" },
              { name: "Node.js", icon: "js-icon.png" },
            ]}
          />

          <SkillCard
            title={t?.skills?.tools || "Tools I Use"}
            language={language}
            skills={[
              { name: "VS Code", icon: "vs-code.svg" },
              { name: "Alt-Tab", icon: "alttab.png" },
              { name: "Maccy", icon: "maccy.png" },
              { name: "AlDente", icon: "aldente.png" },
              { name: "NearDrop", icon: "neardrop.png" },
              { name: "Raycast", icon: "raycast.png" },
              { name: "CodeRunner", icon: "coderunner.png" },
              { name: "Brave", icon: "brave.svg" },
              { name: "LocalSend", icon: "localsend.webp" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
