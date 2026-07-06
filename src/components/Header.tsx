import { RatoProLogo } from '../assets/RatoProLogo';
import { TodoCounter } from './TodoCounter';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border">
      <RatoProLogo />
      <TodoCounter />
    </header>
  );
}
