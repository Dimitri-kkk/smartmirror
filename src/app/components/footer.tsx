import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-light-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">სწრაფი ლინკები</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline text-black">
                  მთავარი
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:underline text-black">
                  ფასის კალკულატორი
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-black">
                  ჩვენ შესახებ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-black">
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">პროდუქტის კატეგორიები</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline text-black">
                  აბაზანის სარკე
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-black">
                  მაკიაჟის სარკე
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-black">
                  აბაზანის აქსესუარები
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-black">
                  დეკორატიული სარკე
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="space-y-4">
              <Link href="https://www.facebook.com/smartmirror.ge" className="block w-fit">
                <Image
                  src="/fcb.png"
                  alt="Facebook"
                  width={150}
                  height={40}
                  className="hover:opacity-90 transition-opacity"
                />
              </Link>
              <Link href="https://www.instagram.com/smartmirror.ge/" className="block w-fit">
                <Image
                  src="/ins.png"
                  alt="Instagram"
                  width={150}
                  height={40}
                  className="hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-black text-sm">COPYRIGHT © 2025 ბაზარი სარკე</p>
            <p className="text-black text-sm">POWERED BY ბაზარი სარკე</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

