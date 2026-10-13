export interface SummaryMetric {
  id: string;
  title: string;
  amount: string;
  subtitle?: string;
  badge?: {
    text: string;
    variant: 'success' | 'warning' | 'info';
  };
  highlight?: string;
}

export interface Transaction {
  id: string;
  orderNumber?: string;
  title: string;
  subtitle: string;
  code: string;
  date: string;
  status: 'Liberado' | 'A compensar (D+1)' | 'Processado' | 'Transferido';
  amount: string;
  isNegative?: boolean;
  typeIcon: 'bag' | 'bike' | 'card' | 'minus';
  iconBg: string;
  details?: {
    channel: string;
    channelSub: string;
    customerName: string;
    customerAddress: string;
    paymentMix: {
      pix: number;
      card: number;
      cash: number;
    };
    liquidationStatus: {
      label: string;
      sub: string;
      time: string;
      status: 'completed' | 'pending' | 'processing';
    }[];
    grossValue: string;
    fee: string;
    deliveryFee: string;
    netValue: string;
  };
}
