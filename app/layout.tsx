import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import type { ReactNode } from "react";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Modern Blog | Next.js",
  description:
    "Explore articles on web development, programming, and modern technologies.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}<Footer /></Providers>
      </body>
    </html>
  );
}