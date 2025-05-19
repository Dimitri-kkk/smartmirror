import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import AddToCartButton from "@/app/components/add-to-cart-button"
import Footer from "@/app/components/footer"

import { type Metadata, type ResolvingMetadata } from "next";

type Props = {
  params: { productId: string };
};


// Sample product data - replace with your actual data source
const products = [
  {
    id: 1,
    name: "მართკუთხედი მომრგვალებული კუთხეებით",
    category: "აბაზანის სარკე",
    price: 330,
    image: "/pirveli.jpg",
    description:
      "This LED bathroom mirror features energy-efficient lighting, anti-fog technology, and a sleek design that complements any bathroom decor. The built-in LED lights provide bright, natural illumination perfect for grooming tasks.",
  },
  {
    id: 2,
    name: "მაკიაჟის სარკე",
    category: "აბაზანის სარკე",
    price: 230,
    image: "/meore.jpg",
    description:
      "Our elegant vanity mirror is designed to enhance your bathroom with its sophisticated style. The high-quality glass provides a clear reflection, while the durable frame ensures longevity. Perfect for daily grooming routines.",
  },
  {
    id: 3,
    name: "აბაზანის მრგვალი სარკე",
    category: "აბაზანის სარკე",
    price: 50.0,
    image: "/mesame.png",
    description:
      "This compact makeup mirror offers precision and clarity for detailed makeup application. Its portable design makes it perfect for use at home or on the go, while the high-quality reflective surface ensures accurate color representation.",
  },
  {
    id: 4,
    name: "მაკიაჟის სარკე",
    category: "აბაზანის სარკე",
    price: 450,
    image: "/meotxe.png",
    description:
      "Our smart bathroom mirror combines cutting-edge technology with elegant design. Features include touch controls, anti-fog function, Bluetooth connectivity, and customizable LED lighting to create the perfect ambiance for your bathroom.",
  },
  {
    id: 5,
    name: "მართკუთხედი სარკე",
    category: "აბაზანის სარკე",
    price: 40,
    image: "/mexute.jpg",
    description:
      "This wall-mounted mirror with integrated LED lighting transforms your bathroom with its modern design. The energy-efficient LEDs provide excellent illumination while the sleek frame adds a contemporary touch to your space.",
  },
  {
    id: 6,
    name: "კბილის პასტის დისპენსერი",
    category: "აბაზანის აქსესუარები",
    price: 40,
    image: "/meeqvse.jpg",
    description:
      "This wall-mounted mirror with integrated LED lighting transforms your bathroom with its modern design. The energy-efficient LEDs provide excellent illumination while the sleek frame adds a contemporary touch to your space.",
  },
]

export default function ProductPage({ params }: Props) {
  // Convert the productId from string to number
  const productId = parseInt(params.productId, 10)
  
  // Find the product by ID
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/" className="hover:text-primary">
          Bathroom Mirrors
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto rounded-lg"
            priority
          />
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
      <div className="pt-8">
      <Footer />
      </div>
    </div>
  )
}
