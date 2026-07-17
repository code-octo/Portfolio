"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  slug: string;
  index: number;
  hero?: boolean;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  slug,
  index,
  hero,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group cursor-pointer"
      >
        <div
          className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-300 
            hover:bg-surface-elevated/80 hover:-translate-y-1 
            ${hero ? "ring-1 ring-primary/20" : ""}`}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              {hero && (
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary mb-2">
                  Featured Project
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10"
              >
                {t}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-surface text-text-muted border border-border">
                +{tech.length - 5}
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
