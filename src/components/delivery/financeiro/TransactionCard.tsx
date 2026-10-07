import React from 'react';
import { Transaction } from './types';
import { ShoppingBag, Bike, CreditCard, Minus } from 'lucide-react';

interface TransactionCardProps {
  transaction: Transaction;
  isSelected: boolean;
  onSelect: (transaction: Transaction) => void;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
  isSelected,
  onSelect,
}) => {
  const getIcon = () => {
    switch (transaction.typeIcon) {
      case 'bag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'bike':
        return <Bike className="w-5 h-5" />;
      case 'card':
        return <CreditCard className="w-5 h-5" />;
      case 'minus':
        return <Minus className="w-5 h-5" />;
      default:
        return <ShoppingBag className="w-5 h-5" />;
    }
  };

  const getStatusBadge = () => {
    switch (transaction.status) {
      case 'Liberado':
        return (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Liberado
          </span>
        );
      case 'A compensar (D+1)':
        return (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            A compensar (D+1)
          </span>
        );
      case 'Processado':
        return (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            Processado
          </span>
        );
      case 'Transferido':
        return (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Transferido
          </span>
        );
      default:
        return null;
    }
  };

  const isRepasse = transaction.status === 'Transferido';

  return (
    <div
      onClick={() => onSelect(transaction)}
      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
        isRepasse
          ? 'bg-emerald-50/50 border-emerald-200'
          : isSelected
          ? 'bg-white border-[#c55a37] ring-2 ring-[#c55a37]/20 shadow-md'
          : 'bg-white border-[#ece8e7] hover:border-gray-300 shadow-[0_2px_8px_rgba(133,115,114,0.04)]'
      }`}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${transaction.iconBg}`}
        >
          {getIcon()}
        </div>
        <div className="min-w-0">
          <h4
            className={`font-bold text-sm truncate ${
              isRepasse ? 'text-emerald-950 font-extrabold' : 'text-[#1e1412]'
            }`}
          >
            {transaction.title}
          </h4>
          <p
            className={`text-xs truncate ${
              isRepasse ? 'text-emerald-700 font-medium' : 'text-gray-400'
            }`}
          >
            {transaction.subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <div className="text-right hidden sm:block">
          <span className="text-[0.6875rem] font-bold tracking-wider text-gray-400 uppercase block">
            {transaction.code}
          </span>
          <span className="text-xs text-gray-400 font-medium">
            {transaction.date}
          </span>
        </div>

        <div className="w-32 flex justify-start">{getStatusBadge()}</div>

        <div
          className={`font-extrabold text-base text-right min-w-[100px] ${
            transaction.isNegative
              ? 'text-gray-600'
              : isRepasse
              ? 'text-emerald-700 font-black text-lg'
              : 'text-[#1e1412]'
          }`}
        >
          {transaction.amount}
        </div>
      </div>
    </div>
  );
};
