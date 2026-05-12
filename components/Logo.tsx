type LogoProps = { compact?: boolean; className?: string };

export function Logo({ compact, className = "" }: LogoProps) {
  return (
    <div className={"flex items-center gap-2 " + className}>
      <div className="relative">
        <span className="block text-2xl font-extrabold tracking-tight text-royal-500">
          BLEUM
        </span>
        <span className="absolute -right-3 -top-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ball-300 text-[8px] font-bold text-white shadow-sm">
          ●
        </span>
      </div>
      {!compact && (
        <span className="hidden text-[10px] font-semibold uppercase tracking-[.18em] text-royal-500/80 sm:block">
          Our Court, Our Blue
        </span>
      )}
    </div>
  );
}
