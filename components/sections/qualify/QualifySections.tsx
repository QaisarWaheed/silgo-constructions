"use client";

import { motion } from "framer-motion";
import { brand, qualifyPage } from "@/lib/content";
import QualifyForm from "./QualifyForm";

export default function QualifySections() {
  return (
    <>
      <section
        className="border-b border-gold/15 px-8 pb-[100px] pt-[90px]"
        style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(201,162,76,0.14), transparent 60%), #0b0b0c" }}
      >
        <div className="mx-auto grid max-w-[1150px] items-start gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-bold tracking-[2px] text-gold">{qualifyPage.eyebrow}</span>
            <h1 className="my-4 font-display text-[clamp(32px,4.6vw,52px)] font-semibold leading-[1.15]">
              {qualifyPage.heading[0]}
              <span className="text-gold">{qualifyPage.heading[1]}</span>
            </h1>
            <p className="mb-9 max-w-[480px] text-[17px] leading-relaxed text-muted">{qualifyPage.body}</p>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {qualifyPage.quickAnswers.map((q) => (
                <div
                  key={q.q}
                  className="rounded-lg border border-gold/20 bg-card px-4 py-[18px] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
                >
                  <div className="mb-2 text-xl">{q.icon}</div>
                  <div className="mb-1.5 text-xs font-bold text-gold">{q.q}</div>
                  <div className="text-[13px] leading-snug text-muted-dim">{q.a}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <QualifyForm />
          </motion.div>
        </div>
      </section>

      <section className="bg-background-alt px-8 py-14">
        <div className="mx-auto flex max-w-[1150px] flex-wrap justify-center gap-12 text-center">
          <a
            href={`mailto:${brand.email}`}
            className="flex items-center gap-2.5 text-[15px] text-foreground no-underline transition-colors hover:text-gold"
          >
            <span className="text-gold">✉</span> {brand.email}
          </a>
          <a
            href={`tel:${brand.phoneHref}`}
            className="flex items-center gap-2.5 text-[15px] text-foreground no-underline transition-colors hover:text-gold"
          >
            <span className="text-gold">☎</span> {brand.phone}
          </a>
        </div>
      </section>
    </>
  );
}
