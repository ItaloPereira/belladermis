import Image from "next/image";
import Script from "next/script"

import "@/sass/modules/_vturb.scss";

const Vturb = () => {

  return (
    <>
      <div className="vturb" id="vid_65d6aa6297098c0007bd4f4c">
        <Image
          className="vturb__thumbnail"
          src="https://images.converteai.net/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/players/65d6aa6297098c0007bd4f4c/thumbnail.jpg"
          alt="Aperte o Play"
          width={64}
          height={36}
        />

        <div className="vturb__backdrop" id="backdrop_65d6aa6297098c0007bd4f4c" />
      </div>

      <Script src="https://scripts.converteai.net/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/players/65d6aa6297098c0007bd4f4c/player.js" />
    </>
  )
}

export default Vturb;
