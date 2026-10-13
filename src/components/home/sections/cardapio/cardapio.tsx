"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { useCart } from "@/src/hooks/CartContext";
import { useData } from "@/src/hooks/DataContext";
import Link from "next/link";

export function Cardapio() {
    const { products, filters } = useData();
    const [activeFilter, setActiveFilter] = useState<string>("todos");
    const { addItem } = useCart();

    const filtered =
        activeFilter === "todos"
            ? products
            : products.filter((p) => p.category === activeFilter);

    return (
        <section id="cardapio" className="flex flex-col gap-6 py-6">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2.5">
                    <h2 className="text-lg font-bold text-zinc-900">Cardápio</h2>
                    <span className="text-xs font-medium text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">
                        {filtered.length} {filtered.length === 1 ? "item" : "itens"}
                    </span>
                </div>

                <Link
                    href="/cardapio-completo"
                    id="cardapio-filter-button"
                    aria-label="Abrir cardápio completo"
                    className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 cursor-pointer"
                >
                    Ver cardápio completo
                    <ArrowRight size={16} className="" />
                </Link>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
                {filters.map((f) => (
                    <button
                        key={f.value}
                        id={`filter-${f.value}`}
                        onClick={() => setActiveFilter(f.value)}
                        aria-pressed={activeFilter === f.value}
                        className={`
                            flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium
                            transition-all duration-200 cursor-pointer border
                            ${activeFilter === f.value
                                ? "bg-zinc-900 text-white border-zinc-900"
                                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                            }
                        `}
                    >
                        <span>{f.icon}</span>
                        <span>{f.label}</span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAdd={(p) =>
                            addItem({
                                id: p.id,
                                name: p.name,
                                price: p.price,
                                image: p.image,
                            })
                        }
                    />
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-zinc-400">
                    <span className="text-4xl mb-3">🍽️</span>
                    <p className="text-sm">Nenhum produto encontrado nesta categoria.</p>
                </div>
            )}
        </section>
    );
}
