/**
 * ファーストビューの編集的コラージュ。
 * 「守りたい日常」（街・音楽・食・アウトドア・人の営み）をオリジナルの抽象グラフィックで表現する。
 * 写真素材が用意できた場合は各タイルの SVG を next/image に差し替える。
 */

const C = {
  paper: "#f3f0e8",
  paper2: "#e9e4d8",
  ink: "#17171a",
  ink2: "#26262b",
  ink3: "#3a3a41",
  signal: "#ff4b1f",
};

function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function CityGraphic() {
  const buildings = [
    { x: 14, w: 46, h: 150 },
    { x: 66, w: 34, h: 205 },
    { x: 106, w: 58, h: 120 },
    { x: 170, w: 40, h: 235 },
    { x: 216, w: 62, h: 165 },
    { x: 284, w: 36, h: 190 },
    { x: 326, w: 60, h: 135 },
  ];
  const ground = 270;
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 size-full" aria-hidden="true">
      <rect width="400" height="300" fill={C.ink} />
      <circle cx="300" cy="70" r="34" fill="none" stroke={C.signal} strokeWidth="2" />
      <circle cx="300" cy="70" r="22" fill={C.signal} />
      {[40, 52, 64].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke={C.paper} strokeOpacity="0.06" />
      ))}
      {buildings.map((b, bi) => {
        const top = ground - b.h;
        const cols = Math.max(2, Math.floor((b.w - 8) / 10));
        const rows = Math.floor((b.h - 16) / 14);
        return (
          <g key={b.x}>
            <rect x={b.x} y={top} width={b.w} height={b.h} fill={C.ink2} stroke={C.paper} strokeOpacity="0.18" />
            {Array.from({ length: rows }).flatMap((_, r) =>
              Array.from({ length: cols }).map((__, c) => {
                const v = rand(bi * 100 + r * 10 + c);
                const fill = v > 0.86 ? C.signal : v > 0.55 ? C.paper : C.ink3;
                const op = v > 0.86 ? 1 : v > 0.55 ? 0.55 : 1;
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={b.x + 6 + c * 10}
                    y={top + 10 + r * 14}
                    width="5"
                    height="7"
                    fill={fill}
                    opacity={op}
                  />
                );
              }),
            )}
          </g>
        );
      })}
      <rect x="0" y={ground} width="400" height={300 - ground} fill={C.ink} />
      <line x1="0" x2="400" y1={ground} y2={ground} stroke={C.paper} strokeOpacity="0.5" />
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={i} x1={i * 22} x2={i * 22 + 12} y1="285" y2="285" stroke={C.paper} strokeOpacity="0.35" strokeWidth="2" />
      ))}
    </svg>
  );
}

function MusicGraphic() {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
      <rect width="200" height="200" fill={C.signal} />
      <circle cx="112" cy="96" r="74" fill={C.ink} />
      {[66, 58, 50, 42, 34].map((r) => (
        <circle key={r} cx="112" cy="96" r={r} fill="none" stroke={C.ink3} strokeWidth="1" />
      ))}
      <circle cx="112" cy="96" r="20" fill={C.paper} />
      <circle cx="112" cy="96" r="3" fill={C.ink} />
      <path d="M182 22 L150 92" stroke={C.paper} strokeWidth="3" strokeLinecap="square" />
      <rect x="176" y="14" width="14" height="14" fill={C.paper} />
      <g fill={C.ink}>
        {Array.from({ length: 14 }).map((_, i) => {
          const h = 6 + Math.round(rand(i + 3) * 22);
          return <rect key={i} x={14 + i * 7} y={190 - h} width="4" height={h} />;
        })}
      </g>
    </svg>
  );
}

function FoodGraphic() {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
      <rect width="200" height="200" fill={C.paper2} />
      <circle cx="96" cy="104" r="70" fill={C.paper} stroke={C.ink} strokeWidth="2" />
      <circle cx="96" cy="104" r="50" fill={C.ink} />
      <circle cx="80" cy="92" r="14" fill={C.signal} />
      <circle cx="110" cy="118" r="10" fill={C.paper} />
      <circle cx="114" cy="88" r="6" fill={C.paper} opacity="0.7" />
      <path d="M70 120 q10 -8 20 0 t20 0" stroke={C.paper} strokeWidth="2" fill="none" opacity="0.6" />
      <line x1="150" y1="20" x2="196" y2="150" stroke={C.ink} strokeWidth="4" strokeLinecap="square" />
      <line x1="164" y1="16" x2="200" y2="140" stroke={C.ink} strokeWidth="4" strokeLinecap="square" />
    </svg>
  );
}

function OutdoorGraphic() {
  return (
    <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 size-full" aria-hidden="true">
      <rect width="300" height="200" fill={C.paper} />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M0 ${70 + i * 16} C 60 ${50 + i * 16}, 120 ${90 + i * 16}, 180 ${62 + i * 16} S 270 ${80 + i * 16}, 300 ${60 + i * 16}`}
          fill="none"
          stroke={C.ink}
          strokeOpacity={0.12 + i * 0.05}
        />
      ))}
      <path d="M0 170 L70 92 L110 130 L170 58 L250 150 L300 110 L300 200 L0 200 Z" fill={C.ink} />
      <path d="M170 58 L150 82 L162 80 L172 92 L182 76 L192 84 Z" fill={C.paper} />
      <path d="M118 200 L152 146 L186 200 Z" fill={C.signal} />
      <path d="M152 146 L152 200" stroke={C.ink} strokeWidth="2" />
      <circle cx="248" cy="40" r="14" fill="none" stroke={C.ink} strokeWidth="2" />
    </svg>
  );
}

function PeopleGraphic() {
  const cols = 11;
  const rows = 4;
  return (
    <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
      <rect width="300" height="200" fill={C.ink2} />
      {Array.from({ length: rows }).flatMap((_, r) =>
        Array.from({ length: cols }).map((__, c) => {
          const x = 18 + c * 26 + (r % 2) * 13;
          const y = 34 + r * 44;
          const v = rand(r * 20 + c + 7);
          const color = v > 0.82 ? C.signal : C.paper;
          const op = v > 0.82 ? 1 : 0.25 + v * 0.55;
          return (
            <g key={`${r}-${c}`} fill={color} opacity={op}>
              <circle cx={x} cy={y} r="5" />
              <path d={`M${x - 8} ${y + 22} q0 -13 8 -13 q8 0 8 13 z`} />
            </g>
          );
        }),
      )}
    </svg>
  );
}

const tiles = [
  { no: "01", jp: "街", en: "City", Graphic: CityGraphic, area: "col-span-6 row-span-2 sm:col-span-4", tone: "dark" },
  { no: "02", jp: "音楽", en: "Music", Graphic: MusicGraphic, area: "col-span-3 sm:col-span-2", tone: "signal" },
  { no: "03", jp: "食", en: "Food", Graphic: FoodGraphic, area: "col-span-3 sm:col-span-2", tone: "light" },
  { no: "04", jp: "アウトドア", en: "Outdoor", Graphic: OutdoorGraphic, area: "col-span-3", tone: "light" },
  { no: "05", jp: "人の営み", en: "People", Graphic: PeopleGraphic, area: "col-span-3", tone: "dark" },
] as const;

export function HeroCollage() {
  return (
    <figure className="relative">
      <div className="grid auto-rows-[6.5rem] grid-cols-6 gap-[3px] bg-ink p-[3px] xs:auto-rows-[8rem] lg:auto-rows-[minmax(7.5rem,15vh)]">
        {tiles.map(({ no, jp, en, Graphic, area, tone }) => (
          <div key={no} className={`relative overflow-hidden ${area}`}>
            <Graphic />
            <span
              className={`absolute left-0 top-0 flex items-baseline gap-2 px-2.5 py-1.5 text-[0.8rem] font-bold leading-none ${
                tone === "dark" ? "bg-paper text-ink" : "bg-ink text-paper"
              }`}
            >
              <span className="font-mono text-[0.62rem] font-medium tracking-[0.1em] text-signal">{no}</span>
              {jp}
              <span className="sr-only">（{en}）</span>
            </span>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-mute">
        <span>Everyday we protect</span>
        <span aria-hidden="true" className="h-px flex-1 bg-ink/30" />
        <span>守りたい日常</span>
      </figcaption>
    </figure>
  );
}
