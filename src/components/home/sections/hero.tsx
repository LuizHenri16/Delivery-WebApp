import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

const categories = [
    { id: "mais-pedidos", label: "Mais pedidos", icon: "⭐", active: true },
    { id: "pizzas", label: "Pizzas", icon: "🍕" },
    { id: "hamburgueres", label: "Hambúrgueres", icon: "🍔" },
    { id: "combos", label: "Combos", icon: "🍱" },
    { id: "bebidas", label: "Bebidas", icon: "🥤" },
    { id: "sobremesas", label: "Sobremesas", icon: "🍨" },
];

export function Hero() {
    return (
        <section className="flex flex-col gap-10 py-10">
            <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        id={`category-${cat.id}`}
                        aria-pressed={cat.active}
                        className={`
              flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-200 cursor-pointer whitespace-nowrap
              ${cat.active
                                ? "bg-amber-100 text-amber-800 shadow-black/10 shadow-xs"
                                : "bg-white text-zinc-600 hover:bg-zinc-50"
                            }
            `}
                    >
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                    </button>
                ))}
            </div>

            <div className="relative w-full rounded-4xl py-6 overflow-hidden min-h-65 bg-[#e84c2b] shadow-lg">
                <div className="absolute inset-0">
                    <Image
                        src="/hero-banner.png"
                        alt="Hambúrguer e pizza artesanal"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#f43c17] via-[#e84c2bcc] to-transparent" />
                </div>
                <div className="relative z-10 flex flex-col justify-center gap-4 px-8 py-10 max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                        Seu delivery favorito,{" "}
                        <br />
                        mais perto de você!
                    </h1>

                    <p className="text-base text-white/80 leading-relaxed max-w-lg">
                        Restaurantes, pizzas artesanais, hambúrgueres gourmet, bebidas
                        geladas e muito mais. Peça agora e receba no conforto da sua casa.
                    </p>

                    <div className="flex items-center gap-3 flex-wrap mt-1">
                        <Link
                            href="/cardapio"
                            id="hero-explore-cta"
                            className="flex items-center gap-1.5 px-5 py-2.5 bg-white text-zinc-900 rounded-full text-sm font-semibold hover:bg-zinc-100 transition-colors duration-200 shadow-sm"
                        >
                            Explorar categorias
                            <span>→</span>
                        </Link>

                        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-black/10 border border-white/10 shadow-white/10 shadow-xs rounded-full text-white text-sm backdrop-blur-sm">
                            <Clock size={18} className="text-yellow-400" />
                            <span>Tempo médio: 30 – 50 min</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}