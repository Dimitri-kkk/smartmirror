import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>

        <p className="text-gray-600 mb-6">
          Your custom mirror order has been received and is being processed. You will receive a confirmation email
          shortly with your order details.
        </p>

        <div className="p-4 bg-gray-50 rounded-md mb-6">
          <p className="text-sm text-gray-600">
            Our team will contact you within 1-2 business days to confirm your order details and provide an estimated
            delivery date.
          </p>
        </div>

        <Button asChild className="w-full">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </main>
  )
}
