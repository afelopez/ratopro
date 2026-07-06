import { FiAlertCircle, FiCalendar } from 'react-icons/fi';

export function DueDateChip({ dueDate }: { dueDate: string | null }) {
  if (dueDate === null) return null;
  const today = new Date().toISOString().slice(0, 10);
  const isOverdue = dueDate < today;
  const formatted = new Date(dueDate + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
  return (
    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${
      isOverdue
        ? 'text-red-400 bg-red-500/10 border-red-500/30'
        : 'text-text-muted bg-bg-card border-border'
    }`}>
      {isOverdue ? <FiAlertCircle className="w-3 h-3" /> : <FiCalendar className="w-3 h-3" />}
      {formatted}
    </span>
  );
}
