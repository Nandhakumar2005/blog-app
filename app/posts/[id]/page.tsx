import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

import { getPosts, getPost } from "@/lib/api";

type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post: Post | null = await getPost(id);
  const posts: Post[] = await getPosts();

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">

      {/* HEADER */}
      <Header />

      {/* HERO IMAGE */}
      {post.image && (
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-[500px] w-full object-cover"
          />
        </div>
      )}

      {/* ARTICLE + SIDEBAR */}
      <div className="mx-auto grid max-w-screen-2xl gap-12 px-6 py-12 lg:grid-cols-[1fr_320px] lg:px-10 xl:px-14">

        {/* ARTICLE */}
        <article>

          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300"
          >
            ← Back to Articles
          </Link>

          <div className="mt-8">
            <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Recent"}
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 dark:text-white">
            {post.title}
          </h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-blue-600"></div>

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-lg ring-1 ring-slate-200 transition-colors duration-300 dark:bg-slate-900 dark:ring-slate-700">

            <p className="whitespace-pre-line text-lg leading-10 text-slate-700 dark:text-slate-300">
              {post.content}
            </p>

          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="self-start lg:sticky lg:top-28">
          <Sidebar posts={posts} currentId={post.id} />
        </aside>

      </div>

    </main>
  );
}