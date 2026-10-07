import React from 'react';
import { FiscalDocument } from './types';
import { FileText, Printer, Download, Mail } from 'lucide-react';

interface FiscalDetailPanelProps {
  document: FiscalDocument | null;
}

export const FiscalDetailPanel: React.FC<FiscalDetailPanelProps> = ({
  document,
}) => {
  if (!document) {
    return (
      <aside className="bg-white rounded-3xl p-6 border border-[#ece8e7] shadow-[0_2px_12px_rgba(133,115,114,0.06)] text-center text-gray-400">
        Selecione um documento fiscal para ver os detalhes
      </aside>
    );
  }

  const details = document.details;

  return (
    <aside className="bg-white rounded-3xl p-6 border border-[#ece8e7] shadow-[0_2px_12px_rgba(133,115,114,0.06)] flex flex-col gap-6 sticky top-6">
      {/* Header Info */}
      <div className="flex items-center gap-3.5 pb-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-extrabold text-base text-[#1e1412]">
            Detalhes da NFC-e {details?.nfcNumber || document.docNumber}
          </h3>
          <p className="text-xs text-gray-400 font-medium">
            Vinculada ao Pedido {details?.linkedOrder || '#1048'}
          </p>
        </div>
      </div>

      {/* Recipient Details Card */}
      <div className="bg-gray-50/70 rounded-2xl p-4 border border-gray-100/80 flex flex-col gap-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400 font-medium">Destinatário:</span>
          <strong className="text-[#1e1412] font-bold">
            {details?.destinatario || 'Consumidor Final'}
          </strong>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-medium">Cliente:</span>
          <strong className="text-[#1e1412] font-bold">
            {details?.cliente || 'João Silva'}
          </strong>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-medium">CPF na Nota:</span>
          <strong className="text-[#1e1412] font-bold">
            {details?.cpf || '***.492.105-**'}
          </strong>
        </div>
      </div>

      {/* Tax Breakdown */}
      <div className="flex flex-col gap-3">
        <span className="text-[0.6875rem] font-bold text-gray-400 uppercase tracking-wider">
          Apuração Tributária do Cupom
        </span>

        <div className="flex flex-col gap-2 text-xs">
          <div className="flex justify-between text-gray-500 font-medium">
            <span>Valor Total dos Produtos</span>
            <span className="text-[#1e1412] font-bold">
              {details?.totalProdutos || document.amount}
            </span>
          </div>
          <div className="flex justify-between text-gray-500 font-medium">
            <span>Base de Cálculo ICMS</span>
            <span className="text-[#1e1412] font-bold">
              {details?.baseCalculoICMS || 'R$ 0,00'}
            </span>
          </div>
          <div className="flex justify-between text-gray-500 font-medium">
            <span>Regime Tributário</span>
            <span className="text-[#1e1412] font-bold">
              {details?.regimeTributario || 'Simples Nacional (ME)'}
            </span>
          </div>
          <div className="flex justify-between text-gray-500 font-medium">
            <span>Tributos Aprox. (Lei 12.741/12)</span>
            <span className="text-coral font-bold text-[#d94125]">
              {details?.tributosAprox || 'R$ 14,20'} ({details?.tributosPercentage || '15,8%'})
            </span>
          </div>
        </div>
      </div>

      {/* Fiscal Total */}
      <div className="border-t border-gray-100 pt-4 flex items-baseline justify-between">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          TOTAL FISCAL EMITIDO:
        </span>
        <span className="text-2xl font-black text-[#1e1412]">
          {details?.totalFiscal || document.amount}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2.5">
        <button className="w-full py-3 bg-[#1e1412] hover:bg-[#0f0a09] text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer">
          <Printer className="w-4 h-4" />
          Imprimir DANFE / Cupom
        </button>
        <button className="w-full py-3 bg-white border border-[#ece8e7] hover:bg-gray-50 text-gray-700 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer">
          <Download className="w-4 h-4 text-gray-500" />
          Baixar XML da Nota
        </button>
        <button className="w-full py-2.5 text-xs text-gray-400 hover:text-gray-600 font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
          <Mail className="w-3.5 h-3.5" />
          Enviar por E-mail ao Cliente
        </button>
      </div>
    </aside>
  );
};
