import type { ElementType, HTMLAttributes } from "react";

import { cx } from "@/src/lib/cx";

const RADII = {
    md: "rounded-2xl",
    lg: "rounded-[1.25rem]",
} as const;

const SHADOWS = {
    card: "shadow-card",
    row: "shadow-row",
    panel: "shadow-panel",
} as const;

export interface PanelProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    radius?: keyof typeof RADII;
    shadow?: keyof typeof SHADOWS;
    interactive?: boolean;
}

export function Panel({
    as: Tag = "div",
    radius = "lg",
    shadow = "card",
    interactive = false,
    className,
    ...props
}: PanelProps) {
    return (
        <Tag
            className={cx(
                "bg-surface border border-line",
                RADII[radius],
                SHADOWS[shadow],
                interactive &&
                    "transition-all hover:-translate-y-0.5 hover:shadow-card-hover",
                className
            )}
            {...props}
        />
    );
}
