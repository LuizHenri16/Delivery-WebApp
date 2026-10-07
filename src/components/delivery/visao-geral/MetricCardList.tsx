import { MetricCard } from "./MetricCard";

const METRICS = [
  {
    label: "Faturamento Hoje",
    sublabel: "vs. ontem R$ 3.243",
    value: "R$ 3.840,00",
    badge: "+18.4%",
    badgeVariant: "positive" as const,
  },
  {
    label: "Ticket Médio",
    sublabel: "Meta diária: R$ 60,00",
    value: "R$ 68,50",
    badge: "Acima",
    badgeVariant: "positive" as const,
  },
  {
    label: "Pedidos Totais",
    value: "56",
    badge: "56 pedidos",
    badgeVariant: "warning" as const,
    note: "42 ent · 8 prep · 6 novos",
  },
  {
    label: "Cancelamento",
    value: "0.2%",
    badge: "Excelente",
    badgeVariant: "teal" as const,
    note: "Apenas 1 cancelamento",
  },
];

export function MetricCardList() {
  return (
    <div className="grid grid-cols-4 gap-3.5">
      {METRICS.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  );
}
