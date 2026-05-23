import { useState } from "react";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type ProjectEntry = {
  title?: string;
  description?: string;
  problem?: string;
  solution?: string;
  github?: string;
  website?: string;
  image?: string;
};

const GRADIENTS = [
  "from-cyan-500/40 to-teal-700/40",
  "from-violet-500/40 to-fuchsia-700/40",
  "from-amber-500/40 to-rose-700/40",
  "from-emerald-500/40 to-cyan-700/40",
  "from-sky-500/40 to-indigo-700/40",
  "from-orange-500/40 to-red-700/40",
  "from-lime-500/40 to-emerald-700/40",
  "from-pink-500/40 to-purple-700/40",
  "from-yellow-500/40 to-orange-700/40",
  "from-blue-500/40 to-cyan-700/40",
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function ghOgImage(githubUrl: string): string | null {
  const m = githubUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!m) return null;
  return `https://opengraph.githubassets.com/1/${m[1]}/${m[2]}`;
}

function resolveImage(p: ProjectEntry): string | null {
  if (p.image) return p.image;
  if (p.github) return ghOgImage(p.github);
  return null;
}

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const { t, language } = useLanguage();

  const projects = t?.projects ?? {};
  const projectEntries = Object.entries(projects).filter(
    ([id, value]) => id.startsWith("project-") && value && typeof value === "object"
  );

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const transition = { duration: 0.4, ease: "easeOut" };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <div className="overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={transition}
              className="text-4xl md:text-5xl font-bold font-grotesk"
            >
              {t?.projects?.title || "Projects"}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectEntries.length === 0 && (
            <p className="text-center text-white/60 col-span-full">
              No projects found in translation file.
            </p>
          )}

          {projectEntries.map(([id, project]) => {
            const proj = project as ProjectEntry;
            const isExpanded = expandedProjects.has(id);
            const img = resolveImage(proj);
            const imgFailed = img ? failedImages.has(img) : true;
            const gradient = GRADIENTS[hash(id) % GRADIENTS.length];

            return (
              <motion.div
                key={`${id}-${language}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition}
                onClick={() => toggleProject(id)}
                className="glass rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col"
              >
                {/* Banner */}
                <div
                  className={`relative aspect-[16/7] w-full overflow-hidden bg-gradient-to-br ${gradient}`}
                >
                  {img && !imgFailed && (
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      onError={() =>
                        setFailedImages((prev) => {
                          const next = new Set(prev);
                          next.add(img);
                          return next;
                        })
                      }
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {/* Soft dark wash for legibility on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.h3
                          key={`${id}-title-${language}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={transition}
                          className="text-2xl font-semibold font-grotesk mb-2"
                        >
                          {proj.title}
                        </motion.h3>
                      </AnimatePresence>

                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`${id}-desc-${language}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={transition}
                          className="text-foreground/80 leading-relaxed"
                        >
                          {proj.description}
                        </motion.p>
                      </AnimatePresence>
                    </div>

                    <div className="p-2 hover:bg-accent/10 rounded-lg transition-colors shrink-0">
                      <ChevronDown
                        className={`w-5 h-5 text-primary transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-white/10 space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">
                          {t?.projects?.problem || "Problem"}
                        </h4>
                        <p className="text-sm text-foreground/80">{proj.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">
                          {t?.projects?.solution || "Solution"}
                        </h4>
                        <p className="text-sm text-foreground/80">{proj.solution}</p>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {proj.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(proj.github, "_blank", "noopener,noreferrer");
                            }}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            {t?.projects?.code || "Code"}
                          </Button>
                        )}
                        {proj.website && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(proj.website, "_blank", "noopener,noreferrer");
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t?.projects?.visit || "Visit"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
