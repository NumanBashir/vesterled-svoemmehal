export type PricingTier = {
  id: string;
  title: string;
  price: string;
  subtext?: string;
  description?: string;
  highlight?: boolean;
  emoji: string;
};

type PricingSectionProps = {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  className?: string;
};

export function PricingSection({
  title = "Entré & medlemskaber",
  subtitle = "Vælg din billet",
  tiers,
  className = "",
}: PricingSectionProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-blue-900/10 ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-teal-300" />

      <div className="relative px-8 pb-12 pt-10 sm:px-10 md:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            {subtitle}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-600">
            Samme adgang for alle – vælg den billet der passer til dig og dine
            besøgsvaner.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={`flex flex-col rounded-2xl border px-6 pb-6 pt-7 text-slate-700 transition ${
                tier.highlight
                  ? "border-blue-400 bg-blue-50/80 shadow-md shadow-blue-200"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-3xl" aria-hidden="true">
                  {tier.emoji}
                </span>
                {tier.highlight ? (
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Mest populær
                  </span>
                ) : null}
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {tier.title}
              </h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {tier.price}
                {tier.subtext ? (
                  <span className="ml-2 text-sm font-medium text-slate-500">
                    {tier.subtext}
                  </span>
                ) : null}
              </p>
              {tier.description ? (
                <p className="mt-3 text-sm text-slate-600">
                  {tier.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
