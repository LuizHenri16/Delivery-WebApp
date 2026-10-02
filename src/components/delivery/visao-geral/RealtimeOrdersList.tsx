import { Filter } from "lucide-react";
import { RealtimeOrderCard } from "./RealtimeOrderCard";
import type { Order } from "@/src/lib/orders";

const ORDERS: Order[] = [
  {
    id: "Pedido #1048",
    customerName: "Carlos Pereira",
    items: "1x Pizza Calabresa, 1x Guaraná 2L",
    time: "20:42",
    type: "Delivery",
    status: "Em entrega",
    value: "R$ 89,80",
  },
  {
    id: "Pedido #1047",
    customerName: "Juliana Mendes",
    items: "1x Pizza Marguerita Família",
    time: "20:38",
    type: "Salão",
    status: "Preparando",
    value: "R$ 62,90",
    note: "Mesa 04 (Salão)",
  },
  {
    id: "Pedido #1046",
    customerName: "Roberto Lima",
    items: "2x Smash Burger Especial",
    time: "20:45",
    type: "Delivery",
    status: "Novo",
    value: "R$ 45,00",
    note: "Novo",
  },
  {
    id: "Pedido #1045",
    customerName: "Fernanda Souza",
    items: "1x Pizza Quatro Queijos",
    time: "20:20",
    type: "Balcão / Retirada",
    status: "Concluído",
    value: "R$ 72,00",
    note: "Balcão / Retirada",
  },
];

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
        {ORDERS.map((order) => (
          <RealtimeOrderCard key={order.id} {...order} />
        ))}
      </div>
    </section>
  );
}
