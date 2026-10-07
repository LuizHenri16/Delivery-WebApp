'use client';

import React, { useState } from 'react';
import { FinanceCardList } from '@/src/components/delivery/financeiro/FinanceCardList';
import { TransactionList } from '@/src/components/delivery/financeiro/TransactionList';
import { TransactionDetailPanel } from '@/src/components/delivery/financeiro/TransactionDetailPanel';
import {
    MOCK_METRICS,
    MOCK_TRANSACTIONS,
    Transaction,
} from '@/src/components/delivery/financeiro/types';
import { Calendar, PlusCircle } from 'lucide-react';

export default function FinanceiroPage() {
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction>(
        MOCK_TRANSACTIONS[0]
    );

    return (
        <div className="px-10 py-6 bg-white/90 min-h-screen flex flex-col gap-6">
            {/* Top Header Controls */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#d94125] hover:bg-[#c3381e] text-white font-bold text-xs rounded-full shadow-md transition-colors cursor-pointer">
                        <PlusCircle className="w-4 h-4" />
                        Solicitar Saque / Antecipação
                    </button>
                </div>
            </div>

            <FinanceCardList metrics={MOCK_METRICS} />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start mt-2">
                <TransactionList
                    transactions={MOCK_TRANSACTIONS}
                    selectedId={selectedTransaction?.id || ''}
                    onSelectTransaction={setSelectedTransaction}
                />

                <TransactionDetailPanel transaction={selectedTransaction} />
            </div>
        </div>
    );
}
