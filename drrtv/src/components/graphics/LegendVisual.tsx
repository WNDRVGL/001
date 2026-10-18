/**
 * 「防災都市伝説」キービジュアル。
 * 暗い背景・赤と青の照明・雲・波形・調査資料を組み合わせたオリジナルグラフィック（装飾のため読み上げ対象外）。
 */

function wave(width: number, mid: number, seed: number, points = 160, scale = 1) {
  let d = `M0 ${mid}`;
  for (let i = 1; i <= points; i++) {
    const x = (i / points) * width;
    const env = Math.exp(-Math.pow((i - points * 0.58) / (points * 0.12), 2));
    const amp = (6 + env * 70) * scale;
    const y = mid + Math.sin(i * 1.7 + seed) * Math.cos(i * 0.63 + seed * 2) * amp;
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

export function LegendVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="lv-red" cx="0.15" cy="0.2" r="0.6">
          <stop offset="0" stopColor="#ff3b3b" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff3b3b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lv-blue" cx="0.9" cy="0.85" r="0.65">
          <stop offset="0" stopColor="#4d7cff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#4d7cff" stopOpacity="0" />
        </radialGradient>
        <pattern id="lv-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#f3f0e8" strokeOpacity="0.07" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="#0a0d14" />
      <rect width="800" height="600" fill="url(#lv-red)" />
      <rect width="800" height="600" fill="url(#lv-blue)" />
      <rect width="800" height="600" fill="url(#lv-grid)" />

      {/* 筋状の雲 */}
      <g fill="none" stroke="#f3f0e8" strokeLinecap="round">
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M${-40 + i * 18} ${120 + i * 17} C ${200 + i * 10} ${90 + i * 15}, ${420 - i * 8} ${150 + i * 19}, ${860} ${100 + i * 21}`}
            strokeOpacity={0.08 + (i % 3) * 0.07}
            strokeWidth={i % 2 ? 10 : 4}
          />
        ))}
      </g>

      {/* 調査資料 */}
      <g transform="translate(470 170) rotate(6)">
        <rect width="250" height="320" fill="#e9e4d8" />
        <rect x="18" y="20" width="90" height="10" fill="#17171a" />
        <rect x="18" y="38" width="150" height="5" fill="#17171a" opacity="0.4" />
        <rect x="18" y="62" width="214" height="120" fill="#17171a" />
        <path d={wave(214, 122, 1.3, 60, 0.7)} transform="translate(18 0)" stroke="#ff4b1f" strokeWidth="1.5" fill="none" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="18" y={198 + i * 13} width={i % 3 === 2 ? 120 : 214} height="4" fill="#17171a" opacity="0.28" />
        ))}
        <g transform="translate(150 262) rotate(-12)">
          <rect x="-4" y="-26" width="96" height="40" fill="none" stroke="#ff3b3b" strokeWidth="3" />
          <text x="44" y="3" textAnchor="middle" fontSize="22" fontWeight="900" fill="#ff3b3b" letterSpacing="4">
            要検証
          </text>
        </g>
      </g>
      <g transform="translate(400 250) rotate(-5)">
        <rect width="150" height="190" fill="#f3f0e8" opacity="0.92" />
        <circle cx="75" cy="70" r="36" fill="none" stroke="#17171a" strokeWidth="2" />
        <path d="M60 64 q15 -14 30 0 M58 82 q17 10 34 0" stroke="#17171a" strokeWidth="2" fill="none" />
        {Array.from({ length: 5 }).map((_, i) => (
          <rect key={i} x="18" y={124 + i * 11} width={i === 4 ? 70 : 114} height="4" fill="#17171a" opacity="0.3" />
        ))}
      </g>

      {/* 地震計の波形 */}
      <path d={wave(800, 470, 0.4)} stroke="#ff3b3b" strokeWidth="2" fill="none" />
      <path d={wave(800, 470, 2.1)} stroke="#4d7cff" strokeWidth="1" fill="none" strokeOpacity="0.8" />
      <line x1="0" x2="800" y1="470" y2="470" stroke="#f3f0e8" strokeOpacity="0.2" />

      {/* 照準 */}
      <g stroke="#f3f0e8" strokeOpacity="0.6" fill="none">
        <circle cx="210" cy="190" r="58" />
        <circle cx="210" cy="190" r="4" fill="#ff3b3b" stroke="none" />
        <path d="M210 112v40M210 228v40M132 190h40M248 190h40" />
      </g>
    </svg>
  );
}
