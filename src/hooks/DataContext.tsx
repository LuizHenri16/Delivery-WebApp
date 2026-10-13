"use client";

import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from "react";

import {
    FISCAL_DOCUMENTS,
    FISCAL_METRICS,
    FINANCE_METRICS as SEED_FINANCE_METRICS,
    FINANCE_TRANSACTIONS,
    KANBAN_COLUMNS,
    KANBAN_ORDERS as SEED_KANBAN_ORDERS,
    MENU_ITEMS as SEED_MENU_ITEMS,
    ORDERS_CHART,
    OVERVIEW_METRICS,
    PRODUCTS,
    PRODUCT_FILTERS,
    REALTIME_ORDERS,
    SHIFT_DATA,
    SIDEBAR_DATA,
    type FiscalDocument,
    type FiscalSummaryMetric,
    type KanbanOrder,
    type MenuItem,
    type Order,
    type OrdersChartData,
    type OverviewMetric,
    type Product,
    type ProductFilter,
    type ShiftData,
    type SidebarData,
    type SummaryMetric,
    type Transaction,
} from "@/src/data";

const STATUS_FLOW: Record<string, KanbanOrder["status"] | null> = {
    Novos: "No Forno",
    "No Forno": "Embalando",
    Embalando: "Em Trânsito",
    "Em Trânsito": null,
};

interface DataContextValue {
    /** Catálogo público (home / cardápio completo) */
    products: Product[];
    filters: ProductFilter[];
    sidebar: SidebarData;

    /** Cardápio interno do lojista (mutável) */
    menuItems: MenuItem[];
    updateMenuItem: (item: MenuItem) => void;

    /** Gestão de pedidos (mutável) */
    kanbanOrders: KanbanOrder[];
    kanbanColumns: typeof KANBAN_COLUMNS;
    advanceOrderStatus: (orderId: string) => void;

    /** Visão geral */
    realtimeOrders: Order[];
    overviewMetrics: OverviewMetric[];
    ordersChart: OrdersChartData;
    shift: ShiftData;

    /** Financeiro */
    financeMetrics: SummaryMetric[];
    transactions: Transaction[];

    /** Fiscal */
    fiscalMetrics: FiscalSummaryMetric[];
    fiscalDocuments: FiscalDocument[];
}

const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(SEED_MENU_ITEMS);
    const [kanbanOrders, setKanbanOrders] = useState<KanbanOrder[]>(SEED_KANBAN_ORDERS);

    const updateMenuItem = useCallback((updatedItem: MenuItem) => {
        setMenuItems((prev) =>
            prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
    }, []);

    const advanceOrderStatus = useCallback((orderId: string) => {
        setKanbanOrders((prev) =>
            prev.map((order) => {
                if (order.id !== orderId) return order;
                const nextStatus = STATUS_FLOW[order.status];
                if (!nextStatus) return order;
                return {
                    ...order,
                    status: nextStatus,
                    timeline: [
                        ...order.timeline,
                        {
                            time: new Date().toLocaleTimeString("pt-BR", {
                                hour: "2-digit",
                                minute: "2-digit",
                            }),
                            label: `Movido para ${nextStatus}`,
                            status: "done" as const,
                        },
                    ],
                };
            })
        );
    }, []);

    return (
        <DataContext.Provider
            value={{
                products: PRODUCTS,
                filters: PRODUCT_FILTERS,
                sidebar: SIDEBAR_DATA,

                menuItems,
                updateMenuItem,

                kanbanOrders,
                kanbanColumns: KANBAN_COLUMNS,
                advanceOrderStatus,

                realtimeOrders: REALTIME_ORDERS,
                overviewMetrics: OVERVIEW_METRICS,
                ordersChart: ORDERS_CHART,
                shift: SHIFT_DATA,

                financeMetrics: SEED_FINANCE_METRICS,
                transactions: FINANCE_TRANSACTIONS,

                fiscalMetrics: FISCAL_METRICS,
                fiscalDocuments: FISCAL_DOCUMENTS,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export function useData(): DataContextValue {
    const ctx = useContext(DataContext);
    if (!ctx) throw new Error("useData must be used within <DataProvider>");
    return ctx;
}
