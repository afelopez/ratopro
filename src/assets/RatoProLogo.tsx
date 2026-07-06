interface RatoProLogoProps { className?: string; }

export function RatoProLogo({ className = '' }: RatoProLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 120 60" width="72" height="36" aria-hidden="true" className="group">
        {/* Tail */}
        <path d="M 32 40 Q 14 52 7 39 Q 2 28 11 22" stroke="#7c3aed" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Body */}
        <ellipse cx="60" cy="36" rx="28" ry="17" fill="#7c3aed" />
        {/* Head */}
        <circle cx="91" cy="30" r="14" fill="#7c3aed" />
        {/* Ear outer */}
        <circle cx="87" cy="17" r="8" fill="#7c3aed" />
        {/* Ear inner */}
        <circle cx="87" cy="17" r="4.5" fill="#4c1d95" />
        {/* Back legs */}
        <ellipse cx="44" cy="51" rx="6" ry="3.5" fill="#6d28d9" />
        <ellipse cx="56" cy="52" rx="6" ry="3.5" fill="#6d28d9" />
        {/* Front legs */}
        <ellipse cx="74" cy="51" rx="6" ry="3.5" fill="#6d28d9" />
        <ellipse cx="84" cy="52" rx="6" ry="3.5" fill="#6d28d9" />
        {/* Eye white */}
        <circle cx="97" cy="27" r="3.5" fill="white" />
        {/* Eye pupil — glows on hover */}
        <circle cx="98" cy="27" r="2" fill="#7c3aed" className="group-hover:fill-violet-300 transition-colors duration-300" />
        {/* Nose */}
        <ellipse cx="105" cy="31" rx="2.5" ry="2" fill="#a78bfa" />
        {/* Checkmark on body */}
        <path d="M 48 36 L 55 43 L 70 27" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-2xl font-bold font-mono tracking-widest text-violet-400 select-none">
        RATOPRO
      </span>
    </div>
  );
}
