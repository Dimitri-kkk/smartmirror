import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MonitorSmartphone, CheckCircle, Award, Truck } from "lucide-react"

export function SpecialOffer() {
  return (
    <main className="min-h-screen mt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center"
        style={{ backgroundImage: "url('/meoremirror.png')", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed" }}
        >
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 ml-20">სპეციალური შემოთავაზება</h1>
            <p className="text-lg mb-8 ml-20">
              შეუკვეთე აბაზანის ჭკვიანი სარკე ჩვენთან და მიიღე აბაზანის აქსესუარებზე 20%-იანი ფასდაკლება.
            </p>
            <Button variant="secondary" size="lg" className="text-primary hover:text-primary ml-20">
              იყიდე ახლავე
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MonitorSmartphone className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">სასურველი ზომისა და ფორმის შეკვეთა</h3>
              <p className="text-muted-foreground text-sm">სარკე მზადდება თანამედროვე დანადგარების გამოყენებით</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">საუკეთესო ხარისხი</h3>
              <p className="text-muted-foreground text-sm">სარკე დამზადებულია მაღალი ხარისხის ნაწილებისგან.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">გარანტია</h3>
              <p className="text-muted-foreground text-sm">სარკის ყველა ნაწილზე მოქმედებს 1 წლიანი გარანტია</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">უფასო მიტანა და მონტაჟი</h3>
              <p className="text-muted-foreground text-sm">თბილისის მასშტაბით სარკის მიტანა და მონტაჟი არის უფასო</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

