import { Hero } from "@/components/blocks/hero";
import { Features } from "@/components/blocks/features";
import { SplitImage } from "@/components/blocks/split-image";
import { FAQs } from "@/components/blocks/faqs";
import { PAGE_QUERYResult } from "@/sanity/types";

type PageBuilderProps = {
  content: NonNullable<PAGE_QUERYResult>["content"];
};

type PageBlock = NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number];

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block: PageBlock, i: number) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} {...block} />;
          case "features":
            return <Features key={block._key} {...block} />;
          case "splitImage":
            return <SplitImage key={block._key} {...block} />;
          case "faqs":
            return <FAQs key={block._key} {...block} />;
          default:
            // Fallback for unexpected block types: don't rely on block shape here
            return <div key={`unknown-${i}`}>Block not found</div>;
        }
      })}
    </main>
  );
}
