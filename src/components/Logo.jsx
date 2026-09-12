// "Cha Chow" wordmark — stacked two-line lockup, matches the reference exactly:
// two lines, tight tracking, each line independently colorable so it can sit
// on dark (nav, splash) or light (sign-in) surfaces without inventing a variant.
export default function Logo({ size = 20, line1 = 'var(--lime)', line2 = 'var(--lime)' }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1.02,
        letterSpacing: '-0.03em',
      }}
    >
      <div style={{ color: line1 }}>Cha</div>
      <div style={{ color: line2 }}>Chow</div>
    </div>
  );
}
