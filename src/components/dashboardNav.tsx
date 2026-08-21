"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  icon: React.ReactNode;
  title: string;
  pathNav: string;
};

function DashboardNav({ icon, title, pathNav }: Props) {
  const pathname = usePathname();
  const isActive =
    pathNav === "/dashboard"
      ? pathname === "/dashboard" || pathname === "/dashboard/"
      : pathname === pathNav || pathname.startsWith(`${pathNav}/`);

  return (
    <Link
      href={pathNav}
      className={`
          flex items-center gap-2.75 px-3.5 py-3 text-[14.5px] font-semibold cursor-pointer w-full rounded-xl ${
            isActive
              ? "bg-primary text-textwhite"
              : "hover:bg-backgroundaccent text-textnav"
          }
          `}
    >
      {icon}
      {title}
    </Link>
  );
}

export default DashboardNav;
