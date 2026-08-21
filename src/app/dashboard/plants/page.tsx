import HeadSection from "@/components/headSection";
import PlantsItem from "@/components/plantsItem";
import { plantsData } from "@/data/data";

const PlantsList = () => {
  const headData = {
    title: "گیاهان",
    desc: "6 گیاه در فهرست ",
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
      <div className="bg-bgbox border border-border rounded-[18px] ">
        <div className="grid grid-cols-[2.4fr_1fr_0.9fr_0.9fr_0.9fr_120px] gap-3 py-3.5 px-5 text-[12.5px] font-bold border-b text-secondary border-[rgb(238,227,206)] bg-hoverrow/67 rounded-t-[18px] ">
          <div>گیاه</div>
          <div>دسته</div>
          <div>نگهداری</div>
          <div>نور</div>
          <div>آبیاری</div>
          <div className="text-center">عملیات</div>
        </div>
        {plantsData.map((item, index) => (
          <PlantsItem
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            category={item.category}
            keeping={item.keeping}
            light={item.light}
            irrigation={item.irrigation}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default PlantsList;
