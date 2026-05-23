import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CVPreview from "@/components/CVPreview";
import Projects from "@/components/Projects";
import Friends from "@/components/Friends";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CVPreview />
      <Projects />
      <Friends />
      <Footer />
    </div>
  );
};

export default Index;
