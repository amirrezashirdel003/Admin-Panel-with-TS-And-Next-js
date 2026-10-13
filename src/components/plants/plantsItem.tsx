"use client";
import Link from "next/link";
import { useState } from "react";
import { useDeletePlant } from "@/hooks/usePlants";
import DeleteModal from "../modal";

type PlantsItemProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  category: string;
  keeping: string;
  light: string;
  irrigation: string;
  slug: string;
};

const PlantsItem = ({
  icon,
  title,
  desc,
  category,
  keeping,
  light,
  irrigation,
  slug,
}: PlantsItemProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { mutate: deletePlant, isPending, isError, reset } = useDeletePlant();

  const openModal = () => {
    reset();
    setShowDeleteModal(true);
  };

  const handleConfirm = () => {
    deletePlant(slug, {
      onSuccess: () => setShowDeleteModal(false),
    });
  };

  return (
    <div>
      <div className="grid grid-cols-[2.4fr_1fr_0.9fr_0.9fr_0.9fr_120px] gap-3 py-3.25 px-5 items-center border-b border-borderrow text-[13.5px] hover:bg-hoverrow/67">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center text-[20px] size-11 rounded-[11px] bg-greencolor">
            {icon}
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{title}</div>
            <div className="text-[11.5px] text-accent">{desc}</div>
          </div>
        </div>
        <div>
          <span className="bg-greencolorlight text-primary text-[12px] py-1 px-2.75 rounded-[20px]">
            {category}
          </span>
        </div>
        <div className="text-textcolor">{keeping}</div>
        <div className="text-textcolor">{light}</div>
        <div className="text-textcolor">{irrigation}</div>
        <div className="flex items-center justify-center gap-1">
          <Link
            href={`/dashboard/plants/preview/${slug}`}
            aria-label="مشاهده"
            className="flex items-center justify-center size-8 rounded-[9px] cursor-pointer text-[rgb(122,115,88)] bg-[rgb(234,228,210)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </Link>
          <Link
            href={`/dashboard/plants/edit/${slug}`}
            aria-label="ویرایش"
            className="flex items-center justify-center size-8 rounded-[9px] cursor-pointer text-primary bg-greencolorlight"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </Link>
          <button
            onClick={openModal}
            aria-label="حذف"
            className="flex items-center justify-center size-8 rounded-[9px] cursor-pointer text-exit bg-[rgb(244,228,220)]"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            </svg>
          </button>
        </div>
      </div>

      {showDeleteModal && (
        <DeleteModal
          title={title}
          isLoading={isPending}
          isError={isError}
          onConfirm={handleConfirm}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default PlantsItem;
