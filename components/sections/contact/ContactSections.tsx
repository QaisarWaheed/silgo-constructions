"use client";

import { motion } from "framer-motion";
import { brand, contactPage } from "@/lib/content";
import ContactForm from "./ContactForm";

export default function ContactSections() {
  return (
    <section
      className="px-8 pb-[100px] pt-[100px]"
      style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(201,162,76,0.12), transparent 60%), #0b0b0c" }}
    >
      <div className="mx-auto grid max-w-[1100px] gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-bold tracking-[2px] text-gold">{contactPage.eyebrow}</span>
          <h1 className="my-4 font-display text-[clamp(32px,4.4vw,48px)] font-semibold leading-[1.15]">
            {contactPage.heading[0]}
            <span className="text-gold">{contactPage.heading[1]}</span>
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted">{contactPage.body}</p>

          <div className="flex flex-col gap-[18px]">
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3.5 text-[15px] text-foreground no-underline"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-on-gold">
                ✉
              </span>
              {brand.email}
            </a>
            <a
              href={`tel:${brand.phoneHref}`}
              className="flex items-center gap-3.5 text-[15px] text-foreground no-underline"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-on-gold">
                ☎
              </span>
              {brand.phone}
            </a>
          </div>

          <div className="mt-10 border-t border-gold/15 pt-6">
            <p className="text-[13px] text-muted-dim">{contactPage.note}</p>
            <a href={contactPage.qualifyLink.href} className="mt-2 inline-block text-sm font-semibold no-underline">
              {contactPage.qualifyLink.label}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
