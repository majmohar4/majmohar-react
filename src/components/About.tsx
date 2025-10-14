import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-8"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-16 items-center">
        {/* Left: Photo */}
        <div className="flex justify-center md:justify-center">
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-[25px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
            <img
              src="/files/images/profilna.jpeg"
              alt="Maj Mohar"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Text + Videos */}
        <div className="flex flex-col justify-center gap-10 text-left">
          {/* Animated Title */}
          <div className="overflow-hidden h-[60px]">
            <AnimatePresence mode="wait">
              <motion.h2
                key={language}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-200"
              >
                {t?.about?.title || "About Me"}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Animated Paragraphs */}
          <div className="space-y-4 text-white/85 leading-relaxed">
            <AnimatePresence mode="wait">
              <motion.p
                key={`about-intro-${language}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-white/85 leading-relaxed"
              >
                {t?.about?.intro}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`about-p2-${language}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-white/85 leading-relaxed"
              >
                {t?.about?.p2}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`about-p3-${language}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-white/85 leading-relaxed"
              >
                {t?.about?.p3}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-video shadow-lg">
              <LiteYouTubeEmbed
                id="8JdwZ2xW09U"
                title="Zorica - Maj Mohar"
              />
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-video shadow-lg">
              <LiteYouTubeEmbed
                id="c_5o7RdhAA4"
                title="Queen – Bohemian Rhapsody"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
