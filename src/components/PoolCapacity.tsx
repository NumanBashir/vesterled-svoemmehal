"use client";

import { useMemo } from "react";

type PoolCapacityProps = {
  occupancy: number;
  capacity: number;
  lastUpdated?: string;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  className?: string;
};

type CapacityStatus = {
  label: string;
  description: string;
  badgeClass: string;
  barClass: string;
};

export function PoolCapacity({
  occupancy,
  capacity,
  lastUpdated,
  isRefreshing = false,
  onRefresh,
  className = "",
}: PoolCapacityProps) {
  const { label, description, badgeClass, barClass, fillPercent } = useMemo(() => {
    const ratio = capacity > 0 ? occupancy / capacity : 0;
    let status: CapacityStatus;

    if (ratio >= 1) {
      status = {
        label: "Fuld belægning",
        description: "Vi anbefaler at vente lidt – svømmehallen er fyldt.",
        badgeClass: "bg-red-100 text-red-600 border-red-200",
        barClass: "bg-gradient-to-r from-red-500 to-red-600",
      };
    } else if (ratio >= 0.75) {
      status = {
        label: "Travlt",
        description: "Der er mange i bassinet – forvent lidt ventetid.",
        badgeClass: "bg-amber-100 text-amber-600 border-amber-200",
        barClass: "bg-gradient-to-r from-amber-400 to-amber-500",
      };
    } else {
      status = {
        label: "Roligt",
        description: "Massere af plads til en god svømmetur.",
        badgeClass: "bg-emerald-100 text-emerald-600 border-emerald-200",
        barClass: "bg-gradient-to-r from-emerald-400 to-teal-500",
      };
    }

    return {
      ...status,
      fillPercent: Math.min(100, Math.max(0, Math.round(ratio * 100))),
    };
  }, [capacity, occupancy]);

  const remaining = Math.max(0, capacity - occupancy);

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md shadow-blue-900/10 ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400" />
      <div className="relative px-8 py-8 sm:px-10 md:px-12">
        <header className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Aktuel kapacitet
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Pool Capacity
            </h2>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>

          <div className="flex flex-col items-end gap-3 text-right">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${badgeClass}`}
            >
              <span className="h-2 w-2 rounded-full bg-current" />
              {label}
            </span>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">{occupancy}</span>
              <span className="mx-1 text-slate-400">/</span>
              <span>{capacity}</span> gæster
            </div>
          </div>
        </header>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Belægning</span>
              <span>{fillPercent}% fyldt</span>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-slate-100">
              <div
                className={`${barClass} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${fillPercent}%` }}
              />
            </div>

            <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  I hallen
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {occupancy}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Ledige pladser
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {remaining}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <button
              type="button"
              onClick={onRefresh}
              disabled={!onRefresh || isRefreshing}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isRefreshing ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
                }`}
              />
              Opdater
            </button>
            {lastUpdated ? (
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Senest opdateret {lastUpdated}
              </p>
            ) : (
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Live data
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
