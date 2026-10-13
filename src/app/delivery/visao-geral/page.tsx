import { CurrentShiftSummary } from "@/src/components/delivery/visao-geral/CurrentShiftSummary";
import { MetricCardList } from "@/src/components/delivery/visao-geral/MetricCardList";
import { OrdersChart } from "@/src/components/delivery/visao-geral/OrdersChart";
import { OverviewBanner } from "@/src/components/delivery/visao-geral/OverviewBanner";
import { RealtimeOrdersList } from "@/src/components/delivery/visao-geral/RealtimeOrdersList";

export default function VisaoGeral() {
    return (
        <div className="px-4 sm:px-6 lg:px-10 py-8 bg-white/90 min-h-screen">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">
                <div className="flex flex-col gap-5 min-w-0">
                    <OverviewBanner />
                    <MetricCardList />
                    <OrdersChart />
                    <RealtimeOrdersList />
                </div>

                <div className="xl:sticky xl:top-6">
                    <CurrentShiftSummary />
                </div>
            </div>
        </div>
    );
}