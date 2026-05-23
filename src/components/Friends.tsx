import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Friend = {
  name: string;
  desc: string;
};

const baseFriends: Friend[] = [
  { name: "Lin Čadež", desc: "Backend developer, drone pilot & BlueJ lover." },
  { name: "Jaka Černetič", desc: "Designer and Reddit user." },
  { name: "Andriy Gryban", desc: "Web developer & akvavent.si" },
  { name: "Dorian Mahnič Dobrovoljc", desc: "Java lover (minecraft) & amateur radio operator." },
];

const Friends: React.FC = () => {
  const { t, language } = useLanguage();

  const friends =
    Array.isArray(t?.friends?.list) && t.friends.list.length > 0
      ? t.friends.list
      : baseFriends;

  return (
   <section id="friends" className="py-24 px-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Animated title */}
        <div className="overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.h2
              key={language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-200"
            >
              {t?.friends?.title || "Friends I Know"}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Friends grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((f, index) => (
            <AnimatePresence mode="wait" key={`${f.name}-${language}`}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4, // same as title
                  ease: "easeOut",
                  delay: index * 0.05, // subtle stagger remains
                }}
                className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-white">{f.name}</h3>
                <p className="text-sm text-white/75 mt-1">{f.desc}</p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;
