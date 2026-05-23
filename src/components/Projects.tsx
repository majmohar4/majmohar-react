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
};

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const { t, language } = useLanguage();

  const projects = t?.projects ?? {};
  const projectEntries = Object.entries(projects).filter(
    ([id, value]) => id.startsWith("project-") && value && typeof value === "object"
  );

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const transition = { duration: 0.4, ease: "easeOut" };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Title */}
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

        {/* ✅ Only map if we actually have project entries */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectEntries.length > 0 ? (
            projectEntries.map(([id, project]) => {
              const proj = project as ProjectEntry;
              const isExpanded = expandedProjects.has(id);

              return (
                <AnimatePresence mode="wait" key={`${id}-${language}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={transition}
                    onClick={() => toggleProject(id)}
                    className="glass rounded-[20px] p-6 transition-all duration-300 hover:shadow-xl cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <motion.h3
                            key={`${proj.title}-${language}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={transition}
                            className="text-2xl font-semibold font-grotesk mb-2"
                          >
                            {proj.title}
                          </motion.h3>

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
                        </div>

                        <div className="ml-4 p-2 hover:bg-accent/10 rounded-lg transition-colors">
                          <ChevronDown
                            className={`w-5 h-5 text-primary transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-4 border-t border-border space-y-4">
                          <div>
                            <motion.h4
                              key={`${id}-problem-title-${language}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={transition}
                              className="font-semibold text-primary mb-2"
                            >
                              {t?.projects?.problem || "Problem"}
                            </motion.h4>
                            <motion.p
                              key={`${id}-problem-${language}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={transition}
                              className="text-sm text-foreground/80"
                            >
                              {proj.problem}
                            </motion.p>
                          </div>

                          <div>
                            <motion.h4
                              key={`${id}-solution-title-${language}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={transition}
                              className="font-semibold text-primary mb-2"
                            >
                              {t?.projects?.solution || "Solution"}
                            </motion.h4>
                            <motion.p
                              key={`${id}-solution-${language}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={transition}
                              className="text-sm text-foreground/80"
                            >
                              {proj.solution}
                            </motion.p>
                          </div>

                          <div className="flex gap-3 pt-2">
                            {proj.github && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(proj.github, "_blank");
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
                                  window.open(proj.website, "_blank");
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
                </AnimatePresence>
              );
            })
          ) : (
            <p className="text-center text-white/60">
              ⚙️ No projects found in translation file.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
