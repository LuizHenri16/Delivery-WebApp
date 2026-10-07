"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { MenuItemList } from "@/src/components/delivery/cardapio/MenuItemList";
import { MenuDetailPanel } from "@/src/components/delivery/cardapio/MenuDetailPanel";
import { MOCK_MENU_ITEMS } from "@/src/components/delivery/cardapio/types";
import type { MenuItem } from "@/src/components/delivery/cardapio/types";

export default function CardapioPage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem>(MOCK_MENU_ITEMS[0]);

  return (
    <div className="px-10 py-6 bg-white/90 min-h-screen">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-extrabold text-ink tracking-tight">
            Cardápio &amp; Preços
          </h1>
          <p className="text-[0.75rem] text-ink-faint mt-0.5">
            Gerencie produtos, preços e disponibilidade em tempo real
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 bg-coral text-white text-[0.875rem] font-bold px-4 py-2.5 rounded-full cursor-pointer hover:bg-[#a8482c] transition-all hover:-translate-y-px shadow-sm"
        >
          <Plus size={16} />
          Novo Produto
        </button>
      </div>

      <div className="grid grid-cols-[1fr_340px] gap-6 items-start">

        <MenuItemList
          items={MOCK_MENU_ITEMS}
          selectedItemId={selectedItem.id}
          onSelectItem={setSelectedItem}
        />

        <div className="sticky top-6">
          <MenuDetailPanel
            key={selectedItem.id}
            item={selectedItem}
          />
        </div>

      </div>
    </div>
  );
}
