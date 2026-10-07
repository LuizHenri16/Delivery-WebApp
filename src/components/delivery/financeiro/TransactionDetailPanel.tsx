import React from 'react';
import { Transaction } from './types';
import { ShoppingBag, FileText } from 'lucide-react';

interface TransactionDetailPanelProps {
  transaction: Transaction | null;
}

export const TransactionDetailPanel: React.FC<TransactionDetailPanelProps> = ({
  transaction,
}) => {
  if (!transaction) {
    return (
      <aside className="bg-white rounded-3xl p-6 border border-[#ece8e7] shadow-[0_2px_12px_rgba(133,115,114,0.06)] text-center text-gray-400">
        Selecione uma movimentação para ver os detalhes
      </aside>
    );
  }

  const details = transaction.details;

  return (
    <aside className="bg-white rounded-3xl p-6 border border-[#ece8e7] shadow-[0_2px_12px_rgba(133,115,114,0.06)] flex flex-col gap-6 sticky top-6">
      {/* Header Info */}
      <div className="flex items-center gap-3.5 pb-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-600 flex items-center justify-center shrink-0">
          <ShoppingBag className="w-6 h-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-lg text-[#1e1412]">
              {transaction.title}
            </h3>
            <span className="bg-amber-100 text-amber-800 font-bold text-[0.65rem] px-2 py-0.5 rounded-full uppercase">
              Pix Pago
            </span>
          </div>
          <p className="text-xs text-gray-400 font-medium">
            LK 2391 2329 32
          </p>
        </div>
      </div>

      {/* Origin & Customer Card */}
      <div className="bg-gray-50/70 rounded-2xl p-4 border border-gray-100/80 flex flex-col gap-4 text-xs">
        <div className="flex items-start gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
          <div>
            <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-wider block">
              Origem da Venda
            </span>
            <strong className="text-[#1e1412] font-bold block text-sm">
              {details?.channel || 'Cardápio Bella Massa (Web App)'}
            </strong>
            <span className="text-gray-500 font-medium text-[0.7rem]">
              {details?.channelSub || 'Canal Próprio Direto • Sem comissão de app'}
            </span>
          </div>
        </div>

        <div className="border-t border-dashed border-gray-200" />

        <div className="flex items-start gap-3">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-amber-500 bg-white mt-1 shrink-0" />
          <div>
            <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-wider block">
              Cliente Final
            </span>
            <strong className="text-[#1e1412] font-bold block text-sm">
              {details?.customerName || 'João Silva'}
            </strong>
            <span className="text-gray-500 font-medium text-[0.7rem]">
              {details?.customerAddress || 'Rua das Flores, 120, Apto 402 - Bairro Jardim'}
            </span>
          </div>
        </div>
      </div>

      {/* Mix de Recebimento */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-[#1e1412]">
            Mix de Recebimento no Dia
          </span>
          <span className="text-gray-400 font-medium text-[0.7rem]">Hoje</span>
        </div>
        {/* Progress Bar */}
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden flex">
          <div className="bg-emerald-500 h-full" style={{ width: '62%' }} />
          <div className="bg-amber-400 h-full" style={{ width: '28%' }} />
          <div className="bg-gray-300 h-full" style={{ width: '10%' }} />
        </div>
        <div className="flex items-center justify-between text-[0.7rem] font-medium text-gray-500 mt-1">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Pix: 62%
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Cartão: 28%
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            Dinheiro: 10%
          </span>
        </div>
      </div>

      {/* Status de Liquidação timeline */}
      <div className="flex flex-col gap-3">
        <span className="text-[0.6875rem] font-bold text-gray-400 uppercase tracking-wider">
          Status de Liquidação
        </span>

        <div className="flex flex-col gap-3">
          {(
            details?.liquidationStatus || [
              {
                label: 'Disponível para Transferência',
                sub: 'Saldo liberado para Pix imediato',
                time: '20:00',
                status: 'completed',
              },
              {
                label: 'Liquidação Instantânea Pix',
                sub: 'Autenticação Bancária Efetuada',
                time: '19:42',
                status: 'completed',
              },
              {
                label: 'Pedido Realizado & Pago',
                sub: 'Checkout Web Bella Massa',
                time: '19:42',
                status: 'completed',
              },
            ]
          ).map((item, idx) => (
            <div key={idx} className="flex items-start justify-between text-xs">
              <div className="flex items-start gap-2.5">
                <span
                  className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                    idx === 0
                      ? 'bg-emerald-500'
                      : item.status === 'completed'
                      ? 'bg-gray-900'
                      : 'bg-gray-300'
                  }`}
                />
                <div>
                  <strong className="text-[#1e1412] font-bold block">
                    {item.label}
                  </strong>
                  <span className="text-gray-400 text-[0.7rem] block">
                    {item.sub}
                  </span>
                </div>
              </div>
              <span className="text-gray-400 text-[0.7rem] font-medium shrink-0 ml-2">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Breakdown */}
      <div className="border-t border-gray-100 pt-4 flex flex-col gap-2 text-xs">
        <div className="flex justify-between text-gray-500 font-medium">
          <span>Valor Bruto do Pedido:</span>
          <span className="text-[#1e1412] font-bold">
            {details?.grossValue || transaction.amount}
          </span>
        </div>
        <div className="flex justify-between text-gray-500 font-medium">
          <span>Taxa de Processamento Pix (0.99%):</span>
          <span className="text-emerald-600 font-bold">
            {details?.fee || '- R$ 0,89'}
          </span>
        </div>
        <div className="flex justify-between text-gray-500 font-medium">
          <span>Tarifa de Entrega (Repassada integral):</span>
          <span className="text-[#1e1412] font-bold">
            {details?.deliveryFee || 'Grátis'}
          </span>
        </div>
      </div>

      {/* Footer / Action */}
      <div className="border-t border-gray-100 pt-4 flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <span className="font-bold text-gray-700 text-xs">
            Valor Líquido a Receber:
          </span>
          <span className="text-2xl font-black text-[#1e1412]">
            {details?.netValue || transaction.amount}
          </span>
        </div>

        <button className="w-full py-3.5 bg-[#262222] hover:bg-[#1a1717] text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer">
          <FileText className="w-4 h-4" />
          Emitir Comprovante / NF-e
        </button>
      </div>
    </aside>
  );
};
