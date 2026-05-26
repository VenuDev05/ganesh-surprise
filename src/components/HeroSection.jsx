import React from 'react';

function CountdownBadge() {
  const today = new Date();
  const isToday = today.getMonth() === 5 && today.getDate() === 2;

  return (
    <div className="anim-fade-slide-down" style={{
      display:        'inline-flex',
      alignItems:     'center',
      gap:            8,
      background:     'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      border:         '1px solid rgba(255,255,255,0.2)',
      borderRadius:   100,
      padding:        '8px 22px',
      color:          '#fff',
      fontSize:       14,
      fontWeight:     500,
      marginBottom:   28,
      animationDelay: '0.2s',
    }}>
      <span style={{ fontSize: 20 }}>🎂</span>
      {isToday
        ? '🎉 Happy Birthday Ganesh! Today is your day! 🎉'
        : ` June 2nd ✨`}
    </div>
  );
}

export default function HeroSection() {


  const scrollDown = () =>
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{
      minHeight:      '100vh',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      textAlign:      'center',
      padding:        '2rem',
      position:       'relative',
      zIndex:         1,
    }}>
      {/* Radial glow behind title */}
      <div style={{
        position:   'absolute',
        top:        '50%',
        left:       '50%',
        transform:  'translate(-50%, -60%)',
        width:      700,
        height:     700,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(199,125,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <CountdownBadge />

      {/* Main Name */}
      <div className="anim-fade-slide-up" style={{ animationDelay: '0.4s' }}>
        <h1 style={{
          fontFamily:             "'Abril Fatface', cursive",
          fontSize:               'clamp(72px, 16vw, 160px)',
          background:             'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 35%, #C77DFF 70%, #4D96FF 100%)',
          WebkitBackgroundClip:   'text',
          WebkitTextFillColor:    'transparent',
          backgroundClip:         'text',
          lineHeight:             1,
          marginBottom:           12,
          filter:                 'drop-shadow(0 0 50px rgba(199,125,255,0.25))',
          backgroundSize:         '200% auto',
          animation:              'shimmer 4s linear infinite',
        }}>
          Ganesh
        </h1>

        <p style={{
          fontSize:        'clamp(15px, 3.5vw, 26px)',
          color:           'rgba(255,255,255,0.8)',
          fontWeight:      300,
          letterSpacing:   '0.18em',
          textTransform:   'uppercase',
          marginBottom:    36,
        }}>
          The Creative Genius Among Us
        </p>
      </div>

      {/* Tags */}
      <div
        className="anim-fade-slide-up"
        style={{
          display:         'flex',
          gap:             12,
          flexWrap:        'wrap',
          justifyContent:  'center',
          marginBottom:    56,
          animationDelay:  '0.7s',
        }}
      >
        {['Creator ✂️', 'Visionary 📸', 'Storyteller 🎨', 'Builder 💻'].map(tag => (
          <span key={tag} style={{
            background:     'rgba(255,255,255,0.08)',
            border:         '1px solid rgba(255,255,255,0.18)',
            color:          '#fff',
            borderRadius:   100,
            padding:        '7px 20px',
            fontSize:       14,
            backdropFilter: 'blur(10px)',
            transition:     'background 0.3s, transform 0.3s',
            cursor:         'default',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background  = 'rgba(255,255,255,0.16)';
              e.currentTarget.style.transform   = 'scale(1.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background  = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform   = 'scale(1)';
            }}
          >{tag}</span>
        ))}
      </div>

      {/* Scroll arrow */}
      <button
        className="anim-bounce"
        onClick={scrollDown}
        aria-label="Scroll down"
        style={{
          width:          56,
          height:         56,
          borderRadius:   '50%',
          background:     'rgba(255,255,255,0.08)',
          border:         '1.5px solid rgba(255,255,255,0.25)',
          color:          '#fff',
          fontSize:       22,
          cursor:         'pointer',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          animationDelay: '1.5s',
          transition:     'background 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
      >
        ↓
      </button>
    </section>
  );
}
