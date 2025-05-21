"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import MirrorTypeForm from "./mirror-calculator/mirrorType"
import MirrorSizeForm from "./mirror-calculator/mirrorSize"
import MirrorEdgesForm from "./mirror-calculator/mirrorEdges"
import MirrorMountingForm from "./mirror-calculator/mirrorMount"
import MirrorSummaryForm from "./mirror-calculator/mirrorSummary"
import { calculateMirrorPrice } from "@/lib/price-calculator"

// Define the form schema for all steps
const formSchema = z.object({
  // Step 1: Mirror Type
  mirrorType: z.enum([
    "rectangular",
    "round",
    "rectangularRoundedCorners",
    "rectangularFullyRoundedCorners",
    "elliptical",
  ]),

  // Step 2: Mirror Size
  width: z.number().min(10).max(300),
  height: z.number().min(10).max(300),
  diameter: z.number().min(10).max(300).optional(),

  // Step 3: Mirror Edges
  edgeType: z.enum(["straight", "beveled", "polished", "custom"]),

  // Step 4: Mirror Mounting
  mountingType: z.enum(["wall", "standing", "hanging", "custom"]),

  // Features - using non-optional enums with defaults
  touchSensor: z.enum(["yes", "no"]),
  antiFog: z.enum(["yes", "no"]),
  dashboard: z.enum(["yes", "no"]),
  weather: z.enum(["yes", "no"]),

  // Step 5: Delivery Information
  fullName: z.string().min(2).max(100),
  phone: z.string().min(9),
  address: z.string().min(2),
  additionalNotes: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function MirrorCalculator() {
  const [step, setStep] = useState(1)
  const [calculatedPrice, setCalculatedPrice] = useState(0)
  const router = useRouter()

  // Initialize form with default values
  const mirrorParams = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode:"onTouched",
    defaultValues: {
      mirrorType: "rectangular",
      width: 100,
      height: 100,
      diameter: 50,
      edgeType: "straight",
      mountingType: "wall",

      // Set explicit default values for these fields
      touchSensor: "no",
      antiFog: "no",
      dashboard: "no",
      weather: "no",

      fullName: "",
      phone: "",
      address: "",
      additionalNotes: "",
    },
  })

  const { watch } = mirrorParams
  const currentValues = watch()

  // Handle next step
  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1)
    } else {
      // Calculate final price before submission
      const price = calculateMirrorPrice(currentValues)
      setCalculatedPrice(price)
      mirrorParams.handleSubmit(handleSubmit)()
    }
  }

  // Handle previous step
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentValues,
          calculatedPrice,
        }),
      })

      if (response.ok) {
        // Redirect to success page
        router.push("/")
        console.log(currentValues)
      } else {
        console.error("Submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  // Render the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return <MirrorTypeForm form={mirrorParams} />
      case 2:
        return <MirrorSizeForm form={mirrorParams} />
      case 3:
        return <MirrorEdgesForm form={mirrorParams} />
      case 4:
        return <MirrorMountingForm form={mirrorParams} />
      case 5:
        return (
          <MirrorSummaryForm
            form={mirrorParams}
            calculatedPrice={calculatedPrice || calculateMirrorPrice(currentValues)}
          />
        )
      default:
        return <MirrorTypeForm form={mirrorParams} />
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">სარკის ფასის კალკულატორი</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="text-sm font-medium">Page {step} of 5</div>
          <div className="w-full bg-gray-200 h-2 mt-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: `${(step / 5) * 100}%` }}></div>
          </div>
        </div>

        <Form {...mirrorParams}>
          <form onSubmit={(e) => e.preventDefault()}>
            {renderStep()}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={handlePrevious}>
                  უკან
                </Button>
              ) : (
                <div></div>
              )}

              <Button type="button" onClick={handleNext}>
                {step < 5 ? "შემდეგი" : "შეკვეთის გაკეთება"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
