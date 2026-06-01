import type { Metadata } from "next";
import { Cormorant_Garamond, Caveat, JetBrains_Mono } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const handwriting = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Happy 25th Birthday, CTT ❤️",
  description: "A magical birthday journey for Duck Duck BB — made with love by Janice",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Happy 25th Birthday, CTT ❤️",
    description: "For my favourite Duck Duck BB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${handwriting.variable} ${mono.variable}`}>
      <body className="bg-night font-display antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
