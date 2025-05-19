import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"


export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <div className="flex items-center space-x-1">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-700">აბაზანის სარკე</span>
        </div>
      </nav>

      {/* Page Title */}
      <h1 className="mb-6 text-4xl font-light text-gray-700">აბაზანის სარკე</h1>

      {/* Description */}
      <div className="mb-10 text-gray-600">
        <p>
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat
          justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.
        </p>
      </div>



      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Product 1 */}
        <div className="group">
          <Link href="/products/mirror1" className="block overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/pirveli.jpg"
                alt="აბაზანის მრგვალი სარკე"
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">აბაზანის მრგვალი სარკე</h3>
              <p className="text-sm text-gray-500">აბაზანის სარკე</p>
              <p className="mt-2 text-lg font-semibold">230.00₾</p>
            </div>
          </Link>
        </div>

        {/* Product 2 */}
        <div className="group">
          <Link href="/products/mirror2" className="block overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/meore.jpg"
                alt="მაკიაჟის სარკე"
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">მაკიაჟის სარკე</h3>
              <p className="text-sm text-gray-500">აბაზანის სარკე</p>
              <p className="mt-2 text-lg font-semibold">150,00₾</p>
            </div>
          </Link>
        </div>

        {/* Product 3 */}
        <div className="group">
          <Link href="/products/mirror3" className="block overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/mesame.png"
                alt="მაკიაჟის სარკე"
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">მაკიაჟის სარკე</h3>
              <p className="text-sm text-gray-500">აბაზანის სარკე</p>
              <p className="mt-2 text-lg font-semibold">50.00₾</p>
            </div>
          </Link>
        </div>

        {/* Product 4 */}
        <div className="group">
          <Link href="/products/mirror4" className="block overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/meotxe.png"
                alt="მართკუთხედი მომრგვალებული კუთხეებით"
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">მართკუთხედი მომრგვალებული კუთხეებით</h3>
              <p className="text-sm text-gray-500">აბაზანის სარკე</p>
              <p className="mt-2 text-lg font-semibold">330.00₾</p>
            </div>
          </Link>
        </div>

        {/* Product 5 */}
        <div className="group">
          <Link href="/products/mirror5" className="block overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/meeqvse.jpg"
                alt="დიდი სარკე აბაზანისთვის"
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">კბილის პასტის დისპენსერი</h3>
              <p className="text-sm text-gray-500">აბაზანის სარკე</p>
              <p className="mt-2 text-lg font-semibold">40.00₾</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  )
}
