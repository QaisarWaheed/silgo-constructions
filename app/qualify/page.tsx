import type { Metadata } from "next";
import QualifySections from "@/components/sections/qualify/QualifySections";

export const metadata: Metadata = {
  title: "Get Qualified — Silgo Constructions",
};

export default function QualifyPage() {
  return <QualifySections />;
}
