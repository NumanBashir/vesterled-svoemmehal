import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      description: "The title of the website",
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      description: "A brief description of the website",
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "file",
      options: {
        accept: ".ico,.png,.jpg,.svg",
      },
      description: "Square image works best",
    }),
  ],
});
