import { Panel } from "@/src/components/ui/Panel";
import { Badge } from "@/src/components/ui/Badge";
import type { Tone } from "@/src/lib/tone";

interface MetricCardProps {
  label: string;
  sublabel?: string;
  value: string;
  badge?: string;
  badgeVariant?: Tone;
  note?: string;
}

export function MetricCard({
  label,
  sublabel,
  value,
  badge,
  badgeVariant = "neutral",
  note,
}: MetricCardProps) {
  return (
    <Panel
      radius="md"
      interactive
      className="px-5 py-[1.125rem] flex flex-col gap-1"
    >
      <div className="flex items-center justify-between gap-2 mb-0.5">
        <span className="text-xs font-medium text-ink-soft leading-tight">
          {label}
        </span>
        {badge && (
          <Badge tone={badgeVariant} className="font-bold">
            {badge}
          </Badge>
        )}
      </div>

      <p className="text-2xl font-extrabold text-ink tracking-tight tabular-nums leading-[1.15]">
        {value}
      </p>

      {sublabel && <p className="text-[0.7rem] text-ink-faint mt-0.5">{sublabel}</p>}
      {note && <p className="text-[0.7rem] text-ink-faint mt-1">{note}</p>}
    </Panel>
  );
}
