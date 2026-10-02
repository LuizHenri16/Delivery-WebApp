import type { HTMLAttributes } from "react";

import { cx } from "@/src/lib/cx";
import { TONE_CHIP, type Tone } from "@/src/lib/tone";

const SIZES = {
    sm: "text-[0.6rem] px-1.5 py-0.5",
    md: "text-[0.6875rem] px-2 py-0.5",
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: Tone;
    size?: keyof typeof SIZES;
}

export function Badge({
    tone = "neutral",
    size = "md",
    className,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cx(
                "font-bold rounded-full whitespace-nowrap",
                TONE_CHIP[tone],
                SIZES[size],
                className
            )}
            {...props}
        />
    );
}
