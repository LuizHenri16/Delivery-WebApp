import { BarChart2, FileText } from "lucide-react";

import { Panel } from "@/src/components/ui/Panel";
import { IconTile } from "@/src/components/ui/IconTile";
import { GoalProgress } from "./GoalProgress";
import { TopItemsList, type TopItem } from "./TopItemsList";
import { DelivererList, type Deliverer } from "./DelivererList";

const GOAL = {
    label: "Meta do Turno",
    percent: 82,
    caption: "R$ 3.840,00",
    target: "Alvo: R$ 4.500,00",
};

const TOP_ITEMS: TopItem[] = [
    { rank: 1, name: "Pizza Calabresa Especial", qty: "24 un", revenue: "R$ 1.029,60" },
    { rank: 2, name: "Hambúrguer Bella Bacon", qty: "16 un", revenue: "R$ 478,40" },
    { rank: 3, name: "Frango com Catupiry", qty: "12 un", revenue: "R$ 562,80" },
];

const DELIVERERS: Deliverer[] = [
    {
        initials: "CE",
        name: "Carlos Eduardo",
        deliveries: "14 entregas",
        avgTime: "22 min méd",
        status: "Retornando da rota",
        tone: "positive",
    },
    {
        initials: "MS",
        name: "Marcos Souza",
        deliveries: "12 entregas",
        avgTime: "26 min méd",
        status: "Em entrega (#1048)",
        tone: "warning",
    },
];

export function CurrentShiftSummary() {
    return (
        <Panel as="aside" shadow="panel" className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <IconTile tone="coral" size="md">
                    <BarChart2 size={20} />
                </IconTile>
                <div>
                    <h3 className="text-[0.9375rem] font-bold text-ink tracking-tight">
                        Resumo do Turno Atual
                    </h3>
                    <p className="text-[0.6875rem] text-ink-faint mt-0.5">
                        Turno Noite · 18h às 23h
                    </p>
                </div>
            </div>

            <hr className="border-surface-muted" />

            <GoalProgress {...GOAL} />

            <hr className="border-surface-muted" />

            <TopItemsList title="Mais Vendidos Hoje" items={TOP_ITEMS} />

            <hr className="border-surface-muted" />

            <DelivererList
                title="Entregadores Ativos"
                summary="4 na rota"
                deliverers={DELIVERERS}
            />

            <button
                type="button"
                className="flex items-center justify-center gap-2 w-full bg-ink text-white text-[0.8125rem] font-semibold py-3 px-4 rounded-[0.875rem] border-none cursor-pointer transition-all hover:bg-ink-hover hover:-translate-y-px mt-1"
            >
                <FileText size={16} />
                Exportar Relatório do Turno
            </button>
        </Panel>
    );
}
