import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Hero } from "@/components/Hero";

export default async function Page() {
  return (
    <div className="flex flex-col">
      <button className="bg-primary hover:bg-red-500 text-accent px-5 py-2 rounded-full">
        Book your swim
      </button>
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
      </main>
    </div>
  );
}
