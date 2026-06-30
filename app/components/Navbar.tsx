import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-5xl mx-auto p-4 flex justify-end items-center">
        <Link
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-black transition"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}