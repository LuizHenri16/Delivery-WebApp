"use client";

import { useState } from "react";
import { KanbanBoard } from "@/src/components/delivery/gestao-de-pedidos/KanbanBoard";
import { OrderDetailPanel } from "@/src/components/delivery/gestao-de-pedidos/OrderDetailPanel";
import { MOCK_ORDERS } from "@/src/components/delivery/gestao-de-pedidos/types";
import type { KanbanOrder } from "@/src/components/delivery/gestao-de-pedidos/types";

export default function GestaoDePedidos() {
  const [selectedOrder, setSelectedOrder] = useState<KanbanOrder>(MOCK_ORDERS[0]);

  return (
    <div className="px-10 py-6 bg-white/90 min-h-screen">

      <h1 className="text-xl font-extrabold text-ink tracking-tight mb-5">
        Fluxo em Tempo Real
      </h1>

      <div className="grid grid-cols-[1fr_340px] gap-6 items-start">
        <KanbanBoard selectedOrderId={selectedOrder.id} onSelectOrder={setSelectedOrder} />

        <div className="sticky top-6">
          <OrderDetailPanel order={selectedOrder} />
        </div>

      </div>
    </div>
  );
}