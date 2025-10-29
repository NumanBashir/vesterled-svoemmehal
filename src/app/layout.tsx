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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: siteSettings } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
  });

  const colors: {
    primary?: string | null;
    secondary?: string | null;
    accent?: string | null;
  } = siteSettings?.brandColors || {};

  return (
    <html
      lang="en"
      data-theme="light"
      style={
        {
          "--color-primary": colors.primary || "#0ea5e9",
          "--color-secondary": colors.secondary || "#64748b",
          "--color-accent": colors.accent || "#22c55e",
        } as React.CSSProperties
      }
    >
      <body>{children}</body>
    </html>
  );
}
