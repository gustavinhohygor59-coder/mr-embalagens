import type { Metadata } from "next";
import LegacyPage from "../LegacyPage";

export const metadata: Metadata = {
  title: "Catálogo | MR Embalagens",
};

export default function CatalogPage() {
  return (
    <LegacyPage
      source="mr-embalagens-catalogo.html"
      title="Catálogo | MR Embalagens"
    />
  );
}
