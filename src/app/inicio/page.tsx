import type { Metadata } from "next";

import VslHero from "@/react/modules/vsl-hero";
import Footer from "@/react/modules/footer";

export const metadata: Metadata = {
  title: "AntiAcne Natural...",
  description: "\"AntiAcne Natural\" que além de limpar, hidrata?",
};

const StartPage = () => {
  return (
    <main>
      <VslHero />
      <Footer />
    </main>
  );
}

export default StartPage;