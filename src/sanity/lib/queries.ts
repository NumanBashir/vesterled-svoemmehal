import { defineQuery } from "next-sanity";

// Fetches the site settings
export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]{
  "siteTitle": siteTitle,
  "siteDescription": siteDescription,
  "faviconUrl": favicon.asset->url,
  "brandColors": {
    "primary": brandColors.primary.hex,
    "secondary": brandColors.secondary.hex,
    "accent": brandColors.accent.hex
  }
}`);

// Fetches the 12 most recent posts with defined slugs
export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

// Fetches posts by category slug
export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

// Fetches a single post by its slug
export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  },
  relatedPosts[]{
    _key, // required for drag and drop
    ...@->{_id, title, slug} // get fields from the referenced post
  }
}`);

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...,
    _type == "faqs" => {
      ...,
      faqs[]->
    }
  }
}`);
