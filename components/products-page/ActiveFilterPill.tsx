import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";

interface FilterPillProps {
  label: string;
  invert?:boolean;
  onClear: () => void;
}

export default function ActiveFilterPill({ label,invert =false, onClear }: FilterPillProps) {
  return (
    <button
      onClick={onClear}
      className={cn("flex items-center gap-1 rounded-full bg-primary-accent/10 px-3 py-1 text-sm font-medium text-primary-accent hover:bg-primary-accent/20 focus:outline-none focus:ring-2 focus:ring-primary-accent", invert && "bg-primary text-white focus:ring-primary hover:bg-primary/20")}
    >
      <span className="whitespace-nowrap">{label}</span>
      <IoClose className="h-4 w-4" />
    </button>
  );
}
