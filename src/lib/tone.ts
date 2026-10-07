export type Tone =
    | "positive"
    | "teal"
    | "warning"
    | "accent"
    | "info"
    | "neutral"
    | "coral"
    | "solid";

export const TONE_CHIP: Record<Tone, string> = {
    positive: "bg-success-soft text-success-ink",
    teal: "bg-success-muted text-success-deep",
    warning: "bg-accent-soft text-accent-ink-strong",
    accent: "bg-accent-pale text-accent-ink",
    info: "bg-info-soft text-info",
    neutral: "bg-surface-muted text-ink-subtle",
    coral: "bg-coral-soft text-coral",
    solid: "bg-accent text-ink-inverse",
};

export const TONE_DOT: Record<Tone, string> = {
    positive: "bg-success",
    teal: "bg-success-deep",
    warning: "bg-accent",
    accent: "bg-accent",
    info: "bg-info",
    neutral: "bg-track",
    coral: "bg-coral",
    solid: "bg-accent",
};

export const TONE_STATUS: Record<Tone, string> = {
    positive: "text-success",
    teal: "text-success-deep",
    warning: "text-accent-ink",
    accent: "text-accent-ink",
    info: "text-info",
    neutral: "text-ink-muted",
    coral: "text-coral",
    solid: "text-accent-ink",
};
