import * as z from "zod"

export const formSchema = z.object({
  mirrorType: z.enum([
    "rectangular",
    "round",
    "rectangularRoundedCorners",
    "rectangularFullyRoundedCorners",
    "elliptical",
  ]),
  width: z.number().min(10).max(300),
  height: z.number().min(10).max(300),
  diameter: z.number().min(10).max(300).optional(),
  edgeType: z.enum(["straight", "beveled", "polished", "custom"]),
  edgeSubType: z.enum(["option1", "option2", "option3", "option4"]).optional(),
  mountingType: z.enum(["wall", "standing", "hanging", "custom"]),
  fullName: z.string().min(2, "სახელი აუცილებელია").max(100),
  phone: z.string().min(9, "ტელეფონის ნომერი აუცილებელია").max(15),
  address: z.string().min(2, "მისამართი აუცილებელია").max(200),
  additionalNotes: z.string().optional(),

  // Add these new fields for mounting options:
  touchSensor: z.enum(["yes", "no"]).default("no"),
  antiFog: z.enum(["yes", "no"]).default("no"),
  dashboard: z.enum(["yes", "no"]).default("no"),
  weather: z.enum(["yes", "no"]).default("no"),

})

export type FormData = z.infer<typeof formSchema>
