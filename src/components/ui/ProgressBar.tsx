import { cx } from "@/src/lib/cx";

export type BarFill = "accent" | "gradient" | "success" | "info";

const FILLS: Record<BarFill, string> = {
    accent: "bg-accent",
    gradient: "bg-linear-to-r from-accent to-accent-deep",
    success: "bg-success",
    info: "bg-info",
};

export interface ProgressBarProps {
    value: number;
    max?: number;
    fill?: BarFill;
    height?: "sm" | "md";
    label?: string;
    className?: string;
}

export function ProgressBar({
    value,
    max = 100,
    fill = "accent",
    height = "sm",
    label,
    className,
}: ProgressBarProps) {
    const percent = max > 0 ? Math.min(Math.max((value / max) * 100, 0), 100) : 0;

    return (
        <div
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={label}
            className={cx(
                "w-full bg-surface-muted rounded-full overflow-hidden",
                height === "sm" ? "h-2" : "h-1.5",
                className
            )}
        >
            <div
                className={cx("h-full rounded-full", FILLS[fill])}
                style={{ width: `${percent}%` }}
            />
        </div>
    );
}
