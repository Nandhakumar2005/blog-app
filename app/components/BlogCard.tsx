import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/post";
import { getExcerpt, getReadingTime, getTagsArray } from "@/types/post";

export type { Post };

export default function BlogCard({ post }: { post: Post }) {
  const tags = getTagsArray(post.tags).slice(0, 2);

  return (
    <Link href={`/posts/${post.id}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:rounded-3xl dark:bg-slate-800/80 dark:ring-slate-700/80">
        {post.image && (
          <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:h-60">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {post.category && (
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm dark:bg-slate-900/90 dark:text-slate-100">
                {post.category}
              </span>
            )}
          </div>
        )}

        <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent"}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {getReadingTime(post.content)} min read
            </span>
          </div>

          <h2 className="text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl lg:text-[1.65rem] dark:text-white">
            {post.title}
          </h2>

          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base sm:leading-7 dark:text-slate-300">
            {getExcerpt(post.content)}
          </p>

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 sm:mt-6 sm:pt-5 dark:border-slate-700">
            <span className="text-sm font-semibold text-blue-600 transition duration-300 group-hover:translate-x-1 dark:text-blue-400">
              Read Article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
