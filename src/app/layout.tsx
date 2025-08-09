import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Подарочный сертификат в ресторан",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${rubikSans.variable}`}>{children}</body>
    </html>
  );
}
