'use client';

import React, { useState } from 'react';
import { FinanceCardList } from '@/src/components/delivery/financeiro/FinanceCardList';
import { TransactionList } from '@/src/components/delivery/financeiro/TransactionList';
import { TransactionDetailPanel } from '@/src/components/delivery/financeiro/TransactionDetailPanel';
import { useData } from '@/src/hooks/DataContext';
import { Calendar, PlusCircle } from 'lucide-react';
import type { Transaction } from '@/src/components/delivery/financeiro/types';

export default function FinanceiroPage() {
    const { financeMetrics, transactions } = useData();
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction>(
        transactions[0]
    );

    return (
        <div className="px-4 sm:px-6 lg:px-10 py-8 bg-white/90 min-h-screen flex flex-col gap-6">
            {/* Top Header Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#d94125] hover:bg-[#c3381e] text-white font-bold text-xs rounded-full shadow-md transition-colors cursor-pointer">
                        <PlusCircle className="w-4 h-4" />
                        Solicitar Saque / Antecipação
                    </button>
                </div>
            </div>

            <FinanceCardList metrics={financeMetrics} />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start mt-2">
                <TransactionList
                    transactions={transactions}
                    selectedId={selectedTransaction?.id || ''}
                    onSelectTransaction={setSelectedTransaction}
                />

                <TransactionDetailPanel transaction={selectedTransaction} />
            </div>
        </div>
    );
}
