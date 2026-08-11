import type { Metadata } from "next";
import AboutSections from "@/components/sections/about/AboutSections";

export const metadata: Metadata = {
  title: "About — Silgo Constructions",
};

export default function AboutPage() {
  return <AboutSections />;
}
