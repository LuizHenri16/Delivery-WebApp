"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
    return (
        <div className="flex items-center justify-between bg-white px-5 py-4 rounded-2xl w-full">
            <div className="flex items-center gap-1.5 text-sm text-zinc-500 font-medium">
                <span className="text-zinc-900 font-bold">Página 1 de 3</span>
                <span>/</span>
                <span>Exibindo 9 de 28 pratos artesanais</span>
            </div>

            <div className="flex items-center gap-1.5">
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors disabled:opacity-50" disabled>
                    <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#b93b3b] text-white font-bold text-sm">
                    1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-50 font-bold text-sm transition-colors">
                    2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-50 font-bold text-sm transition-colors">
                    3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}
