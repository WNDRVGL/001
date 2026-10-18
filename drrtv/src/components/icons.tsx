type IconProps = { className?: string };

export function ArrowIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M3 10h13M11 4.5 16.5 10 11 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10 3v13M4.5 11 10 16.5 15.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
    </svg>
  );
}

export function PlayIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <path d="M6 3.5v13l11-6.5z" fill="currentColor" />
    </svg>
  );
}

export function ExternalIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
