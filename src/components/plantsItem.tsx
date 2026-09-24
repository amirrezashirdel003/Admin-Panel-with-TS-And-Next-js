"use client";
import Link from "next/link";
import { useState } from "react";
import DeleteModal from "./modal";

type PlantsItemProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  category: string;
  keeping: string;
  light: string;
  irrigation: string;
  id: string;
};

const PlantsItem = ({
  icon,
  title,
  desc,
  category,
  keeping,
  light,
  irrigation,
  id,
}: PlantsItemProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-[2.4fr_1fr_0.9fr_0.9fr_0.9fr_120px] gap-3 py-3.25 px-5 items-center border-b border-borderrow text-[13.5px] hover:bg-hoverrow/67">
        <div className="flex items-center gap-3  ">
          <div className="flex items-center justify-center text-[20px]  size-11 rounded-[11px] bg-greencolor  ">
            {icon}
          </div>
          <div className="flex flex-col  ">
            <div className="font-semibold  "> {title} </div>
            <div className="text-[11.5px] text-accent "> {desc} </div>
          </div>
        </div>
        <div>
          <span className="bg-greencolorlight text-primary text-[12px] py-1 px-2.75 rounded-[20px] ">
            {category}
          </span>
        </div>
        <div className="text-textcolor">{keeping} </div>
        <div className="text-textcolor"> {light} </div>
        <div className="text-textcolor"> {irrigation} </div>
        <div className="flex items-center justify-center gap-1">
          <Link
            href={`/dashboard/plants/preview/${id}`}
            className="flex items-center justify-center size-8 rounded-[9px] cursor-pointer text-[rgb(122,115,88)] bg-[rgb(234,228,210)] "
          >
            <svg
              data-dc-tpl="167"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                data-dc-tpl="168"
                d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
              ></path>
              <circle data-dc-tpl="169" cx="12" cy="12" r="3"></circle>
            </svg>
          </Link>
          <Link
            href={`/dashboard/plants/edit/${id}`}
            className="flex items-center justify-center size-8 rounded-[9px] cursor-pointer text-primary bg-greencolorlight "
          >
            <svg
              data-dc-tpl="171"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path data-dc-tpl="172" d="M12 20h9"></path>
              <path
                data-dc-tpl="173"
                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
              ></path>
            </svg>
          </Link>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="flex items-center justify-center size-8 rounded-[9px] cursor-pointer text-exit bg-[rgb(244,228,220)]"
          >
            <svg
              data-dc-tpl="175"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                data-dc-tpl="176"
                d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          title={title}
          onConfirm={() => {
            // onDelete(id);
            setShowDeleteModal(false);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default PlantsItem;
