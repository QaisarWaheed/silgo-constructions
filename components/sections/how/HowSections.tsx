"use client";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import NumberBadge from "@/components/ui/NumberBadge";
import { howItWorks } from "@/lib/content";

export default function HowSections() {
  return (
    <>
      {/* Hero */}
      <section
        className="border-b border-gold/15 px-8 pb-[60px] pt-[100px] text-center"
        style={{ background: "radial-gradient(ellipse at 80% 10%, rgba(201,162,76,0.12), transparent 60%), #0b0b0c" }}
      >
        <Reveal>
          <span className="text-xs font-bold tracking-[2px] text-gold">{howItWorks.hero.eyebrow}</span>
          <h1 className="mx-auto mt-[18px] max-w-[760px] font-display text-[clamp(32px,4.4vw,50px)] font-semibold leading-[1.15]">
            {howItWorks.hero.heading[0]}
            <span className="text-gold">{howItWorks.hero.heading[1]}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-relaxed text-muted">{howItWorks.hero.body}</p>
        </Reveal>
      </section>

      {/* Steps */}
      <Section bg="background-alt" maxWidth="max-w-[1200px]">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {howItWorks.steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.05}>
              <div className="relative rounded-lg border border-gold/[0.18] bg-card px-5 py-[26px] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10">
                <NumberBadge n={s.n} />
                <div className="my-2.5 text-2xl">{s.icon}</div>
                <div className="mb-1.5 text-[15px] font-bold text-foreground">{s.title}</div>
                <div className="text-[13px] leading-relaxed text-muted-dim">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capital Uses */}
      <Section maxWidth="max-w-[1000px]">
        <div className="text-center">
          <h2 className="mb-3 font-display text-[clamp(28px,3.6vw,38px)] font-semibold">
            Capital Allows Projects to <span className="text-gold">Begin Faster</span>
          </h2>
          <p className="mb-11 text-base text-muted-dim">{howItWorks.capital.body}</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {howItWorks.capital.items.map((c) => (
              <div
                key={c.label}
                className="rounded-lg border border-gold/20 bg-card px-4 py-[26px] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
              >
                <div className="mb-2.5 text-2xl">{c.icon}</div>
                <div className="text-[15px] font-semibold text-foreground">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Situations */}
      <Section bg="background-alt" maxWidth="max-w-[1000px]">
        <div className="text-center">
          <h2 className="mb-11 font-display text-[clamp(28px,3.6vw,38px)] font-semibold">
            Every Homeowner&apos;s Situation Is <span className="text-gold">Different</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {howItWorks.situations.items.map((o) => (
              <div
                key={o.label}
                className="flex items-center gap-3.5 rounded-md border border-gold/15 bg-card px-[18px] py-4 text-left transition-all duration-300 hover:translate-x-1 hover:border-gold/50"
              >
                <span className="text-xl">{o.icon}</span>
                <span className="text-[15px] font-semibold text-foreground">{o.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-9 text-base font-semibold text-gold">{howItWorks.situations.footer}</p>
        </div>
      </Section>

      {/* Illustrative Example */}
      <Section maxWidth="max-w-[1000px]">
        <div className="text-center">
          <span className="text-[13px] tracking-[1px] text-muted-dim">{howItWorks.example.eyebrow}</span>
          <h2 className="mb-11 mt-3 font-display text-[clamp(30px,4vw,44px)] font-bold text-gold">
            {howItWorks.example.heading}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {howItWorks.example.items.map((item, i) => (
              <div key={item.label} className="flex items-center gap-5">
                <div className="min-w-[190px] rounded-lg border border-gold/25 bg-card px-[26px] py-7 transition-all duration-300 hover:-translate-y-1 hover:bg-gold/10">
                  <div className="text-[32px] font-bold text-foreground">{item.amount}</div>
                  <div className="mt-1.5 text-[13px] text-muted-dim">{item.label}</div>
                  <div className="mt-2 text-[11px] font-bold text-gold">{item.tag}</div>
                </div>
                {i === 0 && <span className="text-2xl text-gold">+</span>}
              </div>
            ))}
            <span className="text-2xl text-gold">=</span>
            <div className="min-w-[190px] rounded-lg bg-gradient-to-br from-gold-light to-gold px-[26px] py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/25">
              <div className="text-[32px] font-bold text-on-gold">{howItWorks.example.total.amount}</div>
              <div className="mt-1.5 text-[13px] font-semibold text-on-gold/70">{howItWorks.example.total.label}</div>
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-dark">{howItWorks.example.disclaimer}</p>
        </div>
      </Section>

      {/* Budget Impact */}
      <section className="bg-background-alt px-8 py-[100px]">
        <Reveal>
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="mb-11 font-display text-[clamp(28px,3.6vw,38px)] font-semibold">
              What Does This Mean for Your <span className="text-gold">Monthly Budget?</span>
            </h2>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5">
              <div className="rounded-lg border border-white/[0.08] bg-card px-5 py-[30px] transition-all duration-300 hover:-translate-y-1">
                <div className="mb-2.5 text-xs tracking-[1px] text-muted-dim">{howItWorks.budget.before.label}</div>
                <div className="text-[30px] font-bold text-foreground">{howItWorks.budget.before.amount}</div>
                <div className="mt-1.5 text-[13px] text-muted-dim">{howItWorks.budget.before.note}</div>
              </div>
              <span className="text-2xl text-gold">→</span>
              <div className="rounded-lg border border-gold/30 bg-card px-5 py-[30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/20">
                <div className="mb-2.5 text-xs tracking-[1px] text-gold">{howItWorks.budget.after.label}</div>
                <div className="text-[30px] font-bold text-gold">{howItWorks.budget.after.amount}</div>
                <div className="mt-1.5 text-[13px] text-muted-dim">{howItWorks.budget.after.note}</div>
              </div>
            </div>
            <p className="mt-8 text-base text-muted">{howItWorks.budget.conclusion}</p>
            <Button href={howItWorks.budget.cta.href} className="mt-5">
              {howItWorks.budget.cta.label}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
