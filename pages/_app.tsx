import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

import MainLayout from "components/Layout";
import { gtag } from "config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MainLayout>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
        />
        <Script id="ga-tracking" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag}', {
                page_path: window.location.pathname,
            });
          `}
        </Script>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
