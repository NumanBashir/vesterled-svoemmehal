import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Hero2 } from "@/components/Hero2";
import { OpeningHours } from "@/components/OpeningHours";
import type { OpeningHoursEntry } from "@/components/OpeningHours";
import { PricingSection } from "@/components/PricingSection";
import type { PricingTier } from "@/components/PricingSection";
import { PoolCapacity } from "@/components/PoolCapacity";
import type { CrowdPoint } from "@/components/PoolCapacity";
import { AboutPool } from "@/components/AboutPool";
import { ContactSection } from "@/components/ContactSection";

export default async function Page() {
  const weeklyHours: OpeningHoursEntry[] = [
    { day: "monday", label: "Mandag", opensAt: "06.30", closesAt: "20.00" },
    { day: "tuesday", label: "Tirsdag", opensAt: "06.30", closesAt: "20.00" },
    { day: "wednesday", label: "Onsdag", opensAt: "06.30", closesAt: "20.00" },
    { day: "thursday", label: "Torsdag", opensAt: "06.30", closesAt: "21.00" },
    { day: "friday", label: "Fredag", opensAt: "06.30", closesAt: "19.00" },
    {
      day: "saturday",
      label: "Lørdag",
      opensAt: "08.00",
      closesAt: "16.00",
    },
    {
      day: "sunday",
      label: "Søndag",
      opensAt: "08.00",
      closesAt: "16.00",
    },
  ];

  const specialNotes = [
    "Familieaftener hver torsdag fra kl. 18.00 med ekstra livredder til stede.",
    "Morgensvømning for pensionister mandag og onsdag fra kl. 06.30-08.00.",
    "Lukket på officielle helligdage – se kalenderen for detaljer.",
  ];

  const pricingTiers: PricingTier[] = [
    {
      id: "adults",
      title: "Voksenbillet",
      price: "65 kr.",
      subtext: "pr. gang",
      description: "Til dig der vil svømme, træne eller slappe af i saunaen.",
      emoji: "🧑🏽",
    },
    {
      id: "kids",
      title: "Børnebillet",
      price: "40 kr.",
      subtext: "pr. gang",
      description: "Gælder til og med 14 år. Børn under 10 skal have ledsager.",
      emoji: "👦🏽",
    },
    {
      id: "seniors",
      title: "Seniorbillet",
      price: "45 kr.",
      subtext: "pr. gang",
      description: "For svømmere på 65+ med rolige morgentimer inkluderet.",
      emoji: "👴🏼",
    },
    {
      id: "membership",
      title: "Månedskort",
      price: "289 kr.",
      subtext: "pr. måned",
      description:
        "Ubegrænset adgang med fast lav pris og gæstepas hver måned.",
      emoji: "🔑",
      highlight: true,
    },
    {
      id: "clipcard",
      title: "Klippekort (10x)",
      price: "550 kr.",
      subtext: "gyldig i 12 mdr.",
      description: "Del med familien og brug klippene når det passer jer.",
      emoji: "🎟️",
    },
  ];

  const poolCapacityData: CrowdPoint[] = [
    { hour: "06-08", level: "quiet" },
    { hour: "08-10", level: "moderate" },
    { hour: "10-12", level: "busy" },
    { hour: "12-14", level: "busy" },
    { hour: "14-16", level: "moderate" },
    { hour: "16-18", level: "busy" },
    { hour: "18-20", level: "moderate" },
    { hour: "20-21", level: "quiet" },
  ];

  const aboutHighlights = [
    {
      title: "Stærkt fællesskab",
      description:
        "Vi samler naboer, skoler og lokale foreninger til træning, hygge og events hele året.",
      emoji: "🤝",
    },
    {
      title: "Sikkerhed i fokus",
      description:
        "Uddannede livreddere er altid til stede, og vi holder sikkerhedstræning for både børn og voksne.",
      emoji: "🛟",
    },
    {
      title: "Dygtige instruktører",
      description:
        "Vores instruktører kombinerer erfaring og nærvær, så alle føler sig trygge i vandet.",
      emoji: "🏅",
    },
    {
      title: "Leg og grin",
      description:
        "Fra børnebassinet til wellness-zonen – vi skaber rammer for leg, læring og gode minder.",
      emoji: "🎉",
    },
  ];

  const aboutImages = [
    {
      src: "/assets/test_images/hero1.png",
      alt: "Svømmere i bassin",
    },
    {
      src: "/assets/test_images/zac.png",
      alt: "Holdtræning i vand",
    },
  ];

  const moreAboutPoints = [
    {
      title: "Vores mission",
      description:
        "Vi styrker svømmeglæden i hele lokalområdet gennem trygge rammer og gode oplevelser for alle aldre.",
      emoji: "🌊",
    },
    {
      title: "Fællesskab og frivillighed",
      description:
        "Frivillige kræfter og stærke samarbejder med foreninger skaber liv i bassinet fra morgen til aften.",
      emoji: "💙",
    },
    {
      title: "Events og aktiviteter",
      description:
        "Fra familieaftener og tema-aftener til kurser og konkurrencer – kalenderen er fyldt året rundt.",
      emoji: "📅",
    },
    {
      title: "Plads til udvikling",
      description:
        "Vi hjælper begyndere og elitesvømmere med at udvikle sig – både på teknik, udholdenhed og selvtillid.",
      emoji: "🚀",
    },
  ];

  const contactInfo = {
    address: "Vesterledgade 42, 2750 Ballerup",
    phone: "+45 44 44 44 44",
    email: "kontakt@vesterledsvoemmehal.dk",
    socialLinks: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/vesterled",
        icon: "📘",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/vesterled",
        icon: "📸",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/vesterled",
        icon: "🔗",
      },
    ],
    openingHours: [
      { label: "Mandag - Torsdag", value: "06.30 – 21.00" },
      { label: "Fredag", value: "06.30 – 19.00" },
      { label: "Weekend", value: "08.00 – 16.00" },
      { label: "Helligdage", value: "Se kalenderen" },
    ],
  };

  return (
    <div className="flex flex-col">
      <Hero2
        title="Velkommen til Vesterled Svømmehal"
        subtitle="Tryghed i vandet"
        description="Din lokale svømmehal med aktiviteter, motion og oplevelser for hele familien. Her finder du svømning, træning, leg og afslapning i trygge rammer."
        imageSrc="/assets/test_images/hero1.png"
        imageAlt="Indendørs svømmehal"
        cta={{ label: "Se aktiviteter", href: "/posts" }}
      />

      <main className="space-y-16 bg-white pb-16 pt-6">
        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <FeatureShowcase
            eyebrow="Aktiviteter"
            title="Holdtræning for hele familien"
            description="Fra babysvømning og vandleg til intensiv træning og wellness – vores program har plads til alle aldre og niveauer."
            imageSrc="/assets/test_images/ronaldo.png"
            imageAlt="Illustration af svømmeaktiviteter"
            imagePosition="left"
            cta={{ label: "Udforsk hold", href: "/posts" }}
          />
        </section>

        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <AboutPool
            title="Et trygt samlingspunkt for hele byen"
            description="Vesterled Svømmehal er mere end et bassin – det er et sted hvor fællesskaber vokser, børn lærer at svømme, og voksne finder roen i vandet. Vi har fokus på sikkerhed, nærvær og gode oplevelser uanset niveau."
            highlights={aboutHighlights}
            images={aboutImages}
          />
        </section>

        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <PricingSection tiers={pricingTiers} />
        </section>

        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <PoolCapacity data={poolCapacityData} />
        </section>

        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <FeatureShowcase
            eyebrow="Faciliteter"
            title="Moderne bassiner og afslappende omgivelser"
            description="Oplev lyse omgivelser, varmtvandsbassiner og gode faciliteter til både motionister og afslapning."
            imageSrc="/assets/test_images/feature2.png"
            imageAlt="Illustration af svømmehal"
            imagePosition="right"
            cta={{ label: "Se faciliteter", href: "/posts" }}
          />
        </section>

        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <OpeningHours
            hours={weeklyHours}
            notes={specialNotes}
            noteTitle="Særlige åbningstider"
          />
        </section>

        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-blue-100/60 p-8 shadow-md shadow-blue-900/10 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Mere om os
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Hvorfor vi elsker vandet
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Vesterled Svømmehal er bygget på engagement, frivillighed og
              ønsket om at dele svømmeglæden. Her er lidt mere om det, der gør
              os særlige.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {moreAboutPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm shadow-blue-100"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {point.emoji}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <ContactSection
            address={contactInfo.address}
            phone={contactInfo.phone}
            email={contactInfo.email}
            socialLinks={contactInfo.socialLinks}
            openingHours={contactInfo.openingHours}
          />
        </section>
      </main>
    </div>
  );
}
