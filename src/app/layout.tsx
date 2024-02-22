import type { Metadata } from "next";
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
    </html>
  );
}
