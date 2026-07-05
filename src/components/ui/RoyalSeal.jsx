import { motion } from "motion/react";

// The signature motif: "Ashirwad" means blessing — this gold medallion reads
// as a wax-seal / blessing stamp, appearing in the hero (large, tilting in 3D)
// and echoed small beside section eyebrows and the "featured" package.
export default function RoyalSeal({ size = 220, spin = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sealGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F1D999" />
          <stop offset="50%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#8F6C31" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="94" fill="none" stroke="url(#sealGold)" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="url(#sealGold)" strokeWidth="1" opacity="0.6" />

      {spin && (
        <motion.g
          style={{ transformOrigin: "100px 100px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const r1 = 84;
            const r2 = 90;
            return (
              <line
                key={i}
                x1={100 + r1 * Math.cos(angle)}
                y1={100 + r1 * Math.sin(angle)}
                x2={100 + r2 * Math.cos(angle)}
                y2={100 + r2 * Math.sin(angle)}
                stroke="url(#sealGold)"
                strokeWidth="1.5"
              />
            );
          })}
        </motion.g>
      )}

      {/* Lotus / mandala center */}
      <g transform="translate(100,100)">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-32"
            rx="10"
            ry="34"
            fill="url(#sealGold)"
            opacity="0.85"
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle r="14" fill="#FBF6EE" stroke="url(#sealGold)" strokeWidth="2" />
      </g>
    </svg>
  );
}
