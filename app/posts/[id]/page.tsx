import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { getPosts, getPost } from "@/lib/api";
import { getReadingTime, getTagsArray } from "@/types/post";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id);
  const posts = await getPosts();

  if (!post) return notFound();

  const tags = getTagsArray(post.tags);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white transition-colors duration-300 dark:from-slate-950 dark:to-slate-900">
      <Header />

      {post.image && (
        <div className="relative h-48 overflow-hidden sm:h-64 md:h-80 lg:h-[28rem]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
      )}

      <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1fr_300px] lg:gap-12 lg:px-10 lg:py-12 xl:px-14">
        <article>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-200 sm:px-4 sm:py-2 sm:text-sm dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
          >
            ← Back to Articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
            <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 sm:px-4 sm:py-1.5 sm:text-sm dark:bg-slate-800 dark:text-slate-300">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Recent"}
            </span>
            <span className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
              {getReadingTime(post.content)} min read
            </span>
            {post.category && (
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 sm:text-sm dark:bg-blue-900/30 dark:text-blue-300">
                {post.category}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl dark:text-white">
            {post.title}
          </h1>

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 sm:mt-8 sm:w-24" />

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200/80 transition-colors duration-300 sm:mt-10 sm:rounded-3xl sm:p-8 lg:p-10 dark:bg-slate-900 dark:ring-slate-700/80">
            <p className="whitespace-pre-line text-base leading-8 text-slate-700 sm:text-lg sm:leading-9 dark:text-slate-300">
              {post.content}
            </p>
          </div>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Sidebar posts={posts} currentId={post.id} />
        </aside>
      </div>
    </main>
  );
}
