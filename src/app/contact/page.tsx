import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact — Kasra",
  description:
    "Connect with Kasra about projects, opportunities, and software development.",
};

export default function ContactPage() {
  return <ContactContent />;
}
