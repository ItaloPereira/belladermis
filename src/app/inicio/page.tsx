import type { Metadata } from "next";

import VslHero from "@/react/modules/vsl-hero";
import OffertBlock from "@/react/modules/offert-block/offert-block";
import Footer from "@/react/modules/footer";
import DelayWrapper from "@/react/components/delay-wrapper";

export const metadata: Metadata = {
  title: "AntiAcne Natural...",
  description: "\"AntiAcne Natural\" que além de limpar, hidrata?",
};

const StartPage = () => {
  return (
    <main>
      <VslHero />
      <DelayWrapper>
        <OffertBlock />
      </DelayWrapper>
      {/* garantia */}
      {/* wpp */}
      {/* footer top */}
      <Footer />
    </main>
  );
}

export default StartPage;