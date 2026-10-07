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

export const MOCK_METRICS: SummaryMetric[] = [
  {
    id: '1',
    title: 'Faturamento Bruto',
    amount: 'R$ 34.890,00',
    subtitle: 'vs. mês anterior',
    badge: {
      text: '+14.2%',
      variant: 'success'
    }
  },
  {
    id: '2',
    title: 'Ticket Médio',
    amount: 'R$ 54,20',
    subtitle: 'Média consolidada',
    highlight: '644 pedidos'
  },
  {
    id: '3',
    title: 'Economia em Taxas',
    amount: 'R$ 4.200,00',
    subtitle: 'Sem comissões abusivas',
    badge: {
      text: '1.2% méd.',
      variant: 'warning'
    }
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    orderNumber: '#1048',
    title: 'Pedido #1048',
    subtitle: 'Pix Instantâneo · Cardápio Web',
    code: 'COD: BM-2391-2329',
    date: '24 Out 2026, 19:42',
    status: 'Liberado',
    amount: 'R$ 89,80',
    typeIcon: 'bag',
    iconBg: 'bg-amber-100 text-amber-600',
    details: {
      channel: 'Cardápio Bella Massa (Web App)',
      channelSub: 'Canal Próprio Direto • Sem comissão de app',
      customerName: 'João Silva',
      customerAddress: 'Rua das Flores, 120, Apto 402 - Bairro Jardim',
      paymentMix: {
        pix: 62,
        card: 28,
        cash: 10
      },
      liquidationStatus: [
        {
          label: 'Disponível para Transferência',
          sub: 'Saldo liberado para Pix imediato',
          time: '20:00',
          status: 'completed'
        },
        {
          label: 'Liquidação Instantânea Pix',
          sub: 'Autenticação Bancária Efetuada',
          time: '19:42',
          status: 'completed'
        },
        {
          label: 'Pedido Realizado & Pago',
          sub: 'Checkout Web Bella Massa',
          time: '19:42',
          status: 'completed'
        }
      ],
      grossValue: 'R$ 89,80',
      fee: '- R$ 0,89',
      deliveryFee: 'Grátis',
      netValue: 'R$ 88,91'
    }
  },
  {
    id: '2',
    orderNumber: '#1047',
    title: 'Pedido #1047',
    subtitle: 'Cartão de Crédito (Visa) · Mesa 04',
    code: 'COD: BM-2391-2330',
    date: '24 Out 2026, 19:38',
    status: 'A compensar (D+1)',
    amount: 'R$ 62,90',
    typeIcon: 'bike',
    iconBg: 'bg-emerald-100 text-emerald-600',
    details: {
      channel: 'Mesa 04 (Salão)',
      channelSub: 'Atendimento Local',
      customerName: 'Mesa 04',
      customerAddress: 'Consumo no local',
      paymentMix: {
        pix: 0,
        card: 100,
        cash: 0
      },
      liquidationStatus: [
        {
          label: 'A compensar (D+1)',
          sub: 'Aguardando repasse da credenciadora',
          time: 'Amanhã',
          status: 'pending'
        },
        {
          label: 'Transação Aprovada',
          sub: 'Cartão de Crédito Visa',
          time: '19:38',
          status: 'completed'
        }
      ],
      grossValue: 'R$ 62,90',
      fee: '- R$ 1,88',
      deliveryFee: 'N/A',
      netValue: 'R$ 61,02'
    }
  },
  {
    id: '3',
    orderNumber: '#1046',
    title: 'Pedido #1046',
    subtitle: 'Cartão Débito (Mastercard) · Entrega',
    code: 'COD: BM-2391-2328',
    date: '24 Out 2026, 19:15',
    status: 'Liberado',
    amount: 'R$ 45,00',
    typeIcon: 'card',
    iconBg: 'bg-teal-100 text-teal-600',
    details: {
      channel: 'Delivery Direto App',
      channelSub: 'Pedido por Aplicativo',
      customerName: 'Maria Oliveira',
      customerAddress: 'Av. Brasil, 450 - Centro',
      paymentMix: {
        pix: 0,
        card: 100,
        cash: 0
      },
      liquidationStatus: [
        {
          label: 'Disponível para Transferência',
          sub: 'Saldo liberado',
          time: '19:30',
          status: 'completed'
        },
        {
          label: 'Transação Aprovada',
          sub: 'Débito Maquininha',
          time: '19:15',
          status: 'completed'
        }
      ],
      grossValue: 'R$ 45,00',
      fee: '- R$ 0,90',
      deliveryFee: 'R$ 7,00',
      netValue: 'R$ 44,10'
    }
  },
  {
    id: '4',
    orderNumber: '#1045',
    title: 'Pedido #1045',
    subtitle: 'Pix Instantâneo · Delivery Direto',
    code: 'COD: BM-2391-2325',
    date: '24 Out 2026, 18:50',
    status: 'Liberado',
    amount: 'R$ 96,00',
    typeIcon: 'bag',
    iconBg: 'bg-amber-100 text-amber-600',
    details: {
      channel: 'Delivery Direto Web',
      channelSub: 'Canal Próprio Direto',
      customerName: 'Carlos Eduardo',
      customerAddress: 'Rua das Palmeiras, 88 - Apt 12',
      paymentMix: {
        pix: 100,
        card: 0,
        cash: 0
      },
      liquidationStatus: [
        {
          label: 'Disponível para Transferência',
          sub: 'Saldo liberado para Pix imediato',
          time: '18:55',
          status: 'completed'
        }
      ],
      grossValue: 'R$ 96,00',
      fee: '- R$ 0,96',
      deliveryFee: 'Grátis',
      netValue: 'R$ 95,04'
    }
  },
  {
    id: '5',
    title: 'Tarifa de Gateway / Taxa Pix',
    subtitle: 'Taxa reduzida Bella Massa (0.99%)',
    code: 'TX - GATE - 8819',
    date: '24 Out 2026, 18:00',
    status: 'Processado',
    amount: '- R$ 1,20',
    isNegative: true,
    typeIcon: 'minus',
    iconBg: 'bg-gray-100 text-gray-500'
  },
  {
    id: '6',
    title: 'Repasse Semanal Automático',
    subtitle: 'Transferência para Conta Itaú PJ',
    code: 'TED #098192 - ITAU',
    date: '21 Out 2026, 10:00',
    status: 'Transferido',
    amount: 'R$ 5.340,00',
    typeIcon: 'card',
    iconBg: 'bg-emerald-100 text-emerald-600'
  }
];
