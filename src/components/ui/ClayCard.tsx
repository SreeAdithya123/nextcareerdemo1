import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ClayCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const ClayCard = ({ children, className, hover = true, onClick, style }: ClayCardProps) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={cn(
        "clay-card p-6",
        hover && "cursor-pointer",
        !hover && "hover:transform-none hover:shadow-clay",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ClayCard;
