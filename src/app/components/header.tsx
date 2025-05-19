import React from 'react';
import Link  from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-4 flex justify-around items-center">
        <div>
          <Link href="/">
            <Image alt="smartmirror" width={100} height={100} src="/smart.png" />
            <h1 className="text-2xl font-bold text-white">ჭკვიანი სარკე</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 mb-5">
            <li><Link href="/" className="text-xl text-white">მთავარი</Link></li>
            <li><Link href="/calculator" className="text-xl text-white">ფასის კალკულატორი</Link></li>
            <li><Link href="/about" className="text-xl text-white">ჩვენ შესახებ</Link></li>
            <li><Link href="/contact" className="text-xl text-white">კონტაქტი</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
