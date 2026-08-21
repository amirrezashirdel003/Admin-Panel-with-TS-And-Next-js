import Link from "next/link";

function SectionStatusRight() {
  const DataStatus = [
    { icon: "🪴", titlerow: "افوربیا تریگونا", desc: "افوربیا" },
    { icon: "🪴", titlerow: "هاورتیا فاسیاتا", desc: "ساکولنت" },
    { icon: "🪴", titlerow: "اکه‌وریا الگانس", desc: "ساکولنت" },
    { icon: "🪴", titlerow: "سانسوریا", desc: "سانسوریا" },
  ];

  return (
    <div className="bg-bgbox border border-border rounded-[18px] p-5 w-full">
      <div className="flex justify-between items-center mb-3.5">
        <div className="font-bold text-[15px]">آخرین گیاهان</div>
        <Link
          href="/dashboard/plants"
          className="cursor-pointer text-[12.5px] font-semibold text-primary"
        >
          مشاهده همه
        </Link>
      </div>

      <div>
        {DataStatus.map((item, index) => (
          <div
            key={`${item.titlerow}-${index}`}
            className="flex items-center gap-3 py-2.25 border-t border-border "
          >
            <div className="size-9.5 rounded-[10px] bg-greencolor flex items-center justify-center text-[16px]">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <div className="text-[13.5px] font-semibold">{item.titlerow}</div>
              <div className="text-[11.5px] text-accent">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionStatusRight;
