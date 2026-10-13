import database from "./database.json";

import type { Product } from "@/src/components/home/sections/cardapio/ProductCard";
import type { MenuItem } from "@/src/components/delivery/cardapio/types";
import type {
  KanbanOrder,
  OrderStatus as KanbanOrderStatus,
} from "@/src/components/delivery/gestao-de-pedidos/types";
import type { Order } from "@/src/lib/orders";
import type { SummaryMetric, Transaction } from "@/src/components/delivery/financeiro/types";
import type {
  FiscalSummaryMetric,
  FiscalDocument,
} from "@/src/components/delivery/relatorios/types";
import type { Tone } from "@/src/lib/tone";

export type { Product, MenuItem, KanbanOrder, Order, SummaryMetric, Transaction };
export type { FiscalSummaryMetric, FiscalDocument };

export interface ProductFilter {
  value: string;
  label: string;
  icon: string;
}

export interface SidebarCategory {
  label: string;
  count: number;
  active?: boolean;
}

export interface SidebarPreference {
  label: string;
  checked?: boolean;
  tone?: "orange" | "teal";
}

export interface SidebarDeliveryTime {
  label: string;
  checked: boolean;
  icon: "zap" | "clock";
}

export interface SidebarData {
  categories: SidebarCategory[];
  priceRange: {
    label: string;
    min: string;
    max: string;
    chips: { label: string; active?: boolean }[];
  };
  preferences: SidebarPreference[];
  deliveryTimes: SidebarDeliveryTime[];
}

export interface OverviewMetric {
  label: string;
  sublabel?: string;
  value: string;
  badge?: string;
  badgeVariant?: Tone;
  note?: string;
}

export interface OrdersChartData {
  hours: string[];
  values: number[];
  peakIndex: number;
}

export interface ShiftGoal {
  label: string;
  percent: number;
  caption: string;
  target: string;
}

export interface TopItem {
  rank: number;
  name: string;
  qty: string;
  revenue: string;
}

export interface Deliverer {
  initials: string;
  name: string;
  deliveries: string;
  avgTime: string;
  status: string;
  tone: Tone;
}

export interface ShiftData {
  deliveredCount: number;
  goal: ShiftGoal;
  topItems: TopItem[];
  deliverers: Deliverer[];
}

export const PRODUCTS = database.home.products as unknown as Product[];
export const PRODUCT_FILTERS = database.home.filters as ProductFilter[];
export const SIDEBAR_DATA = database.sidebar as SidebarData;
export const MENU_ITEMS = database.menu.items as unknown as MenuItem[];
export const KANBAN_COLUMNS = database.orders.kanbanColumns as {
  status: KanbanOrderStatus;
  color: string;
  dot: string;
  count: number;
}[];
export const KANBAN_ORDERS = database.orders.kanbanOrders as unknown as KanbanOrder[];
export const REALTIME_ORDERS = database.orders.realtimeOrders as unknown as Order[];
export const OVERVIEW_METRICS = database.overview.metrics as OverviewMetric[];
export const ORDERS_CHART = database.overview.chart as OrdersChartData;
export const SHIFT_DATA = database.overview.shift as ShiftData;
export const FINANCE_METRICS = database.finance.metrics as SummaryMetric[];
export const FINANCE_TRANSACTIONS = database.finance.transactions as unknown as Transaction[];
export const FISCAL_METRICS = database.fiscal.metrics as FiscalSummaryMetric[];
export const FISCAL_DOCUMENTS = database.fiscal.documents as unknown as FiscalDocument[];
