import z from "zod";

export const plantSchema = z
  .object({
    name: z.string().min(1, "نام گیاه الزامی است"),
    scientificName: z.string().min(1, "نام علمی الزامی است"),
    summary: z.string().min(1, "خلاصه الزامی است"),
    description: z.string().min(1, "توضیحات الزامی است"),
    careLevel: z.enum(["easy", "medium", "hard"]),
    light: z.enum(["partial_shade", "medium", "high", "full"]),
    watering: z.enum(["very_low", "low", "medium", "high"]),
    temperatureMin: z.coerce.number(),
    temperatureMax: z.coerce.number(),
    isFeatured: z.boolean(),
    isHero: z.boolean(),
    categoryIds: z.array(z.string()).min(1, "حداقل یک دسته انتخاب کنید"),
  })
  .refine((data) => data.temperatureMin < data.temperatureMax, {
    message: "حداقل دما باید کمتر از حداکثر دما باشد",
    path: ["temperatureMax"],
  });

export type PlantFormValues = z.infer<typeof plantSchema>;
