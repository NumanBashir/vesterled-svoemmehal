type ContactLink = {
  label: string;
  href: string;
  icon?: string;
};

type OpeningHour = {
  label: string;
  value: string;
};

type ContactSectionProps = {
  title?: string;
  description?: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: ContactLink[];
  openingHours: OpeningHour[];
  className?: string;
};

export function ContactSection({
  title = "Kontakt os",
  description = "Har du spørgsmål til faciliteter, hold eller booking? Skriv til os – vi svarer hurtigst muligt.",
  address,
  phone,
  email,
  socialLinks,
  openingHours,
  className = "",
}: ContactSectionProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white shadow-xl shadow-blue-900/20 ${className}`}
    >
      <div className="absolute inset-0 bg-blue-900/20" />
      <div className="relative flex flex-col items-center gap-12 px-8 py-12 text-center sm:px-12">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
            Vi er her
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="text-sm text-blue-100/80">{description}</p>
        </header>

        <form
          className="w-full max-w-xl space-y-4 rounded-3xl border border-white/10 bg-white/10 p-6 text-left shadow-lg backdrop-blur sm:p-8"
          action="#"
          method="post"
        >
          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-blue-100"
              htmlFor="contact-name"
            >
              Navn
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Dit fulde navn"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-blue-100"
              htmlFor="contact-email"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="navn@eksempel.dk"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-blue-100"
              htmlFor="contact-message"
            >
              Besked
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Fortæl os hvordan vi kan hjælpe"
              className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-900/20 transition hover:bg-blue-50"
          >
            Send besked
          </button>
        </form>
      </div>
    </section>
  );
}
