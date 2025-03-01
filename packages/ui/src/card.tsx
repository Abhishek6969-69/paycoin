

export function Card({
  title,
  children,
  className
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={` p-4 rounded bg-gradient-to-br from-[#20263D] via-[#2A3152] to-[#383F6B]
 text-white


 mx-4 ${className}`}
    >
      <h1 className="text-xl border-b   pb-2">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}



// border p-4  rounded  bg-[#D1B1CB] mx-4