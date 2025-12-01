"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const posts = [
  {
    title: "How Vitamins Improve Immunity",
    slug: "vitamins-immunity",
    date: "Nov 25, 2025",
    summary: "Discover how essential vitamins strengthen your immune system and improve daily performance.",
    image: "https://source.unsplash.com/800x600/?vitamins,health",
  },
  {
    title: "The Science Behind Supplements",
    slug: "science-supplements",
    date: "Nov 20, 2025",
    summary: "A research-backed guide to understanding supplements and their real benefits.",
    image: "https://source.unsplash.com/800x600/?science,lab",
  },
];

export default function BlogListing() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <Navigation />
      </header>

      <div className="pt-28"></div>

      <section className="px-4 sm:px-10 py-16">
        <h1 className="text-4xl font-bold mb-10 text-center tracking-tight">
          Code Nutrition Journals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl bg-neutral-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <h2 className="text-xl font-semibold mt-4 group-hover:opacity-80 transition">
                {post.title}
              </h2>

              <p className="text-sm text-neutral-400 mt-1">{post.date}</p>

              <p className="text-neutral-400 mt-2 line-clamp-2">{post.summary}</p>

              <p className="mt-3 text-sm underline opacity-70 group-hover:opacity-100">
                Read More →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-10 mt-10">
        <Footer />
      </footer>
    </main>
  );
}
