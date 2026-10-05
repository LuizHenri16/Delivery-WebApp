"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { CategoryFilterBar } from "./CategoryFilterBar";
import { MenuItemCard } from "./MenuItemCard";
import type { MenuItem } from "./types";

interface MenuItemListProps {
  items: MenuItem[];
  selectedItemId: string | null;
  onSelectItem: (item: MenuItem) => void;
}

export function MenuItemList({ items, selectedItemId, onSelectItem }: MenuItemListProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = items.filter((item) => {
    const matchesCategory =
      activeCategory === "Todos" || item.category === activeCategory;
    const matchesSearch =
      search === "" ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-4">
      {/* ── Header ── */}
      <div>
        <h1 className="text-xl font-extrabold text-ink tracking-tight">
          Itens do Menu
        </h1>
        <p className="text-[0.75rem] text-ink-faint mt-0.5">
          Ordenado por volume de vendas e lucratividade
        </p>
      </div>

      {/* ── Search + filter icon ── */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-disabled pointer-events-none"
          />
          <input
            type="text"
            placeholder="Filtrar nesta lista..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-4 py-2 text-[0.8125rem] bg-white border border-line-strong rounded-full text-ink placeholder:text-ink-disabled outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all"
          />
        </div>
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center bg-white border border-line-strong rounded-full text-ink-faint hover:border-ink-disabled hover:text-ink transition-all cursor-pointer"
        >
          <SlidersHorizontal size={15} />
        </button>
      </div>

      {/* ── Dynamic category filter ── */}
      <CategoryFilterBar
        items={items}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* ── Product list ── */}
      <div className="flex flex-col gap-2.5">
        {filtered.length === 0 ? (
          <div className="border-2 border-dashed border-line-strong rounded-2xl py-12 flex flex-col items-center gap-2">
            <span className="text-2xl">🔍</span>
            <p className="text-[0.8125rem] text-ink-faint">
              Nenhum item encontrado para "{search}"
            </p>
          </div>
        ) : (
          filtered.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              isSelected={selectedItemId === item.id}
              onSelect={onSelectItem}
            />
          ))
        )}
      </div>
    </div>
  );
}
