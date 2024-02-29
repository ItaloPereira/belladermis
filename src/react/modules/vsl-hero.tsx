import Image from "next/image";

import Button from "@/react/components/button";
import Vturb from "@/react/components/vturb";
import DelayWrapper from "@/react/components/delay-wrapper";

import "@/sass/modules/_vsl-hero.scss";

const VslHero = () => {
  return (
    <section className="vsl-hero">
      <div className="container">
        <Image
          src="/images/hero/bgr.jpg"
          width={1129}
          height={775}
          alt="Flores"
          className="vsl-hero__background"
        />
        <h1 className="vsl-hero__title">
          <span>&quot;AntiAcne Natural&quot;</span>
          <span className="vsl-hero__secondary-title">Que além de limpar, hidrata?</span>
        </h1>

        <div className="vsl-hero__video-wrapper">
          <Vturb />
        </div>

        <DelayWrapper>
          <div className="vsl-hero__button-wrapper">
            <Button href="#offert" animated>
              COMECE SUA JORNADA DE TRANSFORMAÇÃO
            </Button>

          </div>
        </DelayWrapper>
      </div>

    </section>
  )
}

export default VslHero;