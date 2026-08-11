import type { Metadata } from "next";
import ContactSections from "@/components/sections/contact/ContactSections";

export const metadata: Metadata = {
  title: "Contact — Silgo Constructions",
};

export default function ContactPage() {
  return <ContactSections />;
}
