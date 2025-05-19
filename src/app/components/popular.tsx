import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Popular() {
  return (
    <div className="flex flex-col bg-white">
        <h1 className="text-center text-[40px] text-black mt-20 mb-20">პოპულარული პროდუქცია</h1>
        <div className="flex flex-1 gap-4 justify-center items-center flex-wrap">
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <Link href="/products/mirror1">
                <Image alt="pirveli" src="/pirveli.jpg" width="400" height="400" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">მართკუთხედი მომრგვალებული კუთხეებით</h2>
                </Link>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾330.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <Link href="/products/mirror2">
                <Image alt="meore" src="/meore.jpg" width="400" height="400" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">მაკიაჟის სარკე</h2>
                </Link>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾150.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <Link href="/products/mirror3">
                <Image alt="mesame" src="/mesame.png" width="400" height="400" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">აბაზანის მგრვალი სარკე</h2>
                </Link>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾230.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <Link href="/products/mirror4">
                <Image alt="meotxe" src="/meotxe.png" width="400" height="400" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">მაკიაჟის სარკე</h2>
                </Link>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾50.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <Link href="/products/mirror5">
                <Image alt='mexute' src="/mexute.jpg" width="400" height="400" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">მართკუთხედი სარკე</h2>
                </Link>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾450.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <Link href="/products/mirror6">
                <Image alt="meeqvse" src="/meeqvse.jpg" width="400" height="400" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">კბილის პასტის დისპენსერი</h2>
                </Link>
                <span className="text-black/60">აბაზანის აქსესუარები</span>
                <span className="text-black font-bold">₾40.00</span>
            </div>
        </div>
    </div>
  )
}

export default Popular;