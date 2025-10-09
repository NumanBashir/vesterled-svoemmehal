import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
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
