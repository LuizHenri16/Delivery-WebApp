"use client";

import Image from "next/image";
import { Plus, SlidersHorizontal } from "lucide-react";

export type ProductCategory = "pizza" | "hamburguer" | "combo";

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: ProductCategory;
    badge: {
        label: string;
        color: "orange" | "green" | "yellow" | "zinc" | "rose" | "red";
    };
    tag: {
        label: string;
        color: "teal" | "amber" | "orange" | "green" | "violet";
    };
}

const badgeColors: Record<Product["badge"]["color"], string> = {
    orange: "bg-orange-100 text-orange-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    zinc: "bg-zinc-800 text-white",
    rose: "bg-rose-100 text-rose-700",
    red: "bg-red-600 text-white",
};

const tagColors: Record<Product["tag"]["color"], string> = {
    teal: "bg-teal-50 text-teal-700 border border-teal-200",
    amber: "bg-amber-50 text-amber-700 border border-amber-200",
    orange: "bg-orange-50 text-orange-700 border border-orange-200",
    green: "bg-green-50 text-green-700 border border-green-200",
    violet: "bg-violet-50 text-violet-700 border border-violet-200",
};

interface CardapioCardProps {
    product: Product;
    onAdd?: (product: Product) => void;
}

export function CardapioCard({ product, onAdd }: CardapioCardProps) {
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(product.price);

    return (
        <article
            id={`cardapio-product-${product.id}`}
            className="flex flex-col bg-white rounded-2xl overflow-hidden group hover:shadow-md transition-shadow duration-300"
        >
            <div className="relative w-full aspect-square overflow-hidden bg-zinc-100 p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                </div>

                <span className={`absolute top-4 left-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm shadow-sm ${badgeColors[product.badge.color]}`}>
                    {product.badge.label}
                </span>

                <button
                    aria-label="Personalizar produto"
                    className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:bg-zinc-50 transition-colors duration-200"
                >
                    <SlidersHorizontal size={14} className="text-zinc-600" />
                </button>
            </div>

            <div className="flex flex-col gap-2 p-4 pt-2">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-zinc-900 leading-snug line-clamp-2">
                        {product.name}
                    </h3>
                    <span className="text-sm font-bold text-zinc-900 whitespace-nowrap shrink-0">
                        {formattedPrice}
                    </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between gap-2 mt-2">
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${tagColors[product.tag.color]}`}>
                        {product.tag.label}
                    </span>
                    <button
                        onClick={() => onAdd?.(product)}
                        aria-label={`Adicionar ${product.name} à sacola`}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171a2b] hover:bg-[#252a42] text-white text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer"
                    >
                        <Plus size={12} />
                        Adicionar
                    </button>
                </div>
            </div>
        </article>
    );
}
