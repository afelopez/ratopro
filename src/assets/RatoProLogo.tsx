interface RatoProLogoProps { className?: string; }

export function RatoProLogo({ className = '' }: RatoProLogoProps) {
  return (
    <svg
      viewBox="0 0 155 56"
      width="124"
      height="45"
      aria-label="RatoPro"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Geometric rat head mark */}
      <circle cx="14" cy="14" r="9" fill="#7c3aed" />
      <circle cx="38" cy="14" r="9" fill="#7c3aed" />
      <circle cx="26" cy="32" r="19" fill="#7c3aed" />
      <path d="M 17 32 L 24 40 L 38 19" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Vertical rule */}
      <line x1="62" y1="8" x2="62" y2="48" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.35" />
      {/* Wordmark */}
      <text x="74" y="27" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" letterSpacing="3" fill="#ffffff">RATO</text>
      <text x="74" y="47" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" letterSpacing="3" fill="#a78bfa">PRO</text>
    </svg>
  );
}
