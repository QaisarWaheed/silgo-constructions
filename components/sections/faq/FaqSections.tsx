"use client";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import IconCircle from "@/components/ui/IconCircle";
import FaqAccordion from "./FaqAccordion";
import { faqPage } from "@/lib/content";

export default function FaqSections() {
  return (
    <>
      {/* Hero */}
      <section
        className="border-b border-gold/15 px-8 pb-[60px] pt-[100px] text-center"
        style={{ background: "radial-gradient(ellipse at 20% 10%, rgba(201,162,76,0.12), transparent 60%), #0b0b0c" }}
      >
        <Reveal>
          <h1 className="font-display text-[clamp(32px,4.4vw,50px)] font-semibold">
            {faqPage.hero.heading[0]}
            <span className="text-gold">{faqPage.hero.heading[1]}</span>
          </h1>
          <p className="mt-4 text-base tracking-[1px] text-muted">{faqPage.hero.body}</p>
        </Reveal>
      </section>

      {/* What Qualifies You */}
      <Section bg="background-alt" maxWidth="max-w-[1000px]">
        <div className="text-center">
          <h2 className="mb-10 font-display text-[clamp(26px,3.4vw,34px)] font-bold">
            {faqPage.qualifies.heading[0]}
            <span className="text-gold">{faqPage.qualifies.heading[1]}</span>
            {faqPage.qualifies.heading[2]}
          </h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {faqPage.qualifies.items.map((q) => (
              <div key={q.label}>
                <div className="mx-auto mb-3.5">
                  <IconCircle icon={q.icon} size={70} />
                </div>
                <div className="text-sm font-semibold text-foreground">{q.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-11 inline-block rounded-lg border border-gold/30 px-7 py-[22px] transition-all duration-300 hover:border-gold/60">
            <span className="text-[15px] font-semibold text-foreground">
              {faqPage.qualifies.note[0]}
              <span className="text-gold">{faqPage.qualifies.note[1]}</span>
              {faqPage.qualifies.note[2]}
            </span>
          </div>
        </div>
      </Section>

      {/* Accordion */}
      <Section maxWidth="max-w-[900px]">
        <FaqAccordion />
      </Section>

      {/* Three Paths */}
      <Section bg="background-alt" maxWidth="max-w-[1100px]">
        <div className="text-center">
          <h2 className="mb-11 font-display text-[clamp(28px,3.6vw,38px)] font-semibold">
            Three Paths <span className="text-gold">Forward</span>
          </h2>
          <div className="grid gap-5 text-left md:grid-cols-3">
            {faqPage.paths.items.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-gold/20 bg-card px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10"
              >
                <div className="mb-3.5 text-[26px]">{p.icon}</div>
                <div className="mb-2.5 text-[17px] font-bold text-foreground">{p.title}</div>
                <div className="text-sm leading-relaxed text-muted-dim">{p.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[15px] font-semibold text-gold">{faqPage.paths.footer}</p>
        </div>
      </Section>

      {/* What Happens Next */}
      <section className="bg-background px-8 py-[90px]">
        <Reveal>
          <div className="mx-auto max-w-[1100px] text-center">
            <h2 className="mb-11 font-display text-[clamp(28px,3.6vw,38px)] font-semibold">
              What Happens <span className="text-gold">Next?</span>
            </h2>
            <div className="grid gap-[18px] text-left sm:grid-cols-2 md:grid-cols-4">
              {faqPage.nextSteps.items.map((n) => (
                <div
                  key={n.n}
                  className="rounded-lg border border-gold/[0.18] bg-card px-[18px] py-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10"
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-on-gold">
                      {n.n}
                    </span>
                    <span className="text-[22px]">{n.icon}</span>
                  </div>
                  <div className="mb-2 text-[15px] font-bold text-foreground">{n.title}</div>
                  <div className="text-[13px] leading-relaxed text-muted-dim">{n.desc}</div>
                </div>
              ))}
            </div>
            <Button href={faqPage.nextSteps.cta.href} className="mt-11">
              {faqPage.nextSteps.cta.label}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
