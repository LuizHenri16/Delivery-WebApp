import { ShoppingBag, Clock, ClipboardList, CheckCircle } from "lucide-react";

import {
    ORDER_STATUS_ICON_TONE,
    ORDER_STATUS_TONE,
    type Order,
    type OrderType,
} from "@/src/lib/orders";
import { Panel } from "@/src/components/ui/Panel";
import { Badge } from "@/src/components/ui/Badge";
import { IconTile } from "@/src/components/ui/IconTile";
import { StatusDot } from "@/src/components/ui/StatusDot";

type RealtimeOrderCardProps = Order;

const TYPE_ICON: Record<OrderType, React.ReactNode> = {
    "Delivery": <ShoppingBag size={20} />,
    "Salão": <Clock size={20} />,
    "Balcão / Retirada": <ClipboardList size={20} />,
};

export function RealtimeOrderCard({
    id,
    customerName,
    items,
    time,
    type,
    status,
    value,
    note,
}: RealtimeOrderCardProps) {
    const isDone = status === "Concluído";

    return (
        <Panel
            as="article"
            radius="md"
            shadow="row"
            className={`flex items-center gap-4 px-5 py-4 cursor-pointer transition-all hover:bg-yellow-50/30 hover:border-yellow-300 ${isDone ? "opacity-75" : ""}`}
        >
            <IconTile tone={ORDER_STATUS_ICON_TONE[status]} size="lg">
                {isDone ? <CheckCircle size={20} /> : TYPE_ICON[type]}
            </IconTile>

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-bold text-ink">{id}</span>
                    {note && (
                        <Badge tone="info" size="sm">
                            {note}
                        </Badge>
                    )}
                </div>
                <p className="text-[0.75rem] text-ink-soft truncate">
                    {customerName} · {items}
                </p>
            </div>

            <div className="flex flex-row gap-6 items-center text-center shrink-0">
                <span className="text-[0.6875rem] text-ink-faint">
                    {time} · {type}
                </span>
                <StatusDot
                    tone={ORDER_STATUS_TONE[status]}
                    size="md"
                    label={status}
                    className="text-[0.75rem]"
                />
            </div>

            <div className="text-[0.9375rem] font-extrabold text-ink tabular-nums tracking-tight shrink-0 min-w-[72px] text-right">
                {value}
            </div>
        </Panel>
    );
}
