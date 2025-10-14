import { useState } from "react";
import { FileText, Download, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CVPreview = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, language } = useLanguage();

  const handleExpand = () => {
    setIsExpanded(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsExpanded(false);
    document.body.style.overflow = "auto";
  };

  const cvFile =
    language === "SLO"
      ? "/files/pdf/Maj_Mohar_CV_slo.pdf"
      : "/files/pdf/Maj_Mohar_CV_eng.pdf";

  return (
    <section
      id="cv"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Animated title */}
        <div className="overflow-hidden h-[60px] text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={language}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold font-grotesk"
            >
              {t?.cv?.title || "Curriculum Vitae"}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Preview card */}
        <div
          onClick={handleExpand}
          className="glass rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
        >
          <div className="relative aspect-[3/2] bg-card/50">
            <iframe
              src={`${cvFile}#toolbar=0`}
              className="w-full h-full pointer-events-none"
              title="CV Preview"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <FileText className="w-10 h-10 text-primary" />
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={language}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <h3 className="text-2xl font-semibold font-grotesk">
                          {t?.cv?.viewTitle || "View Full CV"}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {t?.cv?.clickHint || "Click to expand and read"}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary">
                    {t?.cv?.hoverHint || "Click to open →"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal (expanded CV) */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          style={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(8px)" }}
          onClick={handleClose}
        >
          <div
            className="bg-card rounded-[20px] w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={language}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-2xl font-bold font-grotesk"
                >
                  {t?.cv?.modalTitle || "Maj Mohar - CV"}
                </motion.h3>
              </AnimatePresence>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(cvFile, "_blank");
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t?.cv?.download || "Download CV"}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="hover:bg-destructive/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-hidden">
              <iframe src={cvFile} className="w-full h-full" title="CV Preview" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CVPreview;
