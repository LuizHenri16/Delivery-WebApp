import { Filter } from "lucide-react";
import { RealtimeOrderCard } from "./RealtimeOrderCard";
import { REALTIME_ORDERS } from "@/src/data";

export function RealtimeOrdersList() {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="text-base font-bold text-ink tracking-tight">
          Pedidos em Tempo Real
        </h3>
        <button
          type="button"
          className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-ink-soft bg-transparent border-none cursor-pointer px-2 py-1 rounded-lg hover:bg-surface-muted transition-colors"
        >
          <Filter size={14} />
          Filtrar: Todos os status
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2.5">
        {REALTIME_ORDERS.map((order) => (
          <RealtimeOrderCard key={order.id} {...order} />
        ))}
      </div>
    </section>
  );
}
