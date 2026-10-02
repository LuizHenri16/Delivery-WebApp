import { StatusDot } from "@/src/components/ui/StatusDot";
import type { Tone } from "@/src/lib/tone";

export interface Deliverer {
    initials: string;
    name: string;
    deliveries: string;
    avgTime: string;
    status: string;
    tone: Tone;
}

export interface DelivererListProps {
    title: string;
    summary: string;
    deliverers: Deliverer[];
}

export function DelivererList({
    title,
    summary,
    deliverers,
}: DelivererListProps) {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
                <span className="text-[0.6rem] font-bold tracking-[0.06em] text-ink-faint uppercase">
                    {title}
                </span>
                <span className="text-[0.6875rem] font-bold text-success">
                    {summary}
                </span>
            </div>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {deliverers.map((deliverer) => (
                    <li key={deliverer.name} className="flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-full bg-surface-muted flex items-center justify-center text-[0.6875rem] font-bold text-ink-subtle shrink-0">
                            {deliverer.initials}
                        </span>
                        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                            <span className="text-[0.8125rem] font-semibold text-ink">
                                {deliverer.name}
                            </span>
                            <StatusDot
                                tone={deliverer.tone}
                                label={deliverer.status}
                                className="text-[0.6875rem]"
                            />
                        </div>
                        <div className="flex flex-col items-end shrink-0">
                            <span className="text-[0.8125rem] font-bold text-ink">
                                {deliverer.deliveries}
                            </span>
                            <span className="text-[0.6875rem] text-ink-faint">
                                {deliverer.avgTime}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
