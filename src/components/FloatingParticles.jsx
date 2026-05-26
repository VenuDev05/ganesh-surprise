import React, { useMemo } from 'react';

const COLORS = ['#FFD93D', '#FF6B6B', '#6BCB77', '#4D96FF', '#FF8C42', '#C77DFF', '#00C9FF', '#FF61D2'];

export default function FloatingParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 35 }, (_, i) => ({
      id: i,
      size:     Math.random() * 7 + 3,
      x:        Math.random() * 100,
      delay:    Math.random() * 10,
      duration: Math.random() * 7 + 6,
      color:    COLORS[Math.floor(Math.random() * COLORS.length)],
      shape:    Math.random() > 0.6 ? '2px' : '50%',
    })),
  []);

  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', overflow: 'hidden', zIndex: 0,
    }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position:     'absolute',
            width:        p.size,
            height:       p.size,
            borderRadius: p.shape,
            background:   p.color,
            left:         `${p.x}%`,
            bottom:       '-12px',
            opacity:      0.65,
            animation:    `floatUp ${p.duration}s ${p.delay}s infinite ease-in`,
          }}
        />
      ))}
    </div>
  );
}
