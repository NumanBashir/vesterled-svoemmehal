import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Hero } from "@/components/Hero";
import { OpeningHours } from "@/components/OpeningHours";
import type { OpeningHoursEntry } from "@/components/OpeningHours";

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

  return (
    <div className="flex flex-col">
      <Hero
        title="Velkommen til Vesterled Svømmehal"
        subtitle="Tryghed i vandet"
        description="Din lokale svømmehal med aktiviteter, motion og oplevelser for hele familien. Her finder du svømning, træning, leg og afslapning i trygge rammer."
        imageSrc="/assets/test_images/hero1.png"
        imageAlt="Indendørs svømmehal"
        cta={{ label: "Se aktiviteter", href: "/posts" }}
      />

      <main className="-mt-14 space-y-16 bg-white pb-16 pt-6 sm:-mt-20 md:-mt-24">
        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <FeatureShowcase
            eyebrow="Aktiviteter"
            title="Holdtræning for hele familien"
            description="Fra babysvømning og vandleg til intensiv træning og wellness – vores program har plads til alle aldre og niveauer."
            imageSrc="/assets/test_images/ronaldo.png"
            imageAlt="Illustration af svømmeaktiviteter"
            imagePosition="right"
            cta={{ label: "Udforsk hold", href: "/posts" }}
          />
        </section>

        <section className="container mx-auto px-6 sm:px-8 md:px-12">
          <FeatureShowcase
            eyebrow="Faciliteter"
            title="Moderne bassiner og afslappende omgivelser"
            description="Oplev lyse omgivelser, varmtvandsbassiner og gode faciliteter til både motionister og afslapning."
            imageSrc="/assets/test_images/feature2.png"
            imageAlt="Illustration af svømmehal"
            imagePosition="left"
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
      </main>
    </div>
  );
}
