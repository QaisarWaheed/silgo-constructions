"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqPage } from "@/lib/content";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-[900px] flex-col gap-3">
      {faqPage.faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <div
            key={f.q}
            className="overflow-hidden rounded-lg border border-gold/25 bg-card transition-colors duration-300 hover:border-gold/45"
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-foreground"
            >
              <span>{f.q}</span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-lg text-gold"
              >
                {open ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-[22px] text-[15px] leading-relaxed text-muted">{f.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
