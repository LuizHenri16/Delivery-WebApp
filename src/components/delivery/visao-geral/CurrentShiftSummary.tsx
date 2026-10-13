import { BarChart2, FileText } from "lucide-react";

import { Panel } from "@/src/components/ui/Panel";
import { IconTile } from "@/src/components/ui/IconTile";
import { GoalProgress } from "./GoalProgress";
import { TopItemsList } from "./TopItemsList";
import { DelivererList } from "./DelivererList";
import { SHIFT_DATA } from "@/src/data";

export function CurrentShiftSummary() {
    const { goal, topItems, deliverers } = SHIFT_DATA;
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

            <GoalProgress {...goal} />

            <hr className="border-surface-muted" />

            <TopItemsList title="Mais Vendidos Hoje" items={topItems} />

            <hr className="border-surface-muted" />

            <DelivererList
                title="Entregadores Ativos"
                summary="4 na rota"
                deliverers={deliverers}
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
