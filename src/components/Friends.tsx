import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Friend = {
  name: string;
  desc: string;
  url?: string;
};

const baseFriends: Friend[] = [
  { name: "Lin Čadež", desc: "Backend developer, drone pilot & BlueJ lover.", url: "https://cadez.eu/" },
  { name: "Jaka Černetič", desc: "Designer and Reddit user.", url: "https://jaka.cernetic.cc/" },
  { name: "Andriy Gryban", desc: "Web developer & akvavent.si", url: "https://gribanica.eu" },
  { name: "Dorian Mahnič Dobrovoljc", desc: "Java lover (minecraft) & amateur radio operator." },
];

const Friends: React.FC = () => {
  const { t, language } = useLanguage();

  const friends: Friend[] =
    Array.isArray(t?.friends?.list) && t.friends.list.length > 0
      ? (t.friends.list as Friend[])
      : baseFriends;

  return (
    <section id="friends" className="py-24 px-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              {t?.friends?.title || "Friends"}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((f, index) => {
            const cardClass =
              "group block h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 shadow-lg hover:bg-white/[0.07] hover:border-cyan-300/30 hover:shadow-xl transition-all";

            const inner = (
              <>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{f.name}</h3>
                  {f.url && (
                    <ExternalLink
                      size={14}
                      className="mt-1 text-white/40 group-hover:text-cyan-300 transition-colors shrink-0"
                      aria-hidden
                    />
                  )}
                </div>
                <p className="text-sm text-white/75 mt-1">{f.desc}</p>
              </>
            );

            return (
              <AnimatePresence mode="wait" key={`${f.name}-${language}`}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                >
                  {f.url ? (
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Friends;
