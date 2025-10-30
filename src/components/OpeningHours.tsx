type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type OpeningHoursEntry = {
  day: Weekday;
  opensAt?: string;
  closesAt?: string;
  closed?: boolean;
  label?: string;
  details?: string;
};

type OpeningHoursProps = {
  hours: OpeningHoursEntry[];
  notes?: string[];
  noteTitle?: string;
  className?: string;
};

const dayLabels: Record<Weekday, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

function normalizeWeekday(day: string): Weekday | null {
  const normalized = day.toLowerCase() as Weekday;
  return normalized in dayLabels ? normalized : null;
}

export function OpeningHours({
  hours,
  notes,
  noteTitle = "Special hours & events",
  className = "",
}: OpeningHoursProps) {
  const today = normalizeWeekday(
    new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date())
  );

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-blue-900/5 ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300" />

      <div className="grid gap-8 px-8 pb-8 pt-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
        <div>
          <header className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              Plan your visit
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Opening hours
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Check today&apos;s schedule and see when we&apos;re open during
              the week.
            </p>
          </header>

          <ul className="flex flex-col gap-3">
            {hours.map((entry) => {
              const entryDay = normalizeWeekday(entry.day);
              const isToday = entryDay && today && entryDay === today;
              const isClosed =
                entry.closed || (!entry.opensAt && !entry.closesAt);

              return (
                <li
                  key={entry.day}
                  className={`flex items-start justify-between rounded-2xl border px-5 py-4 transition ${
                    isToday
                      ? "border-blue-500 bg-blue-50/80 text-blue-900 shadow-sm"
                      : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  <div>
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.15em] ${
                        isToday ? "text-blue-600" : "text-slate-500"
                      }`}
                    >
                      {entry.label ??
                        (entryDay ? dayLabels[entryDay] : entry.day)}
                    </p>
                    <p className="mt-2 text-base font-medium">
                      {isClosed
                        ? "Closed"
                        : `${entry.opensAt ?? "—"} – ${entry.closesAt ?? "—"}`}
                    </p>
                    {entry.details ? (
                      <p className="mt-2 text-sm text-slate-500">
                        {entry.details}
                      </p>
                    ) : null}
                    {isToday ? (
                      <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                        Today
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="space-y-4 rounded-2xl border border-blue-100 bg-blue-50/80 p-6 text-slate-700">
          <h3 className="text-lg font-semibold text-blue-900">{noteTitle}</h3>
          {notes && notes.length > 0 ? (
            <ul className="space-y-3 text-sm leading-relaxed">
              {notes.map((note, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-[6px] w-[6px] rounded-full bg-blue-400" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">
              No special events or holiday updates at the moment.
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
