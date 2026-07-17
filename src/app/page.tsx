import { Hero } from "@/components/sections/hero";
import { Achievements } from "@/components/sections/achievements";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { EngineeringProcess } from "@/components/sections/engineering-process";
import { Learning } from "@/components/sections/learning";
import { GitHubActivity } from "@/components/sections/github-activity";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Achievements />
      <About />
      <Skills />
      <FeaturedProjects />
      <EngineeringProcess />
      <Learning />
      <GitHubActivity />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
