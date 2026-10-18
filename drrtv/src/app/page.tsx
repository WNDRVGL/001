import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProgram } from "@/components/sections/FeaturedProgram";
import { Hero } from "@/components/sections/Hero";
import { Journal } from "@/components/sections/Journal";
import { Latest } from "@/components/sections/Latest";
import { Partnership } from "@/components/sections/Partnership";
import { ProgramGuide } from "@/components/sections/ProgramGuide";
import { Projects } from "@/components/sections/Projects";
import { Team } from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Latest />
        <FeaturedProgram />
        <About />
        <ProgramGuide />
        <Journal />
        <Projects />
        <Partnership />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
