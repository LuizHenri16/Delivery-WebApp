import React from 'react';
import { MetricCard } from '@/src/components/delivery/visao-geral/MetricCard';
import { SummaryMetric } from './types';

interface FinanceCardListProps {
  metrics: SummaryMetric[];
}

export const FinanceCardList: React.FC<FinanceCardListProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          label={metric.title}
          value={metric.amount}
          sublabel={metric.subtitle}
          badge={metric.badge?.text || metric.highlight}
          badgeVariant={
            metric.badge?.variant === 'success' || metric.highlight
              ? 'positive'
              : metric.badge?.variant === 'warning'
              ? 'warning'
              : 'neutral'
          }
        />
      ))}
    </div>
  );
};

