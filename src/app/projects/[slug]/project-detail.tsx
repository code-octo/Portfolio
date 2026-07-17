"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string | null;
  hero?: boolean;
  screenshots: string[];
  details: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    challenges: string[];
    decisions: string[];
    apiDesign: string;
    folderStructure: string;
    databaseDesign: string;
    lessons: string[];
  };
}

export function ProjectDetail({ project }: { project: ProjectData }) {
  return (
    <main className="relative z-10">
      {/* Back navigation */}
      <div className="section-container pt-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>
      </div>

      {/* Header */}
      <section className="section-padding pb-0">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {project.hero && (
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary mb-3">
                Featured Project
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              {project.title}
            </h1>
            <p className="text-xl text-text-secondary mt-2">
              {project.subtitle}
            </p>
            <p className="text-base text-text-secondary mt-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary/80 border border-primary/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <MagneticButton href={project.github} external>
                <Github className="w-4 h-4" />
                View on GitHub
              </MagneticButton>
              {project.live && (
                <MagneticButton href={project.live} variant="secondary" external>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </MagneticButton>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <ProjectSection title="Overview" delay={0.1}>
              <p className="text-text-secondary leading-relaxed">
                {project.details.overview}
              </p>
            </ProjectSection>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectSection title="The Problem" delay={0.2}>
                <p className="text-text-secondary leading-relaxed">
                  {project.details.problem}
                </p>
              </ProjectSection>
              <ProjectSection title="The Solution" delay={0.3}>
                <p className="text-text-secondary leading-relaxed">
                  {project.details.solution}
                </p>
              </ProjectSection>
            </div>

            {/* Architecture */}
            <ProjectSection title="Architecture" delay={0.3}>
              <div className="glass rounded-xl p-6">
                <p className="text-text-secondary leading-relaxed">
                  {project.details.architecture}
                </p>
              </div>
            </ProjectSection>

            {/* Screenshots */}
            {project.screenshots.length > 0 && (
              <ProjectSection title="Screenshots" delay={0.35}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="glass rounded-xl overflow-hidden"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={src}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ProjectSection>
            )}

            {/* Features */}
            <ProjectSection title="Key Features" delay={0.4}>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-3 text-text-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </ProjectSection>

            {/* Challenges */}
            <ProjectSection title="Challenges" delay={0.45}>
              <ul className="space-y-3">
                {project.details.challenges.map((challenge, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex gap-3 text-text-secondary"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span className="text-sm">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </ProjectSection>

            {/* Engineering Decisions */}
            <ProjectSection title="Engineering Decisions" delay={0.5}>
              <ul className="space-y-3">
                {project.details.decisions.map((decision, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex gap-3 text-text-secondary"
                  >
                    <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{decision}</span>
                  </motion.li>
                ))}
              </ul>
            </ProjectSection>

            {/* API Design, Folder Structure, Database */}
            <div className="grid md:grid-cols-3 gap-6">
              <ProjectSection title="API Design" delay={0.55}>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.details.apiDesign}
                </p>
              </ProjectSection>
              <ProjectSection title="Folder Structure" delay={0.6}>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.details.folderStructure}
                </p>
              </ProjectSection>
              <ProjectSection title="Database Design" delay={0.65}>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.details.databaseDesign}
                </p>
              </ProjectSection>
            </div>

            {/* Lessons Learned */}
            <ProjectSection title="Lessons Learned" delay={0.7}>
              <div className="glass rounded-xl p-6">
                <ul className="space-y-3">
                  {project.details.lessons.map((lesson, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex gap-3 text-text-secondary"
                    >
                      <span className="text-accent mt-0.5">▹</span>
                      <span className="text-sm">{lesson}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ProjectSection>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center pt-8 border-t border-border"
            >
              <p className="text-text-muted mb-4">
                Interested in this project?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <MagneticButton href={project.github} external>
                  <Github className="w-4 h-4" />
                  View on GitHub
                </MagneticButton>
                <MagneticButton href="/#contact" variant="secondary">
                  Let&apos;s Talk
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectSection({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="text-xl font-bold text-text-primary mb-4">{title}</h2>
      {children}
    </motion.div>
  );
}
