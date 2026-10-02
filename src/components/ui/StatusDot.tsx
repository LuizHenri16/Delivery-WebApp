import { cx } from "@/src/lib/cx";
import { TONE_DOT, TONE_STATUS, type Tone } from "@/src/lib/tone";

const SIZES = {
    sm: "w-1.5 h-1.5",
    md: "w-1.75 h-1.75",
} as const;

export interface StatusDotProps {
    tone?: Tone;
    size?: keyof typeof SIZES;
    label?: string;
    labelClassName?: string;
    className?: string;
}

export function StatusDot({
    tone = "neutral",
    size = "sm",
    label,
    labelClassName,
    className,
}: StatusDotProps) {
    return (
        <span className={cx("flex items-center gap-1.5 shrink-0", className)}>
            <span className={cx("rounded-full", TONE_DOT[tone], SIZES[size])} />
            {label && (
                <span className={cx(labelClassName ?? cx("font-semibold", TONE_STATUS[tone]))}>
                    {label}
                </span>
            )}
        </span>
    );
}
