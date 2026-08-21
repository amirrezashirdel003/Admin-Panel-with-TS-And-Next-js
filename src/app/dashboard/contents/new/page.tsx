"use client";

import BackButton from "@/components/backButton";
import Button from "@/components/button";
import UploadSection from "@/components/uploadSection";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewContent = () => {
  const initialState = {
    name: "",
    writer: "",
    category: "آبیاری",
    studyTime: "",
    status: "پیش‌نویس",
    summary: "",
    content: "",
    tags: "",
  };

  const router = useRouter();

  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-265 w-full ">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex gap-3.5 items-center">
          <BackButton className="size-10 flex items-center justify-center ">
            <svg
              data-dc-tpl="240"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path data-dc-tpl="241" d="M5 12h14"></path>
              <path data-dc-tpl="242" d="m12 5 7 7-7 7"></path>
            </svg>
          </BackButton>
          <div className="flex flex-col ">
            <h1 className="text-[22px] font-extrabold">نوشته جدید</h1>
            <p className="mt-2 text-secondary text-[13px]">
              مطلب خود را بنویسید و پیش‌نمایش را ببینید
            </p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <button
            onClick={() => router.push("/dashboard/contents")}
            className="py-2.75 px-5 border border-border rounded-[11px] text-textcolor text-[14px] font-semibold cursor-pointer "
          >
            انصراف
          </button>
          <Button
            Component="button"
            className="py-2.75 px-6 rounded-[11px] text-center text-[14px]  "
          >
            ذخیره مطلب
          </Button>
        </div>
      </div>
      <div className="flex gap-5.5 items-start ">
        <div className="w-full flex-1 bg-bgbox border border-border rounded-[18px] p-6 flex flex-col gap-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                عنوان
              </label>
              <input
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px]"
                placeholder="چطور ساکولنت‌ها را درست آبیاری کنیم؟"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                نویسنده
              </label>
              <input
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px]"
                placeholder="نام نویسنده"
                type="text"
                name="writer"
                value={formData.writer}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                دسته
              </label>
              <select
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="آبیاری">آبیاری</option>
                <option value="نور">نور</option>
                <option value="خاک">خاک</option>
                <option value="نگهداری">نگهداری</option>
                <option value="بازکاشت">بازکاشت</option>
                <option value="معرفی گیاه">معرفی گیاه</option>
              </select>
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                زمان مطالعه (دقیقه)
              </label>
              <input
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px]"
                placeholder="زمان مطالعه"
                type="number"
                name="studyTime"
                value={formData.studyTime}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                وضیعت
              </label>
              <select
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="منتشر شده">منتشر شده</option>
                <option value="پیش‌نویس">پیش‌نویس</option>
              </select>
            </div>
            <div className="col-span-12">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                خلاصه
              </label>
              <textarea
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] resize-y"
                rows={2}
                placeholder="خلاصه‌ای کوتاه درباره مطلب…"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                متن مطلب
              </label>
              <textarea
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] leading-loose resize-y"
                rows={8}
                placeholder="متن مطلب…"
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                برچسب‌ها (با ویرگول جدا کنید)
              </label>
              <input
                type="text"
                placeholder="ساکولنت، آبیاری"
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px]"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12">
              <UploadSection
                title="تصویر کاور"
                className="text-[13px] flex font-semibold text-textcolor mb-1.75"
              />
            </div>
          </div>
        </div>
        <div className="sticky top-5 w-90 ">
          <div className="text-[12.5px] font-bold text-secondary mb-3">
            پیش‌نمایش کارت
          </div>
          <div className="bg-bgbox border border-border rounded-[20px] shadow-[rgba(80,70,40,0.1) 0px 12px 30px]">
            <div className="h-40 bg-contenticonbg flex flex-col rounded-t-[20px] items-center justify-center gap-2 text-[rgb(138,128,95)]">
              <svg
                data-dc-tpl="392"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  data-dc-tpl="393"
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                ></rect>
                <circle data-dc-tpl="394" cx="9" cy="10" r="1.6"></circle>
                <path data-dc-tpl="395" d="m21 16-5-5L5 21"></path>
              </svg>
              <span className="text-[12.5px]">بدون تصویر</span>
            </div>
            <div className="p-4.5">
              <div className="flex items-center justify-between mb-3 ">
                <div className="flex items-center gap-1.5 text-secondary text-[12px]">
                  <svg
                    data-dc-tpl="400"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle data-dc-tpl="401" cx="12" cy="12" r="9"></circle>
                    <path data-dc-tpl="402" d="M12 7v5l3 2"></path>
                  </svg>
                  <span>۲ دقیقه مطالعه</span>
                </div>
                <div className="bg-greencolorlight text-primary text-[12px]  py-1 px-3 rounded-[20px] ">
                  نگهداری
                </div>
              </div>
              <div className="text-[17px] font-extrabold leading-[1.6] mb-2 text-pretty">
                عنوان مطلب اینجا نمایش داده می‌شود
              </div>
              <div className="text-[13px] text-secondary leading-loose text-pretty">
                خلاصه مطلب در این بخش نشان داده می‌شود…
              </div>
              <div className="flex items-center gap-1.75 text-primary text-[13.5px] font-bold mt-4">
                ادامه مطلب
                <svg
                  data-dc-tpl="407"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path data-dc-tpl="408" d="M19 12H5"></path>
                  <path data-dc-tpl="409" d="m12 19-7-7 7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent;
