import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { CategoryTabs } from "./CategoryTabs";
import { CurrencyPairCard } from "./CurrencyPairCard";
import { StatusBar } from "./StatusBar";
import { BottomNav } from "./BottomNav";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample data matching the design
const currencyPairs = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  baseCurrency: "EUR",
  quoteCurrency: "GBP",
  time: "15:00:00",
  change: 30,
  changePercent: 23.2,
  price: "1478.256369",
  low: "235698",
  high: "25.3659",
}));

export function TradingDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeCategory, setActiveCategory] = useState("favourites");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed md:static z-50 h-full transition-transform duration-300 md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setIsSidebarOpen(false);
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Status Bar (Mobile) */}
        <div className="md:hidden">
          <StatusBar />
        </div>

        {/* Header with Menu Button (Mobile) */}
        <div className="flex items-center gap-3 px-4 py-3 md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Trading</h1>
        </div>

        {/* Category Tabs */}
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Currency Pairs List - Horizontal Scroll */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex overflow-x-auto h-full custom-scroll py-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {currencyPairs.map((pair, index) => (
              <div key={pair.id} style={{ scrollSnapAlign: "start" }}>
                <CurrencyPairCard
                  baseCurrency={pair.baseCurrency}
                  quoteCurrency={pair.quoteCurrency}
                  time={pair.time}
                  change={pair.change}
                  changePercent={pair.changePercent}
                  price={pair.price}
                  low={pair.low}
                  high={pair.high}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
