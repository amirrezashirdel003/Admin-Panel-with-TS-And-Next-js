import { useRouter } from "next/navigation";
import React from "react";

type BackButtonProps = {
  children: React.ReactNode;
  className: string;
};
const BackButton = ({ children, className = "" }: BackButtonProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={` ${className}  border border-borderaccent rounded-xl cursor-pointer text-textcolor  bg-bgbox hover:bg-backgroundaccent`}
    >
      {children}
    </button>
  );
};

export default BackButton;
