"use client"
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { startRouteLoading } from "./RouteLoader";

export default function Sidebaritem({
  href,
  icon,
  title,
  collapsed = false,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  collapsed?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);
  
  return (
    <div
      onClick={() => {
        if (isActive || isNavigating) return;
        setIsNavigating(true);
        startRouteLoading();
        router.push(href);
      }}
      onMouseEnter={() => router.prefetch(href)}
      onFocus={() => router.prefetch(href)}
      className={`relative rounded-xl transition-all duration-300 cursor-pointer group ${
        isActive 
          ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
      } ${isNavigating ? "opacity-70" : ""}`}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" />
      )}
      
      <div className={`flex items-center p-4 ${collapsed ? "justify-center" : "gap-4 pl-6"}`}>
        <div className={`flex-shrink-0 transition-colors duration-200 ${
          isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
        }`}>
          {isNavigating ? (
            <svg className="h-5 w-5 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
              <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : (
            icon
          )}
        </div>
        {!collapsed ? (
          <div className={`font-medium text-sm transition-colors duration-200 ${
            isActive ? 'text-blue-700' : 'text-gray-700 group-hover:text-gray-900'
          }`}>
            {title}
          </div>
        ) : null}
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
