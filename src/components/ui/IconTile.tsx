import type { ReactNode } from "react";

import { cx } from "@/src/lib/cx";
import { TONE_CHIP, type Tone } from "@/src/lib/tone";

const SIZES = {
    sm: "w-9 h-9 rounded-lg text-[0.6875rem]",
    md: "w-10 h-10 rounded-xl",
    lg: "w-10.5 h-10.5 rounded-xl",
} as const;

export interface IconTileProps {
    tone?: Tone;
    size?: keyof typeof SIZES;
    children: ReactNode;
    className?: string;
}

export function IconTile({
    tone = "neutral",
    size = "md",
    children,
    className,
}: IconTileProps) {
    return (
        <div
            className={cx(
                "flex items-center justify-center shrink-0",
                SIZES[size],
                TONE_CHIP[tone],
                className
            )}
        >
            {children}
        </div>
    );
}
