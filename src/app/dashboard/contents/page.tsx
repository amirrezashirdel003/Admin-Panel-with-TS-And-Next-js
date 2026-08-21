import ContentItem from "@/components/contentitem";
import HeadSection from "@/components/headSection";
import { contentData } from "@/data/data";

const ContentList = () => {
  const headData = {
    title: "مطالب",
    desc: " 4 مطلب در فهرست ",
    search: "مطلب",
    action: "نوشته جدید",
  };
  return (
    <>
      <HeadSection
        title={headData.title}
        desc={headData.desc}
        search={headData.search}
        action={headData.action}
      />
      <div className="bg-bgbox border border-border rounded-[18px]">
        <div className="grid grid-cols-[2.6fr_1fr_1fr_1fr_1.1fr_120px] gap-3 py-3.5 px-5 text-[12.5px] font-bold border-b text-secondary border-[rgb(238,227,206)] bg-hoverrow/67 rounded-t-[18px]">
          <div>عنوان</div>
          <div>دسته</div>
          <div>نویسنده</div>
          <div>زمان مطالعه</div>
          <div>وضیعت</div>
          <div className="text-center">عملیات</div>
        </div>
        {contentData.map((item, index) => (
          <ContentItem
            key={index}
            icon={item.icon}
            title={item.title}
            category={item.category}
            writer={item.writer}
            time={item.time}
            status={item.status}
            textstatus={item.textstatus}
            bgdot={item.bgdot}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default ContentList;
