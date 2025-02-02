import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-[200px]">
      <h2 className="text-[40px] font-bold text-white mb-10 w-[21%]">ჭკვიანი სარკე შენი სახლისთვის</h2>
      <div className="mt-4 flex flex-col space-y-2">
        <Link href="/bathroom-mirrors" className="w-[350px] bg-custom-blue px-6 py-2  text-white text-left w-48 text-[23px] hover:bg-gray-400">
          აბაზანის სარკე
        </Link>
        <Link href="/makeup-mirrors" className="w-[350px] bg-custom-blue px-6 py-2  text-white text-left w-48 text-[23px] hover:bg-gray-400">
          მაკიაჟის სარკე
        </Link>
        <Link href="/decorative-mirrors" className="w-[350px] bg-custom-blue px-6 py-2  text-white text-left w-48 text-[23px] hover:bg-gray-400">
          დეკორატიული სარკე
        </Link>
        <Link href="/bathroom-accessories" className="w-[350px] bg-custom-blue px-6 py-2  text-white text-left w-48 text-[23px] hover:bg-gray-400">
          აბაზანის აქსესუარები
        </Link>

        <Link href="/calculator" className="w-[350px] bg-white text-black  px-6 py-2 text-left w-48 font-bold mt-4 text-[29px] hover:bg-transparent"
        >
          ფასის კალკულატორი
        </Link>
      </div>
    </section>
  );
};

export default Hero;
