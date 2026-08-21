"use client";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

type DeleteModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
};

const DeleteModal = ({ onConfirm, onCancel, title }: DeleteModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center p-6 z-60 bg-[rgba(50,45,30,0.42)] backdrop-blur-[3px] "
      onClick={onCancel}
      role="dialog"
      aria-modal="true"
      aria-label="حذف مورد"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-bgbox rounded-[20px]  p-7 text-center modalShadow max-w-100 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center m-auto mb-4 size-14 rounded-2xl bg-[rgb(244,228,220)] text-exit">
          <svg
            data-dc-tpl="496"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              data-dc-tpl="497"
              d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
            ></path>
          </svg>
        </div>
        <div className="text-[17px] font-extrabold mb-2">حذف مورد</div>
        <div className="text-[14px] text-secondary leading-[1.9] mb-5.5">
          آیا از حذف «{title}» مطمئن هستید؟ این عمل قابل بازگشت نیست.
        </div>
        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="p-2.75 rounded-[11px] bg-exit text-[14px] font-bold cursor-pointer text-white flex-1 hover:bg-[rgb(169,74,46)]"
          >
            بله، حذف کن
          </button>
          <button
            onClick={onCancel}
            className="p-2.75 border border-[rgb(221,211,187)] rounded-[11px] text-textcolor text-[14px] font-semibold cursor-pointer flex-1"
          >
            انصراف
          </button>
        </div>
      </motion.div>
    </motion.div>,
    modalRoot,
  );
};

export default DeleteModal;
