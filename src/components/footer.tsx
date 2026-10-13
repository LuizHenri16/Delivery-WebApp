import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-3">
            <div className="border-b border-zinc-200 w-full"></div>
            <div className="py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-1">
                <div className="flex items-center gap-2 text-sm">
                    <div className="">
                        <img src="/logo.png" alt="Delivery logo" className="w-30" />
                    </div>
                    <span className="text-zinc-300">•</span>
                    <span className="text-zinc-400 text-xs">
                        Plataforma Delivery &copy; {new Date().getFullYear()}
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </a>
                    <a
                        href="https://wa.me/5500000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-zinc-500 hover:text-green-600 transition-colors duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <path d="M3 21l1.65-4.79A8.5 8.5 0 1 1 7.8 19.35Z" />
                            <path d="M8.5 8.5c0 3.5 3 6.5 6.5 6.5.5 0 1-.5 1-1l-.5-1.5-2 1c-1.5-.8-2.7-2-3.5-3.5l1-2L9.5 7.5c-.5 0-1 .5-1 1Z" />
                        </svg>
                    </a>
                    <span className="text-zinc-200">|</span>
                    <nav className="flex items-center gap-6">
                        <Link href="/termos" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
                            Termos
                        </Link>
                        <Link href="/privacidade" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
                            Privacidade
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}