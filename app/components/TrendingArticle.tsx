import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/post";
import { getExcerpt, getReadingTime, getTagsArray } from "@/types/post";

type Props = {
  post?: Post;
};

export default function TrendingArticle({ post }: Props) {
  if (!post) return null;

  const tags = getTagsArray(post.tags).slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-screen-2xl text-left">
      <div className="mb-6 flex items-center justify-center sm:mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 text-sm font-bold text-red-600 sm:px-6 sm:py-3 sm:text-base dark:from-red-900/30 dark:to-orange-900/30 dark:text-red-400">
          <span className="animate-pulse">🔥</span> Trending Article
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/80 transition duration-300 hover:shadow-2xl sm:rounded-3xl dark:bg-slate-900 dark:ring-slate-700/80">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-56 overflow-hidden sm:h-72 lg:h-full lg:min-h-[360px]">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 sm:text-sm dark:bg-blue-900/40 dark:text-blue-300">
                Featured
              </span>
              {post.category && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 sm:text-sm dark:bg-slate-800 dark:text-slate-300">
                  {post.category}
                </span>
              )}
            </div>

            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
              {post.title}
            </h2>

            <p className="mt-4 line-clamp-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 dark:text-slate-300">
              {getExcerpt(post.content, 280)}
            </p>

            {tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href={`/posts/${post.id}`}
                className="inline-flex w-fit items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:px-6 sm:py-3 sm:text-base"
              >
                Read Article →
              </Link>

              <div className="flex items-center gap-3 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                {post.createdAt && (
                  <span>
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                )}
                <span>·</span>
                <span>{getReadingTime(post.content)} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
