export default function ClassLoading() {
  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden page-bg">
      <div className="md:ml-64">
        <div className="hidden md:flex items-center gap-2 px-8 py-3.5 topbar">
          <div className="h-3 w-32 rounded-full bg-white/08 animate-pulse" />
        </div>
        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Header skeleton */}
          <div className="mb-6 space-y-2">
            <div className="h-3 w-20 rounded-full bg-white/08 animate-pulse" />
            <div className="h-6 w-36 rounded-full bg-white/08 animate-pulse" />
            <div className="h-3 w-48 rounded-full bg-white/08 animate-pulse" />
          </div>
          {/* Subject cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1].map(i => (
              <div key={i} className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/08 animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 w-28 rounded-full bg-white/08 animate-pulse" />
                    <div className="h-3 w-20 rounded-full bg-white/08 animate-pulse" />
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-white/08 animate-pulse" />
                <div className="h-10 rounded-xl bg-white/08 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
