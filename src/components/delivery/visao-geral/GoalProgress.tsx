import { ProgressBar } from "@/src/components/ui/ProgressBar";

export interface GoalProgressProps {
    label: string;
    percent: number;
    caption: string;
    target: string;
}

export function GoalProgress({
    label,
    percent,
    caption,
    target,
}: GoalProgressProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
                <span className="text-[0.75rem] font-semibold text-ink-muted">
                    {label}
                </span>
                <span className="text-[0.75rem] font-bold text-accent-ink">
                    {percent}% atingida
                </span>
            </div>
            <ProgressBar
                value={percent}
                fill="gradient"
                label={`${label}: ${percent}%`}
            />
            <div className="flex justify-between text-[0.6875rem] text-ink-faint">
                <span>{caption}</span>
                <span>{target}</span>
            </div>
        </div>
    );
}
