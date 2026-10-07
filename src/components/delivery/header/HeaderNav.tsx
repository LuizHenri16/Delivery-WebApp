"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Visão Geral", href: "/delivery/visao-geral" },
    { label: "Gestão de Pedidos", href: "/delivery/gestao-de-pedidos" },
    { label: "Cardápio", href: "/delivery/cardapio" },
    { label: "Financeiro", href: "/delivery/financeiro" },
    { label: "Relatórios", href: "/delivery/relatorios" },
];

export function HeaderNav() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Navegação do painel administrativo"
            className="flex items-center gap-2 px-10 pb-0 mt-6"
        >
            {navItems.map((item) => {
                const isActive =
                    pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        id={`adm-nav-${item.href.split("/").pop()}`}
                        className={`
                            relative px-4 py-1 text-sm font-medium rounded-full transition-all duration-200
                            ${isActive
                                ? "bg-orange-500 text-white shadow-sm"
                                : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50"
                            }
                        `}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
