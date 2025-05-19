"use client"



function Map() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-6">
            ჭკვიანი სარკე
            <br />
            სარკეების მაღაზია
          </h1>

          <div className="space-y-10">
            <p>თბილისი, გელა ჭედიას ქ. N1</p>

            <div className="flex items-center gap-2">
              <span className="font-semibold">ელ.ფოსტა:</span>
              <a href="mailto:smartmirror@gmail.com" className="text-primary hover:underline">
                smartmirror@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">ტელეფონი:</span>
              <a href="tel:574918600" className="text-primary hover:underline">
                574918600
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">სამუშაო საათები:</span>
              <span>ორშაბათი-შაბათი — 10 დან 6 მდე</span>
            </div>
          </div>
        </div>

        <div className="h-[400px] rounded-lg overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.2052910859934!2d44.7939619!3d41.8023378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446c296a5cc53f%3A0xb72e1c28d9d096a7!2zMSDhg5Lhg5Thg5rhg5Ag4YOt4YOU4YOT4YOY4YOQ4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxMzA!5e0!3m2!1ska!2sge!4v1738599887898!5m2!1ska!2sge" width="700" height="700" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Map;