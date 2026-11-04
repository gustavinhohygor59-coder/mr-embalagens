import type { Metadata } from "next";
import LegacyPage from "../LegacyPage";

export const metadata: Metadata = {
  title: "Painel do lojista | MR Embalagens",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerchantDashboardPage() {
  return (
    <LegacyPage
      source="mr-embalagens-anuncios.html"
      title="Painel do lojista | MR Embalagens"
    />
  );
}
