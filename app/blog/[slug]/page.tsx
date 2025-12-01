import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const blogs: any = {
  "vitamins-immunity": {
    title: "How Vitamins Improve Immunity",
    date: "Nov 25, 2025",
    image: "https://source.unsplash.com/1200x600/?vitamins,health",
    content: `
      Vitamins play a vital role in maintaining your body's defense mechanisms.
      They support cell function, boost immunity, and ensure your overall well-being.

      ### Why Immunity Matters
      Maintaining a strong immune system helps prevent infections
      and enhances your body's natural healing abilities.

      ### Best Immunity Boosters
      - Vitamin C  
      - Vitamin D  
      - Zinc  
      - Magnesium  

      Proper nutrition + high-quality supplements ensure optimal health.
    `,
  },

  "science-supplements": {
    title: "The Science Behind Supplements",
    date: "Nov 20, 2025",
    image: "https://source.unsplash.com/1200x600/?science,lab",
    content: `
      Supplements support your body's nutritional needs when diet alone isn’t enough.

      ### Research & Evidence
      Most supplements undergo rigorous testing for safety & effectiveness.

      ### Types of Supplements
      - Multivitamins  
      - Protein  
      - Omega-3  
      - Creatine  

      Choosing high-quality supplements improves daily performance.
    `,
  },
};

export default function BlogSingle({ params }: any) {
  const post = blogs[params.slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white pt-28 text-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <Navigation />
      </header>

      <div className="pt-28"></div>

      {/* ARTICLE */}
      <section className="px-4 sm:px-10 py-16">
        <div className="max-w-3xl mx-auto">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-96 object-cover rounded-xl mb-8"
          />

          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-neutral-400 mt-2">{post.date}</p>

          <article
            className="prose prose-invert mt-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
          />

          <div className="mt-10">
            <Link href="/blog" className="underline opacity-70 hover:opacity-100">
              ← Back to Journals
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-10 mt-10">
        <Footer />
      </footer>
    </main>
  );
}
