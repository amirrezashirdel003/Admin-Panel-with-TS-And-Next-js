"use client";
import { getUserName, removeToken } from "@/lib/auth";
import ContentsIcon from "../../public/icons/contentsIcon";
import DashboardIcon from "../../public/icons/dashbordicon";
import PlantsIcon from "../../public/icons/plantsIcon";
import DashboardNav from "./dashboardNav";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const navData = [
    {
      icon: <DashboardIcon />,
      title: "داشبورد",
      pathNav: "/dashboard",
    },
    {
      icon: <PlantsIcon />,
      title: "گیاهان",
      pathNav: "/dashboard/plants",
    },
    {
      icon: <ContentsIcon />,
      title: "مطالب",
      pathNav: "/dashboard/contents",
    },
  ];
  const router = useRouter();

  const handlelogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    removeToken();
    router.push("/login");
  };

  return (
    <div>
      <div className="bg-bgbox w-64 border-l border-border py-5.5 px-4 flex flex-col h-svh sticky top-0 ">
        <div className=" pt-1.5 px-2 pb-5 flex gap-2.75  ">
          <div className="bg-primary size-10.5 rounded-[13px] flex items-center justify-center">
            <svg
              data-dc-tpl="33"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f3efe2"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                data-dc-tpl="34"
                d="M11 20A7 7 0 0 1 4 13c5 0 7 3 7 7Z"
              ></path>
              <path
                data-dc-tpl="35"
                d="M11 20c0-6 3-10 9-10 0 6-3 10-9 10Z"
              ></path>
              <path data-dc-tpl="36" d="M11 20v-8"></path>
            </svg>
          </div>
          <div className="">
            <div className="font-extrabold text-[16px] ">ساکولنت</div>
            <div className="text-accent text-[11px] pt-0.5 ">پنل مدیریت</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1 mt-1.5">
          {navData.map((item, index) => (
            <DashboardNav
              key={index}
              icon={item.icon}
              title={item.title}
              pathNav={item.pathNav}
            />
          ))}
        </nav>

        <div className="mt-auto border-t border-border pt-4 ">
          <div className="flex items-center gap-2.5 p-2  ">
            <div className="size-9 rounded-full bg-[rgb(228,220,198)] flex items-center justify-center ">
              م
            </div>
            <div className="flex-1 ">
              <div className="font-semibold text-[13px] ">مدیر گلخانه</div>
              <div className="text-[11px] text-accent  ">
                {/* <div className="pt-0.5">{getUserName()}</div> */}
              </div>
            </div>
          </div>
          <button
            onClick={handlelogout}
            type="button"
            className="flex items-center w-full rounded-[11px] mt-1.5 gap-2.25 py-2.5 px-3 text-exit cursor-pointer font-semibold text-[13.5px] hover:bg-[rgb(244,228,220)] "
          >
            <svg
              data-dc-tpl="64"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                data-dc-tpl="65"
                d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
              ></path>
              <path data-dc-tpl="66" d="M16 17l5-5-5-5"></path>
              <path data-dc-tpl="67" d="M21 12H9"></path>
            </svg>
            خروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
