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
      <div className=" flex gap-10 p-4 px-6 w-[250px] hover:cursor-pointer">
        <div>{icon}</div>
        <div>{title}</div>
      </div>
    </div>
  );
}
