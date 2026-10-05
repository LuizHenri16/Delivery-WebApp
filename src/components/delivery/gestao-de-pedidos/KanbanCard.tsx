import type { KanbanOrder, OrderStatus } from "./types";

interface KanbanCardProps {
  order: KanbanOrder;
  isSelected: boolean;
  onSelect: (order: KanbanOrder) => void;
}

const ACTION_CONFIG: Record<
  OrderStatus,
  { label: string; style: string } | null
> = {
  Novos: {
    label: "Enviar p/ Forno →",
    style: "bg-yellow-500 text-white hover:bg-yellow-600",
  },
  "No Forno": {
    label: "Pronto ✓",
    style: "bg-green-600 text-white hover:bg-green-700",
  },
  Embalando: {
    label: "Despachar 🛵",
    style: "bg-black text-white hover:bg-black/90",
  },
  "Em Trânsito": null,
};

const TIME_COLOR: Record<OrderStatus, string> = {
  Novos: "text-[#1a7a47]",
  "No Forno": "text-[#b57c00]",
  Embalando: "text-[#3d6fc9]",
  "Em Trânsito": "text-[#7b42c9]",
};

export function KanbanCard({ order, isSelected, onSelect }: KanbanCardProps) {
  const action = ACTION_CONFIG[order.status];
  const timeColor = TIME_COLOR[order.status];

  return (
    <article
      onClick={() => onSelect(order)}
      className={`
        bg-white/90 rounded-3xl p-3.5 cursor-pointer transition-all
        border-2
        ${isSelected
          ? "border-amber-400"
          : "border-line/50 hover:shadow-sm"
        }
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[0.8125rem] font-bold text-ink">
          {order.number}
        </span>
        <span className={`text-[0.6875rem] font-semibold ${timeColor}`}>
          {order.timeAgo}
        </span>
      </div>

      <p className="text-[0.8125rem] font-semibold text-ink leading-tight truncate">
        {order.customerName}
      </p>
      <p className="text-[0.6875rem] text-ink-faint mb-2.5 truncate">
        {order.customerAddress}
      </p>

      <ul className="flex flex-col gap-2 mb-3 bg-zinc-100 px-3 font-medium py-2 rounded-xl ">
        {order.items.map((item, i) => (
          <li key={i} className="text-xs text-ink-muted truncate">
            {item.qty}x {item.name}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-extrabold text-ink tabular-nums">
          {order.total}
        </span>
        {action && (
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className={`text-[0.6875rem] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${action.style}`}
          >
            {action.label}
          </button>
        )}
        {order.status === "Em Trânsito" && (
          <span className="text-[0.6875rem] font-semibold text-success flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
            A caminho
          </span>
        )}
      </div>
    </article>
  );
}
