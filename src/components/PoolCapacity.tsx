export type CrowdLevel = "quiet" | "moderate" | "busy";

export type CrowdPoint = {
  hour: string;
  level: CrowdLevel;
};

type PoolCapacityProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  data: CrowdPoint[];
  className?: string;
};

const levelConfig: Record<CrowdLevel, { label: string; color: string; height: string }> =
  {
    quiet: {
      label: "Roligt",
      color: "bg-emerald-400",
      height: "h-12",
    },
    moderate: {
      label: "Mellem",
      color: "bg-amber-400",
      height: "h-20",
    },
    busy: {
      label: "Travlt",
      color: "bg-rose-500",
      height: "h-28",
    },
  };

export function PoolCapacity({
  title = "Hvornår er der travlest?",
  subtitle = "Kapacitetsoversigt",
  description = "Planlæg dit besøg med vores time-for-time overblik. Tidlige morgener og sene aftener er som regel de mindst travle perioder.",
  data,
  className = "",
}: PoolCapacityProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md shadow-blue-900/10 ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400" />
      <div className="relative px-8 py-10 sm:px-10 md:px-12">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            {subtitle}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            {description}
          </p>
        </header>

        <div className="mt-10 flex flex-col items-center gap-8">
          <div className="flex w-full max-w-4xl items-end justify-between gap-3">
            {data.map((point) => {
              const config = levelConfig[point.level];
              return (
                <div key={point.hour} className="flex flex-1 flex-col items-center gap-3">
                  <div
                    className={`flex w-full max-w-[60px] items-end justify-center rounded-t-2xl bg-blue-50/80 pb-2`}
                    style={{ minHeight: "7rem" }}
                  >
                    <div
                      className={`w-10 rounded-full ${config.color} ${config.height} shadow-sm shadow-blue-900/10 transition`}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {point.hour}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {Object.entries(levelConfig).map(([key, config]) => (
              <span
                key={key}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600"
              >
                <span className={`h-3 w-3 rounded-full ${config.color}`} />
                {config.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
