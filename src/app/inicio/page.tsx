import type { Metadata } from "next";

import VslHero from "@/react/modules/vsl-hero";

export const metadata: Metadata = {
  title: "AntiAcne Natural...",
  description: "\"AntiAcne Natural\" que além de limpar, hidrata?",
};

const InicioPage = () => {
  return (
    <main>
      <VslHero />
    </main>
  );
}

export default InicioPage;