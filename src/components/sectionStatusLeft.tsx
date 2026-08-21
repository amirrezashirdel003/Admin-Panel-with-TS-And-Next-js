import Link from "next/link";

function SectionStatusLeft() {
  const DataStatusLeft = [
    {
      icon: "📄",
      titlerow: "چطور ساکولنت‌ها را درست آبیاری کنیم؟",
      desc: "آبیاری",
      bgbadge: "bg-greencolor",
      textbadge: "منتشر شده",
      textcolor: "text-primary",
    },
    {
      icon: "📄",
      titlerow: "هاورتیا نور مناسب برای کاکتوس‌های خانگی",
      desc: "نور",
      bgbadge: "bg-greencolor",
      textbadge: "منتشر شده",
      textcolor: "text-primary",
    },
    {
      icon: "📄",
      titlerow: " خاک ایده‌آل برای ساکولنت‌ها",
      desc: "خاک",
      bgbadge: "bg-[rgb(240,232,213)]",
      textbadge: "پیش نویس",
      textcolor: "text-[rgb(160,138,90)]",
    },
    {
      icon: "📄",
      titlerow: "راهنمای بازکاشت گیاهان گلدانی",
      desc: "نگهداری",
      bgbadge: "bg-[rgb(240,232,213)]",
      textbadge: "پیش نویس",
      textcolor: "text-[rgb(160,138,90)]",
    },
  ];

  return (
    <div className="bg-bgbox border border-border rounded-[18px] p-5 w-full">
      <div className="flex justify-between items-center mb-3.5">
        <div className="font-bold text-[15px]">آخرین مطالب</div>
        <Link
          href="/dashboard/contents"
          className="cursor-pointer text-[12.5px] font-semibold text-primary"
        >
          مشاهده همه
        </Link>
      </div>

      <div>
        {DataStatusLeft.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-2.25 border-t border-border "
          >
            <div className="size-9.5 rounded-[10px] bg-greencolorlight flex items-center justify-center text-[16px]">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <div className="text-[13.5px] font-semibold">{item.titlerow}</div>
              <div className="text-[11.5px] text-accent">{item.desc}</div>
            </div>
            <span
              className={`text-[11px] ${item?.textcolor}  ${item?.bgbadge}  py-0.75 px-2.25 rounded-[20px] mr-auto `}
            >
              {item?.textbadge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionStatusLeft;
