import { KanbanCard } from "./KanbanCard";
import type { KanbanOrder, OrderStatus } from "./types";

interface KanbanColumnProps {
  status: OrderStatus;
  orders: KanbanOrder[];
  selectedOrderId: string | null;
  onSelectOrder: (order: KanbanOrder) => void;
  dotClass: string;
  textClass: string;
}

export function KanbanColumn({
  status,
  orders,
  selectedOrderId,
  onSelectOrder,
  dotClass,
  textClass,
}: KanbanColumnProps) {
  return (
    <div className="flex flex-col gap-3 min-w-50">
      {/* Column header */}
      <div className="flex items-center gap-2 px-1">
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotClass}`} />
        <h3 className={`text-[0.8125rem] font-bold ${textClass}`}>{status}</h3>
        <span className="ml-auto text-[0.6875rem] font-bold text-white bg-[#d4c8c7] rounded-full w-5 h-5 flex items-center justify-center">
          {orders.length}
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2.5">
        {orders.length === 0 ? (
          <div className="border-2 border-dashed border-line-strong rounded-2xl h-24 flex items-center justify-center">
            <span className="text-[0.75rem] text-ink-disabled">Sem pedidos</span>
          </div>
        ) : (
          orders.map((order) => (
            <KanbanCard
              key={order.id}
              order={order}
              isSelected={selectedOrderId === order.id}
              onSelect={onSelectOrder}
            />
          ))
        )}
      </div>
    </div>
  );
}
