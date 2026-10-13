"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { MenuItemList } from "@/src/components/delivery/cardapio/MenuItemList";
import { MenuDetailPanel } from "@/src/components/delivery/cardapio/MenuDetailPanel";
import { useData } from "@/src/hooks/DataContext";

export default function CardapioPage() {
  const { menuItems, updateMenuItem } = useData();
  const [selectedItemId, setSelectedItemId] = useState<string>(menuItems[0].id);

  const selectedItem = menuItems.find((i) => i.id === selectedItemId) || menuItems[0];

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8 bg-white/90 min-h-screen">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-xl font-extrabold text-ink tracking-tight">
            Cardápio
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

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">
        <MenuItemList
          items={menuItems}
          selectedItemId={selectedItem?.id || null}
          onSelectItem={(item) => setSelectedItemId(item.id)}
        />

        <div className="xl:sticky xl:top-6">
          {selectedItem && (
            <MenuDetailPanel
              key={selectedItem.id}
              item={selectedItem}
              onSave={updateMenuItem}
            />
          )}
        </div>
      </div>
    </div>
  );
}

