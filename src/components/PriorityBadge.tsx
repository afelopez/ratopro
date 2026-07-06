import type { Priority } from '../types/todo';

const CONFIG: Record<Priority, { label: string; className: string }> = {
  high:   { label: 'High',   className: 'bg-red-500/20 text-red-400 border-red-500/30' },
  medium: { label: 'Medium', className: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  low:    { label: 'Low',    className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  const { label, className } = CONFIG[priority];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>
      {label}
    </span>
  );
}
