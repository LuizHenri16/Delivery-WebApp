import { Header } from "../../components/delivery/header";

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#DBE4DD]">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
