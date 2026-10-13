"use client";
import { motion } from "framer-motion";

type DeleteModalProps = {
  title: string;
  isLoading?: boolean;
  isError?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const DeleteModal = ({
  title,
  isLoading = false,
  isError = false,
  onConfirm,
  onCancel,
}: DeleteModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={isLoading ? undefined : onCancel}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
        initial={{ scale: 0.95, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-2 text-lg font-bold">حذف گیاه</h2>
        <p className="mb-4 text-sm text-textcolor">
          آیا از حذف «{title}» مطمئن هستید؟ این عملیات برگشت‌ناپذیر است.
        </p>

        {isError && (
          <p className="mb-4 text-sm text-exit">
            حذف انجام نشد، دوباره تلاش کنید.
          </p>
        )}

        <div className="flex gap-2">
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 rounded-xl bg-exit py-2 text-white disabled:opacity-60"
          >
            {isLoading ? "در حال حذف..." : "حذف"}
          </button>
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="flex-1 rounded-xl bg-greencolorlight py-2 text-primary disabled:opacity-60"
          >
            انصراف
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeleteModal;
