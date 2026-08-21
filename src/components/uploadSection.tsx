"use client";

import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function UploadSection({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (selectedFile: File | File[]) => {
    setFile(Array.isArray(selectedFile) ? selectedFile[0] : selectedFile);
  };

  return (
    <div>
      <label className={className}>{title}</label>

      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        multiple={false}
        classes="absolute"
      >
        <label className="flex flex-col items-center justify-center gap-2.5 h-50 border-2 border-dashed border-border rounded-[14px] bg-[rgb(244,239,225)] text-[rgb(138,128,95)] cursor-pointer text-center p-4 hover:border-primary hover:bg-greencolorlight">
          <svg
            data-dc-tpl="307"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              data-dc-tpl="308"
              d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            ></path>
            <path data-dc-tpl="309" d="M17 8l-5-5-5 5"></path>
            <path data-dc-tpl="310" d="M12 3v13"></path>
          </svg>
          <div className="text-[13.5px] font-semibold text-textcolor">
            برای آپلود کلیک کنید
          </div>
          <div className="text-[12px]">یا فایل تصویر را اینجا رها کنید</div>
          {file && (
            <div className="text-[12px] text-primary font-semibold">
              فایل انتخاب‌شده: {file.name}
            </div>
          )}
        </label>
      </FileUploader>
    </div>
  );
}

export default UploadSection;
