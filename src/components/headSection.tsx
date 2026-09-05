import Link from "next/link";
import Button from "./customElements/button";

type HeadSectionProps = {
  title: string;
  desc: string;
  search: string;
  action: string;
};

const HeadSection = ({ title, desc, search, action }: HeadSectionProps) => {
  return (
    <div className="flex justify-between mb-5.5 ">
      <div className="">
        <h1 className="text-2xl font-extrabold ">{title}</h1>
        <p className="mt-1.5 text-[14px] text-secondary ">
          <span>{desc}</span>
        </p>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="relative">
          <svg
            data-dc-tpl="135"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "rgb(169, 157, 125)",
            }}
          >
            <circle data-dc-tpl="136" cx="11" cy="11" r="7"></circle>
            <path data-dc-tpl="137" d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            placeholder={`جستجوی ${search}...`}
            className="py-2.5 pr-9.5 pl-3.5 border border-borderaccent rounded-xl bg-bgbox text-[13.5px] w-57.5 "
          />
        </div>
        <Button
          Component={Link}
          href={
            title === "مطالب"
              ? "/dashboard/contents/new"
              : "/dashboard/plants/new"
          }
          className="flex m-0 py-2.5 px-4.5 gap-1.75 items-center text-[14px] font-bold"
        >
          <svg
            data-dc-tpl="140"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path data-dc-tpl="141" d="M12 5v14M5 12h14"></path>
          </svg>
          {action}
        </Button>
      </div>
    </div>
  );
};

export default HeadSection;
