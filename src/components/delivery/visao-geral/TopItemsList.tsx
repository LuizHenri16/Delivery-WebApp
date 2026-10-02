export interface TopItem {
    rank: number;
    name: string;
    qty: string;
    revenue: string;
}

export interface TopItemsListProps {
    title: string;
    items: TopItem[];
}

export function TopItemsList({ title, items }: TopItemsListProps) {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
                <span className="text-[0.6rem] font-bold tracking-[0.06em] text-ink-faint uppercase">
                    {title}
                </span>
                <span className="text-[0.6rem] text-ink-disabled tracking-[0.04em] uppercase">
                    Qtd / Total
                </span>
            </div>
            <ol className="flex flex-col gap-2.5 list-none m-0 p-0">
                {items.map((item) => (
                    <li key={item.rank} className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-surface-dim flex items-center justify-center text-[0.6rem] font-bold text-ink-soft shrink-0">
                            {item.rank}
                        </span>
                        <span className="flex-1 text-[0.8125rem] font-medium text-ink-strong truncate">
                            {item.name}
                        </span>
                        <div className="flex flex-col items-end shrink-0">
                            <span className="text-[0.8125rem] font-bold text-ink tabular-nums">
                                {item.qty}
                            </span>
                            <span className="text-[0.6875rem] text-ink-faint tabular-nums">
                                {item.revenue}
                            </span>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
