import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Cardapio } from "../components/home/sections/cardapio/cardapio";
import { Hero } from "../components/home/sections/hero/hero";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-10">
      <Header />
      <main className="flex flex-col gap-6 py-2">
        <Hero />
        <Cardapio />
      </main>
      <Footer />
    </div>
  );
}