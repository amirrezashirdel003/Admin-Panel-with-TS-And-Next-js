import { z } from "zod";

const temperature = z
  .string()
  .trim()
  .min(1, "الزامی است")
  .refine((v) => !Number.isNaN(Number(v)), "عدد معتبر وارد کنید");

export const plantSchema = z
  .object({
    name: z.string().min(1, "نام گیاه الزامی است"),
    scientificName: z.string().min(1, "نام علمی الزامی است"),
    summary: z.string().min(1, "خلاصه الزامی است"),
    description: z.string().min(1, "توضیحات الزامی است"),
    careLevel: z.enum(["easy", "medium", "hard"]),
    light: z.enum(["partial_shade", "medium", "high", "full"]),
    watering: z.enum(["very_low", "low", "medium", "high"]),
    temperatureMin: temperature,
    temperatureMax: temperature,
    isFeatured: z.boolean(),
    isHero: z.boolean(),
    categoryIds: z.array(z.string()).min(1, "حداقل یک دسته انتخاب کنید"),
  })
  .refine((data) => Number(data.temperatureMin) < Number(data.temperatureMax), {
    message: "حداقل دما باید کمتر از حداکثر دما باشد",
    path: ["temperatureMax"],
  });

export type PlantFormValues = z.infer<typeof plantSchema>;
