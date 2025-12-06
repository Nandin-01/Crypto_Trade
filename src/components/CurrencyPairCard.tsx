import { cn } from "@/lib/utils";

interface CurrencyPairCardProps {
  baseCurrency: string;
  quoteCurrency: string;
  time: string;
  change: number;
  changePercent: number;
  price: string;
  low: string;
  high: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CurrencyPairCard({
  baseCurrency,
  quoteCurrency,
  time,
  change,
  changePercent,
  price,
  low,
  high,
  className,
  style,
}: CurrencyPairCardProps) {
  const isPositive = change >= 0;

  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-4 min-w-[140px] border-r border-border/30 last:border-r-0",
        "animate-fade-in",
        className
      )}
      style={style}
    >
      {/* Currency Pair Flags */}
      <div className="flex items-center gap-1">
        <div className="relative flex items-center">
          {/* German flag (EUR) */}
          <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-background z-10">
            <div className="w-full h-1/3 bg-black" />
            <div className="w-full h-1/3 bg-[#DD0000]" />
            <div className="w-full h-1/3 bg-[#FFCC00]" />
          </div>
          {/* US flag (USD/GBP) */}
          <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-background -ml-2">
            <div className="w-full h-full bg-[#B22234] relative">
              <div className="absolute top-[8%] left-0 right-0 h-[8%] bg-white" />
              <div className="absolute top-[24%] left-0 right-0 h-[8%] bg-white" />
              <div className="absolute top-[40%] left-0 right-0 h-[8%] bg-white" />
              <div className="absolute top-[56%] left-0 right-0 h-[8%] bg-white" />
              <div className="absolute top-[72%] left-0 right-0 h-[8%] bg-white" />
              <div className="absolute top-[88%] left-0 right-0 h-[8%] bg-white" />
              <div className="absolute top-0 left-0 w-[40%] h-[54%] bg-[#3C3B6E]" />
            </div>
          </div>
        </div>
      </div>

      {/* Currency Pair Name & Time */}
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-foreground">
          {baseCurrency}/{quoteCurrency}
        </span>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>

      {/* Change Values */}
      <div className="flex items-center gap-1.5">
        <span className={cn("text-xs font-medium", isPositive ? "text-success" : "text-danger")}>
          {isPositive ? "+" : ""}
          {change}
        </span>
        <span className={cn("text-xs", isPositive ? "text-success" : "text-danger")}>
          ({isPositive ? "+" : ""}
          {changePercent}%)
        </span>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <span className={cn("text-lg font-semibold price-font", isPositive ? "text-success" : "text-danger")}>
          {price}
        </span>
      </div>

      {/* Low & High */}
      <div className="flex flex-col gap-0.5 text-xs">
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">L:</span>
          <span className="text-danger price-font">{low}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">H:</span>
          <span className="text-success price-font">{high}</span>
        </div>
      </div>
    </div>
  );
}
