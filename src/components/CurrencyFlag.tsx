import { cn } from "@/lib/utils";

interface CurrencyFlagProps {
  currency: "EUR" | "USD" | "GBP" | "JPY" | "BTC" | "ETH";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const flagColors: Record<string, { colors: string[]; symbol?: string }> = {
  EUR: {
    colors: ["#003399", "#FFCC00", "#000000", "#DD0000"], // Germany colors (DE uses EUR)
  },
  USD: {
    colors: ["#B22234", "#FFFFFF", "#3C3B6E"],
  },
  GBP: {
    colors: ["#012169", "#FFFFFF", "#C8102E"],
  },
  JPY: {
    colors: ["#FFFFFF", "#BC002D"],
  },
  BTC: {
    colors: ["#F7931A", "#FFFFFF"],
    symbol: "₿",
  },
  ETH: {
    colors: ["#627EEA", "#FFFFFF"],
    symbol: "Ξ",
  },
};

const sizeMap = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
};

export function CurrencyFlag({ currency, size = "md", className }: CurrencyFlagProps) {
  const sizeClass = sizeMap[size];

  // EUR/USD dual flag (Germany + USA)
  if (currency === "EUR") {
    return (
      <div className={cn("relative", className)}>
        {/* German flag (EUR) - back */}
        <div className={cn(sizeClass, "rounded-full overflow-hidden border border-border/50 absolute -left-1")}>
          <div className="w-full h-1/3 bg-black" />
          <div className="w-full h-1/3 bg-[#DD0000]" />
          <div className="w-full h-1/3 bg-[#FFCC00]" />
        </div>
        {/* US flag (USD) - front */}
        <div className={cn(sizeClass, "rounded-full overflow-hidden border border-border/50 relative ml-3")}>
          <div className="absolute inset-0 bg-[#B22234]" />
          <div className="absolute top-[7%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-[21%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-[35%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-[49%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-[63%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-[77%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-0 left-0 w-[40%] h-[54%] bg-[#3C3B6E]" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn(sizeClass, "rounded-full overflow-hidden border border-border/50", className)}>
      {currency === "USD" && (
        <>
          <div className="absolute inset-0 bg-[#B22234]" />
          <div className="absolute top-[7%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-[21%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-[35%] left-0 right-0 h-[7%] bg-white" />
          <div className="absolute top-0 left-0 w-[40%] h-[54%] bg-[#3C3B6E]" />
        </>
      )}
      {currency === "GBP" && (
        <div className="w-full h-full bg-[#012169] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[20%] bg-white absolute" />
            <div className="h-full w-[20%] bg-white absolute" />
            <div className="w-full h-[10%] bg-[#C8102E] absolute" />
            <div className="h-full w-[10%] bg-[#C8102E] absolute" />
          </div>
        </div>
      )}
    </div>
  );
}
