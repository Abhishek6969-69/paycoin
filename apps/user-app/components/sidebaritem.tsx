"use client"
import { useRouter } from "next/navigation";
export default function Sidebaritem({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(href);
      }}
    >
      <div className=" my-7 flex gap-2 md:gap-10 md:p-4 md:px-6 w-screen md:w-[250px] hover:cursor-pointer">
        <div>{icon}</div>
        <div>{title}</div>
      </div>
    </div>
  );
}
