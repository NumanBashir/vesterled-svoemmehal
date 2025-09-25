import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import type { POST_QUERYResult } from "@/sanity/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  const post = data as POST_QUERYResult;

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage
    ? builder.image(post.mainImage).width(1200).height(630).url()
    : null;

  return (
    <div className="container mx-auto min-h-screen max-w-4xl px-4 py-8 md:px-8">
      <nav className="mb-8">
        <Link
          href="/posts"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
        >
          <span className="mr-1">←</span> Back to posts
        </Link>
      </nav>

      <article className="prose prose-lg max-w-none dark:prose-invert">
        {imageUrl && (
          <div className="not-prose mb-8">
            <img
              src={imageUrl}
              alt={post.title || ""}
              className="w-full rounded-xl object-cover"
              width={1200}
              height={630}
            />
          </div>
        )}

        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

        <div className="not-prose mb-8 flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
          {post.author && (
            <span className="flex items-center">By {post.author}</span>
          )}
          {post.publishedAt && (
            <time dateTime={post.publishedAt} className="flex items-center">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.map(
                (category) =>
                  category && (
                    <span
                      key={category}
                      className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {category}
                    </span>
                  )
              )}
            </div>
          )}
        </div>

        <div className="prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
          {post.body && <PortableText value={post.body} />}
        </div>
      </article>
    </div>
  );
}
