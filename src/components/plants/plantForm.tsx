"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { plantSchema, type PlantFormValues } from "@/schemas/plantSchema";
import ControlledFormField from "@/components/customElements/controlledFormField";

const defaultValues: PlantFormValues = {
  name: "",
  scientificName: "",
  summary: "",
  description: "",
  careLevel: "easy",
  light: "partial_shade",
  watering: "low",
  temperatureMin: "",
  temperatureMax: "",
  isFeatured: false,
  isHero: false,
  categoryIds: [],
};

const PlantForm = () => {
  const { control, handleSubmit } = useForm<PlantFormValues>({
    resolver: zodResolver(plantSchema),
    defaultValues,
  });

  const onSubmit = (values: PlantFormValues) => {
    console.log("valid:", values);
  };

  const onInvalid = (errors: unknown) => {
    console.log("invalid:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="bg-bgbox border border-border rounded-[18px] p-6 max-w-250"
    >
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <ControlledFormField
            control={control}
            name="name"
            label="نام گیاه"
            placeholder="مثلاً افوربیا تریگونا"
          />
        </div>

        <div className="col-span-12">
          <ControlledFormField
            control={control}
            name="scientificName"
            label="نام لاتین"
            placeholder="Euphorbia trigona"
            dir="ltr"
          />
        </div>

        <div className="col-span-12">
          <ControlledFormField
            control={control}
            name="summary"
            label="خلاصه"
            placeholder="یک جمله درباره گیاه"
          />
        </div>

        <div className="col-span-12">
          <ControlledFormField
            control={control}
            name="description"
            label="توضیحات"
            as="textarea"
            placeholder="توضیح کوتاه درباره گیاه…"
          />
        </div>
      </div>

      <button type="submit" className="mt-4 py-2.75 px-6 rounded-[11px]">
        ذخیره گیاه
      </button>
    </form>
  );
};

export default PlantForm;
