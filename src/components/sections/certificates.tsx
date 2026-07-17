"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { certificates } from "@/lib/data";

export function Certificates() {
  return (
    <section id="certificates" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Certificates"
          title="Certifications"
          description="Professional certifications that validate my expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-6 group hover:bg-surface-elevated/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-text-secondary mb-3">
                {cert.issuer}
              </p>
              <p className="text-xs text-text-muted">{cert.description}</p>
              <div className="flex items-center gap-1.5 text-xs text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                View Certificate <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
