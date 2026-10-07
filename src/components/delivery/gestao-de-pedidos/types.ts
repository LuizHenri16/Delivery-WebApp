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

export const MOCK_ORDERS: KanbanOrder[] = [
  {
    id: "1048",
    number: "#1048",
    customerName: "João Silva",
    customerAddress: "Delivery · R. das Flores",
    type: "Delivery",
    items: [
      { qty: 2, name: "Pizza Calabresa Especial (G)", price: "R$79,80" },
      { qty: 1, name: "Refrigerante Coca-Cola 2L",   price: "R$10,00" },
    ],
    total: "R$ 89,80",
    status: "Novos",
    timeAgo: "Há 2 min",
    isPriority: true,
    cod: "BM-2391-2329",
    origin: "Bella Massa – Forno Central",
    originSub: "Estação de Pizzas · Forno Lastro 01",
    deliveryFee: "Grátis",
    timeline: [
      { label: "Pedido Confirmado",  time: "19:42", status: "done"    },
      { label: "No Forno / Cocção",  time: "Aguardando", status: "active"  },
      { label: "Em Rota de Entrega", time: "Pendente",   status: "pending" },
    ],
  },
  {
    id: "1049",
    number: "#1049",
    customerName: "Luiza Miranda",
    customerAddress: "Retirada Balcão",
    type: "Retirada Balcão",
    items: [
      { qty: 1, name: "Pizza Marguerita", price: "R$42,90" },
    ],
    total: "R$ 42,90",
    status: "Novos",
    timeAgo: "Há 1 min",
    cod: "BM-2391-2330",
    origin: "Bella Massa – Forno Central",
    originSub: "Estação de Pizzas · Forno Lastro 02",
    deliveryFee: "—",
    timeline: [
      { label: "Pedido Confirmado",  time: "19:43", status: "done"    },
      { label: "No Forno / Cocção",  time: "Aguardando", status: "pending" },
      { label: "Retirada Balcão",    time: "Pendente",   status: "pending" },
    ],
  },
  {
    id: "1047",
    number: "#1047",
    customerName: "Maria Santos",
    customerAddress: "Salão · Mesa 04",
    type: "Salão",
    tableInfo: "Mesa 04",
    items: [
      { qty: 1, name: "Bella Bacon Burger",  price: "R$52,90" },
      { qty: 1, name: "Batata Rústica",      price: "R$10,00" },
    ],
    total: "R$ 62,90",
    status: "No Forno",
    timeAgo: "8 min",
    cod: "BM-2391-2327",
    origin: "Bella Massa – Cozinha Quente",
    originSub: "Estação Grill · Chapa 02",
    deliveryFee: "—",
    timeline: [
      { label: "Pedido Confirmado",  time: "19:35", status: "done"   },
      { label: "No Forno / Cocção",  time: "19:36", status: "active" },
      { label: "Entrega na Mesa",    time: "Pendente", status: "pending" },
    ],
  },
  {
    id: "1045",
    number: "#1045",
    customerName: "Fernando Dias",
    customerAddress: "Delivery",
    type: "Delivery",
    items: [
      { qty: 1, name: "Frango c/ Catupiry",  price: "R$58,00" },
      { qty: 1, name: "Quatro Queijos",      price: "R$38,00" },
    ],
    total: "R$ 96,00",
    status: "No Forno",
    timeAgo: "3 min",
    cod: "BM-2391-2325",
    origin: "Bella Massa – Forno Central",
    originSub: "Estação de Pizzas · Forno Lastro 01",
    deliveryFee: "R$5,00",
    timeline: [
      { label: "Pedido Confirmado",  time: "19:40", status: "done"   },
      { label: "No Forno / Cocção",  time: "19:42", status: "active" },
      { label: "Em Rota de Entrega", time: "Pendente", status: "pending" },
    ],
  },
  {
    id: "1044",
    number: "#1044",
    customerName: "Rafael Costa",
    customerAddress: "Balcão Pass",
    type: "Retirada Balcão",
    items: [
      { qty: 1, name: "Pizza Portugues",    price: "R$48,00" },
      { qty: 1, name: "Suco Laranja 500ml", price: "R$6,00"  },
    ],
    total: "R$ 54,00",
    status: "Embalando",
    timeAgo: "Aguardando",
    cod: "BM-2391-2324",
    origin: "Bella Massa – Forno Central",
    originSub: "Estação de Pizzas · Forno Lastro 03",
    deliveryFee: "—",
    timeline: [
      { label: "Pedido Confirmado",  time: "19:30", status: "done"   },
      { label: "No Forno / Cocção",  time: "19:32", status: "done"   },
      { label: "Embalando",          time: "19:42", status: "active" },
    ],
  },
  {
    id: "1046",
    number: "#1046",
    customerName: "Pedro Lima",
    customerAddress: "Av. Brasil, 890",
    type: "Delivery",
    items: [
      { qty: 1, name: "Pizza Quatro Queijos", price: "R$45,00" },
    ],
    total: "R$ 45,00",
    status: "Em Trânsito",
    timeAgo: "Previsão: 15 min",
    cod: "BM-2391-2326",
    origin: "Bella Massa – Forno Central",
    originSub: "Estação de Pizzas · Forno Lastro 01",
    motoboy: "Carlos Eduardo",
    motoboyBag: "Bag Térmica #04",
    deliveryFee: "Grátis",
    estimatedTime: "15 min",
    timeline: [
      { label: "Pedido Confirmado",  time: "19:28", status: "done"   },
      { label: "No Forno / Cocção",  time: "19:30", status: "done"   },
      { label: "Em Rota de Entrega", time: "19:42", status: "active" },
    ],
  },
];

export const COLUMNS: { status: OrderStatus; color: string; dot: string; count: number }[] = [
  { status: "Novos",       color: "text-[#1a7a47]", dot: "bg-[#008167]", count: 2 },
  { status: "No Forno",    color: "text-[#b57c00]", dot: "bg-[#e8a038]", count: 3 },
  { status: "Embalando",   color: "text-[#3d6fc9]", dot: "bg-[#3d6fc9]", count: 1 },
  { status: "Em Trânsito", color: "text-[#7b42c9]", dot: "bg-[#7b42c9]", count: 2 },
];
