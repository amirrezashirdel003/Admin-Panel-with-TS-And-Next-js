import type { PlantFormValues } from "@/schemas/plantSchema";

export type PlantPayload = Omit<
  PlantFormValues,
  "temperatureMin" | "temperatureMax"
> & {
  temperatureMin: number;
  temperatureMax: number;
};

export const toPlantPayload = (values: PlantFormValues): PlantPayload => ({
  ...values,
  temperatureMin: Number(values.temperatureMin),
  temperatureMax: Number(values.temperatureMax),
});
