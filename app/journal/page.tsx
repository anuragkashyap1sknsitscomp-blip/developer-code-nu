"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { posts } from "./data/posts";
import Image from "next/image";
import Link from "next/link";

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navigation />

      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="uppercase tracking-[0.2em] text-xs text-white/50">
          CODE NUTRITION
        </p>

        <h1 className="font-serif text-4xl md:text-5xl mt-3 mb-4">
          Insights. Research. Wellness.
        </h1>

        <p className="text-white/70 max-w-xl text-base leading-relaxed">
          Evidence-based articles crafted by our science and nutrition research team.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`}>
              <div className="group flex flex-col h-full bg-[#111] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 hover:shadow-xl transition-all">
                
                {/* Smaller image */}
                <div className="relative w-full aspect-[5/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Compact Content */}
                <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
                  <div>
                    <p className="text-xs text-white/40">{post.date}</p>
                    <h2 className="text-lg font-medium group-hover:text-white transition">
                      {post.title}
                    </h2>
                  </div>

                  <p className="text-white/60 text-sm">
                    {post.excerpt}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
