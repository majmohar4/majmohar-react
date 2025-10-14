import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Video {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail?: string;
}

const videosData: Video[] = [
  {
    id: "video-1",
    title: "Project Demo",
    description: "A walkthrough of my latest web application project",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "video-2",
    title: "Christian Animation Work",
    description: "Sample of my animation projects",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "video-3",
    title: "Radio Amateur Activities",
    description: "My journey as S59MU radio amateur",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const Videos = () => {
  const { t, language } = useLanguage();
  const transition = { duration: 0.4, ease: "easeOut" };

  return (
    <section id="videos" className="px-6 pt-8 pb-20">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Animated title */}
        <div className="overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`videos-title-${language}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={transition}
              className="text-4xl md:text-5xl font-bold font-grotesk"
            >
              {t?.videos?.title || "Videos"}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Animated video cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.map((video, index) => (
            <AnimatePresence mode="wait" key={`${video.id}-${language}`}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  ...transition,
                  delay: index * 0.05, // subtle stagger
                }}
                className="glass rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative aspect-video bg-card/50">
                  <iframe
                    src={video.embedUrl}
                    className="w-full h-full"
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-6 space-y-2">
                  <motion.h3
                    key={`${video.id}-title-${language}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={transition}
                    className="text-xl font-semibold font-grotesk flex items-center gap-2"
                  >
                    <Play className="w-5 h-5 text-primary" />
                    {video.title}
                  </motion.h3>

                  <motion.p
                    key={`${video.id}-desc-${language}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={transition}
                    className="text-sm text-muted-foreground"
                  >
                    {video.description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
