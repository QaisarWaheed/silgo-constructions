import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({ children, variant = "primary", className = "", href, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[4px] px-[30px] py-4 text-[15px] font-bold tracking-wide no-underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-br from-gold-light to-gold text-on-gold hover:brightness-110 hover:shadow-lg hover:shadow-gold/25"
      : "border border-gold/40 text-foreground hover:bg-gold hover:text-on-gold hover:border-gold";

  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={`${base} ${styles} ${className}`} {...anchorProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={`${base} ${styles} ${className}`} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
