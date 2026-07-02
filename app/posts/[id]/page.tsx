import Link from "next/link";
import { getPosts, getPost } from "@/lib/api";
import Sidebar from "@/app/components/Sidebar";
import { notFound } from "next/navigation";

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
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-20">
      {/* HERO IMAGE */}
      {post.image && (
        <div className="overflow-hidden rounded-b-[40px] shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="h-[420px] w-full object-cover"
          />
        </div>
      )}

      {/* CONTENT + SIDEBAR LAYOUT */}
      <div className="mx-auto flex max-w-6xl gap-10 px-6 py-10">
        {/* ARTICLE */}
        <article className="flex-1">
          <Link
            href="/"
            className="mb-8 inline-flex items-center font-medium text-blue-600 hover:text-blue-400 transition"
          >
            ← Back to Articles
          </Link>

          <div className="mb-5">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Recent"}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white transition-colors">
            {post.title}
          </h1>

          <div className="mt-6 mb-8 h-1 w-20 rounded-full bg-blue-600"></div>

          <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-colors duration-300">
            <p className="whitespace-pre-line text-lg leading-9 text-slate-700 dark:text-slate-300">
              {post.content}
            </p>
          </div>
        </article>

        {/* SIDEBAR */}
        <Sidebar posts={posts} currentId={post.id} />
      </div>
    </main>
  );
}