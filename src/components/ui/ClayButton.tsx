import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ClayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "accent" | "secondary";
  size?: "sm" | "md" | "lg";
}

const ClayButton = ({ 
  children, 
  variant = "primary", 
  size = "md",
  className,
  ...props 
}: ClayButtonProps) => {
  const variants = {
    primary: "gradient-teal text-primary-foreground",
    accent: "gradient-orange text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "clay-button font-semibold inline-flex items-center justify-center",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ClayButton;
