"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { personalInfo } from "@/lib/data";

export function GitHubActivity() {
  const pinnedRepos = [
    {
      name: "Resume Tailor",
      desc: "AI Resume Tailoring Platform",
      url: "https://github.com/DevWith-Ashfak/Resume-Tailor-.git",
      lang: "TypeScript",
      stars: 0,
      forks: 0,
    },
    {
      name: "Ceylon Explorer",
      desc: "Tourism Super App",
      url: "https://github.com/DevWith-Ashfak/Ceylon-Explorer-.git",
      lang: "JavaScript",
      stars: 0,
      forks: 0,
    },
    {
      name: "Lanka Eats",
      desc: "Food Delivery App",
      url: "https://github.com/DevWith-Ashfak/LankaEats.git",
      lang: "JavaScript",
      stars: 0,
      forks: 0,
    },
  ];

  return (
    <section id="github" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="GitHub"
          title="GitHub Activity"
          description="My open-source work and contributions."
        />

        {/* GitHub Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 text-center hover:bg-surface-elevated/80 transition-all"
          >
            <div className="text-2xl font-bold gradient-text">5+</div>
            <div className="text-sm text-text-secondary mt-1">Public Repos</div>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 text-center hover:bg-surface-elevated/80 transition-all"
          >
            <div className="text-2xl font-bold gradient-text">15+</div>
            <div className="text-sm text-text-secondary mt-1">Technologies</div>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 text-center hover:bg-surface-elevated/80 transition-all"
          >
            <div className="text-2xl font-bold gradient-text">100%</div>
            <div className="text-sm text-text-secondary mt-1">Open Source</div>
          </motion.a>
        </div>

        {/* Pinned Repos */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-4">
            Pinned Repositories
          </h3>
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex items-center justify-between group hover:bg-surface-elevated/80 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-text-muted" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                  </svg>
                  <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                </div>
                <p className="text-xs text-text-muted ml-6">{repo.desc}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
