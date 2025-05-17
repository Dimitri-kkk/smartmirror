"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AddToCartButtonProps {
  productId: number
  size?: "default" | "sm" | "lg"
}

export default function AddToCartButton({ productId, size = "lg" }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)

    // Simulate a delay of 3-4 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000 + Math.random() * 1000))

    setIsLoading(false)

    // Show success message (optional)
    console.log(`Product ${productId} added to cart (simulated)`)
  }

  return (
    <Button size={size} onClick={handleAddToCart} disabled={isLoading} className="w-full sm:w-auto">
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Adding to cart...
        </span>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to cart
        </>
      )}
    </Button>
  )
}
