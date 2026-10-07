import React, { useState } from 'react';
import { FiscalCard } from './FiscalCard';
import { FiscalDocument } from './types';

interface FiscalDocumentListProps {
  documents: FiscalDocument[];
  selectedId: string;
  onSelectDocument: (doc: FiscalDocument) => void;
}

export const FiscalDocumentList: React.FC<FiscalDocumentListProps> = ({
  documents,
  selectedId,
  onSelectDocument,
}) => {
  const [activeTab, setActiveTab] = useState<'todas' | 'autorizadas' | 'lotes'>('todas');

  const filteredDocs = documents.filter((doc) => {
    if (activeTab === 'autorizadas') return doc.status === 'Autorizada SEFAZ';
    if (activeTab === 'lotes') return doc.isLote;
    return true;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1e1412]">
            Histórico de Notas e Documentos Fiscais
          </h2>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Documentos emitidos em tempo real pelo PDV e Loja Web
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-gray-100/80 rounded-full text-xs font-semibold">
          <button
            onClick={() => setActiveTab('todas')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'todas'
                ? 'bg-[#1e1412] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Todas (644)
          </button>
          <button
            onClick={() => setActiveTab('autorizadas')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'autorizadas'
                ? 'bg-[#1e1412] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Autorizadas
          </button>
          <button
            onClick={() => setActiveTab('lotes')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'lotes'
                ? 'bg-[#1e1412] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Lotes SPED
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filteredDocs.map((doc) => (
          <FiscalCard
            key={doc.id}
            document={doc}
            isSelected={doc.id === selectedId}
            onSelect={onSelectDocument}
          />
        ))}
      </div>
    </div>
  );
};
