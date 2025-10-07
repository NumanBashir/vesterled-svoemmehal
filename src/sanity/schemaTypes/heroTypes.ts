import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "heroImage",
      type: "image",
    }),
    defineField({
      name: "heroCTAButtonText",
      type: "string",
    }),
  ],
});
