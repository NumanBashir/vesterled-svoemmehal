import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const heroType2 = defineType({
  name: "hero2",
  title: "Hero2 Section",
  type: "document",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero2 Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "hero2Image",
      type: "image",
    }),
    defineField({
      name: "hero2CTAButtonText",
      type: "string",
    }),
  ],
});
