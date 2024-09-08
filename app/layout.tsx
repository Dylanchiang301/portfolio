import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProviders } from './provider'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dylan's portfolio",
  description: "Portfolio built with Next.js & React.js",
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
        <ThemeProviders
          // attribute="class"
          // defaultTheme="dark"
        >
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
