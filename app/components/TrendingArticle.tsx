import Link from "next/link";
import { Post } from "./BlogCard";

type Props = {
  post: Post;
};

export default function TrendingArticle({ post }: Props) {
  return (
    <section className="mx-auto w-full max-w-screen-2xl">

      <div className="mb-8 flex items-center">
  <span className="rounded-full bg-red-100 px-6 py-3 text-xl font-bold text-red-600 dark:bg-red-900/40 dark:text-red-400">
    🔥 Trending Article
  </span>
</div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 transition duration-300 hover:shadow-2xl dark:bg-slate-900 dark:ring-slate-700">

        <div className="grid lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full min-h-[380px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-10 lg:p-16">

            <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              Featured
            </span>

            <h2 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
              {post.title}
            </h2>

            <p className="mt-6 line-clamp-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {post.content}
            </p>

            <div className="mt-8 flex items-center gap-6">

              <Link
                href={`/posts/${post.id}`}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Read Article →
              </Link>

              {post.createdAt && (
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}