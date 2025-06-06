import { cn } from "@/lib/utils";

interface BadgeWithDotProps {
  text: string;
  color: string;
  className?: string;
}

export function BadgeWithDot({ text, color, className }: BadgeWithDotProps) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    indigo: "bg-indigo-100 text-indigo-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    purple: "bg-purple-100 text-purple-800",
    pink: "bg-pink-100 text-pink-800",
    orange: "bg-orange-100 text-orange-800",
    yellow: "bg-yellow-100 text-yellow-800"
  };

  return (
    <span className={cn("text-xs font-medium px-2.5 py-0.5 rounded-full", colorMap[color] || colorMap.blue, className)}>
      {text}
    </span>
  );
}
