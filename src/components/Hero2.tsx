import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Hero2Props = {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export function Hero2({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "",
  cta,
}: Hero2Props) {
  return (
    <section className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white md:min-h-[520px]">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-900/50 to-blue-700/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:px-8 md:px-12 md:pb-32">
        <div className="max-w-xl rounded-3xl bg-white/95 p-8 text-slate-800 shadow-2xl shadow-blue-900/20 ring-1 ring-blue-100 backdrop-blur">
          {subtitle ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              {subtitle}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl font-semibold text-blue-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          ) : null}
          {cta ? (
            <div className="mt-6">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500 hover:shadow-lg"
              >
                {cta.label}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
