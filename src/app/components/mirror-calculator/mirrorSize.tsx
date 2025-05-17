"use client"

import type { UseFormReturn } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

interface MirrorSizeFormProps {
  form: UseFormReturn<any>
}

export default function MirrorSizeForm({ form }: MirrorSizeFormProps) {
  const { control, watch } = form
  const mirrorType = watch("mirrorType")

  const isRound = mirrorType === "round"
  const isRectangular = ["rectangular", "rectangularRoundedCorners", "rectangularIrregularCorners"].includes(mirrorType)
  const isOval = mirrorType === "oval"

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">აირჩიეთ სარკის ზომა</h2>

      {isRound && (
        <FormField
          control={control}
          name="diameter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diameter (cm)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter diameter"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {(isRectangular || isOval) && (
        <>
          <FormField
            control={control}
            name="width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>სიგანე</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter width"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>სიმაღლე</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter height"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}
    </div>
  )
}
