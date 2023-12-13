import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Test from "@/components/test";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About /> {/* Sobre Mi */}
      <Projects /> {/* N-Reinas */}
      <Test /> {/* Test */}
      <Experience /> {/* Vida */}
    </main>
  );
}
