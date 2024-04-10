import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
