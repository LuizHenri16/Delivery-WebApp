"use client";

import { useState } from "react";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { ProductCard, type Product, type ProductCategory } from "./ProductCard";
import { useCart } from "@/src/context/CartContext";
import Link from "next/link";

// ─── Mock data ────────────────────────────────────────────────────────────────
const ALL_PRODUCTS: Product[] = [
    {
        id: "pizza-calabresa",
        name: "Pizza Calabresa Artesanal",
        price: 42.90,
        description: "Massa de longa fermentação, molho rústico de tomate pelado, calabresa...",
        image: "/product-pizza.png",
        category: "pizza",
        badge: { label: "🔥 Mais Pedida", color: "orange" },
        tag: { label: "Forno a Lenha", color: "teal" },
    },
    {
        id: "burger-bella-bacon",
        name: "Hambúrguer Bella Bacon",
        price: 29.90,
        description: "Blend nobre grelhado no fogo, cheddar cremoso derretido, tiras de...",
        image: "/product-burger.png",
        category: "hamburguer",
        badge: { label: "180g Gourmet", color: "zinc" },
        tag: { label: "Receita Exclusiva", color: "amber" },
    },
    {
        id: "frango-catupiry",
        name: "Frango c/ Catupiry",
        price: 46.90,
        description: "Peito de frango desfiado temperado com ervas frescas, camada de catupiry original...",
        image: "/product-pizza.png",
        category: "pizza",
        badge: { label: "🧀 Catupiry Original", color: "yellow" },
        tag: { label: "Clássico", color: "teal" },
    },
    {
        id: "combo-bella-artesanal",
        name: "Combo Bella Artesanal",
        price: 39.90,
        description: "Hambúrguer Bella Bacon + Porção de batatas rústicas crocantes com alecrim...",
        image: "/product-combo.png",
        category: "combo",
        badge: { label: "⬆ Combo Completo", color: "orange" },
        tag: { label: "Mais Econômico", color: "orange" },
    },
    {
        id: "margherita-bella",
        name: "Margherita Bella Tradizionale",
        price: 44.90,
        description: "Mussarela de búfala derretida, fatias de tomate caqui maduro, azeite de oliva...",
        image: "/product-margherita.png",
        category: "pizza",
        badge: { label: "🌿 Manjericão Fresco", color: "green" },
        tag: { label: "Vegetariano", color: "green" },
    },
    {
        id: "double-smash",
        name: "Double Smash Bella Cheese",
        price: 32.90,
        description: "Dois ultra-smashes com crosta perfeita, camada dupla de queijo prato...",
        image: "/product-burger.png",
        category: "hamburguer",
        badge: { label: "Super Crocante", color: "zinc" },
        tag: { label: "Mais Vendido", color: "amber" },
    },
];

// ─── Filter config ─────────────────────────────────────────────────────────────
type FilterValue = "todos" | ProductCategory;

const FILTERS: { value: FilterValue; label: string; icon: string }[] = [
    { value: "todos", label: "Todos", icon: "✨" },
    { value: "pizza", label: "Pizzas", icon: "🍕" },
    { value: "hamburguer", label: "Hambúrgueres", icon: "🍔" },
    { value: "combo", label: "Combos", icon: "🍱" },
];

export function Cardapio() {
    const [activeFilter, setActiveFilter] = useState<FilterValue>("todos");
    const { addItem } = useCart();

    const filtered =
        activeFilter === "todos"
            ? ALL_PRODUCTS
            : ALL_PRODUCTS.filter((p) => p.category === activeFilter);

    return (
        <section id="cardapio" className="flex flex-col gap-6 py-6">
            <div className="flex items-center justify-between">
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
                {FILTERS.map((f) => (
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

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
