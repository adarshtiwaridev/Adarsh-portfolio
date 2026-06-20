import { IBM_Plex_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import "@/Styles/globals.css";

import { themeScript } from "@/hooks/use-theme";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sans.variable} ${mono.variable}`}>
      <Script id="theme-init" strategy="beforeInteractive">
        {themeScript}
      </Script>

      <Component {...pageProps} />
    </div>
  );
}