export interface FiscalSummaryMetric {
  id: string;
  title: string;
  amount: string;
  subtitle?: string;
  badge?: {
    text: string;
    variant: 'success' | 'warning' | 'info';
  };
}

export interface FiscalDocument {
  id: string;
  docNumber?: string;
  title: string;
  subtitle: string;
  chave: string;
  date: string;
  status: 'Autorizada SEFAZ' | 'Enviado ao Contador' | 'Pendente';
  amount: string;
  iconType: 'receipt' | 'folder';
  isLote?: boolean;
  loteInfo?: string;
  details?: {
    nfcNumber: string;
    linkedOrder: string;
    destinatario: string;
    cliente: string;
    cpf: string;
    totalProdutos: string;
    baseCalculoICMS: string;
    regimeTributario: string;
    tributosAprox: string;
    tributosPercentage: string;
    totalFiscal: string;
  };
}

export const MOCK_FISCAL_METRICS: FiscalSummaryMetric[] = [
  {
    id: '1',
    title: 'FATURAMENTO DECLARADO',
    amount: 'R$ 34.890,00',
    badge: {
      text: '644 NFC-e autorizadas',
      variant: 'success'
    }
  },
  {
    id: '2',
    title: 'SIMPLES NACIONAL (EST.)',
    amount: 'R$ 1.570,05',
    badge: {
      text: 'Alíquota efetiva 4,5%',
      variant: 'warning'
    }
  },
  {
    id: '3',
    title: 'ICMS / SUB. TRIBUTÁRIA',
    amount: 'R$ 0,00',
    subtitle: 'Itens de Padaria/Pizzaria (ST)'
  },
  {
    id: '4',
    title: 'ECONOMIA TRIBUTÁRIA',
    amount: 'R$ 3.837,90',
    subtitle: 'Sem comissões retidas',
    badge: {
      text: 'Sem comissões retidas',
      variant: 'success'
    }
  }
];

export const MOCK_FISCAL_DOCUMENTS: FiscalDocument[] = [
  {
    id: '1',
    docNumber: '#004921',
    title: 'NFC-e #004921',
    subtitle: 'Pedido #1048 · Consumidor Final',
    chave: 'CHAVE: 2926 1004 8821 0001 9283 ...',
    date: '24 Out 2026, 19:43',
    status: 'Autorizada SEFAZ',
    amount: 'R$ 89,80',
    iconType: 'receipt',
    details: {
      nfcNumber: '#004921',
      linkedOrder: '#1048',
      destinatario: 'Consumidor Final',
      cliente: 'João Silva',
      cpf: '***.492.105-**',
      totalProdutos: 'R$ 89,80',
      baseCalculoICMS: 'R$ 0,00',
      regimeTributario: 'Simples Nacional (ME)',
      tributosAprox: 'R$ 14,20',
      tributosPercentage: '15,8%',
      totalFiscal: 'R$ 89,80'
    }
  },
  {
    id: '2',
    docNumber: '#004920',
    title: 'NFC-e #004920',
    subtitle: 'Pedido #1047 · Mesa 04',
    chave: 'CHAVE: 2926 1004 8821 0001 9282 ...',
    date: '24 Out 2026, 19:39',
    status: 'Autorizada SEFAZ',
    amount: 'R$ 62,90',
    iconType: 'receipt',
    details: {
      nfcNumber: '#004920',
      linkedOrder: '#1047',
      destinatario: 'Mesa 04',
      cliente: 'Cliente Salão',
      cpf: 'Não informado',
      totalProdutos: 'R$ 62,90',
      baseCalculoICMS: 'R$ 0,00',
      regimeTributario: 'Simples Nacional (ME)',
      tributosAprox: 'R$ 9,93',
      tributosPercentage: '15,8%',
      totalFiscal: 'R$ 62,90'
    }
  },
  {
    id: '3',
    docNumber: '#004919',
    title: 'NFC-e #004919',
    subtitle: 'Pedido #1046 · Entrega',
    chave: 'CHAVE: 2926 1004 8821 0001 9281 ...',
    date: '24 Out 2026, 19:16',
    status: 'Autorizada SEFAZ',
    amount: 'R$ 45,00',
    iconType: 'receipt',
    details: {
      nfcNumber: '#004919',
      linkedOrder: '#1046',
      destinatario: 'Consumidor Final',
      cliente: 'Maria Oliveira',
      cpf: '***.112.980-**',
      totalProdutos: 'R$ 45,00',
      baseCalculoICMS: 'R$ 0,00',
      regimeTributario: 'Simples Nacional (ME)',
      tributosAprox: 'R$ 7,11',
      tributosPercentage: '15,8%',
      totalFiscal: 'R$ 45,00'
    }
  },
  {
    id: '4',
    docNumber: '#004918',
    title: 'NFC-e #004918',
    subtitle: 'Pedido #1045 · Delivery Direto',
    chave: 'CHAVE: 2926 1004 8821 0001 9280 ...',
    date: '24 Out 2026, 18:51',
    status: 'Autorizada SEFAZ',
    amount: 'R$ 96,00',
    iconType: 'receipt',
    details: {
      nfcNumber: '#004918',
      linkedOrder: '#1045',
      destinatario: 'Consumidor Final',
      cliente: 'Carlos Eduardo',
      cpf: '***.883.210-**',
      totalProdutos: 'R$ 96,00',
      baseCalculoICMS: 'R$ 0,00',
      regimeTributario: 'Simples Nacional (ME)',
      tributosAprox: 'R$ 15,16',
      tributosPercentage: '15,8%',
      totalFiscal: 'R$ 96,00'
    }
  },
  {
    id: '5',
    title: 'Lote Mensal Contábil - Setembro 2026',
    subtitle: 'Arquivo ZIP com XMLs e DANFEs Consolidadas',
    chave: '612 Docs Fiscais Validados',
    date: '01 Out 2026, 08:30',
    status: 'Enviado ao Contador',
    amount: 'R$ 31.200,00',
    iconType: 'folder',
    isLote: true
  }
];
