import type { Metadata } from "next";

import VslHero from "@/react/modules/vsl-hero";

export const metadata: Metadata = {
  title: "O Segredo...",
  description: "",
};

const InicioPage = () => {
  return (
    <main>
      <VslHero />
    </main>
  );
}

export default InicioPage;