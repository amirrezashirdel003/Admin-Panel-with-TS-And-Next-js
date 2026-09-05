"use client";
import BackButton from "@/components/customElements/backButton";
import Button from "@/components/customElements/button";
import { plantsData } from "@/data/data";
import Link from "next/link";
import { useParams } from "next/navigation";

const PlantsPreview = () => {
  const { id } = useParams();
  const plant = plantsData.find((item) => item.id === Number(id));

  if (!plant) {
    return <div className="text-textcolor">گیاه یافت نشد.</div>;
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        <BackButton className="text-[13.5px] font-semibold flex items-center gap-2.25 py-2.5 px-4">
          <svg
            data-dc-tpl="414"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path data-dc-tpl="415" d="M5 12h14"></path>
            <path data-dc-tpl="416" d="m12 5 7 7-7 7"></path>
          </svg>
          بازگشت به فهرست
        </BackButton>
        <Button
          Component={Link}
          href={`/dashboard/plants/edit/${id}`}
          className="flex items-center gap-2 py-2.5 px-4.5 text-[14px]"
        >
          <svg
            data-dc-tpl="418"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path data-dc-tpl="419" d="M12 20h9"></path>
            <path
              data-dc-tpl="420"
              d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
            ></path>
          </svg>
          ویرایش
        </Button>
      </div>

      <div className="m-auto min-w-110 w-110 bg-bgbox border border-border rounded-[26px] cardShadow ">
        <div className="h-75 flex items-center text-[90px] relative bg-center bg-cover justify-center rounded-t-[26px] bg-[rgb(230,220,196)] ">
          <div className="">{plant.icon}</div>
          <div className="absolute top-4 left-4 text-primary text-[13px] font-semibold py-1.75 px-4 rounded-[20px] bg-white/92 ">
            {plant.badge}
          </div>
        </div>
        <div className="p-6 pt-6.5">
          <div className="text-center">
            <div className="text-[24px] font-extrabold">{plant.title}</div>
            <div className="text-[14px] text-accent mt-1">{plant.desc}</div>
          </div>
          <div className="h-px bg-[rgb(233,225,207)] my-5"></div>
          <div className="grid grid-cols-3 gap-2.5 text-center">
            {plant.job.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className={`size-11.5 rounded-[14px] flex items-center justify-center ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>
                <div className="text-[12px] text-accent">{item.label}</div>
                <div className="text-[14px] font-bold">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="h-px bg-[rgb(233,225,207)] my-5"></div>
          <div className="flex gap-2 justify-center flex-wrap">
            <div className="bg-greencolorlight text-primary text-[12.5px] py-1.5 px-3.5 rounded-[20px]">
              🏠 هردو
            </div>
            <div className="bg-greencolorlight text-primary text-[12.5px] py-1.5 px-3.5 rounded-[20px]">
              🍃 تهویه زیاد
            </div>
            <div className="bg-[rgb(243,230,212)] text-[rgb(193,134,58)] text-[12.5px] py-1.5 px-3.5 rounded-[20px]">
              💎 معمولی
            </div>
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
