import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujal Lukhi - Full Stack Developer",
  description:
    "Passionate Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. B.Tech in Information Technology at CHARUSAT.",
  keywords:
    "Sujal Lukhi, Full Stack Developer, React, Next.js, TypeScript, Web Developer, Portfolio",
  authors: [{ name: "Sujal Lukhi" }],
  openGraph: {
    title: "Sujal Lukhi - Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
