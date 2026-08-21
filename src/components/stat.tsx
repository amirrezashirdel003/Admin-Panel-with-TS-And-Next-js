type statProps = {
  bgClassname: string;
  textColor: string;
  icon: React.ReactNode;
  number: number;
  desc: string;
};

function Stat({ bgClassname, textColor, icon, number, desc }: statProps) {
  return (
    <div className="bg-bgbox border border-border rounded-[18px] p-5 w-full ">
      <div
        className={`size-10 rounded-xl ${bgClassname} flex items-center justify-center mb-3.5 ${textColor}`}
      >
        {icon}
      </div>
      <div className="text-[28px] font-extrabold ">{number}</div>
      <div className="text-secondary text-[13px] mt-0.5 ">{desc}</div>
    </div>
  );
}

export default Stat;
