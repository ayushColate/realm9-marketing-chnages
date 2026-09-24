import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://realm9.app"),
  title: {
    default: "Realm9 — The ecosystem layer for software and hardware",
    template: "%s — Realm9",
  },
  description: "Realm9 handles the ecosystem for software and hardware, leveraged by humans and by agents.",
  openGraph: {
    title: "Realm9 — The ecosystem layer for software and hardware",
    description: "Realm9 handles the ecosystem for software and hardware, leveraged by humans and by agents.",
    url: "https://realm9.app",
    siteName: "Realm9",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const stored = localStorage.getItem("realm9-theme"); const theme = stored === "light" || stored === "dark" ? stored : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; document.documentElement.dataset.theme = theme; } catch { document.documentElement.dataset.theme = "light"; } })();`,
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
