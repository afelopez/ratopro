import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTodo } from '../context/TodoContext';

export function Modal({ children }: { children: ReactNode }) {
  const { dispatch } = useTodo();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dispatch({ type: 'CLOSE_MODAL' }); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [dispatch]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
    >
      <div
        className="bg-bg-card border border-border rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
