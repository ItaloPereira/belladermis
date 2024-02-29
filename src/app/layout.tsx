import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script"
import type { ReactNode } from "react";

import { poppins } from "@/fonts";
import "@/sass/styles.scss";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | BellaDermis",
//     default: "BellaDermis",
//   },
//   description: "",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
      {/* META PIXEL CODE */}
      <Script id="meta-pixel-code">
        {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1437105243909867');
          fbq('track', 'PageView');`}
      </Script>
      {/* END META PIXEL CODE */}
      <SpeedInsights />
      <Analytics />
    </html>
  );
}


