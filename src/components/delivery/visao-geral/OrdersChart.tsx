"use client";

import { useState } from "react";

import { Panel } from "@/src/components/ui/Panel";
import { StatusDot } from "@/src/components/ui/StatusDot";
import { cx } from "@/src/lib/cx";
import { ORDERS_CHART } from "@/src/data";

type ChartPeriod = "hoje" | "semana";

export function OrdersChart() {
  const [period, setPeriod] = useState<ChartPeriod>("hoje");
  const { hours: HOURS, values: VALUES, peakIndex: PEAK_INDEX } = ORDERS_CHART;
  const max = Math.max(...VALUES);

  return (
    <Panel as="section" className="px-6 py-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <h3 className="text-[0.9375rem] font-bold text-ink tracking-tight">
            Volume de Pedidos por Hora
          </h3>
          <p className="text-[0.75rem] text-ink-faint mt-0.5">
            Curva de demanda e distribuição da cozinha
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Peak label */}
          <StatusDot
            tone="solid"
            label="Pico Jantar: 20h (18 pedidos)"
            labelClassName="text-ink-muted"
            className="text-[0.75rem]"
          />

          {/* Period toggle */}
          <div className="flex border border-line-strong rounded-full overflow-hidden bg-canvas-soft">
            {(["hoje", "semana"] as ChartPeriod[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className={cx(
                  "text-[0.75rem] font-semibold px-3.5 py-1 transition-all cursor-pointer",
                  period === p
                    ? "bg-surface text-ink rounded-full shadow-sm"
                    : "text-ink-faint"
                )}
              >
                {p === "hoje" ? "Hoje" : "Semana"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bars */}
      <div className="overflow-x-auto pb-1">
        <div className="flex items-end gap-2 h-36 min-w-[480px] pt-8">
          {VALUES.map((value, i) => {
            const isPeak = i === PEAK_INDEX;
            const heightPct = (value / max) * 100;
            return (
              <div key={HOURS[i]} className="flex-1 flex flex-col items-center gap-1.5 h-full">
                {/* Bar + badge wrapper */}
                <div className="flex-1 w-full flex flex-col justify-end items-center relative">
                  {isPeak && (
                    <div className="absolute -top-7 bg-accent text-ink-inverse text-[0.6875rem] font-bold px-2 py-0.5 rounded-md whitespace-nowrap">
                      {value}
                    </div>
                  )}
                  <div
                    className={cx("w-full rounded-t-md min-h-1 transition-all", isPeak ? "bg-accent" : "bg-track")}
                    style={{ height: `${heightPct}%` }}
                  />
                </div>
                {/* Label */}
                <span
                  className={cx(
                    "text-[0.6875rem] font-medium whitespace-nowrap",
                    isPeak ? "text-accent font-bold" : "text-ink-ghost"
                  )}
                >
                  {HOURS[i]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
