import Image from "next/image";

import Vturb from "@/react/modules/vturb";

import "@/sass/modules/_vsl-hero.scss";

type VslHeroProps = {
}

const VslHero = (props: VslHeroProps) => {
  const {
  } = props;

  return (
    <section className="vsl-hero">
      <div className="container">
        <Image
          src="/hero/bgr.jpg"
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
      </div>

    </section>
  )
}

export default VslHero;