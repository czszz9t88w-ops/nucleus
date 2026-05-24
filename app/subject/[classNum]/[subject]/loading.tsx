export default function SubjectLoading() {
  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden page-bg">
      <div className="md:ml-64">
        <div className="hidden md:flex items-center gap-2 px-8 py-3.5 topbar">
          <div className="h-3 w-48 rounded-full bg-white/08 animate-pulse" />
        </div>
        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Progress card skeleton */}
          <div className="glass-card rounded-2xl p-4 mb-5 space-y-2">
            <div className="flex justify-between">
              <div className="h-3 w-28 rounded-full bg-white/08 animate-pulse" />
              <div className="h-3 w-8 rounded-full bg-white/08 animate-pulse" />
            </div>
            <div className="h-1.5 rounded-full bg-white/08 animate-pulse" />
          </div>
          {/* Chapter count row skeleton */}
          <div className="flex items-center justify-between mb-3">
            <div className="h-3 w-20 rounded-full bg-white/08 animate-pulse" />
            <div className="flex gap-2">
              <div className="h-5 w-20 rounded-full bg-white/08 animate-pulse" />
              <div className="h-5 w-20 rounded-full bg-white/08 animate-pulse" />
            </div>
          </div>
          {/* Chapter grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="glass-card rounded-xl flex items-center gap-3.5 px-4 py-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/08 animate-pulse flex-shrink-0" />
                <div className="w-6 h-6 rounded-full bg-white/08 animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3.5 w-36 rounded-full bg-white/08 animate-pulse" />
                  <div className="h-2.5 w-16 rounded-full bg-white/08 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
