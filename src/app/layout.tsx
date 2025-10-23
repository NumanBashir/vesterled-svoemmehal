import "@/app/globals.css";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export async function generateMetadata() {
  const { data: siteSettings } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
  });

  return {
    title: siteSettings?.siteTitle || "Meta Vesterled Svømmehal",
    description:
      siteSettings?.siteDescription ||
      "Vesterled Svømmehal website built with Next.js and Sanity",
    icons: {
      icon: siteSettings?.faviconUrl,
    },
  };
}

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
