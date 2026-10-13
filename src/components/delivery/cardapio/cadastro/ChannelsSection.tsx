import React from 'react';
import { Clock } from 'lucide-react';

interface ChannelsSectionProps {
  isOnlineDelivery: boolean;
  isPdvBalcao: boolean;
  isHighlight: boolean;
  cookingTime: string;
  onChange: (field: string, value: any) => void;
}

export const ChannelsSection: React.FC<ChannelsSectionProps> = ({
  isOnlineDelivery,
  isPdvBalcao,
  isHighlight,
  cookingTime,
  onChange,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#ece8e7] shadow-xs flex flex-col gap-4">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
        CANAIS & DISPONIBILIDADE
      </span>

      <div className="flex flex-col gap-3">
        {/* Cardápio Online / Delivery */}
        <div className="flex items-center justify-between p-3.5 bg-gray-50/70 rounded-2xl border border-gray-100">
          <div>
            <strong className="text-xs font-bold text-[#1e1412] block">
              Cardápio Online / Delivery
            </strong>
            <span className="text-[0.6875rem] text-gray-400 block">
              Visível para pedidos de entrega
            </span>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={isOnlineDelivery}
            onClick={() => onChange('isOnlineDelivery', !isOnlineDelivery)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer shrink-0 ${
              isOnlineDelivery ? 'bg-[#e86a43]' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-xs transition-transform ${
                isOnlineDelivery ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Disponível no PDV Balcão */}
        <div className="flex items-center justify-between p-3.5 bg-gray-50/70 rounded-2xl border border-gray-100">
          <div>
            <strong className="text-xs font-bold text-[#1e1412] block">
              Disponível no PDV Balcão
            </strong>
            <span className="text-[0.6875rem] text-gray-400 block">
              Para pedidos presenciais/salão
            </span>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={isPdvBalcao}
            onClick={() => onChange('isPdvBalcao', !isPdvBalcao)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer shrink-0 ${
              isPdvBalcao ? 'bg-[#e86a43]' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-xs transition-transform ${
                isPdvBalcao ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Destaque no Topo */}
        <div className="flex items-center justify-between p-3.5 bg-gray-50/70 rounded-2xl border border-gray-100">
          <div>
            <strong className="text-xs font-bold text-[#1e1412] block">
              Destaque no Topo
            </strong>
            <span className="text-[0.6875rem] text-gray-400 block">
              Exibir selo 'Mais Vendido'
            </span>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={isHighlight}
            onClick={() => onChange('isHighlight', !isHighlight)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer shrink-0 ${
              isHighlight ? 'bg-[#e86a43]' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-xs transition-transform ${
                isHighlight ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="pt-2">
        <label className="text-[0.6875rem] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
          TEMPO MÉDIO DE COZINHA
        </label>
        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50/50 focus-within:border-[#e86a43] transition-colors">
          <Clock className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            value={cookingTime}
            onChange={(e) => onChange('cookingTime', e.target.value)}
            placeholder="15 – 20 min"
            className="w-full text-xs font-bold text-[#1e1412] outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};
