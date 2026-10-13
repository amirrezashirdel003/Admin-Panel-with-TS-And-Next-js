"use client";

import HeadSection from "@/components/headSection";
import Table from "@/components/customElements/table";
import { usePlants } from "@/hooks/usePlants";
import PlantsItem from "@/components/plants/plantsItem";

type Plant = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  care: {
    level: { value: string; label: string };
    light: { value: string; label: string };
    watering: { value: string; label: string };
  };
  categories: { id: string; name: string; slug: string }[];
};

const mapPlantToRow = (plant: Plant) => ({
  id: plant.id,
  slug: plant.slug,
  icon: plant.imageUrl,
  title: plant.name,
  category: plant.categories[0]?.name ?? "بدون دسته",
  keeping: plant.care.level.label,
  light: plant.care.light.label,
  irrigation: plant.care.watering.label,
});

const PlantsList = () => {
  const { data, isLoading, isError } = usePlants();

  const headData = {
    title: "گیاهان",
    desc: `${data?.data?.length ?? 0} گیاه در فهرست`,
    search: "گیاه",
    action: "افزودن گیاه",
  };

  return (
    <>
      <HeadSection
        title={headData.title}
        desc={headData.desc}
        search={headData.search}
        action={headData.action}
      />

      <Table
        gridCols="grid-cols-[2.4fr_1fr_0.9fr_0.9fr_0.9fr_120px]"
        columns={["گیاه", "دسته", "نگهداری", "نور", "آبیاری", "عملیات"]}
      >
        {isLoading && (
          <div className="py-8 text-center text-secondary text-[13px]">
            در حال بارگذاری...
          </div>
        )}

        {isError && (
          <div className="py-8 text-center text-exit text-[13px]">
            خطا در دریافت لیست گیاهان
          </div>
        )}

        {!isLoading &&
          !isError &&
          data?.data?.map((plant: Plant) => {
            const row = mapPlantToRow(plant);
            return (
              <PlantsItem
                key={row.id}
                icon={
                  row.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={row.icon}
                      alt={row.title}
                      className="w-full h-full object-cover rounded-[11px]"
                    />
                  ) : (
                    "🌱"
                  )
                }
                title={row.title}
                desc={row.category}
                category={row.category}
                keeping={row.keeping}
                light={row.light}
                irrigation={row.irrigation}
                slug={row.slug}
              />
            );
          })}
      </Table>
    </>
  );
};

export default PlantsList;
