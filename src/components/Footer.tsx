import Link from "next/link";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M13.5 9.5V7.75c0-.6.05-.9.95-.9h1.55V4h-2.15C10.9 4 10 5.6 10 7.6v1.9H8v2.85h2V20h3.5v-7.65h2.36l.29-2.85H13.5z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 7.35A4.65 4.65 0 1 0 16.65 12 4.65 4.65 0 0 0 12 7.35Zm0 7.65A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.25-7.95a1.08 1.08 0 1 0-1.08-1.08 1.08 1.08 0 0 0 1.08 1.08ZM20 7.45a5.76 5.76 0 0 0-5.75-5.75h-4.5A5.76 5.76 0 0 0 4 7.45v4.5A5.76 5.76 0 0 0 9.75 17.7h4.5A5.76 5.76 0 0 0 20 11.95Zm-1.65 4.5a4.11 4.11 0 0 1-4.1 4.1h-4.5a4.11 4.11 0 0 1-4.1-4.1v-4.5a4.11 4.11 0 0 1 4.1-4.1h4.5a4.11 4.11 0 0 1 4.1 4.1Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M9.04 9.5H6V20h3.04ZM7.52 4a1.76 1.76 0 0 0-1.86 1.74 1.76 1.76 0 1 0 3.52 0A1.76 1.76 0 0 0 7.52 4Zm10.98 6.02c-1.6 0-2.6.86-3.05 1.68h-.05V9.5H12.4c0 .77.04 1.61.04 2.64V20h3.04v-5.35c0-.29.02-.59.11-.8.24-.59.79-1.21 1.72-1.21 1.21 0 1.69.91 1.69 2.24V20H22v-5.53c0-2.96-1.58-4.45-3.5-4.45Z" />
      </svg>
    ),
  },
] as const;

export function Footer() {
  return (
    <div className="mt-16 bg-gradient-to-t from-blue-50 via-white to-blue-50">
      <footer className="container mx-auto flex flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold text-blue-700">
            Vesterled Svømmehal
          </p>
          <p className="max-w-sm text-xs text-slate-500">
            Et trygt sted at svømme, lære og mødes med lokalsamfundet.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Find us
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white/80 text-blue-600 transition hover:border-blue-200 hover:text-blue-500"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
      <div className="border-t border-blue-100 bg-white/90">
        <p className="container mx-auto px-6 py-4 text-xs text-slate-400">
          © {new Date().getFullYear()} Vesterled Svømmehal. All rights reserved.
        </p>
      </div>
    </div>
  );
}
