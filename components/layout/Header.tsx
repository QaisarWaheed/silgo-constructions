"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, brand } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/[0.22] bg-background/[0.92] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-8 py-3.5">
        <Link href="/" className="flex items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <Image
            src="/brand/silgo-logo.jpg"
            alt="Silgo Constructions"
            width={44}
            height={44}
            className="h-11 w-11 rounded-md object-cover transition-transform duration-300 hover:scale-110"
            priority
          />
          <div className="flex flex-col leading-[1.1]">
            <span className="font-display text-[19px] font-bold tracking-wide text-foreground">
              {brand.shortName}
            </span>
            <span className="text-[10px] font-semibold tracking-[1.5px] text-gold">
              CONSTRUCTIONS LLC
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-[30px] min-[861px]:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative text-sm font-semibold tracking-[0.2px] no-underline transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-gold hover:after:w-full ${
                  active ? "text-gold after:w-full" : "text-[#d8d4cb]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/qualify"
            className="whitespace-nowrap rounded-[4px] bg-gradient-to-br from-gold-light to-gold px-[22px] py-[11px] text-sm font-bold tracking-[0.3px] text-on-gold no-underline transition-all duration-200 hover:scale-105 hover:brightness-110"
          >
            Get Qualified
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded border border-gold/40 text-gold min-[861px]:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="h-px w-5 bg-gold" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-px w-5 bg-gold" />
            <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="h-px w-5 bg-gold" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gold/15 min-[861px]:hidden"
          >
            <div className="flex flex-col gap-4 px-8 py-6">
              {nav.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-semibold no-underline ${
                    pathname === item.href ? "text-gold" : "text-[#d8d4cb]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/qualify"
                onClick={() => setOpen(false)}
                className="rounded-[4px] bg-gradient-to-br from-gold-light to-gold px-[22px] py-[11px] text-center text-sm font-bold text-on-gold no-underline"
              >
                Get Qualified
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
