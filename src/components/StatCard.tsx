import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className={cn(
        "text-center px-6 py-4 animate-fade-up opacity-0",
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="text-display-sm md:text-display text-gradient mb-2">
        {value}
      </div>
      <div className="text-muted-foreground text-sm md:text-base tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
