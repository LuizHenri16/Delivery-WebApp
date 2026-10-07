import { Footer } from "@/src/components/footer";
import { Header } from "@/src/components/header";
import { Sidebar } from "@/src/components/cardapio/sidebar";
import { ProductList } from "@/src/components/cardapio/productList";
import { Pagination } from "@/src/components/cardapio/pagination";

export default function CardapioCompletoPage() {
    return (
        <div className="w-full min-h-screen bg-zinc-50 flex flex-col px-10">
            <Header />
            <main className="flex-1 w-full py-8 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <h1 className="text-2xl font-bold text-zinc-900">Cardápio Completo</h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="hidden lg:block">
                        <Sidebar />
                    </div>
                    <div className="flex-1 flex flex-col gap-6 min-w-0">
                        <ProductList />
                        <Pagination />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}