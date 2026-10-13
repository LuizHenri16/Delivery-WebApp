"use client";

import { ChevronDown } from "lucide-react";
import { CardapioCard } from "./cardapioCard";
import { useCart } from "@/src/hooks/CartContext";
import { useData } from "@/src/hooks/DataContext";

export function ProductList() {
    const { products } = useData();
    const { addItem } = useCart();

    return (
        <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm">
                    <span className="text-zinc-500">Organização ativa: </span>
                    <span className="font-bold text-zinc-900">Mais Populares Primeiro</span>
                </div>

                <button className="flex items-center gap-2 text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 px-3 py-2 rounded-full hover:bg-zinc-50 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <path d="M7 15l5 5 5-5" />
                        <path d="M7 9l5-5 5 5" />
                    </svg>
                    Ordenar por: Mais Populares
                    <ChevronDown size={14} className="text-zinc-400" />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {products.map((product) => (
                    <CardapioCard
                        key={product.id}
                        product={product}
                        onAdd={(p) => addItem({
                            id: p.id,
                            name: p.name,
                            price: p.price,
                            image: p.image,
                        })}
                    />
                ))}
            </div>
        </div>
    );
}
