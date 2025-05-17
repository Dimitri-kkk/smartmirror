"use client"

import type { UseFormReturn } from "react-hook-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

interface MirrorEdgesFormProps {
  form: UseFormReturn<any>
}

export default function MirrorEdgesForm({ form }: MirrorEdgesFormProps) {
  const { control, watch } = form
  const edgeType = watch("edgeType")
  const showAdditionalOptions = edgeType === "beveled" || edgeType === "polished" || edgeType === "custom"

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">დიზაინი</h2>

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
                  <FormLabel className="font-normal">განათების გარეშე</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="beveled" />
                  </FormControl>
                  <FormLabel className="font-normal">უკანა განათება</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="polished" />
                  </FormControl>
                  <FormLabel className="font-normal">გარე განათების კანტი</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="custom" />
                  </FormControl>
                  <FormLabel className="font-normal">შიდა განათებული კანტი</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />

      {showAdditionalOptions && (
        <FormField
          control={control}
          name="edgeSubType"
          render={({ field }) => (
            <FormItem className="mt-4 ml-8 border-l-2 pl-4 border-gray-200">
              <FormLabel className="text-sm font-medium mb-2 block">დამატებითი პარამეტრები</FormLabel>
              <FormControl>
                <RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-3">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="option1" />
                    </FormControl>
                    <FormLabel className="font-normal">თეთრი თბილი</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="option2" />
                    </FormControl>
                    <FormLabel className="font-normal">თეთრი ნეიტრალი</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="option3" />
                    </FormControl>
                    <FormLabel className="font-normal">თეთრი ცივი</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="option4" />
                    </FormControl>
                    <FormLabel className="font-normal">RGB განათება</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      )}
    </div>
  )
}
