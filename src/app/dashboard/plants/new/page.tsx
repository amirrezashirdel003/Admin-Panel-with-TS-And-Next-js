"use client";
import BackButton from "@/components/backButton";
import Button from "@/components/button";
import UploadSection from "@/components/uploadSection";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewPlant = () => {
  const initialState = {
    name: "",
    nameDesc: "",
    category: "افوربیا",
    maintenance: "اسان",
    light: "نیم سایه",
    watering: "کم",
    suitableSpace: "فضای بسته",
    ventilation: "تهویه متوسط",
    rarity: "معمولی",
    description: "",
  };

  const roter = useRouter();

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
    <div className="max-w-250 w-full">
      <div className="flex items-center justify-between gap-4 mb-6 ">
        <div className="flex items-center gap-3.5">
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
            <h1 className="text-[22px] font-extrabold">افزودن گیاه</h1>
            <p className="mt-2 text-secondary text-[13px]">
              اطلاعات گیاه را کامل کنید
            </p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <button
            onClick={() => roter.push("/dashboard/plants")}
            className="py-2.75 px-5 border border-border rounded-[11px] text-textcolor text-[14px] font-semibold cursor-pointer "
          >
            انصراف
          </button>
          <Button
            Component={Button}
            className="py-2.75 px-6 rounded-[11px] text-center text-[14px]  "
          >
            ذخیره گیاه
          </Button>
        </div>
      </div>
      <div className="flex gap-5.5 items-start">
        <div className="bg-bgbox border border-border rounded-[18px] p-6 flex-1">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                نام گیاه
              </label>
              <input
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px]"
                placeholder="مثلاً افوربیا تریگونا"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                نام لاتین
              </label>
              <input
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px]"
                placeholder="Euphorbia trigona"
                dir="ltr"
                type="text"
                name="nameDesc"
                value={formData.nameDesc}
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
                <option value="افوربیا">افوربیا</option>
                <option value="کاکتوس">کاکتوس</option>
                <option value="ساکولنت">ساکولنت</option>
                <option value="آلوئه">آلوئه</option>
                <option value="سانسوریا">سانسوریا</option>
                <option value="سایر">سایر</option>
              </select>
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                نگهداری
              </label>
              <select
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
                name="maintenance"
                value={formData.maintenance}
                onChange={handleChange}
              >
                <option value="اسان">اسان</option>
                <option value="متوسط">متوسط</option>
                <option value="پیشرفته">پیشرفته</option>
              </select>
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                نور
              </label>
              <select
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
                name="light"
                value={formData.light}
                onChange={handleChange}
              >
                <option value="نیم سایه">نیم سایه</option>
                <option value="متوسط">متوسط</option>
                <option value="زیاد">زیاد</option>
                <option value="کامل">کامل</option>
              </select>
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                آبیاری
              </label>
              <select
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
                name="watering"
                value={formData.watering}
                onChange={handleChange}
              >
                <option value="خیلی کم">خیلی کم</option>
                <option value="کم">کم</option>
                <option value="متوسط">متوسط</option>
                <option value="زیاد">زیاد</option>
              </select>
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                مناسب فضا
              </label>
              <select
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
                name="suitableSpace"
                value={formData.suitableSpace}
                onChange={handleChange}
              >
                <option value="فضای باز">فضای باز</option>
                <option value="فضای بسته">فضای بسته</option>
                <option value="هر دو">هر دو</option>
              </select>
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                تهویه
              </label>
              <select
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
                name="ventilation"
                value={formData.ventilation}
                onChange={handleChange}
              >
                <option value="تهویه کم">تهویه کم</option>
                <option value="تهویه متوسط">تهویه متوسط</option>
                <option value="تهویه زیاد">تهویه زیاد</option>
              </select>
            </div>
            <div className="col-span-6">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                کمیابی
              </label>
              <select
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
                name="rarity"
                value={formData.rarity}
                onChange={handleChange}
              >
                <option value="معمولی">معمولی</option>
                <option value="کمیاب">کمیاب</option>
                <option value="کلکسیونی">کلکسیونی</option>
              </select>
            </div>
            <div className="col-span-12">
              <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
                توضیحات
              </label>
              <textarea
                rows={4}
                placeholder="توضیح کوتاه درباره گیاه…"
                className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] leading-[1.9] resize-y"
                name="description"
                value={formData.description}
                onChange={handleChange}
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
                  {formData.name || "نام گیاه"}
                </div>
                <div className="text-[12px] text-accent ">
                  {formData.nameDesc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlant;
