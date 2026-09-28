import { Footer } from "../components/home/footer";
import { Header } from "../components/home/header";
import { Cardapio } from "../components/home/sections/cardapio";
import { Hero } from "../components/home/sections/hero";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Cardapio />
      </main>
      <Footer />
    </div>
  );
}