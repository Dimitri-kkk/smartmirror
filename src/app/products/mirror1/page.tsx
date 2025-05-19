import Image from "next/image"
import AddToCartButton from "@/app/components/add-to-cart-button"
import Footer from "@/app/components/footer"
import Link from "next/link"

export default function Mirror1Page() {
  const product = {
    id: 1,
    name: "მართკუთხედი მომრგვალებული კუთხეებით",
    category: "აბაზანის სარკე",
    price: 330,
    image: "/pirveli.jpg",
    description:
      "This LED bathroom mirror features energy-efficient lighting, anti-fog technology, and a sleek design...",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-primary">Bathroom Mirrors</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image src={product.image} alt={product.name} width={600} height={600} className="rounded-lg" />
        </div>

        <div>
          <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
          <div className="text-sm text-muted-foreground mb-4">{product.category}</div>
          <div className="text-2xl font-semibold mb-6">€{product.price.toFixed(2)}</div>
          <p className="text-muted-foreground mb-8">{product.description}</p>

          <div className="mb-8">
            <AddToCartButton productId={product.id} />
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>High-quality materials</li>
              <li>Easy installation</li>
              <li>Waterproof design</li>
              <li>2-year warranty</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-8"><Footer /></div>
    </div>
  )
}
