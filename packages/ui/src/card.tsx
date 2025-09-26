

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
    <div className={`rounded-lg bg-white text-gray-900 ${className}`}>
      <div className="px-6 py-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900">
          {title}
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
}



// border p-4  rounded  bg-[#D1B1CB] mx-4