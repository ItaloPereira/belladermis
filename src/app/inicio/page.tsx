import type { Metadata } from "next";

import VslHero from "@/react/modules/vsl-hero";
import DelayWrapper from "@/react/components/delay-wrapper";
import OffertBlock from "@/react/modules/offert-block/offert-block";
import GuaranteeBlock from "@/react/modules/guarantee-block";
import Footer from "@/react/modules/footer";

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
        <GuaranteeBlock />
      </DelayWrapper>
      {/* wpp */}
      {/* footer top */}
      <Footer />
    </main>
  );
}

export default StartPage;