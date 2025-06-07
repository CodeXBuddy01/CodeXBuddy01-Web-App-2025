import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Script from "next/script";

export const metadata: Metadata = {
  title: "CodeXBuddy01 - Web Development Agency",
  description: "We build cutting-edge web apps that drive business growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F3Y3R1RNP0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F3Y3R1RNP0');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
