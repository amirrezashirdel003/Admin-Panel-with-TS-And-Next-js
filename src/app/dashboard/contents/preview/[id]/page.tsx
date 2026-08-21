"use client";

import BackButton from "@/components/backButton";
import Button from "@/components/button";
import { contentData } from "@/data/data";
import Link from "next/link";
import { useParams } from "next/navigation";

const ContentPreview = () => {
  const { id } = useParams();
  const content = contentData.find((item) => item.id === Number(id));
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
          href={`/dashboard/contents/edit/${id}`}
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
      <div className="max-w-190 w-full bg-bgbox m-auto border border-border rounded-3xl cardShadow ">
        <div className="h-80 bg-center bg-cover bg-contenticonbg flex items-center justify-center text-[70px] rounded-t-3xl">
          {content?.icon}
        </div>
        <div className="p-10 pt-8.5">
          <div className="flex items-center gap-3.5 mb-4.5">
            <div className="bg-greencolorlight text-primary text-[13px] font-semibold py-1.25 px-3.75 rounded-[20px]">
              {content?.category}
            </div>
            <div className="flex items-center gap-1.5 text-secondary text-[13px]">
              <svg
                data-dc-tpl="476"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle data-dc-tpl="477" cx="12" cy="12" r="9"></circle>
                <path data-dc-tpl="478" d="M12 7v5l3 2"></path>
              </svg>
              <span> {content?.time} مطالعه </span>
            </div>
            {content?.status === "پیش‌نویس" && (
              <span
                className={`inline-flex items-center gap-1.5 text-[12.5px] ${content.textstatus}`}
              >
                <span
                  className={`inline-block w-1.75 h-1.75 rounded-full ${content.bgdot}`}
                ></span>

                {content.status}
              </span>
            )}
          </div>
          <h1 className="mb-2.5 text-[30px] font-extrabold leading-normal text-pretty">
            {content?.title}
          </h1>
          <div className="flex items-center gap-2.5 text-secondary text-[13.5px] mb-6">
            <div className="flex items-center justify-center text-[13px] text-primary font-bold size-7.5 rounded-full bg-[rgb(228,220,198)]">
              س
            </div>
            <span>نوشته ی</span>

            <span>{content?.writer}</span>
          </div>
          <div className="h-px bg-[rgb(233,225,207)] mb-6"></div>
          <div className="text-[15.5px] text-secondary leading-[2.2] font-medium mb-5 text-pretty">
            {content?.tip}
          </div>
          <div className="text-[15px] text-[rgb(74,70,50)] leading-[2.3] whitespace-pre-wrap">
            {content?.explanation.map((paragraph: string, index: number) => (
              <p key={index} className="mb-8">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex gap-2 mt-7 pt-5.5 border-t border-border">
            <div className="bg-greencolorlight text-[12.5px] text-[rgb(122,139,90)] py-1.25 px-3.25 rounded-[20px] ">
              {content?.tagcategory1}
            </div>
            <div className="bg-greencolorlight text-[12.5px] text-[rgb(122,139,90)] py-1.25 px-3.25 rounded-[20px] ">
              {content?.tagcategory2}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPreview;
