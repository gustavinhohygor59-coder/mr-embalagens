import type { Metadata } from "next";
import LegacyPage from "../LegacyPage";

export const metadata: Metadata = {
  title: "Cadastro | MR Embalagens",
};

export default function RegistrationPage() {
  return (
    <LegacyPage
      source="mr-embalagens-cadastro.html"
      title="Cadastro | MR Embalagens"
    />
  );
}
