"use client";

import { useState } from "react";
import { SlidersHorizontal, RotateCcw, Zap, Clock } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-64 flex-shrink-0 flex flex-col gap-6">
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
                        <label className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border-[5px] border-orange-500 flex items-center justify-center"></div>
                                <span className="text-sm text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors">Todos os itens</span>
                            </div>
                            <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">28</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-400"></div>
                                <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Pizzas Artesanais</span>
                            </div>
                            <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">12</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-400"></div>
                                <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Hambúrgueres Gourmet</span>
                            </div>
                            <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">6</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-400"></div>
                                <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Combos & Ofertas</span>
                            </div>
                            <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">4</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-400"></div>
                                <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Bebidas Geladas</span>
                            </div>
                            <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">4</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-400"></div>
                                <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Sobremesas da Casa</span>
                            </div>
                            <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">2</span>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-zinc-900">Faixa de Preço</h3>
                        <span className="text-xs font-semibold text-orange-500">Até R$ 90,00</span>
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
                            <span className="text-xs font-bold text-zinc-900">R$ 15</span>
                        </div>
                        <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg py-1.5 px-3 flex items-center justify-center">
                            <span className="text-xs text-zinc-500 font-medium mr-1">Máx:</span>
                            <span className="text-xs font-bold text-zinc-900">R$ 90</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                        <button className="text-[11px] font-medium text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full">Até R$ 35</button>
                        <button className="text-[11px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 px-2.5 py-1 rounded-full transition-colors">R$ 35 a R$ 60</button>
                        <button className="text-[11px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 px-2.5 py-1 rounded-full transition-colors">Todos os preços</button>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-zinc-900">Preferências & Dieta</h3>
                    <div className="flex flex-col gap-2.5">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className="w-4 h-4 rounded-sm border border-zinc-300 group-hover:border-zinc-400 bg-white"></div>
                            <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Vegetarianos</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className="w-4 h-4 rounded-sm border border-zinc-300 group-hover:border-zinc-400 bg-white"></div>
                            <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Sem Lactose</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className="w-4 h-4 rounded-sm bg-orange-600 text-white flex items-center justify-center">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-sm text-zinc-900 font-medium">Destaque do Chef</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className="w-4 h-4 rounded-sm border border-zinc-300 group-hover:border-zinc-400 bg-white"></div>
                            <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Promoção do Dia</span>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-zinc-900">Tempo de Entrega</h3>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center justify-between cursor-pointer p-2 rounded-lg border border-zinc-100 hover:border-zinc-200 bg-zinc-50/50 transition-colors">
                            <div className="flex items-center gap-2">
                                <Zap size={14} className="text-teal-500" />
                                <span className="text-sm text-zinc-700">Até 30 min</span>
                            </div>
                            <div className="w-4 h-4 rounded-sm border border-zinc-300 bg-white"></div>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer p-2 rounded-lg border border-teal-100 bg-teal-50/30 transition-colors">
                            <div className="flex items-center gap-2">
                                <Clock size={14} className="text-zinc-500" />
                                <span className="text-sm text-zinc-900 font-medium">30 a 45 min</span>
                            </div>
                            <div className="w-4 h-4 rounded-sm bg-teal-600 text-white flex items-center justify-center">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    );
}
