import BlogCard, { Post } from "./BlogCard";

type Props = {
  posts: Post[];
};

export default function BlogGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="text-6xl">📚</div>

        <h2 className="mt-6 text-3xl font-bold text-slate-800 dark:text-white">
          No articles found
        </h2>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full pb-20">
      <div
        className="
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-4
        "
      >
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}