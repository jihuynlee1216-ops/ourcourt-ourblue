"use client";

/**
 * Stylized silhouette of a tennis player in a blue national-team jersey.
 * Used as a placeholder when a real photo for the player is not yet
 * available. Designed to look intentional — initial of the player +
 * jersey + racket — rather than a generic gray box.
 */
type Props = {
  initial: string;
  className?: string;
};

export function PlayerSilhouette({ initial, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="silhBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1E47E0" />
          <stop offset="100%" stopColor="#0F2270" />
        </linearGradient>
        <linearGradient id="silhJersey" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4A75FF" />
          <stop offset="100%" stopColor="#1A38B8" />
        </linearGradient>
      </defs>

      <rect width="400" height="260" fill="url(#silhBg)" />

      {/* court grid */}
      <g stroke="rgba(255,255,255,.16)" strokeWidth="1">
        {[...Array(8)].map((_, i) => (
          <line key={"v" + i} x1={i * 50} y1="0" x2={i * 50} y2="260" />
        ))}
        {[...Array(6)].map((_, i) => (
          <line key={"h" + i} x1="0" y1={i * 50} x2="400" y2={i * 50} />
        ))}
      </g>

      {/* big initial behind */}
      <text
        x="200"
        y="170"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontSize="220"
        fill="rgba(255,255,255,0.07)"
      >
        {initial}
      </text>

      {/* tennis player silhouette */}
      <g transform="translate(200 80)" fill="#0F2270" opacity="0.85">
        {/* head */}
        <circle cx="0" cy="0" r="18" fill="#0F2270" />
        {/* shoulders + jersey */}
        <path
          d="M-46 22 Q-58 60 -50 96 L50 96 Q58 60 46 22 Q26 18 0 18 Q-26 18 -46 22 Z"
          fill="url(#silhJersey)"
          stroke="#0F2270"
          strokeWidth="2"
        />
        {/* jersey number */}
        <text
          x="0"
          y="74"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="900"
          fontSize="34"
          fill="#ffffff"
        >
          {initial}
        </text>
        {/* right arm + racket */}
        <path d="M44 28 Q70 32 78 14" stroke="#0F2270" strokeWidth="10" fill="none" strokeLinecap="round" />
        <g transform="translate(72 -22) rotate(20)">
          <ellipse cx="0" cy="0" rx="18" ry="22" fill="#ffffff" stroke="#0F2270" strokeWidth="2.5" />
          <line x1="0" y1="22" x2="0" y2="46" stroke="#0F2270" strokeWidth="6" strokeLinecap="round" />
        </g>
      </g>

      {/* small tennis ball */}
      <circle cx="60" cy="220" r="14" fill="#C8E04A" stroke="#7B9B17" strokeWidth="1.5" />
      <path d="M48 218 Q60 224 72 218" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* highlight gradient overlay */}
      <rect width="400" height="260" fill="url(#silhBg)" opacity="0" />
    </svg>
  );
}
