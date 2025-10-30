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
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md shadow-blue-900/10 ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300" />

      <div className="relative flex flex-col items-center gap-10 px-8 pb-10 pt-12 text-center sm:px-12">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
            Plan your visit
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Opening hours
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Hold øje med dagens åbningstid og planlæg ugens besøg. Vi
            opdaterer tiderne løbende for særlige arrangementer og ferier.
          </p>
        </header>

        <ul className="grid w-full max-w-3xl gap-3">
          {hours.map((entry) => {
            const entryDay = normalizeWeekday(entry.day);
            const isToday = entryDay && today && entryDay === today;
            const isClosed =
              entry.closed || (!entry.opensAt && !entry.closesAt);

            return (
              <li
                key={entry.day}
                className={`rounded-2xl border px-6 py-5 transition ${
                  isToday
                    ? "border-blue-400 bg-blue-50/80 text-blue-900 shadow-sm shadow-blue-100"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                  <div className="space-y-1 text-center sm:text-left">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                        isToday ? "text-blue-600" : "text-slate-500"
                      }`}
                    >
                      {entry.label ??
                        (entryDay ? dayLabels[entryDay] : entry.day)}
                    </p>
                    <p className="text-base font-medium">
                      {isClosed
                        ? "Lukket"
                        : `${entry.opensAt ?? "—"} – ${entry.closesAt ?? "—"}`}
                    </p>
                  </div>
                  {entry.details ? (
                    <p className="text-sm text-slate-500">{entry.details}</p>
                  ) : null}
                </div>
                {isToday ? (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    I dag
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>

        {notes && notes.length > 0 ? (
          <div className="w-full max-w-2xl rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-6 text-left shadow-sm shadow-blue-100">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {noteTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {notes.map((note, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
