"use client"

import type { UseFormReturn } from "react-hook-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

interface MirrorEdgesFormProps {
  form: UseFormReturn<any>
}

export default function MirrorEdgesForm({ form }: MirrorEdgesFormProps) {
  const { control } = form

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Select Edge Type</h2>

      <FormField
        control={control}
        name="edgeType"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-4">
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="straight" />
                  </FormControl>
                  <FormLabel className="font-normal">Straight Edge</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="beveled" />
                  </FormControl>
                  <FormLabel className="font-normal">Beveled Edge</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="polished" />
                  </FormControl>
                  <FormLabel className="font-normal">Polished Edge</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="custom" />
                  </FormControl>
                  <FormLabel className="font-normal">Custom Edge Treatment</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="w-20 h-4 bg-gray-300"></div>
          </div>
          <p className="mt-2 text-xs text-center">Straight Edge</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div
              className="w-20 h-8 bg-gray-300"
              style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
            ></div>
          </div>
          <p className="mt-2 text-xs text-center">Beveled Edge</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div className="w-20 h-4 bg-gray-200 rounded-md"></div>
          </div>
          <p className="mt-2 text-xs text-center">Polished Edge</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 w-24 h-24 flex items-center justify-center">
            <div
              className="w-20 h-8 bg-gray-300"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)" }}
            ></div>
          </div>
          <p className="mt-2 text-xs text-center">Custom Edge</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          Edge treatment affects both the appearance and safety of your mirror. Beveled and polished edges provide a
          more finished look and reduce the risk of cuts.
        </p>
      </div>
    </div>
  )
}
