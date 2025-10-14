import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Videos from "@/components/Videos";
import CVPreview from "@/components/CVPreview";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Friends from "@/components/Friends";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      {/* <Videos /> */}
      <Skills />
      <CVPreview />
      <Projects />
      <Friends />
      <Footer />
    </div>
  );
};

export default Index;
