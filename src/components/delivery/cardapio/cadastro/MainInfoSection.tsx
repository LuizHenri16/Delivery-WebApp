import React from 'react';
import { ChevronDown } from 'lucide-react';

interface MainInfoSectionProps {
  name: string;
  sku: string;
  category: string;
  productionSector: string;
  description: string;
  onChange: (field: string, value: any) => void;
}

export const MainInfoSection: React.FC<MainInfoSectionProps> = ({
  name,
  sku,
  category,
  productionSector,
  description,
  onChange,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#ece8e7] shadow-xs flex flex-col gap-4">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
        INFORMAÇÕES PRINCIPAIS
      </span>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-4">
        <div>
          <label className="text-[0.6875rem] font-bold text-gray-500 block mb-1">
            Nome do Prato *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="Ex: Pizza Margherita di Bufala"
            className="w-full px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-xs font-bold text-[#1e1412] focus:border-[#e86a43] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="text-[0.6875rem] font-bold text-gray-500 block mb-1">
            Código / SKU
          </label>
          <input
            type="text"
            value={sku}
            onChange={(e) => onChange('sku', e.target.value)}
            placeholder="PZ-1052"
            className="w-full px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-xs font-bold text-[#1e1412] focus:border-[#e86a43] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-[0.6875rem] font-bold text-gray-500 block mb-1">
            Categoria *
          </label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => onChange('category', e.target.value)}
              className="w-full appearance-none px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-xs font-bold text-[#1e1412] focus:border-[#e86a43] focus:outline-none transition-colors pr-8 cursor-pointer"
            >
              <option value="Pizzas Artesanais">Pizzas Artesanais</option>
              <option value="Hambúrgueres">Hambúrgueres</option>
              <option value="Combos">Combos</option>
              <option value="Sobremesas">Sobremesas</option>
              <option value="Bebidas">Bebidas</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="text-[0.6875rem] font-bold text-gray-500 block mb-1">
            Setor de Produção
          </label>
          <div className="relative">
            <select
              value={productionSector}
              onChange={(e) => onChange('productionSector', e.target.value)}
              className="w-full appearance-none px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-xs font-bold text-[#1e1412] focus:border-[#e86a43] focus:outline-none transition-colors pr-8 cursor-pointer"
            >
              <option value="Forno Principal (Pizzaiolo 01)">
                Forno Principal (Pizzaiolo 01)
              </option>
              <option value="Cozinha Quente">Cozinha Quente</option>
              <option value="Bancada Fria">Bancada Fria</option>
              <option value="Copa / Bar">Copa / Bar</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <label className="text-[0.6875rem] font-bold text-gray-500 block mb-1">
          Descrição Sensorial & Ingredientes
        </label>
        <textarea
          rows={3}
          value={description}
          onChange={(e) => onChange('description', e.target.value)}
          placeholder="Descreva a experiência, ingredientes e destaques..."
          className="w-full px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-xs font-semibold text-[#1e1412] focus:border-[#e86a43] focus:outline-none transition-colors resize-none"
        />
      </div>
    </div>
  );
};
