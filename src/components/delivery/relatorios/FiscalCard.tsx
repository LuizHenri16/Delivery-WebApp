import React from 'react';
import { FiscalDocument } from './types';
import { FileText, FolderArchive } from 'lucide-react';

interface FiscalCardProps {
  document: FiscalDocument;
  isSelected: boolean;
  onSelect: (document: FiscalDocument) => void;
}

export const FiscalCard: React.FC<FiscalCardProps> = ({
  document,
  isSelected,
  onSelect,
}) => {
  const isLote = document.isLote;

  return (
    <div
      onClick={() => onSelect(document)}
      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
        isLote
          ? 'bg-blue-50/40 border-blue-100 hover:border-blue-200'
          : isSelected
          ? 'bg-white border-[#e86a43] ring-2 ring-[#e86a43]/20 shadow-md'
          : 'bg-white border-[#ece8e7] hover:border-gray-300 shadow-[0_2px_8px_rgba(133,115,114,0.04)]'
      }`}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
            isLote
              ? 'bg-blue-100 text-blue-600'
              : 'bg-amber-100/80 text-amber-700'
          }`}
        >
          {isLote ? (
            <FolderArchive className="w-5 h-5" />
          ) : (
            <FileText className="w-5 h-5" />
          )}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-sm text-[#1e1412] truncate">
            {document.title}
          </h4>
          <p className="text-xs text-gray-400 font-medium truncate">
            {document.subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <div className="text-right hidden md:block">
          <span className="text-[0.6875rem] font-bold tracking-wider text-gray-400 uppercase block">
            {document.chave}
          </span>
          <span className="text-xs text-gray-400 font-medium">
            {document.date}
          </span>
        </div>

        <div className="w-36 flex justify-start">
          {document.status === 'Autorizada SEFAZ' ? (
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[0.7rem] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Autorizada SEFAZ
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[0.7rem] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Enviado ao Contador
            </span>
          )}
        </div>

        <div className="font-extrabold text-base text-[#1e1412] text-right min-w-[90px]">
          {document.amount}
        </div>
      </div>
    </div>
  );
};
