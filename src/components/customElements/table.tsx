type TableProps = {
  gridCols: string;
  columns: React.ReactNode[];
  children: React.ReactNode;
};

const Table = ({ gridCols, columns, children }: TableProps) => {
  return (
    <div className="bg-bgbox border border-border rounded-[18px]">
      <div
        className={`grid ${gridCols} gap-3 py-3.5 px-5 text-[12.5px] font-bold border-b text-secondary border-[rgb(238,227,206)] bg-hoverrow/67 rounded-t-[18px]`}
      >
        {columns.map((col, index) => (
          <div
            key={index}
            className={index === columns.length - 1 ? "text-center" : ""}
          >
            {col}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Table;
