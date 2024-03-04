// import Image from "next/image";
import Script from "next/script"

import "@/sass/components/_vturb.scss";

const Vturb = () => {

  return (
    <>
      {/* <div className="vturb" id="vid_65d6aa6297098c0007bd4f4c">
        <Image
          className="vturb__thumbnail"
          src="https://images.converteai.net/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/players/65d6aa6297098c0007bd4f4c/thumbnail.jpg"
          alt="Aperte o Play"
          width={64}
          height={36}
        />

        <div className="vturb__backdrop" id="backdrop_65d6aa6297098c0007bd4f4c" />
      </div> */}

      <script type="text/javascript" id="scr_65e64e72b5d1b9000816f573"></script>

      <Script id="scr_65e64e72b5d1b9000816f573" />
      <Script id="show-banner">
        {"var s=document.createElement(\"script\");s.src=\"https://scripts.converteai.net/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/ab-test/65e64e72b5d1b9000816f573/player.js\",s.async=!0,document.head.appendChild(s);"}
      </Script>
    </>
  )
}

export default Vturb;


{/* <script type="text/javascript" id="scr_65e64e72b5d1b9000816f573">var s=document.createElement("script");s.src="https://scripts.converteai.net/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/ab-test/65e64e72b5d1b9000816f573/player.js",s.async=!0,document.head.appendChild(s);</script> */}