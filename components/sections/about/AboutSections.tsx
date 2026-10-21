"use client";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import InfoRow from "@/components/ui/InfoRow";
import IconCircle from "@/components/ui/IconCircle";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { about } from "@/lib/content";

export default function AboutSections() {
  return (
    <>
      {/* Hero */}
      <section
        className="border-b border-gold/15 px-8 pb-[70px] pt-[100px] text-center"
        style={{
          background: "radial-gradient(ellipse at 20% 10%, rgba(201,162,76,0.12), transparent 60%), #0b0b0c",
        }}
      >
        <Reveal>
          <span className="text-xs font-bold tracking-[2px] text-gold">{about.hero.eyebrow}</span>
          <h1 className="mx-auto mt-[18px] max-w-[780px] font-display text-[clamp(34px,4.6vw,54px)] font-semibold leading-[1.15]">
            {about.hero.heading[0]}
            <span className="text-gold">{about.hero.heading[1]}</span>
          </h1>
          <p className="mx-auto mt-[22px] max-w-[640px] text-lg leading-relaxed text-muted">{about.hero.body}</p>
        </Reveal>
      </section>

      {/* Who We Are */}
      <Section bg="background-alt" maxWidth="max-w-[1100px]">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            {about.roles.map((r) => (
              <InfoRow key={r.label} icon={r.icon} label={r.label} />
            ))}
          </div>
          <div>
            <h2 className="mb-[22px] font-display text-[clamp(26px,3.4vw,36px)] font-semibold leading-tight">
              {about.whoWeAre.heading.split("Financial Problem Solvers")[0]}
              <span className="text-gold">Financial Problem Solvers</span> Always.
            </h2>
            <div className="rounded-lg border border-gold/30 px-6 py-[22px] transition-all duration-300 hover:border-gold/60">
              <p className="text-[15px] leading-relaxed text-muted">
                {about.whoWeAre.quote[0]}
                <br />
                <span className="font-semibold text-foreground">{about.whoWeAre.quote[1]}</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Development Chain */}
      <Section maxWidth="max-w-[1100px]">
        <div className="text-center">
          <h2 className="mb-3 font-display text-[clamp(28px,3.6vw,40px)] font-semibold">
            Residential Development Creates <span className="text-gold">Opportunity</span>
          </h2>
          <p className="mb-12 text-base text-muted-dim">{about.chain.body}</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {about.chain.steps.map((c, i) => (
              <div key={c.label} className="flex items-center gap-2">
                <div className="flex w-[130px] flex-col items-center gap-2.5">
                  <IconCircle icon={c.icon} />
                  <span className="text-[13px] font-semibold text-muted">{c.label}</span>
                </div>
                {i < about.chain.steps.length - 1 && <span className="text-[22px] text-gold">→</span>}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-11 max-w-[640px] text-base text-muted">
            Those possibilities allow us to structure opportunities <span className="text-gold">traditionally</span>{" "}
            home-improvement companies cannot offer.
          </p>
        </div>
      </Section>

      {/* Built By Builders */}
      <Section bg="background-alt" maxWidth="max-w-[1100px]">
        <div className="grid gap-6 md:grid-cols-3">
          {about.differentiators.items.map((d) => (
            <div
              key={d.title}
              className="rounded-lg border border-gold/20 bg-card px-6 py-[30px] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10"
            >
              <div className="mb-3.5 text-[26px]">{d.icon}</div>
              <div className="mb-1.5 text-base font-bold text-gold">{d.title}</div>
              <div className="text-sm leading-relaxed text-muted">{d.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section maxWidth="max-w-[1100px]">
        <h2 className="mb-3 text-center font-display text-[clamp(28px,3.6vw,38px)] font-semibold">
          What Homeowners Are <span className="text-gold">Saying</span>
        </h2>
        <p className="mb-11 text-center text-base text-muted-dim">{about.testimonials.body}</p>
        <div className="grid gap-6 md:grid-cols-2">
          {about.testimonials.items.map((item) => (
            <div
              key={item.label}
              className="overflow-hidden rounded-[10px] border border-gold/15 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <ImagePlaceholder label="Homeowner testimonial photo/video" className="h-[220px] w-full" />
              <div className="px-[18px] py-4 text-sm font-semibold text-muted">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[15px] font-semibold tracking-[0.3px] text-gold">
          {about.testimonials.footer}
        </p>
      </Section>

      {/* CTA */}
      <section className="px-8 py-[90px] text-center" style={{ background: "linear-gradient(135deg,#161310,#0b0b0c)" }}>
        <Reveal>
          <h2 className="mb-3.5 font-display text-[clamp(28px,3.6vw,40px)] font-semibold">
            {about.cta.heading[0]}
            <span className="text-gold">{about.cta.heading[1]}</span>
          </h2>
          <Button href={about.cta.cta.href} className="mt-3.5">
            {about.cta.cta.label}
          </Button>
        </Reveal>
      </section>
    </>
  );
}
