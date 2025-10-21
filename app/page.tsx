import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { FeaturedProducts } from "@/components/featured-products"
// import { CuratorSection } from "@/components/curator-section"
import { ProductFeatureSection } from '@/components/ProductFeatureSection';
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      {/* <CuratorSection /> */}
      <ProductFeatureSection/>
      <FeaturedProducts />
      <Footer />
    </main>
  )
}
