export type OrderStatus = "Novos" | "No Forno" | "Embalando" | "Em Trânsito";
export type OrderType = "Delivery" | "Salão" | "Retirada Balcão";

export interface OrderItem {
  qty: number;
  name: string;
  price: string;
}

export interface TimelineStep {
  label: string;
  time?: string;
  status: "done" | "active" | "pending";
}

export interface KanbanOrder {
  id: string;
  number: string;
  customerName: string;
  customerAddress: string;
  type: OrderType;
  tableInfo?: string;
  items: OrderItem[];
  total: string;
  status: OrderStatus;
  timeAgo: string; // "Há 2 min", "8 min", etc.
  isPriority?: boolean;
  // Detail panel extras
  cod?: string;
  origin?: string;
  originSub?: string;
  motoboy?: string;
  motoboyBag?: string;
  deliveryFee?: string;
  estimatedTime?: string;
  timeline: TimelineStep[];
}
