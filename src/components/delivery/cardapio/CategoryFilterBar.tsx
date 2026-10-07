import type { MenuItem } from "./types";

interface CategoryFilterBarProps {
  items: MenuItem[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilterBar({
  items,
  activeCategory,
  onCategoryChange,
}: CategoryFilterBarProps) {

  const categoryCounts = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});

  const allCount = items.length;
  const categories = Object.entries(categoryCounts);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        type="button"
        onClick={() => onCategoryChange("Todos")}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.75rem] font-semibold transition-all cursor-pointer whitespace-nowrap ${activeCategory === "Todos"
          ? "bg-ink text-white shadow-sm"
          : "bg-white border border-line-strong text-ink-faint hover:border-ink-disabled hover:text-ink"
          }`}
      >
        Todos
        <span
          className={`text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full ${activeCategory === "Todos"
            ? "bg-white/20 text-white"
            : "bg-surface-muted text-ink-faint"
            }`}
        >
          {allCount}
        </span>
      </button>

      {categories.map(([category, count]) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.75rem] font-semibold transition-all cursor-pointer whitespace-nowrap ${activeCategory === category
            ? "bg-ink text-white shadow-sm"
            : "bg-white border border-line-strong text-ink-faint hover:border-ink-disabled hover:text-ink"
            }`}
        >
          {category}
          <span
            className={`text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full ${activeCategory === category
              ? "bg-white/20 text-white"
              : "bg-surface-muted text-ink-faint"
              }`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  );
}
