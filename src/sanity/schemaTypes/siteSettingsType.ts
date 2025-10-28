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
      name: "email",
      title: "Email",
      type: "string",
      description: "The email address for the website",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      description: "The phone number for the website",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "The main logo of the website",
    }),
    defineField({
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      description: "The image used for Open Graph meta tags",
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
    defineField({
      name: "socialLinks",
      title: "Social Links",
      description: "Social media links for the website",
      type: "array",
      of: [
        defineField({
          name: "socialLink",
          title: "Social Link",
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "X", value: "X" },
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "YouTube", value: "youtube" },
                  { title: "Pinterest", value: "pinterest" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "Snapchat", value: "snapchat" },
                  { title: "Reddit", value: "reddit" },
                  { title: "Other", value: "other" },
                ],
                layout: "dropdown",
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
          preview: {
            select: {
              platform: "platform",
              url: "url",
            },
            prepare(selection: { platform?: string; url?: string }) {
              const { platform, url } = selection;

              return {
                title: platform
                  ? platform.charAt(0).toUpperCase() + platform.slice(1)
                  : "Untitled",
                subtitle: url || "",
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "brandColors",
      title: "Brand Colors",
      type: "object",
      fields: [
        defineField({
          name: "primary",
          title: "Primary Color",
          type: "color",
        }),
        defineField({
          name: "secondary",
          title: "Secondary Color",
          type: "color",
        }),
        defineField({
          name: "accent",
          title: "Accent Color",
          type: "color",
        }),
      ],
      options: { collapsible: true, collapsed: false },
    }),
  ],
});
