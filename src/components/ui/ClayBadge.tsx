import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ClayBadgeProps {
  children: ReactNode;
  variant?: "gold" | "teal" | "orange";
  icon?: ReactNode;
  className?: string;
}

const ClayBadge = ({ children, variant = "gold", icon, className }: ClayBadgeProps) => {
  const variants = {
    gold: "bg-clay-gold/20 text-foreground border border-clay-gold/30",
    teal: "bg-primary/10 text-primary border border-primary/20",
    orange: "bg-accent/10 text-accent border border-accent/20",
  };

  return (
    <div
      className={cn(
        "clay-badge inline-flex items-center gap-2",
        variants[variant],
        className
      )}
    >
      {icon && <span className="text-current">{icon}</span>}
      {children}
    </div>
  );
};

export default ClayBadge;
