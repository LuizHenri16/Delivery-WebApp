import React from 'react';
import { TransactionCard } from './TransactionCard';
import { Transaction } from './types';
import { Calendar, SlidersHorizontal } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
  selectedId: string;
  onSelectTransaction: (transaction: Transaction) => void;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  selectedId,
  onSelectTransaction,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#1e1412]">
          Movimentações Recentes
        </h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#ece8e7] rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            01.10.26 - 25.10.26
          </button>
          <button className="p-2 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {transactions.map((tx) => (
          <TransactionCard
            key={tx.id}
            transaction={tx}
            isSelected={tx.id === selectedId}
            onSelect={onSelectTransaction}
          />
        ))}
      </div>
    </div>
  );
};
