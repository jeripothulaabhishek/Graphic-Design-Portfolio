import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/portfolio/Hero";
import AboutIntro from "@/components/portfolio/AboutIntro";
import SelectedWork from "@/components/portfolio/SelectedWork";
import WebShowcase from "@/components/portfolio/WebShowcase";
import VisualArchive from "@/components/ui/3d-folder";
import SocialDesignShowcase from "@/components/portfolio/SocialDesignShowcase";
import ToolsSection from "@/components/portfolio/ToolsSection";
import CaseStudies from "@/components/portfolio/CaseStudies";
import ContactFooter from "@/components/portfolio/ContactFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7F7F3] text-[#111111] selection:bg-[#FFB800] selection:text-[#111111]">
      {/* 00 / FLOATING EDITORIAL NAVBAR */}
      <Navbar />

      {/* 01 / HERO WITH 3D CREATIVE STUDIO SCENE */}
      <Hero />

      {/* 02 / ABOUT ABHISHEK & CAPABILITIES */}
      <AboutIntro />

      {/* 03 / SELECTED WORK MASONRY GRID */}
      <SelectedWork />

      {/* 04 / WEBSITES & DIGITAL EXPERIENCES SHOWCASE */}
      <WebShowcase />

      {/* 05 / 3D MANUFACTURED VISUAL ARCHIVE */}
      <VisualArchive />

      {/* 06 / SOCIAL DESIGN SHOWCASE */}
      <SocialDesignShowcase />

      {/* 07 / CREATIVE STACK & TOOLS */}
      <ToolsSection />

      {/* 08 / FLAGSHIP TEDX CASE STUDY */}
      <CaseStudies />

      {/* 09 / CONTACT & MINIMAL FOOTER */}
      <ContactFooter />
    </main>
  );
}
