import SectionStatusLeft from "@/components/sectionStatusLeft";
import SectionStatusRight from "@/components/sectionStatusRight";
import Stat from "@/components/stat";
import DashboardStats from "@/data/data";

export default function Dashboard() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold ">داشبورد</h1>
        <p className="mt-1.5 text-secondary text-sm ">نمای کلی گلخانه شما</p>
      </div>
      <div className="flex gap-4 mb-6.5 justify-between w-full ">
        {Object.values(DashboardStats).map((stat, index) => (
          <Stat
            key={index}
            bgClassname={stat.bgClassname}
            textColor={stat.textColor}
            icon={stat.icon}
            number={stat.number}
            desc={stat.desc}
          />
        ))}
      </div>
      <div className="flex justify-between gap-4 ">
        <div className="flex-1">
          <SectionStatusRight />
        </div>
        <div className="flex-1">
          <SectionStatusLeft />
        </div>
      </div>
    </>
  );
}
