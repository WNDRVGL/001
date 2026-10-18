import type { Episode } from "@/content/types";

/** エピソードのサムネイル未設定時に表示するオリジナルグラフィック（16:9） */
export function EpisodeThumb({ motif, number }: { motif: Episode["motif"]; number: number }) {
  const lightId = `et-light-${motif}`;
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={lightId} cx={motif === "flame" ? "0.8" : "0.2"} cy="0.2" r="0.9">
          <stop offset="0" stopColor={motif === "animal" ? "#4d7cff" : "#ff3b3b"} stopOpacity="0.5" />
          <stop offset="1" stopColor="#0a0d14" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="180" fill="#0a0d14" />
      <rect width="320" height="180" fill={`url(#${lightId})`} />
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1={i * 40} x2={i * 40} y1="0" y2="180" stroke="#f3f0e8" strokeOpacity="0.05" />
      ))}

      {motif === "cloud" && (
        <g fill="none" stroke="#f3f0e8" strokeLinecap="round">
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M${-20 + i * 6} ${48 + i * 12} C 90 ${36 + i * 12}, 190 ${70 + i * 10}, 340 ${40 + i * 14}`}
              strokeWidth={i % 2 ? 7 : 3}
              strokeOpacity={0.15 + (i % 3) * 0.12}
            />
          ))}
          <path d="M0 150 L60 140 L110 146 L170 132 L230 144 L320 136" stroke="#ff4b1f" strokeWidth="2" />
        </g>
      )}

      {motif === "flame" && (
        <g>
          <ellipse cx="200" cy="130" rx="62" ry="12" fill="none" stroke="#f3f0e8" strokeOpacity="0.45" strokeWidth="2" />
          <path d="M200 124 C 176 104, 186 78, 200 56 C 206 74, 226 86, 214 112 C 210 100, 204 98, 200 124 Z" fill="#ff4b1f" />
          <path d="M200 120 C 192 108, 196 96, 202 86 C 206 98, 212 104, 206 116 Z" fill="#f3f0e8" opacity="0.85" />
          {["1", "2", "3"].map((n, i) => (
            <g key={n} transform={`translate(${40 + i * 0} ${44 + i * 38})`}>
              <rect width="26" height="26" fill="none" stroke="#f3f0e8" strokeOpacity="0.6" />
              <text x="13" y="18" textAnchor="middle" fontSize="13" fontFamily="monospace" fill="#f3f0e8">
                {n}
              </text>
              <line x1="34" x2={i === 1 ? 92 : 74} y1="13" y2="13" stroke="#f3f0e8" strokeOpacity="0.35" strokeWidth="4" />
            </g>
          ))}
        </g>
      )}

      {motif === "animal" && (
        <g>
          {[
            [70, 120],
            [110, 92],
            [150, 118],
            [190, 90],
          ].map(([x, y], i) => (
            <g key={i} fill="#f3f0e8" opacity={0.35 + i * 0.18} transform={`translate(${x} ${y})`}>
              <ellipse cx="0" cy="8" rx="9" ry="7" />
              <circle cx="-9" cy="-4" r="3.4" />
              <circle cx="-3" cy="-9" r="3.4" />
              <circle cx="4" cy="-9" r="3.4" />
              <circle cx="10" cy="-4" r="3.4" />
            </g>
          ))}
          <path
            d="M210 120 L226 120 L232 96 L240 144 L248 70 L256 150 L264 108 L272 120 L320 120"
            fill="none"
            stroke="#4d7cff"
            strokeWidth="2"
          />
          <circle cx="248" cy="70" r="3" fill="#ff3b3b" />
        </g>
      )}

      <text
        x="304"
        y="164"
        textAnchor="end"
        fontSize="40"
        fontWeight="800"
        fontFamily="var(--font-archivo), sans-serif"
        fill="#f3f0e8"
        fillOpacity="0.12"
      >
        #{String(number).padStart(2, "0")}
      </text>
    </svg>
  );
}
