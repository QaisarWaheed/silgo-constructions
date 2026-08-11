import type { Metadata } from "next";
import FaqSections from "@/components/sections/faq/FaqSections";

export const metadata: Metadata = {
  title: "FAQ — Silgo Constructions",
};

export default function FaqPage() {
  return <FaqSections />;
}
