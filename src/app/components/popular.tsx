import React from 'react'

function Popular() {
  return (
    <div className="flex flex-col bg-white">
        <h1 className="text-center text-[40px] text-black mt-20 mb-20">პოპულარული პროდუქცია</h1>
        <div className="flex flex-1 gap-4 justify-center items-center flex-wrap">
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <a href="/product">
                <img src="/mainmirror.jpg" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">მართკუთხედი მომრგვალებული კუთხეებით</h2>
                </a>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾330.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <a href="/product">
                <img src="/mainmirror.jpg" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">მაკიაჟის სარკე</h2>
                </a>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾330.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <a href="/product">
                <img src="/mainmirror.jpg" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">აბაზანის მგრვალი სარკე</h2>
                </a>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾330.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <a href="/product">
                <img src="/mainmirror.jpg" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">მაკიაჟის სარკე</h2>
                </a>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾330.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <a href="/product">
                <img src="/mainmirror.jpg" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">მართკუთხედი სარკე</h2>
                </a>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾330.00</span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4">
                <a href="/product">
                <img src="/mainmirror.jpg" className="h-[400px] w-[400px]" />
                    <h2 className="text-black font-semibold mt-5">კბილის პასტის დისპენსერი</h2>
                </a>
                <span className="text-black/60">აბაზანის სარკე</span>
                <span className="text-black font-bold">₾330.00</span>
            </div>
        </div>
    </div>
  )
}

export default Popular;