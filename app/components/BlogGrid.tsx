import BlogCard, { Post } from "./BlogCard";

type Props = {
  posts: Post[];
};

export default function BlogGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="py-32 text-center">
        <div className="text-7xl">📚</div>

        <h2 className="mt-8 text-4xl font-bold text-slate-800 dark:text-white">
          No articles found
        </h2>

        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full pb-32">
      <div
        className="
          grid
          grid-cols-1
          gap-10
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          xl:gap-12
          2xl:gap-14
        "
      >
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}