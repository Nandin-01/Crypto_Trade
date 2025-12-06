import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

const categories = [
  { id: "favourites", label: "Favourites" },
  { id: "forex", label: "Forex" },
  { id: "crypto", label: "Crypto" },
  { id: "indices", label: "Indices" },
  { id: "derivatives", label: "Derivatives" },
];

export function CategoryTabs({ activeCategory, onCategoryChange, className }: CategoryTabsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1 px-2 py-3 overflow-x-auto scrollbar-hide",
        "border-b border-border/30",
        className
      )}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg",
              "transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
