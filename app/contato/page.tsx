import type { Metadata } from "next";
import LegacyPage from "../LegacyPage";

export const metadata: Metadata = {
  title: "Contato | MR Embalagens",
};

export default function ContactPage() {
  return (
    <LegacyPage
      source="mr-embalagens-contato.html"
      title="Contato | MR Embalagens"
    />
  );
}
