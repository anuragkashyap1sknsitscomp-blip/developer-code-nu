"use client"

import { useCart } from "@/contexts/cart-context"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ShoppingBag className="w-20 h-20 text-white/20 mb-6" />
            <h1 className="text-3xl font-serif text-white mb-4">Your cart is empty</h1>
            <p className="text-white/60 mb-8 max-w-md">
              Looks like you haven't added any supplements to your cart yet. Explore our curated collection of premium
              supplements.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col sm:flex-row gap-6"
              >
                <div className="relative w-full sm:w-32 h-32 flex-shrink-0 bg-white/10 rounded-lg overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">{item.name}</h3>
                    {item.format && <p className="text-white/60 text-sm mb-4">{item.format}</p>}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-6">
                      <p className="text-xl font-serif text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/60 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sticky top-32">
              <h2 className="text-2xl font-serif text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white/80">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Shipping</span>
                  <span>{getCartTotal() >= 75 ? "FREE" : "$9.99"}</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-serif text-white">
                  <span>Total</span>
                  <span>${(getCartTotal() + (getCartTotal() >= 75 ? 0 : 9.99)).toFixed(2)}</span>
                </div>
              </div>

              {getCartTotal() < 75 && (
                <p className="text-sm text-amber-400 mb-6">
                  Add ${(75 - getCartTotal()).toFixed(2)} more for free shipping!
                </p>
              )}

              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white mb-4" size="lg">
                Proceed to Checkout
              </Button>

              <Link href="/shop">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/5 bg-transparent"
                  size="lg"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
