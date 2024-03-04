import Image from "next/image";
import Script from "next/script"

import "@/sass/components/_vturb.scss";

const Vturb = () => {

  return (
    <>
      <div className="vturb" id="vid_65e64cf924757e00085638c3">
        <Image
          className="vturb__thumbnail"
          src="https://images.converteai.net/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/players/65e64cf924757e00085638c3/thumbnail.jpg"
          alt="Aperte o Play"
          width={64}
          height={36}
        />

        <div className="vturb__backdrop" id="backdrop_65e64cf924757e00085638c3" />
      </div>

      <Script src="https://scripts.converteai.net/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/players/65e64cf924757e00085638c3/player.js" />
    </>
  )
}

export default Vturb;
