import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type FeatureShowcaseProps = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  eyebrow?: string;
  imagePosition?: "left" | "right";
  cta?: {
    label: string;
    href: string;
  };
};

export function FeatureShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  eyebrow,
  imagePosition = "right",
  cta,
}: FeatureShowcaseProps) {
  const imageOrder = imagePosition === "left" ? "lg:order-1" : "lg:order-2";
  const textOrder = imagePosition === "left" ? "lg:order-2" : "lg:order-1";

  return (
    <section className="relative isolate">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div
          className={`relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl shadow-blue-900/10 ring-1 ring-blue-100/70 ${imageOrder}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div
          className={`flex h-full flex-col justify-center gap-4 rounded-3xl bg-white p-8 shadow-lg shadow-blue-900/5 ring-1 ring-blue-100 ${textOrder}`}
        >
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold text-blue-900 sm:text-3xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
          {cta ? (
            <Link
              href={cta.href}
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              {cta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
