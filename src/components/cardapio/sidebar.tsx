"use client";

import { SlidersHorizontal, RotateCcw, Zap, Clock } from "lucide-react";
import { useData } from "@/src/hooks/DataContext";

const CHECK_ICON = (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export function Sidebar() {
    const { sidebar } = useData();
    const { categories, priceRange, preferences, deliveryTimes } = sidebar;

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6">
            <div className="bg-white p-5 rounded-2xl flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold">
                        <SlidersHorizontal size={18} />
                        <h2>Filtros</h2>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors">
                        <RotateCcw size={12} />
                        Limpar
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-zinc-900">Categorias</h3>
                    <div className="flex flex-col gap-2.5">
                        {categories.map((category) => (
                            <label
                                key={category.label}
                                className="flex items-center justify-between cursor-pointer group"
                            >
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`w-4 h-4 rounded-full flex items-center justify-center ${category.active
                                            ? "border-[5px] border-orange-500"
                                            : "border border-zinc-300 group-hover:border-zinc-400"
                                        }`}
                                    ></div>
                                    <span
                                        className={`text-sm transition-colors ${category.active
                                            ? "text-zinc-700 font-medium group-hover:text-zinc-900"
                                            : "text-zinc-600 group-hover:text-zinc-900"
                                        }`}
                                    >
                                        {category.label}
                                    </span>
                                </div>
                                <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">
                                    {category.count}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-zinc-900">Faixa de Preço</h3>
                        <span className="text-xs font-semibold text-orange-500">{priceRange.label}</span>
                    </div>
                    <div className="pt-2">
                        <div className="h-1.5 w-full bg-zinc-100 rounded-full relative">
                            <div className="absolute left-0 right-0 h-full bg-orange-200 rounded-full"></div>
                            <div className="absolute left-[10%] right-[10%] h-full bg-orange-500 rounded-full"></div>
                            <div className="absolute left-[10%] -mt-1.5 w-4 h-4 bg-white border-2 border-orange-500 rounded-full cursor-pointer shadow-sm"></div>
                            <div className="absolute right-[10%] -mt-1.5 w-4 h-4 bg-white border-2 border-orange-500 rounded-full cursor-pointer shadow-sm"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 gap-2">
                        <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg py-1.5 px-3 flex items-center justify-center">
                            <span className="text-xs text-zinc-500 font-medium mr-1">Min:</span>
                            <span className="text-xs font-bold text-zinc-900">{priceRange.min}</span>
                        </div>
                        <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg py-1.5 px-3 flex items-center justify-center">
                            <span className="text-xs text-zinc-500 font-medium mr-1">Máx:</span>
                            <span className="text-xs font-bold text-zinc-900">{priceRange.max}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {priceRange.chips.map((chip) => (
                            <button
                                key={chip.label}
                                className={chip.active
                                    ? "text-[11px] font-medium text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full"
                                    : "text-[11px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 px-2.5 py-1 rounded-full transition-colors"
                                }
                            >
                                {chip.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-zinc-900">Preferências & Dieta</h3>
                    <div className="flex flex-col gap-2.5">
                        {preferences.map((preference) => (
                            <label key={preference.label} className="flex items-center gap-2 cursor-pointer group">
                                <div
                                    className={`w-4 h-4 rounded-sm flex items-center justify-center ${preference.checked
                                        ? "bg-orange-600 text-white"
                                        : "border border-zinc-300 group-hover:border-zinc-400 bg-white"
                                    }`}
                                >
                                    {preference.checked && CHECK_ICON}
                                </div>
                                <span
                                    className={`text-sm transition-colors ${preference.checked
                                        ? "text-zinc-900 font-medium"
                                        : "text-zinc-600 group-hover:text-zinc-900"
                                    }`}
                                >
                                    {preference.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-zinc-900">Tempo de Entrega</h3>
                    <div className="flex flex-col gap-2">
                        {deliveryTimes.map((option) => {
                            const Icon = option.icon === "zap" ? Zap : Clock;
                            return (
                                <label
                                    key={option.label}
                                    className={`flex items-center justify-between cursor-pointer p-2 rounded-lg border transition-colors ${option.checked
                                        ? "border-teal-100 bg-teal-50/30"
                                        : "border-zinc-100 hover:border-zinc-200 bg-zinc-50/50"
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon size={14} className={option.icon === "zap" ? "text-teal-500" : "text-zinc-500"} />
                                        <span
                                            className={`text-sm ${option.checked ? "text-zinc-900 font-medium" : "text-zinc-700"
                                            }`}
                                        >
                                            {option.label}
                                        </span>
                                    </div>
                                    <div
                                        className={`w-4 h-4 rounded-sm flex items-center justify-center ${option.checked
                                            ? "bg-teal-600 text-white"
                                            : "border border-zinc-300 bg-white"
                                        }`}
                                    >
                                        {option.checked && CHECK_ICON}
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
}
