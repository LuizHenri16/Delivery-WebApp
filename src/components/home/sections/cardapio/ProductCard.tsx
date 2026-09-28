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
        /** Tailwind color token: e.g. "orange", "green", "yellow", "zinc" */
        color: "orange" | "green" | "yellow" | "zinc" | "rose";
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
};

const tagColors: Record<Product["tag"]["color"], string> = {
    teal: "bg-teal-50 text-teal-700 border border-teal-200",
    amber: "bg-amber-50 text-amber-700 border border-amber-200",
    orange: "bg-orange-50 text-orange-700 border border-orange-200",
    green: "bg-green-50 text-green-700 border border-green-200",
    violet: "bg-violet-50 text-violet-700 border border-violet-200",
};

interface ProductCardProps {
    product: Product;
    onAdd?: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(product.price);

    return (
        <article
            id={`product-${product.id}`}
            className="flex flex-col bg-white rounded-2xl overflow-hidden group hover:shadow-md transition-shadow duration-300"
        >
            <div className="relative w-full aspect-square overflow-hidden bg-zinc-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <span className={`absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm ${badgeColors[product.badge.color]}`}>
                    {product.badge.label}
                </span>
            </div>

            <div className="flex flex-col gap-2 p-3">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-zinc-900 leading-snug line-clamp-2">
                        {product.name}
                    </h3>
                    <span className="text-sm font-bold text-zinc-900 whitespace-nowrap shrink-0">
                        {formattedPrice}
                    </span>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between gap-2 mt-1">
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${tagColors[product.tag.color]}`}>
                        {product.tag.label}
                    </span>
                    <button
                        onClick={() => onAdd?.(product)}
                        id={`add-${product.id}`}
                        aria-label={`Adicionar ${product.name} à sacola`}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-700 text-white text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer"
                    >
                        <Plus size={12} />
                        Adicionar
                    </button>
                </div>
            </div>
        </article>
    );
}
