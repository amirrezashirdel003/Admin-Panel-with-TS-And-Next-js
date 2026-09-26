"use client";

import BackButton from "@/components/customElements/backButton";
import Button from "@/components/customElements/button";
import { usePlant } from "@/hooks/usePlants";
import Link from "next/link";
import { useParams } from "next/navigation";

type Plant = {
  id: string;
  name: string;
  scientificName: string;
  slug: string;
  summary: string;
  description: string;
  imageUrl: string | null;
  isFeatured: boolean;
  isHero: boolean;
  care: {
    level: { value: string; label: string };
    light: { value: string; label: string };
    watering: { value: string; label: string };
  };
  categories: { id: string; name: string; slug: string }[];
  temperature: { min: number; max: number; unit: string };
};

const PlantsPreview = () => {
  const { slug } = useParams();
  const { data: plantResponse, isLoading, error } = usePlant(slug as string);

  if (isLoading) {
    return <div className="text-primary">Loading...</div>;
  }

  if (error || !plantResponse) {
    return <div className="text-textcolor">گیاه یافت نشد.</div>;
  }

  const plant: Plant = plantResponse.data;

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        <BackButton className="text-[13.5px] font-semibold flex items-center gap-2.25 py-2.5 px-4">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          بازگشت به فهرست
        </BackButton>
        <Button
          Component={Link}
          href={`/dashboard/plants/edit/${slug}`}
          className="flex items-center gap-2 py-2.5 px-4.5 text-[14px]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
          </svg>
          ویرایش
        </Button>
      </div>

      <div className="m-auto min-w-110 w-110 bg-bgbox border border-border rounded-[26px] cardShadow ">
        <div className="h-75 flex items-center text-[90px] relative bg-center bg-cover justify-center rounded-t-[26px] bg-[rgb(230,220,196)] ">
          {plant.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={plant.imageUrl}
              alt={plant.name}
              className="w-full h-full object-cover rounded-t-[26px]"
            />
          ) : (
            <div>🌱</div>
          )}
          {plant.isFeatured && (
            <div className="absolute top-4 left-4 text-primary text-[13px] font-semibold py-1.75 px-4 rounded-[20px] bg-white/92 ">
              ویژه
            </div>
          )}
        </div>
        <div className="p-6 pt-6.5">
          <div className="text-center">
            <div className="text-[24px] font-extrabold">{plant.name}</div>
            <div className="text-[14px] text-accent mt-1">
              {plant.scientificName}
            </div>
          </div>
          <div className="h-px bg-[rgb(233,225,207)] my-5"></div>
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="text-[12px] text-accent">نگهداری</div>
              <div className="text-[14px] font-bold">
                {plant.care.level.label}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[12px] text-accent">نور</div>
              <div className="text-[14px] font-bold">
                {plant.care.light.label}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[12px] text-accent">آبیاری</div>
              <div className="text-[14px] font-bold">
                {plant.care.watering.label}
              </div>
            </div>
          </div>
          <div className="h-px bg-[rgb(233,225,207)] my-5"></div>
          <div className="flex gap-2 justify-center flex-wrap">
            {plant.categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-greencolorlight text-primary text-[12.5px] py-1.5 px-3.5 rounded-[20px]"
              >
                {cat.name}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-textcolor text-center mt-5">
            {plant.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default PlantsPreview;
