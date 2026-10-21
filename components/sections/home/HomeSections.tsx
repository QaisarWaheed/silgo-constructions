"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import InfoRow from "@/components/ui/InfoRow";
import Reveal from "@/components/ui/Reveal";
import ParticleMesh from "@/components/ui/ParticleMesh";
import PlankHouseBuilder from "@/components/sections/home/PlankHouseBuilder";
import { home } from "@/lib/content";

export default function HomeSections() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex w-full min-h-[680px] items-center overflow-hidden border-b border-gold/15 px-8 py-[110px]"
        style={{
          background:
            "radial-gradient(ellipse at 75% 20%, rgba(201,162,76,0.14), transparent 60%), #0b0b0c",
        }}
      >
        {/* interactive particle mesh */}
        <ParticleMesh
          className="pointer-events-none absolute inset-0 z-0 opacity-60"
          style={{
            maskImage: "linear-gradient(100deg, transparent, transparent 26%, black 52%)",
            WebkitMaskImage: "linear-gradient(100deg, transparent, transparent 26%, black 52%)",
          }}
        />

        {/* ambient glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[18%] top-1/2 z-0 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* logo watermark */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-[14%] z-[1] hidden items-center opacity-0 md:right-[18%] md:flex lg:right-[22%]"
          animate={{ opacity: 0.14, y: [0, -14, 0], rotate: [0, 1, 0] }}
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image
            src="/brand/silgo-logo-watermark.png"
            alt=""
            width={703}
            height={1043}
            className="h-[58%] max-h-[420px] w-auto select-none object-contain"
            priority
          />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[640px]"
          >
            <span className="text-xs font-bold tracking-[2px] text-gold">{home.hero.eyebrow}</span>
            <h1 className="mt-[18px] font-display text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.08]">
              The <em className="font-semibold italic">Homeowner</em>
              <br />
              <span className="text-gold">{home.hero.heading[1]}</span>
            </h1>
            <p className="mb-[34px] mt-5 max-w-[480px] text-[19px] leading-relaxed text-muted">
              {home.hero.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={home.hero.ctaPrimary.href}>{home.hero.ctaPrimary.label}</Button>
              <Button href={home.hero.ctaSecondary.href} variant="outline">
                {home.hero.ctaSecondary.label}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist */}
      <Section bg="background-alt" maxWidth="max-w-[840px]">
        <div className="text-center">
          <h2 className="font-display text-[clamp(30px,4vw,44px)] font-semibold">
            Why We <span className="text-gold">Exist</span>
          </h2>
          <div className="mx-auto my-7 h-px w-[60px] bg-gold" />
          <p className="mb-9 text-lg leading-relaxed text-muted">{home.whyWeExist.body}</p>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="rounded-lg border border-gold/30 px-7 py-[18px] text-[15px] text-muted transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
              {home.whyWeExist.negative}
            </div>
            <div className="rounded-lg border border-gold/30 px-7 py-[18px] text-[15px] font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-on-gold">
              {home.whyWeExist.positive}
            </div>
          </div>
        </div>
      </Section>

      {/* The Problem */}
      <Section maxWidth="max-w-[1100px]">
        <h2 className="mb-3 text-center font-display text-[clamp(28px,3.6vw,40px)] font-semibold">
          {home.problem.heading.replace("Trapped", "")}
          <span className="text-gold">Trapped</span>
        </h2>
        <p className="mb-12 text-center text-base text-muted-dim">{home.problem.subheading}</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {home.problem.items.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <div className="rounded-lg border border-gold/15 bg-card px-3.5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10">
                <div className="mb-3 text-[26px]">{p.icon}</div>
                <div className="text-sm font-medium text-muted">{p.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-11 text-center text-lg font-semibold text-foreground">
          Conclusion: <span className="text-gold">there should be a better way.</span>
        </p>
      </Section>

      {/* One Opportunity */}
      <Section bg="background-alt" maxWidth="max-w-[1000px]">
        <div className="text-center">
          <h2 className="mb-11 font-display text-[clamp(28px,3.6vw,40px)] font-semibold">
            One Opportunity. <span className="text-gold">Two Problems Solved.</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {home.oneOpportunity.items.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-gold/35 px-7 py-10 transition-all duration-300 hover:-translate-y-1 hover:bg-gold/5 hover:shadow-lg hover:shadow-gold/10"
              >
                <div className="mb-3.5 text-[30px]">{item.icon}</div>
                <div className="text-[19px] font-bold text-foreground">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-muted">{home.oneOpportunity.note}</p>
        </div>
      </Section>

      {/* Plank House Builder */}
      <Section maxWidth="max-w-[700px]">
        <div className="text-center">
          <h2 className="mb-3 font-display text-[clamp(26px,3.4vw,36px)] font-semibold">
            Every Strong Plan Starts With <span className="text-gold">a Solid Foundation.</span>
          </h2>
          <p className="mb-10 text-base text-muted-dim">
            Just like a home, a financial strategy is built one deliberate piece at a time.
          </p>
        </div>
        <PlankHouseBuilder />
      </Section>

      {/* Who We Are */}
      <Section maxWidth="max-w-[1100px]">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-[22px] font-display text-[clamp(26px,3.4vw,36px)] font-semibold leading-tight">
              Builders First. <span className="text-gold">Financial Problem Solvers</span> Always.
            </h2>
            <p className="mb-5 text-base leading-relaxed text-muted">{home.whoWeAre.body}</p>
            <a href={home.whoWeAre.link.href} className="text-[15px] font-semibold no-underline">
              {home.whoWeAre.link.label}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {home.whoWeAre.roles.map((r) => (
              <InfoRow key={r.label} icon={r.icon} label={r.label} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section
        className="px-8 py-[90px] text-center"
        style={{ background: "linear-gradient(135deg,#161310,#0b0b0c)" }}
      >
        <Reveal>
          <h2 className="mb-[18px] font-display text-[clamp(28px,3.6vw,42px)] font-semibold">
            See If You <span className="text-gold">Qualify Today</span>
          </h2>
          <p className="mb-8 text-[17px] text-muted">{home.cta.body}</p>
          <Button href={home.cta.cta.href}>{home.cta.cta.label}</Button>
        </Reveal>
      </section>
    </>
  );
}
