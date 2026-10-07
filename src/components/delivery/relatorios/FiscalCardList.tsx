import React from 'react';
import { MetricCard } from '@/src/components/delivery/visao-geral/MetricCard';
import { FiscalSummaryMetric } from './types';

interface FiscalCardListProps {
  metrics: FiscalSummaryMetric[];
}

export const FiscalCardList: React.FC<FiscalCardListProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          label={metric.title}
          value={metric.amount}
          sublabel={metric.subtitle}
          badge={metric.badge?.text}
          badgeVariant={
            metric.badge?.variant === 'success'
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
