import type { Metadata } from "next";
import HowSections from "@/components/sections/how/HowSections";

export const metadata: Metadata = {
  title: "How It Works — Silgo Constructions",
};

export default function HowItWorksPage() {
  return <HowSections />;
}
