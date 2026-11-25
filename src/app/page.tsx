import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#06070a] text-zinc-100 selection:bg-emerald-500/30 selection:text-white">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ArchitectureSection />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />

        {/* Interactive CLI Console Section */}
        <section className="py-20 relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Interactive Terminal Playground"
              subtitle="Explore my backend architecture, run live queries, or inspect system telemetry directly from the CLI."
            />
            <div className="mt-8">
              <InteractiveTerminal />
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
