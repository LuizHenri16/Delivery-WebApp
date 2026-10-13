"use client";

import { useState } from "react";
import { KanbanBoard } from "@/src/components/delivery/gestao-de-pedidos/KanbanBoard";
import { OrderDetailPanel } from "@/src/components/delivery/gestao-de-pedidos/OrderDetailPanel";
import { useData } from "@/src/hooks/DataContext";

export default function GestaoDePedidos() {
  const { kanbanOrders, advanceOrderStatus } = useData();
  const [selectedOrderId, setSelectedOrderId] = useState<string>(kanbanOrders[0].id);

  const selectedOrder = kanbanOrders.find((o) => o.id === selectedOrderId) || kanbanOrders[0];

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8 bg-white/90 min-h-screen">
      <h1 className="text-xl font-extrabold text-ink tracking-tight mb-5">
        Fluxo em Tempo Real
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">
        <KanbanBoard
          orders={kanbanOrders}
          selectedOrderId={selectedOrder?.id || null}
          onSelectOrder={(order) => setSelectedOrderId(order.id)}
        />

        <div className="xl:sticky xl:top-6">
          {selectedOrder && (
            <OrderDetailPanel
              order={selectedOrder}
              onAdvanceStatus={advanceOrderStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
}