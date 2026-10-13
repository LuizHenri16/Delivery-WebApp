import { MetricCard } from "./MetricCard";
import { OVERVIEW_METRICS } from "@/src/data";

export function MetricCardList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
      {OVERVIEW_METRICS.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  );
}
