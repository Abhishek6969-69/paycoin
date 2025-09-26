"use client"
import { useRouter, usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <div
      onClick={() => {
        router.push(href);
      }}
      className={`relative rounded-xl transition-all duration-300 cursor-pointer group ${
        isActive 
          ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
      }`}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" />
      )}
      
      <div className="flex items-center gap-4 p-4 pl-6">
        <div className={`flex-shrink-0 transition-colors duration-200 ${
          isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
        }`}>
          {icon}
        </div>
        <div className={`font-medium text-sm transition-colors duration-200 ${
          isActive ? 'text-blue-700' : 'text-gray-700 group-hover:text-gray-900'
        }`}>
          {title}
        </div>
      </div>

      {/* Subtle hover effect */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-50 to-transparent opacity-50' 
          : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-gray-50 group-hover:to-transparent group-hover:opacity-30'
      }`} />
    </div>
  );
}
