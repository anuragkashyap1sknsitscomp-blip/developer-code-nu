"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { posts } from "../data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  // Filter out the current article for quick blog list
  const otherPosts = posts.filter((p) => p.slug !== post.slug);

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-9 gap-10">

        {/* CENTER — MAIN ARTICLE */}
        <article className="lg:col-span-6">
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg mb-10">
            <Image
              src={post.image}
              alt={post.title}
              width={1400}
              height={800}
              className="w-full h-[320px] md:h-[450px] lg:h-[500px] object-cover"
            />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-white/50 text-sm mb-12">
            {post.date} • {post.author}
          </p>

          <div
            className="
              prose prose-invert prose-lg md:prose-xl 
              max-w-none leading-relaxed 
              prose-headings:font-serif prose-headings:text-white
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* RIGHT — PROFESSIONAL QUICK BLOG LIST */}
        <aside className="lg:col-span-3 sticky top-32 h-max">
          <h3 className="text-white/60 uppercase text-sm tracking-wide mb-4">
            Quick Blog Reads
          </h3>

          <div className="space-y-5">
            {otherPosts.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/journal/${item.slug}`}>
                <div className="group flex gap-4 cursor-pointer">
                  
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-white group-hover:text-white transition">
                      {item.title}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {item.date}
                    </p>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </aside>

      </div>

      <Footer />
    </main>
  );
}
