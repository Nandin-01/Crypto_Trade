import { cn } from "@/lib/utils";
import { Home, ArrowLeftRight, Clock, User } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "trade", icon: ArrowLeftRight, label: "Trade" },
  { id: "history", icon: Clock, label: "History" },
  { id: "profile", icon: User, label: "Profile" },
];

export function Sidebar({ activeTab, onTabChange, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col items-center py-6 px-2 bg-sidebar border-r border-sidebar-border",
        "w-16 md:w-20",
        className
      )}
    >
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 py-4 w-full",
              "transition-all duration-200 group relative",
              isActive && "text-primary"
            )}
          >
            {/* Active indicator */}
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-primary rounded-r" />
            )}

            <Icon
              className={cn(
                "w-5 h-5 transition-colors duration-200",
                isActive ? "text-primary" : "text-sidebar-foreground group-hover:text-foreground"
              )}
            />
            <span
              className={cn(
                "text-[10px] font-medium transition-colors duration-200",
                isActive ? "text-primary" : "text-sidebar-foreground group-hover:text-foreground"
              )}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}
