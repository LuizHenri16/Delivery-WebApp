"use client";

import { ChevronDown } from "lucide-react";
import { CardapioCard, type Product } from "./cardapioCard";
import { useCart } from "@/src/context/CartContext";

const PRODUCTS: Product[] = [
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
        description: "Peito de frango desfiado temperado com ervas frescas, camada de...",
        image: "/product-pizza.png",
        category: "pizza",
        badge: { label: "🧀 Catupiry Original", color: "yellow" },
        tag: { label: "Clássico", color: "teal" },
    },
    {
        id: "combo-bella-artesanal",
        name: "Combo Bella Artesanal",
        price: 39.90,
        description: "Hambúrguer Bella Bacon + Porção de batatas rústicas crocantes com...",
        image: "/product-combo.png",
        category: "combo",
        badge: { label: "🎁 Combo Completo", color: "red" },
        tag: { label: "Mais Econômico", color: "orange" },
    },
    {
        id: "margherita-bella",
        name: "Margherita Bella Tradizionale",
        price: 44.90,
        description: "Mussarela de búfala derretida, fatias de tomate caqui maduro, azeite de...",
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
        badge: { label: "⚡ Super Crocante", color: "zinc" },
        tag: { label: "Mais Vendido", color: "amber" },
    },
];

export function ProductList() {
    const { addItem } = useCart();

    return (
        <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center justify-between">
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
                {PRODUCTS.map((product) => (
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
