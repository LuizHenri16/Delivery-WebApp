import { Truck } from "lucide-react";

interface OverviewBannerProps {
  deliveredCount?: number;
  onViewPerformance?: () => void;
}

export function OverviewBanner({
  deliveredCount = 42,
  onViewPerformance,
}: OverviewBannerProps) {
  return (
    <section className="relative bg-forest rounded-[1.25rem] px-8 py-7 flex items-center justify-between overflow-hidden min-h-[168px]">
      {/* Decorative circle */}
      <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-white/[0.04] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-5">
        <h2 className="text-[1.625rem] font-extrabold leading-tight tracking-tight text-white max-w-[480px]">
          Hoje já foram entregues {deliveredCount} pedidos sem atraso
        </h2>
        <button
          type="button"
          onClick={onViewPerformance}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-[0.8125rem] font-semibold px-4 py-2 rounded-full w-fit cursor-pointer transition-all hover:bg-white/20 hover:-translate-y-px"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-mint shrink-0" />
          Ver Desempenho ao Vivo
        </button>
      </div>

      {/* Decoration */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <span className="text-white/25">
          <Truck size={56} strokeWidth={1.2} />
        </span>
        <span className="bg-accent text-ink-inverse text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
          {deliveredCount} Entregas
        </span>
      </div>
    </section>
  );
}
