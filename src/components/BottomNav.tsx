import { cn } from "@/lib/utils";
import { BarChart3, Radio, Send } from "lucide-react";

interface BottomNavProps {
  className?: string;
}

export function BottomNav({ className }: BottomNavProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-around py-4 px-6 bg-background border-t border-border/30",
        className
      )}
    >
      <button className="p-2 rounded-full hover:bg-secondary transition-colors">
        <BarChart3 className="w-5 h-5 text-muted-foreground" />
      </button>
      <button className="p-2 rounded-full hover:bg-secondary transition-colors">
        <Radio className="w-5 h-5 text-muted-foreground" />
      </button>
      <div className="relative">
        <button className="p-2 rounded-full bg-primary hover:bg-primary/90 transition-colors">
          <Send className="w-5 h-5 text-primary-foreground" />
        </button>
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-danger text-danger-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
          80
        </span>
      </div>
    </div>
  );
}
