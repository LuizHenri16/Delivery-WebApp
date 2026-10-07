import { Package, MapPin, ArrowRight } from "lucide-react";
import type { KanbanOrder } from "./types";

interface OrderDetailPanelProps {
  order: KanbanOrder;
}

const NEXT_STATUS_LABEL: Record<string, string> = {
  Novos: "Enviar para o Forno",
  "No Forno": "Marcar como Pronto",
  Embalando: "Despachar Pedido",
  "Em Trânsito": "Confirmar Entrega",
};

export function OrderDetailPanel({ order }: OrderDetailPanelProps) {
  const nextLabel = NEXT_STATUS_LABEL[order.status];

  const newLocal = "text-lg font-extrabold text-[#1e1412] tracking-tight";
  return (
    <aside className="bg-white/90 border border-line/50 rounded-3xl p-5 shadow-[0_4px_20px_rgba(133,115,114,0.08)] flex flex-col gap-5">

      {/* ── Header ── */}
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-coral-soft text-coral flex items-center justify-center shrink-0">
          <Package size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className={newLocal}>
              Pedido {order.number}
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 border border-line rounded-3xl p-4 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex flex-col items-center">
            <span className="w-3 h-3 rounded-full bg-success shrink-0" />
            <span className="w-px flex-1 bg-[#d4c8c7] my-1.5 min-h-5" />
          </div>
          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.06em] text-ink-faint uppercase mb-0.5">
              Origem
            </p>
            <p className="text-[0.8125rem] font-semibold text-ink">{order.origin}</p>
            {order.originSub && (
              <p className="text-[0.6875rem] text-ink-faint">{order.originSub}</p>
            )}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <span className="w-3 h-3 rounded-full bg-accent flex items-center justify-center shrink-0">
              <MapPin size={7} className="text-white" />
            </span>
          </div>
          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.06em] text-ink-faint uppercase mb-0.5">
              Destinatário
            </p>
            <p className="text-[0.8125rem] font-semibold text-ink">{order.customerName}</p>
            <p className="text-[0.6875rem] text-ink-faint">{order.customerAddress}</p>
          </div>
        </div>

        {order.motoboy && (
          <div className="pt-2 border-t border-line flex items-center gap-2">
            <span className="text-[0.6875rem] text-ink-faint">Motoboy:</span>
            <span className="text-[0.6875rem] font-semibold text-ink">{order.motoboy}</span>
            {order.motoboyBag && (
              <span className="text-[0.6875rem] text-ink-faint">· {order.motoboyBag}</span>
            )}
          </div>
        )}
      </div>

      <div>
        <p className="text-[0.6rem] font-bold tracking-[0.06em] text-ink-faint uppercase mb-2.5">
          Itens do Pedido
        </p>
        <ul className="flex flex-col gap-2">
          {order.items.map((item, i) => (
            <li key={i} className="flex items-center justify-between gap-2">
              <span className="text-[0.8125rem] text-ink-strong">
                {item.qty}x {item.name}
              </span>
              <span className="text-[0.8125rem] font-semibold text-ink tabular-nums shrink-0">
                {item.price}
              </span>
            </li>
          ))}

          <li className="flex items-center justify-between gap-2 pt-1 border-t border-surface-muted">
            <span className="text-[0.8125rem] text-ink-faint">
              Taxa de Entrega {order.estimatedTime ? `(${order.estimatedTime})` : ""}
            </span>
            <span className={`text-[0.8125rem] font-semibold tabular-nums shrink-0 ${order.deliveryFee === "Grátis" ? "text-success" : "text-ink"}`}>
              {order.deliveryFee ?? "—"}
            </span>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-[0.6rem] font-bold tracking-[0.06em] text-ink-faint uppercase mb-3">
          Linha do Tempo
        </p>
        <ul className="flex flex-col gap-0 relative">
          {order.timeline.map((step, i) => {
            const isLast = i === order.timeline.length - 1;
            return (
              <li key={i} className="flex items-start gap-3">
                {/* dot + line */}
                <div className="flex flex-col items-center shrink-0">
                  <span
                    className={`w-3 h-3 rounded-full border-2 shrink-0 ${step.status === "done"
                      ? "bg-accent border-accent"
                      : step.status === "active"
                        ? "bg-accent border-accent ring-2 ring-accent/30"
                        : "bg-white border-[#d4c8c7]"
                      }`}
                  />
                  {!isLast && (
                    <span className="w-px h-6 bg-[#d4c8c7] my-0.5" />
                  )}
                </div>

                <div className="flex-1 flex items-start justify-between gap-2 pb-2">
                  <div>
                    <p className={`text-[0.8125rem] font-semibold ${step.status === "pending" ? "text-ink-faint" : "text-ink"}`}>
                      {step.label}
                    </p>
                    {step.status === "done" && i === 0 && (
                      <p className="text-[0.6875rem] text-ink-faint">Impresso na bancada de montagem</p>
                    )}
                  </div>
                  <span className={`text-[0.6875rem] shrink-0 tabular-nums ${step.status === "done" ? "text-ink-faint" : step.status === "active" ? "text-accent font-semibold" : "text-ink-disabled"}`}>
                    {step.time}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-line">
        <span className="text-[0.75rem] font-bold tracking-[0.04em] text-ink-muted uppercase">
          Valor Total:
        </span>
        <span className="text-2xl font-extrabold text-ink tabular-nums tracking-tight">
          {order.total}
        </span>
      </div>

      <button type="button" className="flex items-center justify-center gap-2 w-full bg-ink text-white text-[0.875rem] font-bold py-3.5 px-4 rounded-[0.875rem] border-none cursor-pointer transition-all hover:bg-ink-hover hover:-translate-y-px active:translate-y-0">
        {nextLabel}
        <ArrowRight size={16} />
      </button>

    </aside>
  );
}
