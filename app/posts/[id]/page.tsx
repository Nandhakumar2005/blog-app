import Link from "next/link";
import { getPost } from "@/lib/api";
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

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Image */}
      {post.image && (
        <div className="overflow-hidden rounded-b-[40px] shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[420px] object-cover"
          />
        </div>
      )}

      <article className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center mt-10 mb-8 text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          ← Back to Articles
        </Link>

        {/* Date */}
        <div className="mb-5">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Recent"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
          {post.title}
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-600 rounded-full mt-8 mb-10"></div>

        {/* Content */}
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-lg leading-9 text-slate-700 whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </article>
    </main>
  );
}