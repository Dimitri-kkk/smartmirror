"use client"

import type { UseFormReturn } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { FormData } from "@/app/types"

interface MirrorSummaryFormProps {
  form: UseFormReturn<FormData>
  calculatedPrice: number
}

export default function MirrorSummaryForm({ form, calculatedPrice }: MirrorSummaryFormProps) {
  const { control, watch } = form
  const values = watch()

  // Helper function to get readable mirror type
  const getMirrorTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      rectangular: "Rectangular",
      round: "Round",
      oval: "Oval",
      rectangularRoundedCorners: "Rectangular with Rounded Corners",
      rectangularIrregularCorners: "Rectangular with Irregular Corners",
      custom: "Custom",
    }
    return types[type] || type
  }

  // Helper function to get readable edge type
  const getEdgeTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      straight: "Straight Edge",
      beveled: "Beveled Edge",
      polished: "Polished Edge",
      custom: "Custom Edge Treatment",
    }
    return types[type] || type
  }

  // Helper function to get readable mounting type
  const getMountingTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      wall: "Wall Mount (Standard)",
      standing: "Standing Mirror (with Support)",
      hanging: "Hanging Mirror (with Chain/Rope)",
      custom: "Custom Mounting Solution",
    }
    return types[type] || type
  }

  // Get dimensions display based on mirror type
  const getDimensionsDisplay = () => {
    if (values.mirrorType === "round") {
      return `Diameter: ${values.diameter} cm`
    } else {
      return `Width: ${values.width} cm, Height: ${values.height} cm`
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Order Summary & Delivery Information</h2>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">Mirror Specifications</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Mirror Type:</span>
              <span>{getMirrorTypeLabel(values.mirrorType)}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Dimensions:</span>
              <span>{getDimensionsDisplay()}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Edge Type:</span>
              <span>{getEdgeTypeLabel(values.edgeType)}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Mounting Type:</span>
              <span>{getMountingTypeLabel(values.mountingType)}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Total Price:</span>
              <span className="text-2xl font-bold">₾{calculatedPrice.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="pt-6">
        <h3 className="text-lg font-medium mb-4">Delivery Information</h3>

        <div className="space-y-4">
          <FormField
            control={control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>შემკვეთის სახელი და გვარი</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>საკონტაქტო ნომერი</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>მისამართი</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your street address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="additionalNotes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>კომენტარი</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any special instructions for delivery or installation"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
  )
}
