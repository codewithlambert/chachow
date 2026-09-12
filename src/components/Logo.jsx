/**
 * Cha Chow brand mark.
 *
 * variant: 'lockup' (mark + wordmark) | 'mark' (glyph only) | 'wordmark' (text only)
 * tone:    'light' — lime wordmark, for near-black / photo backgrounds (brand default)
 *          'dark'  — near-black wordmark, for off-white / white backgrounds
 * size:    px height of the mark square / cap-height reference for the wordmark
 */
export default function Logo({ variant = 'lockup', tone = 'light', size = 32 }) {
  const wordmarkColor = tone === 'light' ? 'var(--lime)' : 'var(--ink)';

  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect width="32" height="32" rx="10" fill="var(--lime)" />
      <path
        d="M7 18c0 5 4.5 8 9 8s9-3 9-8"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line x1="6" y1="18" x2="26" y2="18" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="17" x2="23" y2="5" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="17" x2="27" y2="7" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const wordmark = (
    <span
      style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        fontSize: size * 0.62,
        lineHeight: 1,
        color: wordmarkColor,
        textTransform: 'lowercase',
        whiteSpace: 'nowrap',
      }}
    >
      cha chow
    </span>
  );

  if (variant === 'mark') return mark;
  if (variant === 'wordmark') return wordmark;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28 }}>
      {mark}
      {wordmark}
    </span>
  );
}
