"use client";

import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { plantSchema, type PlantFormValues } from "@/schemas/plantSchema";
import ControlledFormField from "@/components/customElements/controlledFormField";
import BackButton from "@/components/customElements/backButton";
import Button from "@/components/customElements/button";
import UploadSection from "@/components/customElements/uploadSection";
import { careLevelOptions, lightOptions, wateringOptions } from "@/data/data";
import { useCreatePlant } from "@/hooks/usePlants";
import { toPlantPayload } from "@/lib/plantMappers";
import { useCategories } from "@/hooks/useCategories";
import axios from "axios";

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
  const router = useRouter();

  const { control, handleSubmit } = useForm<PlantFormValues>({
    resolver: zodResolver(plantSchema),
    defaultValues,
  });

  const [name, scientificName] = useWatch({
    control,
    name: ["name", "scientificName"],
  });

  const { mutate: createPlant, isPending, isError } = useCreatePlant();

  const { data: categoriesResult } = useCategories();
  const categoryOptions = categoriesResult?.data ?? [];

  const onSubmit = (values: PlantFormValues) => {
    createPlant(toPlantPayload(values), {
      onSuccess: () => router.push("/dashboard/plants"),
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.status, error.response?.data);
        }
      },
    });
  };
  const onInvalid = (errors: unknown) => {
    console.log("invalid:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="max-w-250 w-full"
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3.5">
          <BackButton className="size-10 flex items-center justify-center">
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </BackButton>
          <div className="flex flex-col">
            <h1 className="text-[22px] font-extrabold">افزودن گیاه</h1>
            <p className="mt-2 text-secondary text-[13px]">
              اطلاعات گیاه را کامل کنید
            </p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={() => router.push("/dashboard/plants")}
            className="py-2.75 px-5 border border-border rounded-[11px] text-textcolor text-[14px] font-semibold cursor-pointer"
          >
            انصراف
          </button>
          <Button
            type="submit"
            disabled={isPending}
            className="py-2.75 px-6 rounded-[11px] text-center text-[14px]"
          >
            {isPending ? "در حال ذخیره..." : "ذخیره گیاه"}
          </Button>
        </div>
      </div>
      {isError && (
        <p className="mb-4 text-[13px] text-exit">
          ذخیره گیاه انجام نشد، دوباره تلاش کنید.
        </p>
      )}
      <div className="flex gap-5.5 items-start">
        <div className="bg-bgbox border border-border rounded-[18px] p-6 flex-1">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <ControlledFormField
                control={control}
                name="name"
                label="نام گیاه"
                placeholder="مثلاً افوربیا تریگونا"
              />
            </div>

            <div className="col-span-6">
              <ControlledFormField
                control={control}
                name="scientificName"
                label="نام لاتین"
                placeholder="Euphorbia trigona"
                dir="ltr"
              />
            </div>

            <div className="col-span-6">
              <ControlledFormField
                control={control}
                name="categoryIds"
                label="دسته"
                as="checkbox-group"
                options={categoryOptions}
              />
            </div>

            <div className="col-span-4">
              <ControlledFormField
                control={control}
                name="careLevel"
                label="نگهداری"
                as="select"
                options={careLevelOptions}
              />
            </div>
            <div className="col-span-4">
              <ControlledFormField
                control={control}
                name="light"
                label="نور"
                as="select"
                options={lightOptions}
              />
            </div>
            <div className="col-span-4">
              <ControlledFormField
                control={control}
                name="watering"
                label="آبیاری"
                as="select"
                options={wateringOptions}
              />
            </div>

            <div className="col-span-6">
              <ControlledFormField
                control={control}
                name="temperatureMin"
                label="حداقل دما (°C)"
                type="number"
                placeholder="15"
                dir="ltr"
              />
            </div>
            <div className="col-span-6">
              <ControlledFormField
                control={control}
                name="temperatureMax"
                label="حداکثر دما (°C)"
                type="number"
                placeholder="28"
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
        </div>

        <div className="flex flex-col w-full max-w-85 gap-5">
          <div className="bg-bgbox border border-border rounded-[18px] p-5">
            <UploadSection
              title="تصویر گیاه"
              className="flex text-[13px] font-bold text-textcolor mb-3"
            />
          </div>

          <div className="bg-bgbox border border-border rounded-[18px] p-4.5">
            <div className="text-[12.5px] font-bold text-secondary mb-3">
              پیش‌نمایش کارت
            </div>
            <div className="border border-border rounded-2xl bg-bginput">
              <div className="h-30 relative bg-center bg-cover bg-greencolor flex items-center justify-center text-[38px]">
                <div>🪴</div>
                <div className="absolute top-2.5 right-2.5 bg-white/90 text-primary text-[11.5px] py-0.75 px-2.5 rounded-[20px]">
                  ساکولنت
                </div>
              </div>
              <div className="p-3.5">
                <div className="text-[16px] font-extrabold">
                  {name || "نام گیاه"}
                </div>
                <div className="text-[12px] text-accent">{scientificName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlantForm;
