"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { MenuItem } from "./types";

const CATEGORY_EMOJI: Record<string, string> = {
  Pizzas: "🍕",
  Hambúrgueres: "🍔",
  Combos: "🎁",
  Sobremesas: "🍨",
  Bebidas: "🥤",
};

interface MenuDetailPanelProps {
  item: MenuItem;
  onSave?: (item: MenuItem) => void;
}

export function MenuDetailPanel({ item, onSave }: MenuDetailPanelProps) {
  const [counterPrice, setCounterPrice] = useState(item.counterPrice);
  const [deliveryPrice, setDeliveryPrice] = useState(item.deliveryPrice);
  const [isAvailable, setIsAvailable] = useState(item.isAvailable);

  // Recalculate margin when prices change
  const liveMargin = (
    ((deliveryPrice - item.costPrice) / deliveryPrice) * 100
  ).toFixed(1);

  const marginColor =
    Number(liveMargin) >= 65
      ? "text-[#008167] bg-[#e8f5ee]"
      : Number(liveMargin) >= 50
        ? "text-[#b57c00] bg-[#fff8e1]"
        : "text-[#c55a37] bg-[#fff0eb]";

  return (
    <aside className="bg-white border border-line rounded-[1.25rem] p-5 shadow-[0_4px_20px_rgba(133,115,114,0.08)] flex flex-col gap-5">

      {/* ── Header ── */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[0.6rem] font-bold tracking-[0.08em] text-coral uppercase">
            Painel de Precificação
          </p>
          <h2 className="text-lg font-extrabold text-ink tracking-tight mt-0.5">
            Edição Rápida
          </h2>
        </div>
        {item.isBestSeller && (
          <span className="flex items-center gap-1 bg-accent-pale text-accent-ink text-[0.6875rem] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
            ★ Mais Vendido da Semana
          </span>
        )}
      </div>

      {/* ── Product placeholder (no image by default) ── */}
      <div className="relative w-full h-32 rounded-xl overflow-hidden bg-surface-dim flex items-center justify-center">
        <span className="text-5xl">{CATEGORY_EMOJI[item.category] ?? "🍽️"}</span>
        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-[0.6875rem] font-bold px-2 py-1 rounded-lg backdrop-blur-sm">
          Código: {item.code}
        </div>
      </div>

      {/* ── Product info ── */}
      <div>
        <h3 className="text-[0.9375rem] font-bold text-ink leading-tight">
          {item.name}
        </h3>
        <p className="text-[0.75rem] text-ink-soft mt-1 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="w-full h-px bg-surface-muted" />

      {/* ── Canais & Margens ── */}
      <div>
        <p className="text-[0.6rem] font-bold tracking-[0.06em] text-ink-faint uppercase mb-3">
          Canais &amp; Margens
        </p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {/* Counter price */}
          <div>
            <label className="text-[0.6875rem] text-ink-faint mb-1 block">
              Preço Balcão
            </label>
            <div className="flex items-center border border-line-strong rounded-xl px-3 py-2 bg-[#faf8f7] focus-within:border-coral focus-within:ring-2 focus-within:ring-coral/10 transition-all">
              <span className="text-[0.75rem] text-ink-faint mr-1">R$</span>
              <input
                type="number"
                value={counterPrice}
                onChange={(e) => setCounterPrice(Number(e.target.value))}
                step="0.1"
                className="flex-1 text-[0.875rem] font-bold text-ink tabular-nums bg-transparent outline-none w-full"
              />
            </div>
          </div>
          {/* Delivery price */}
          <div>
            <label className="text-[0.6875rem] text-ink-faint mb-1 block">
              Delivery Próprio
            </label>
            <div className="flex items-center border border-line-strong rounded-xl px-3 py-2 bg-[#faf8f7] focus-within:border-coral focus-within:ring-2 focus-within:ring-coral/10 transition-all">
              <span className="text-[0.75rem] text-ink-faint mr-1">R$</span>
              <input
                type="number"
                value={deliveryPrice}
                onChange={(e) => setDeliveryPrice(Number(e.target.value))}
                step="0.1"
                className="flex-1 text-[0.875rem] font-bold text-ink tabular-nums bg-transparent outline-none w-full"
              />
            </div>
          </div>
        </div>
        {/* Live margin */}
        <div className="flex items-center justify-between">
          <span className="text-[0.75rem] text-ink-muted font-medium">
            Margem de Lucro Bruta:
          </span>
          <span className={`text-[0.875rem] font-extrabold px-3 py-1 rounded-full tabular-nums ${marginColor}`}>
            {liveMargin}%
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-surface-muted" />

      {/* ── Adicionais ── */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[0.6rem] font-bold tracking-[0.06em] text-ink-faint uppercase">
            Adicionais Vinculados
          </p>
          <button
            type="button"
            className="text-[0.6875rem] font-semibold text-coral hover:underline cursor-pointer transition-all flex items-center gap-1"
          >
            + Gerenciar
          </button>
        </div>
        {item.additionals.length === 0 ? (
          <p className="text-[0.75rem] text-ink-disabled text-center py-2">
            Nenhum adicional vinculado
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {item.additionals.map((add, i) => (
              <li
                key={i}
                className="flex items-center justify-between py-2 border-b border-surface-dim last:border-0"
              >
                <span className="text-[0.8125rem] text-ink-strong font-medium">
                  {add.name}
                </span>
                <span className="text-[0.8125rem] font-bold text-ink tabular-nums">
                  {add.price}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-full h-px bg-surface-muted" />

      {/* ── Disponibilidade toggle ── */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.875rem] font-semibold text-ink">
            Disponível para Pedidos
          </p>
          <p className="text-[0.6875rem] text-ink-faint">
            Visível no cardápio online
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={isAvailable}
          onClick={() => setIsAvailable((v) => !v)}
          className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer shrink-0 mt-0.5 ${isAvailable ? "bg-coral" : "bg-[#d4c8c7]"
            }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${isAvailable ? "translate-x-5" : "translate-x-0"
              }`}
          />
        </button>
      </div>

      {/* ── Save CTA ── */}
      <button
        type="button"
        onClick={() => onSave?.(item)}
        className="flex items-center justify-center gap-2 w-full bg-ink text-white text-[0.875rem] font-bold py-3.5 px-4 rounded-[0.875rem] border-none cursor-pointer transition-all hover:bg-ink-hover hover:-translate-y-px active:translate-y-0"
      >
        <Check size={16} />
        Salvar Alterações do Prato
      </button>

    </aside>
  );
}
