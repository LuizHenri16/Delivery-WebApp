'use client';

import React, { useState } from 'react';
import { FiscalCardList } from '@/src/components/delivery/relatorios/FiscalCardList';
import { FiscalDocumentList } from '@/src/components/delivery/relatorios/FiscalDocumentList';
import { FiscalDetailPanel } from '@/src/components/delivery/relatorios/FiscalDetailPanel';
import {
  MOCK_FISCAL_METRICS,
  MOCK_FISCAL_DOCUMENTS,
  FiscalDocument,
} from '@/src/components/delivery/relatorios/types';
import { Download, ChevronDown } from 'lucide-react';

export default function RelatoriosPage() {
  const [selectedDocument, setSelectedDocument] = useState<FiscalDocument>(
    MOCK_FISCAL_DOCUMENTS[0]
  );

  return (
    <div className="px-10 py-6 bg-white/90 min-h-screen flex flex-col gap-6">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#ece8e7] rounded-full text-xs font-bold text-gray-700 shadow-xs hover:bg-gray-50 transition-colors cursor-pointer">
            Outubro 2026 (Mensal)
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>
          <span className="text-xs text-gray-400 font-semibold">
            Período Contábil Aberto
          </span>
        </div>

        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#e86a43] hover:bg-[#d65730] text-white font-bold text-xs rounded-full shadow-md transition-colors cursor-pointer">
          <Download className="w-4 h-4" />
          + Exportar XML / SPED Fiscal
        </button>
      </div>

      {/* Summary Cards Row */}
      <FiscalCardList metrics={MOCK_FISCAL_METRICS} />

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start mt-2">
        <FiscalDocumentList
          documents={MOCK_FISCAL_DOCUMENTS}
          selectedId={selectedDocument?.id || ''}
          onSelectDocument={setSelectedDocument}
        />

        <FiscalDetailPanel document={selectedDocument} />
      </div>
    </div>
  );
}
