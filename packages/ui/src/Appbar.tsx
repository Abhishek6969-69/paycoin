"use client";
import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  walletBalance?: number | null;
  walletLoading?: boolean;
  isSidebarCollapsed?: boolean;
  onSidebarToggle?: () => void;
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({
  user,
  walletBalance,
  walletLoading,
  isSidebarCollapsed,
  onSidebarToggle,
  onSignin,
  onSignout
}: AppbarProps) => {
  // Appbar is a presentational client component. The authenticated
  // session should be provided by a parent via the `user` prop.

  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3 sm:px-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="text-[34px] font-extrabold leading-none tracking-tight text-slate-900">CoinPay</div>
            <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Digital Banking
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onSidebarToggle}
          className="ml-2 hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 md:flex"
          aria-label="Toggle sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`h-4 w-4 transition-transform duration-200 ${isSidebarCollapsed ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {user && (
          <>
            <button
              type="button"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 md:flex"
              aria-label="Notifications"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.858 17.082a23.848 23.848 0 0 1-5.716 0M18 8.25a6 6 0 1 0-12 0v3.75c0 .95-.38 1.86-1.054 2.53l-.946.947h15.998l-.946-.946A3.58 3.58 0 0 1 18 12V8.25Z"
                />
              </svg>
            </button>

            <div className="hidden items-center gap-1.5 text-sm text-slate-600 lg:flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5v9H3.75zM16.5 12h3.75" />
              </svg>
              <span>Wallet Balance:</span>
              <span className="font-semibold text-emerald-600">
                {walletLoading
                  ? "Loading..."
                  : `₹${(walletBalance ?? 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              </span>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <div className="text-right">
                <p className="max-w-[160px] truncate text-lg font-semibold leading-none text-slate-900">
                  {user.name || "User"}
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-200 bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5 text-blue-600">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                  />
                </svg>
              </div>
            </div>
          </>
        )}

        <div className="h-8 w-px bg-slate-200" />
        <Button
          variant={user ? "outline" : "primary"}
          size="sm"
          onClick={user ? onSignout : onSignin}
          className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
            user
              ? "border-rose-200 text-rose-500 hover:border-rose-300 hover:bg-rose-50"
              : "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {user ? (
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M18 12H9m0 0 3-3m-3 3 3 3" />
              </svg>
              Logout
            </span>
          ) : (
            "Sign In"
          )}
        </Button>
      </div>
    </div>
  );
};

function Logo() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-white">
        <path d="M6.3 4.5h3.4L6.9 19.5H3.5L6.3 4.5ZM11.1 4.5h3.4l-2.8 15h-3.4l2.8-15ZM15.9 4.5h3.4l-2.8 15h-3.4l2.8-15Z" />
      </svg>
    </div>
  );
}
