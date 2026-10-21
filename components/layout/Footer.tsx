import Image from "next/image";
import Link from "next/link";
import { brand, footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-background px-8 pb-8 pt-14">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/silgo-logo.jpg"
              alt="Silgo Constructions"
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="flex flex-col leading-[1.1]">
              <span className="font-display text-[17px] font-bold text-foreground">{brand.shortName}</span>
              <span className="text-[9px] font-semibold tracking-[1.5px] text-gold">CONSTRUCTIONS LLC</span>
            </div>
          </div>
          <p className="max-w-[320px] text-sm leading-relaxed text-muted-dim">{footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="mb-1 text-[13px] font-bold tracking-wide text-foreground">COMPANY</span>
          {footer.companyLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted-dim no-underline transition-colors hover:text-gold">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="mb-1 text-[13px] font-bold tracking-wide text-foreground">CONTACT</span>
          <a href={`mailto:${brand.email}`} className="text-sm text-muted-dim no-underline transition-colors hover:text-gold">
            {brand.email}
          </a>
          <a href={`tel:${brand.phoneHref}`} className="text-sm text-muted-dim no-underline transition-colors hover:text-gold">
            {brand.phone}
          </a>
          <Link href={footer.qualifyLink.href} className="mt-1 text-sm font-semibold text-gold no-underline transition-colors hover:text-gold-light">
            {footer.qualifyLink.label}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-3 border-t border-white/[0.06] pt-5">
        <span className="text-xs text-muted-dark">{footer.copyright}</span>
        <span className="text-xs text-muted-dark">{footer.disclaimer}</span>
      </div>
    </footer>
  );
}
