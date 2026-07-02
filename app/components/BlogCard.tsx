import Link from "next/link";

export type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
  category?: string;
   tags?: string;
};

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`} className="group block">
      <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        {/* Image */}
        {post.image && (
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">

          {/* Date */}
          <div className="mb-4">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
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
          <h2 className="text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
            {post.title}
          </h2>

          {/* Description */}
          <p className="mt-4 line-clamp-3 text-slate-600">
            {post.content}
          </p>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between">

            <span className="font-semibold text-blue-600 transition group-hover:translate-x-1">
              Read article →
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
              {post.category ?? "Web Development"}
            </span>

          </div>
        </div>
      </article>
    </Link>
  );
}