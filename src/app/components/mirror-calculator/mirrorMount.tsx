"use client"

import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MirrorMountingFormProps {
  form: UseFormReturn<any>
}

export default function MirrorMountingForm({ form }: MirrorMountingFormProps) {
  const { control } = form

  const mountingOptions = [
    { name: "Wall Mount", field: "wallMount" },
    { name: "Standing Mirror", field: "standingMirror" },
    { name: "Hanging Mirror", field: "hangingMirror" },
    { name: "Custom Mounting", field: "customMounting" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Select Desired Mounting Options</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mountingOptions.map(({ name, field }) => (
          <FormField
            key={field}
            control={control}
            name={field}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{name}</FormLabel>
                <FormControl>
                  <Select value={formField.value} onValueChange={formField.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Yes or No" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="yes">Yes</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  )
}
