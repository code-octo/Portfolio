"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Featured Projects"
          description="A selection of projects I've built. Each one taught me something valuable."
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tech={project.tech}
              slug={project.slug}
              index={i}
              hero={project.hero}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
