import Image, { StaticImageData } from "next/image";

type Highlight = {
  title: string;
  description: string;
  emoji: string;
};

type AboutImage = {
  src: string | StaticImageData;
  alt: string;
};

type AboutPoolProps = {
  eyebrow?: string;
  title: string;
  description: string;
  highlights: Highlight[];
  images: AboutImage[];
  className?: string;
};

export function AboutPool({
  eyebrow = "Om svømmehallen",
  title,
  description,
  highlights,
  images,
  className = "",
}: AboutPoolProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-teal-50 shadow-lg shadow-blue-900/10 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%)]" />

      <div className="relative grid gap-10 px-8 py-12 sm:px-10 md:grid-cols-[1.2fr_1fr] md:px-12">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-slate-600">{description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm shadow-blue-100"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {images.slice(0, 2).map((image) => (
              <div
                key={image.alt}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-md shadow-blue-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {images[2] ? (
            <div className="relative hidden aspect-[3/4] overflow-hidden rounded-3xl bg-slate-200 shadow-md shadow-blue-100 md:block">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
