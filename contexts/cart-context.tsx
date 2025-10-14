"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  format?: string // For product variants (like size, color, etc.)
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
  removeFromCart: (id: string, format?: string) => void
  updateQuantity: (id: string, quantity: number, format?: string) => void
  clearCart: () => void
  getCartCount: () => number
  getCartTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const { toast } = useToast()

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart-items")
    if (stored) setItems(JSON.parse(stored))
  }, [])

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(items))
  }, [items])

  // ✅ Add item to cart (considering product format)
  const addToCart = useCallback(
    (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
      setItems((prevItems) => {
        const existingItem = prevItems.find(
          (i) => i.id === item.id && i.format === item.format
        )

        if (existingItem) {
          return prevItems.map((i) =>
            i.id === item.id && i.format === item.format
              ? { ...i, quantity: i.quantity + (item.quantity || 1) }
              : i
          )
        }

        return [...prevItems, { ...item, quantity: item.quantity || 1 }]
      })

      toast({
        title: "✅ Added to cart",
        description: `${item.name}${item.format ? ` (${item.format})` : ""} has been added to your cart.`,
      })
    },
    [toast]
  )

  // ✅ Remove item by id + format
  const removeFromCart = useCallback((id: string, format?: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.format === format))
    )
    toast({
      title: "🗑️ Removed from cart",
      description: "Item has been removed from your cart.",
    })
  }, [toast])

  // ✅ Update quantity
  const updateQuantity = useCallback(
    (id: string, quantity: number, format?: string) => {
      if (quantity <= 0) {
        removeFromCart(id, format)
        return
      }

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id && item.format === format
            ? { ...item, quantity }
            : item
        )
      )
    },
    [removeFromCart]
  )

  // ✅ Clear cart
  const clearCart = useCallback(() => {
    setItems([])
    localStorage.removeItem("cart-items")
    toast({
      title: "🧺 Cart cleared",
      description: "Your cart has been emptied.",
    })
  }, [toast])

  // ✅ Total items count
  const getCartCount = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  // ✅ Total price
  const getCartTotal = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
