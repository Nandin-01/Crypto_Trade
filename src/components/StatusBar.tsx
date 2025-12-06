import { Signal, Wifi, Battery } from "lucide-react";

interface StatusBarProps {
  time?: string;
}

export function StatusBar({ time = "9:41" }: StatusBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-background">
      <span className="text-sm font-semibold text-foreground">{time}</span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-4 h-4 text-foreground" />
        <Wifi className="w-4 h-4 text-foreground" />
        <Battery className="w-5 h-5 text-foreground" />
      </div>
    </div>
  );
}
