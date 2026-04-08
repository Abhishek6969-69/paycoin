"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_EVENT = "coinpay:navigation-start";

export function startRouteLoading() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(NAV_EVENT));
  }
}

export default function RouteLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, setPending] = useState(false);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const handleStart = () => {
      startTimeRef.current = Date.now();
      setPending(true);
    };

    const handleDocClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target === "_blank") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (href.startsWith("http") && !href.includes(window.location.host)) return;

      handleStart();
    };

    const handleFormSubmit = () => handleStart();

    window.addEventListener(NAV_EVENT, handleStart);
    document.addEventListener("click", handleDocClick, true);
    document.addEventListener("submit", handleFormSubmit, true);

    return () => {
      window.removeEventListener(NAV_EVENT, handleStart);
      document.removeEventListener("click", handleDocClick, true);
      document.removeEventListener("submit", handleFormSubmit, true);
    };
  }, []);

  useEffect(() => {
    if (!pending) return;

    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, 220 - elapsed);

    const timer = window.setTimeout(() => {
      setPending(false);
    }, remaining);

    return () => window.clearTimeout(timer);
  }, [pathname, searchParams, pending]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed left-0 right-0 top-0 z-[100] h-1 transition-opacity duration-200 ${
        pending ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="route-loader-bar h-full w-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.45)]" />
    </div>
  );
}
