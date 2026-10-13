import { KanbanColumn } from "./KanbanColumn";
import { KANBAN_COLUMNS } from "@/src/data";
import type { KanbanOrder } from "./types";

interface KanbanBoardProps {
  orders: KanbanOrder[];
  selectedOrderId: string | null;
  onSelectOrder: (order: KanbanOrder) => void;
}

export function KanbanBoard({ orders, selectedOrderId, onSelectOrder }: KanbanBoardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Board hint */}
      <p className="text-[0.75rem] text-ink-faint text-center">
        Arraste para alterar o estado ou use os botões rápidos
      </p>

      {/* Columns grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {KANBAN_COLUMNS.map((col) => (
          <KanbanColumn
            key={col.status}
            status={col.status}
            orders={orders.filter((o) => o.status === col.status)}
            selectedOrderId={selectedOrderId}
            onSelectOrder={onSelectOrder}
            dotClass={col.dot}
            textClass={col.color}
          />
        ))}
      </div>
    </div>
  );
}

