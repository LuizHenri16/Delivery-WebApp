import { KanbanColumn } from "./KanbanColumn";
import { COLUMNS, MOCK_ORDERS } from "./types";
import type { KanbanOrder } from "./types";

interface KanbanBoardProps {
  selectedOrderId: string | null;
  onSelectOrder: (order: KanbanOrder) => void;
}

export function KanbanBoard({ selectedOrderId, onSelectOrder }: KanbanBoardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Board hint */}
      <p className="text-[0.75rem] text-ink-faint text-center">
        Arraste para alterar o estado ou use os botões rápidos
      </p>

      {/* Columns grid */}
      <div className="grid grid-cols-4 gap-4">
        {COLUMNS.map((col) => (
          <KanbanColumn
            key={col.status}
            status={col.status}
            orders={MOCK_ORDERS.filter((o) => o.status === col.status)}
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
