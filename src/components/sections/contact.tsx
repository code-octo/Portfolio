"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { contactInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-text-primary">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great Together.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            I&apos;m currently looking for internship opportunities. If you have
            a project, an idea, or just want to say hi — I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              icon: Mail,
              label: "Email",
              value: contactInfo.email,
              href: `mailto:${contactInfo.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: contactInfo.phone,
              href: `tel:${contactInfo.phone}`,
            },
            {
              icon: MapPin,
              label: "Location",
              value: contactInfo.location,
              href: null,
            },
            {
              icon: ExternalLink,
              label: "LinkedIn",
              value: contactInfo.linkedin,
              href: contactInfo.linkedin,
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass rounded-xl p-5 flex items-center gap-4 hover:bg-surface-elevated/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted">{item.label}</p>
                    <p className="text-sm text-text-primary truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="glass rounded-xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{item.label}</p>
                    <p className="text-sm text-text-primary">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center"
        >
          <MagneticButton href={`mailto:${contactInfo.email}`}>
            <Mail className="w-4 h-4" />
            Send me an email
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
