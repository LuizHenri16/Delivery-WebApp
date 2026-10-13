import React from 'react';

interface PricingSectionProps {
  counterPrice: number;
  deliveryPrice: number;
  costPrice: number;
  onChange: (field: string, value: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  counterPrice,
  deliveryPrice,
  costPrice,
  onChange,
}) => {
  // Margin calculation
  const margin =
    deliveryPrice > 0
      ? (((deliveryPrice - costPrice) / deliveryPrice) * 100).toFixed(1)
      : '0.0';

  const grossProfit = (deliveryPrice - costPrice).toFixed(2);

  return (
    <div className="bg-white rounded-3xl p-5 border border-[#ece8e7] shadow-xs flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          ESTIMATIVA DE PREÇOS E MARGEM
        </span>
        <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
          Margem Estimada: {margin}%
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Preço Balcão / Salão */}
        <div>
          <label className="text-[0.6875rem] font-bold text-gray-500 block mb-1">
            Preço Balcão / Salão
          </label>
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-gray-50/50 focus-within:border-[#e86a43]">
            <span className="text-xs font-bold text-gray-400 mr-1.5">R$</span>
            <input
              type="number"
              step="0.01"
              value={counterPrice === 0 ? '' : counterPrice}
              onChange={(e) => onChange('counterPrice', parseFloat(e.target.value) || 0)}
              placeholder="44,90"
              className="w-full text-xs font-bold text-[#1e1412] outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Preço Delivery Próprio */}
        <div>
          <label className="text-[0.6875rem] font-bold text-gray-500 block mb-1">
            Preço Delivery Próprio
          </label>
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-gray-50/50 focus-within:border-[#e86a43]">
            <span className="text-xs font-bold text-[#e86a43] mr-1.5">R$</span>
            <input
              type="number"
              step="0.01"
              value={deliveryPrice === 0 ? '' : deliveryPrice}
              onChange={(e) => onChange('deliveryPrice', parseFloat(e.target.value) || 0)}
              placeholder="47,90"
              className="w-full text-xs font-bold text-[#e86a43] outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Custo Insumos (CMV) */}
        <div>
          <label className="text-[0.6875rem] font-bold text-gray-500 block mb-1">
            Custo Insumos (CMV)
          </label>
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-gray-50/50 focus-within:border-[#e86a43]">
            <span className="text-xs font-bold text-gray-400 mr-1.5">R$</span>
            <input
              type="number"
              step="0.01"
              value={costPrice === 0 ? '' : costPrice}
              onChange={(e) => onChange('costPrice', parseFloat(e.target.value) || 0)}
              placeholder="14,80"
              className="w-full text-xs font-bold text-[#1e1412] outline-none bg-transparent"
            />
          </div>
        </div>

      </div>

      <p className="text-[0.6875rem] text-gray-400 font-medium">
        Lucro bruto aproximado de{' '}
        <strong className="text-[#1e1412] font-bold">R$ {grossProfit}</strong> por
        unidade comercializada no delivery próprio sem cobrança de taxas de
        comissão.
      </p>
    </div>
  );
};
