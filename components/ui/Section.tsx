import { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id?: string;
  className?: string;
  /** Tailwind padding utility classes, e.g. "pt-[100px] pb-[90px] px-8" */
  padding?: string;
  bg?: "background" | "background-alt";
  border?: boolean;
  maxWidth?: string;
  children: ReactNode;
};

export default function Section({
  id,
  className = "",
  padding = "pt-[100px] pb-[100px] px-8",
  bg = "background",
  border = true,
  maxWidth = "max-w-[1100px]",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full ${bg === "background-alt" ? "bg-background-alt" : "bg-background"} ${
        border ? "border-b border-gold/10" : ""
      } ${padding} ${className}`}
    >
      <div className={`mx-auto ${maxWidth}`}>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
