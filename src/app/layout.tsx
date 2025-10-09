import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vesterled Svømmehal",
  description: "Vesterled Svømmehal website built with Next.js and Sanity",
  icons: {
    icon: "/assets/favicon_io/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
