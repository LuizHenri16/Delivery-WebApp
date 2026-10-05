import { Pencil, RefreshCw } from "lucide-react";
import type { MenuItem, ProductStatus } from "./types";

interface MenuItemCardProps {
  item: MenuItem;
  isSelected: boolean;
  onSelect: (item: MenuItem) => void;
}

const STATUS_CONFIG: Record<
  ProductStatus,
  { label: string; dot: string; text: string; bg: string }
> = {
  "Ativo no Cardápio": { label: "Ativo no Cardápio", dot: "bg-[#008167]", text: "text-[#008167]", bg: "bg-[#e8f5ee]" },
  "Destaque Promoção": { label: "Destaque Promoção", dot: "bg-[#e8a038]", text: "text-[#b57c00]", bg: "bg-[#fff8e1]" },
  "Pausado (Sem Estoque)": { label: "Pausado (Sem Estoque)", dot: "bg-[#c55a37]", text: "text-[#c55a37]", bg: "bg-[#fff0eb]" },
  "Pausado no App": { label: "Pausado no App", dot: "bg-[#c55a37]", text: "text-[#c55a37]", bg: "bg-[#fff0eb]" },
};

const CATEGORY_STYLE: Record<string, { bg: string; emoji: string }> = {
  Pizzas: { bg: "bg-[#fff0eb] text-[#c55a37]", emoji: "🍕" },
  Hambúrgueres: { bg: "bg-[#fff8e1] text-[#b57c00]", emoji: "🍔" },
  Combos: { bg: "bg-[#f0e8fe] text-[#7b42c9]", emoji: "🎁" },
  Sobremesas: { bg: "bg-[#fce8ff] text-[#9b42c9]", emoji: "🍨" },
  Bebidas: { bg: "bg-[#e8f0fe] text-[#3d6fc9]", emoji: "🥤" },
};
const DEFAULT_CATEGORY = { bg: "bg-[#f0eeee] text-[#8a7674]", emoji: "🍽️" };

export function MenuItemCard({ item, isSelected, onSelect }: MenuItemCardProps) {
  const status = STATUS_CONFIG[item.status];
  const categoryStyle = CATEGORY_STYLE[item.category] ?? DEFAULT_CATEGORY;
  const isPaused = item.status.startsWith("Pausado");

  return (
    <article
      onClick={() => onSelect(item)}
      className={`flex items-center gap-4 bg-white rounded-2xl px-4 py-3.5 cursor-pointer transition-all border-2 ${isSelected
        ? "border-coral shadow-[0_0_0_3px_rgba(197,90,55,0.1)]"
        : "border-line hover:border-[#d4c8c7] hover:shadow-sm"
        } ${isPaused ? "opacity-70" : ""}`}
    >
      {/* Category icon */}
      <div className={`w-14 h-14 rounded-xl shrink-0 flex items-center justify-center text-2xl ${categoryStyle.bg}`}>
        {categoryStyle.emoji}
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <p className="text-[0.875rem] font-bold text-ink leading-tight truncate">
          {item.name}
        </p>
        <div className="flex items-center gap-1 mt-0.5 flex-wrap">
          <span className="text-[0.6875rem] text-ink-faint">{item.category}</span>
          <span className="text-ink-disabled">•</span>
          <span className="text-[0.6875rem] text-ink-faint">
            Custo: R${item.costPrice.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-ink-disabled">•</span>
          <span className="text-[0.6875rem] font-semibold text-green-dark">
            Margem: {item.grossMargin.toFixed(1)}%
          </span>
        </div>
        {item.missingIngredient && (
          <p className="text-[0.6rem] font-semibold text-coral mt-0.5">
            Insumo faltante: {item.missingIngredient}
          </p>
        )}
      </div>

      {/* Price + promo note */}
      <div className="flex flex-col items-end shrink-0 gap-0.5">
        <span className="text-[0.9375rem] font-extrabold text-ink tabular-nums">
          R${item.deliveryPrice.toFixed(2).replace(".", ",")}
        </span>
        {item.promotionalNote ? (
          <span className="text-[0.6875rem] text-accent-ink font-semibold">{item.promotionalNote}</span>
        ) : (
          <span className="text-[0.6875rem] text-ink-faint">
            Balcão: R${item.counterPrice.toFixed(2).replace(".", ",")}
          </span>
        )}
      </div>

      {/* Status badge */}
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap ${status.bg}`}>
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${status.dot}`} />
        <span className={`text-[0.6875rem] font-semibold ${status.text}`}>
          {status.label}
        </span>
      </div>

      {/* Edit / refresh icon */}
      <button
        type="button"
        onClick={(e) => e.stopPropagation()}
        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-ink-disabled hover:text-ink hover:bg-ink-faint transition-colors cursor-pointer"
      >
        {isPaused ? <RefreshCw size={14} /> : <Pencil size={14} />}
      </button>
    </article>
  );
}
