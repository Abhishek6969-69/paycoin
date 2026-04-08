export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-slate-50 px-3 py-5 sm:px-4 lg:px-5">
      <div className="mx-auto w-full max-w-[1320px] space-y-6">
        <div className="h-28 animate-pulse rounded-[28px] border border-slate-200 bg-white" />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="h-[520px] animate-pulse rounded-[28px] border border-slate-200 bg-white" />
          <div className="space-y-4">
            <div className="h-48 animate-pulse rounded-3xl border border-slate-200 bg-white" />
            <div className="h-32 animate-pulse rounded-3xl border border-slate-200 bg-blue-50/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
