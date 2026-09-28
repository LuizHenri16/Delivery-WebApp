import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-10">
            <div className="border-b border-zinc-200 w-full"></div>
            <div className="py-4 flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-bold tracking-widest text-zinc-900 uppercase text-xs">
                        Bella Massa
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="text-zinc-400 text-xs">
                        Plataforma Delivery Direto &copy; {new Date().getFullYear()}
                    </span>
                </div>
                <nav className="flex items-center gap-6">
                    <Link href="/cardapio" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
                        Cardápio
                    </Link>
                    <Link href="/termos" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
                        Termos
                    </Link>
                    <Link href="/privacidade" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
                        Privacidade
                    </Link>
                </nav>
            </div>
        </footer>
    );
}