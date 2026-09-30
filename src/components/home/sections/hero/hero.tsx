import Image from "next/image";
import Link from "next/link";
import { UtensilsCrossed, Play, Star, CheckCircle, Leaf } from "lucide-react";

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
        <section className="flex flex-col gap-10 py-4">

            <div id="banner" className="relative w-full rounded-4xl p-10 flex flex-col lg:flex-row items-center justify-between border border-orange-50/50 gap-10 overflow-hidden">
                <div className="flex flex-col max-w-160 relative z-10">
                    <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-8 left-80 text-orange-300 hidden md:block">
                        <path d="M2 58C25 20 60 5 95 15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
                        <path d="M98 17L90 8L82 13" fill="currentColor" />
                    </svg>

                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-50 w-fit mb-8 relative z-10">
                        <span className="text-orange-500">⚡</span>
                        <span className="text-[13px] font-semibold text-slate-800">
                            Entrega Express <span className="text-slate-300 font-medium mx-1">•</span> Entrega em até 45 minutos!
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                        A melhor experiência <span className="text-[#f25f29]">gastronômica</span> na sua <span className="text-[#f25f29]">porta.</span>
                    </h1>

                    <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-125">
                        Pizzas artesanais de longa fermentação, smash burgers nobres e
                        receitas preparadas na hora com ingredientes frescos,
                        quentinhas em minutos.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-14">
                        <Link href="#cardapio" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f172a] text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
                            <UtensilsCrossed size={18} />
                            Ver Cardápio
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-slate-600 font-medium">
                                <CheckCircle className="text-emerald-500" size={18} />
                                Preparo Sob Demanda
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-slate-200" />

                        <div className="flex items-center gap-2 text-slate-600 font-medium">
                            <Leaf className="text-orange-500" size={18} />
                            100% Ingredientes Frescos
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-8xl">
                    <Image width={1000} height={1000} className="w-full" src="/banner-image.webp" alt="Delivery" />
                </div>
            </div>
        </section>
    );
}