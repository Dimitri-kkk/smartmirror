"use client"

import type { UseFormReturn } from "react-hook-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

interface MirrorMountingFormProps {
  form: UseFormReturn<any>
}

export default function MirrorMountingForm({ form }: MirrorMountingFormProps) {
  const { control } = form

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Select Mounting Type</h2>

      <FormField
        control={control}
        name="mountingType"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-4">
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="wall" />
                  </FormControl>
                  <FormLabel className="font-normal">Wall Mount (Standard)</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="standing" />
                  </FormControl>
                  <FormLabel className="font-normal">Standing Mirror (with Support)</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="hanging" />
                  </FormControl>
                  <FormLabel className="font-normal">Hanging Mirror (with Chain/Rope)</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="custom" />
                  </FormControl>
                  <FormLabel className="font-normal">Custom Mounting Solution</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-20 border border-gray-400"></div>
              <div className="absolute -left-1 top-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="absolute -left-1 bottom-2 w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          <p className="mt-2 text-xs text-center">Wall Mount</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 border border-gray-400"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-300"></div>
            </div>
          </div>
          <p className="mt-2 text-xs text-center">Standing Mirror</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="relative">
              <div className="w-2 h-4 bg-gray-400 mx-auto"></div>
              <div className="w-16 h-16 border border-gray-400 mt-1"></div>
            </div>
          </div>
          <p className="mt-2 text-xs text-center">Hanging Mirror</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="w-16 h-16 border border-gray-400 relative">
              <div className="absolute -right-1 -left-1 -top-1 -bottom-1 border border-dashed border-gray-400"></div>
            </div>
          </div>
          <p className="mt-2 text-xs text-center">Custom Mounting</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          The mounting type affects installation requirements. Wall mounts require drilling, while standing mirrors need
          floor space. All mounting hardware is included with your order.
        </p>
      </div>
    </div>
  )
}
