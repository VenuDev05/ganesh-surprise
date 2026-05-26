import React, { useState, useCallback } from 'react';

const CONFETTI_COLORS = ['#FFD93D','#FF6B6B','#6BCB77','#4D96FF','#C77DFF','#FF8C42','#00C9FF','#FF61D2'];

function Confetti({ active }) {
  if (!active) return null;
  const pieces = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x:        Math.random() * 100,
    size:     Math.random() * 11 + 5,
    color:    CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    delay:    Math.random() * 2.5,
    duration: Math.random() * 3 + 2.5,
    shape:    Math.random() > 0.5 ? '50%' : Math.random() > 0.5 ? '2px' : '0%',
    rotation: Math.random() * 360,
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999, overflow: 'hidden' }}>
      {pieces.map(p => (
        <div
          key={p.id}
          style={{
            position:         'absolute',
            top:              '-15px',
            left:             `${p.x}%`,
            width:            p.size,
            height:           p.size,
            borderRadius:     p.shape,
            background:       p.color,
            transform:        `rotate(${p.rotation}deg)`,
            animation:        `confettiFall ${p.duration}s ${p.delay}s linear forwards`,
            opacity:          0.9,
          }}
        />
      ))}
    </div>
  );
}

export default function BirthdayFooter() {
  const [confetti, setConfetti] = useState(false);
  const [clicked,  setClicked]  = useState(false);

  const celebrate = useCallback(() => {
    setConfetti(true);
    setClicked(true);
    setTimeout(() => setConfetti(false), 5000);
    setTimeout(() => setClicked(false), 800);
  }, []);

  return (
    <>
      <Confetti active={confetti} />

      <footer style={{
        padding:   '110px 2rem 80px',
        textAlign: 'center',
        position:  'relative',
        zIndex:    1,
      }}>
        {/* Decorative ring */}
        <div style={{
          position:     'absolute',
          top:          '50%',
          left:         '50%',
          transform:    'translate(-50%, -50%)',
          width:        500,
          height:       500,
          borderRadius: '50%',
          border:       '1px solid rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position:     'absolute',
          top:          '50%',
          left:         '50%',
          transform:    'translate(-50%, -50%)',
          width:        340,
          height:       340,
          borderRadius: '50%',
          border:       '1px solid rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }} />

        {/* Big birthday text */}
        <h2 style={{
          fontFamily:             "'Abril Fatface', cursive",
          fontSize:               'clamp(42px, 10vw, 108px)',
          background:             'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 30%, #C77DFF 65%, #4D96FF 100%)',
          WebkitBackgroundClip:   'text',
          WebkitTextFillColor:    'transparent',
          backgroundClip:         'text',
          lineHeight:             1.1,
          marginBottom:           20,
          filter:                 'drop-shadow(0 0 40px rgba(199,125,255,0.2))',
        }}>
          Happy Birthday,<br />Ganesh! 🎂
        </h2>

        <p style={{
          color:        'rgba(255,255,255,0.55)',
          fontSize:     18,
          marginBottom: 48,
          lineHeight:   1.7,
          maxWidth:     460,
          margin:       '0 auto 48px',
        }}>
          June 2nd will always be extra special because of you.<br />
          Here's to another incredible year! 🥂✨
        </p>

        {/* Big celebrate button */}
        <button
          onClick={celebrate}
          className="anim-pulse"
          style={{
            background:   clicked
              ? 'linear-gradient(135deg, #6BCB77, #4D96FF)'
              : 'linear-gradient(135deg, #FFD93D, #FF6B6B)',
            border:       'none',
            borderRadius: 100,
            padding:      '18px 48px',
            color:        '#fff',
            fontSize:     20,
            fontWeight:   700,
            cursor:       'pointer',
            transition:   'transform 0.2s, background 0.4s',
            transform:    clicked ? 'scale(0.94)' : 'scale(1)',
            letterSpacing: '0.02em',
          }}
          onMouseEnter={e => { if (!clicked) e.currentTarget.style.transform = 'scale(1.07)'; }}
          onMouseLeave={e => { if (!clicked) e.currentTarget.style.transform = 'scale(1)'; }}
        >
          🎉 Celebrate Ganesh!
        </button>

        {/* Subtitle */}
        <p style={{
          color:     'rgba(255,255,255,0.2)',
          fontSize:  13,
          marginTop: 48,
        }}>
          Made with 💛 by your friend — always proud of you.
        </p>
      </footer>
    </>
  );
}
