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
