import { Navigation } from "@/components/navigation"
import { ProductHero } from "@/components/product-hero"
import { ProductFormats } from "@/components/product-formats"
import { NutritionLabel } from "@/components/nutrition-label"
import { IngredientDeepDive } from "@/components/ingredient-deep-dive"
import { CuratorNotes } from "@/components/curator-notes"
import { ProductStack } from "@/components/product-stack"
import { Footer } from "@/components/footer"

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ProductHero />
      <ProductFormats />
      <CuratorNotes />
      <NutritionLabel />
      <IngredientDeepDive />
      <ProductStack />
      <Footer />
    </main>
  )
}
