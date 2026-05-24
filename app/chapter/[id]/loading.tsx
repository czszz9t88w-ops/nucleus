export default function ChapterLoading() {
  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden page-bg">
      <div className="md:ml-64">
        <div className="hidden md:flex items-center gap-2 px-8 py-3.5 topbar">
          <div className="h-3 w-48 rounded-full bg-white/08 animate-pulse" />
        </div>
        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Mobile header skeleton */}
          <div className="md:hidden flex items-start gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-white/08 animate-pulse flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-2.5 w-32 rounded-full bg-white/08 animate-pulse" />
              <div className="h-5 w-56 rounded-full bg-white/08 animate-pulse" />
            </div>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-8">
            {/* Left card skeleton */}
            <div className="hidden md:block">
              <div className="glass-card rounded-2xl p-6 space-y-3">
                <div className="h-3 w-24 rounded-full bg-white/08 animate-pulse" />
                <div className="h-12 w-12 rounded-xl bg-white/08 animate-pulse" />
                <div className="h-4 w-40 rounded-full bg-white/08 animate-pulse" />
                <div className="h-5 w-full rounded-full bg-white/08 animate-pulse" />
                <div className="flex gap-1.5">
                  {[0,1,2].map(i => <div key={i} className="h-5 w-16 rounded-full bg-white/08 animate-pulse" />)}
                </div>
              </div>
            </div>
            {/* Right content skeleton */}
            <div className="md:col-span-2 space-y-3">
              {[0,1].map(i => (
                <div key={i} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/08 animate-pulse flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-40 rounded-full bg-white/08 animate-pulse" />
                    <div className="h-3 w-56 rounded-full bg-white/08 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
