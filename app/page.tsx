import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Serviceses from "@/components/Serviceses";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FooterSection from "@/components/FooterSection";
export default function Home() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <About />
        <Serviceses />
        <Experience />
        <Skills />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <FooterSection />
    </>
  );
}
