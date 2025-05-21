"use client"

import type { UseFormReturn } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { FormData } from "@/app/types"

interface MirrorTypeFormProps {
  form: UseFormReturn<FormData>
}

export default function MirrorTypeForm({ form }: MirrorTypeFormProps) {
  const { control } = form

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">აირჩიეთ სარკის ფორმა</h2>

      <div className="space-y-4">
        <FormField
          control={control}
          name="mirrorType"
          render={({ field }) => (
            <>
              <div className="space-y-2">
                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value === "rectangular"}
                      onCheckedChange={() => field.onChange("rectangular")}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">მართკუთხედი</FormLabel>
                </FormItem>

                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value === "round"} onCheckedChange={() => field.onChange("round")} />
                  </FormControl>
                  <FormLabel className="font-normal">მრგვალი</FormLabel>
                </FormItem>

                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value === "rectangularRoundedCorners"} onCheckedChange={() => field.onChange("rectangularRoundedCorners")} />
                  </FormControl>
                  <FormLabel className="font-normal">მართკუთხედი მომრგვალებული კუთხეებით</FormLabel>
                </FormItem>

                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value === "rectangularFullyRoundedCorners"}
                      onCheckedChange={() => field.onChange("rectangularFullyRoundedCorners")}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">მართკუთხედი სრულად მომრგვალებული კუთხეებით</FormLabel>
                </FormItem>

                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value === "elliptical"}
                      onCheckedChange={() => field.onChange("elliptical")}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">ელიფსური</FormLabel>
                </FormItem>
              </div>
            </>
          )}
        />
      </div>

      <div className="grid grid-cols-5 gap-4 mt-8">
        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="w-20 h-20 border border-gray-400"></div>
          </div>
          <Label className="mt-2 text-xs text-center">მართკუთხედი</Label>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-gray-400"></div>
          </div>
          <Label className="mt-2 text-xs text-center">მრგვალი</Label>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="w-20 h-20 rounded-lg border border-gray-400"></div>
          </div>
          <Label className="mt-2 text-xs text-center">მართკუთხედი მომრგვალებული კუთხეებით</Label>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="w-16 h-20 rounded-full border border-gray-400"></div>
          </div>
          <Label className="mt-2 text-xs text-center">მართკუთხედი სრულად მომრგვალებული კუთხეებით</Label>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-gray-400"></div>
          </div>
          <Label className="mt-2 text-xs text-center">ელიფსური</Label>
        </div>
      </div>
    </div>
  )
}
