import { cn } from "@/lib/utils";

interface EvaluationBarProps {
  value: number;
  maxValue?: number;
  color?: string;
  className?: string;
}

export function EvaluationBar({
  value,
  maxValue = 10,
  color = "blue",
  className,
}: EvaluationBarProps) {
  const percentage = (value / maxValue) * 100;
  
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
  };
  
  return (
    <div className={cn("h-2 rounded-md bg-gray-200 overflow-hidden", className)}>
      <div 
        className={cn("h-full rounded-md", colorMap[color] || colorMap.blue)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
