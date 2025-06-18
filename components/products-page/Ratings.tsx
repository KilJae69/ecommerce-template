import { cn } from "@/lib/utils";

export default function Ratings({small=false}:{small?:boolean;}) {
  return (
    <div className="flex items-center gap-1">
        <span className={cn(" text-primary-accent", small ? "text-lg":"text-xs")}>★</span>
        <span className={cn( small ? "text-lg":"text-xs")}>4.9</span>
       {small && <p className="text-sm">(95 Reviews)</p>}
    </div>
  );
  
}