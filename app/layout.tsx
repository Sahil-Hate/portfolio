import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/Archivo.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const plexSans = localFont({
  src: "./fonts/PlexSans.woff2",
  variable: "--font-plex-sans",
  weight: "100 700",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/PlexMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PlexMono-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.role}`,
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} bg-bg text-fg antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
