import { Award, CheckCircle, MonitorSmartphone, Truck } from 'lucide-react'
import React from 'react'

function Info() {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MonitorSmartphone className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">სასურველი ზომისა და ფორმის შეკვეთა</h3>
              <p className="text-muted-foreground text-sm">სარკე მზადდება თანამედროვე დანადგარების გამოყენებით</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">საუკეთესო ხარისხი</h3>
              <p className="text-muted-foreground text-sm">სარკე დამზადებულია მაღალი ხარისხის ნაწილებისგან.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">გარანტია</h3>
              <p className="text-muted-foreground text-sm">სარკის ყველა ნაწილზე მოქმედებს 1 წლიანი გარანტია</p>
            </div>

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
  )
}

export default Info;