import { IoClose } from "react-icons/io5";

interface FilterPillProps {
  label: string;
  onClear: () => void;
}

export default function ActiveFilterPill({ label, onClear }: FilterPillProps) {
  return (
    <button
      onClick={onClear}
      className="
        flex items-center gap-1 rounded-full bg-primary-accent/10
        px-3 py-1 text-sm font-medium text-primary-accent
        hover:bg-primary-accent/20
        focus:outline-none focus:ring-2 focus:ring-primary-accent
      "
    >
      <span className="whitespace-nowrap">{label}</span>
      <IoClose className="h-4 w-4" />
    </button>
  );
}
