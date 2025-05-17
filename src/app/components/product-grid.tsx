"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  // Track loading state for each product
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({})

  const handleAddToCart = async (productId: number) => {
    // Set loading state for this product
    setLoadingStates((prev) => ({ ...prev, [productId]: true }))

    // Simulate a delay of 3-4 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000 + Math.random() * 1000))

    // Reset loading state
    setLoadingStates((prev) => ({ ...prev, [productId]: false }))

    // Show success message (optional)
    console.log(`Product ${productId} added to cart (simulated)`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative overflow-hidden rounded-lg mb-3">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <Button
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              size="sm"
              onClick={() => handleAddToCart(product.id)}
              disabled={loadingStates[product.id]}
            >
              {loadingStates[product.id] ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Adding...
                </span>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to cart
                </>
              )}
            </Button>
          </div>
          <div>
            <Link href={`/products/${product.id}`} className="block">
              <h3 className="font-medium text-lg hover:text-primary transition-colors mb-1">{product.name}</h3>
            </Link>
            <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
            <div className="font-semibold">€{product.price.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
