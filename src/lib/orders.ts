import type { Tone } from "@/src/lib/tone";

export type OrderStatus = "Em entrega" | "Preparando" | "Novo" | "Concluído";

export type OrderType = "Delivery" | "Salão" | "Balcão / Retirada";

export const ORDER_STATUSES: OrderStatus[] = [
    "Em entrega",
    "Preparando",
    "Novo",
    "Concluído",
];

export const ORDER_STATUS_TONE: Record<OrderStatus, Tone> = {
    "Em entrega": "positive",
    Preparando: "warning",
    Novo: "info",
    Concluído: "positive",
};

export const ORDER_STATUS_ICON_TONE: Record<OrderStatus, Tone> = {
    "Em entrega": "coral",
    Preparando: "accent",
    Novo: "info",
    Concluído: "positive",
};

export interface Order {
    id: string;
    customerName: string;
    items: string;
    time: string;
    type: OrderType;
    status: OrderStatus;
    value: string;
    note?: string;
}
