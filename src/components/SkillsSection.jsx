import React, { useState, useEffect, useRef } from 'react';

const SKILLS = [
  {
    icon:  '✂️',
    label: 'Editing',
    desc:  'Crafting raw footage into cinematic stories — every cut is intentional, every frame counts.',
    color: '#FF6B6B',
    glow:  'rgba(255,107,107,0.35)',
  },
  {
    icon:  '📸',
    label: 'Photography',
    desc:  'Capturing fleeting moments with an eye that sees beauty where others see ordinary.',
    color: '#FFD93D',
    glow:  'rgba(255,217,61,0.35)',
  },
  {
    icon:  '🎨',
    label: 'Designing',
    desc:  'Turning blank canvases into visual experiences that move people and tell stories.',
    color: '#6BCB77',
    glow:  'rgba(107,203,119,0.35)',
  },
  {
    icon:  '💻',
    label: 'Development',
    desc:  'Building the digital future line by line — elegant code, powerful outcomes.',
    color: '#4D96FF',
    glow:  'rgba(77,150,255,0.35)',
  },
];

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:     hovered
          ? `linear-gradient(145deg, ${skill.color}18, ${skill.color}32)`
          : 'rgba(255,255,255,0.04)',
        border:         `1px solid ${hovered ? skill.color + 'aa' : 'rgba(255,255,255,0.1)'}`,
        borderRadius:   28,
        padding:        '44px 32px',
        textAlign:      'center',
        cursor:         'default',
        transition:     'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform:      visible
          ? (hovered ? 'translateY(-14px) scale(1.04)' : 'translateY(0) scale(1)')
          : 'translateY(50px) scale(0.95)',
        opacity:        visible ? 1 : 0,
        transitionDelay: `${index * 0.12}s`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position:       'relative',
        overflow:       'hidden',
        boxShadow:      hovered ? `0 24px 60px ${skill.glow}` : 'none',
      }}
    >
      {/* Glow orb */}
      {hovered && (
        <div style={{
          position:   'absolute',
          inset:      0,
          background: `radial-gradient(circle at center, ${skill.color}22 0%, transparent 65%)`,
          animation:  'pulseGlow 1.6s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
      )}

      {/* Corner accent */}
      <div style={{
        position:     'absolute',
        top:          -1,
        right:        -1,
        width:        60,
        height:       60,
        borderRadius: '0 28px 0 60px',
        background:   hovered ? skill.color + '33' : 'transparent',
        transition:   'background 0.4s',
      }} />

      <div style={{
        fontSize:   54,
        marginBottom: 20,
        display:    'block',
        animation:  hovered ? 'wiggle 0.5s ease' : 'none',
        position:   'relative',
        zIndex:     1,
      }}>
        {skill.icon}
      </div>

      <h3 style={{
        fontFamily:  "'Abril Fatface', cursive",
        fontSize:    24,
        color:       hovered ? skill.color : '#fff',
        marginBottom: 14,
        transition:  'color 0.35s',
        position:    'relative',
        zIndex:      1,
      }}>
        {skill.label}
      </h3>

      <p style={{
        fontSize:   14,
        color:      'rgba(255,255,255,0.6)',
        lineHeight: 1.75,
        position:   'relative',
        zIndex:     1,
      }}>
        {skill.desc}
      </p>

      {/* Bottom accent bar */}
      <div style={{
        position:     'absolute',
        bottom:       0,
        left:         '50%',
        transform:    `translateX(-50%) scaleX(${hovered ? 1 : 0})`,
        width:        '60%',
        height:       3,
        background:   skill.color,
        borderRadius: '3px 3px 0 0',
        transition:   'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }} />
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '110px 2rem', position: 'relative', zIndex: 1 }}>
      {/* Background decoration */}
      <div style={{
        position:     'absolute',
        top:          '50%',
        left:         '50%',
        transform:    'translate(-50%, -50%)',
        width:        900,
        height:       900,
        borderRadius: '50%',
        background:   'radial-gradient(circle, rgba(77,150,255,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <p style={{
            color:          '#FFD93D',
            fontSize:       12,
            letterSpacing:  '0.25em',
            textTransform:  'uppercase',
            marginBottom:   14,
            fontWeight:     600,
          }}>
            What Makes Him Special
          </p>
          <h2 style={{
            fontFamily: "'Abril Fatface', cursive",
            fontSize:   'clamp(38px, 6vw, 68px)',
            color:      '#fff',
            lineHeight: 1.1,
            margin:     0,
          }}>
            A Man of{' '}
            <span style={{
              background:           'linear-gradient(90deg, #FFD93D, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}>
              Many Talents
            </span>
          </h2>
        </div>

        <div style={{
          display:               'grid',
          gridTemplateColumns:   'repeat(auto-fit, minmax(200px, 1fr))',
          gap:                   22,
        }}>
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.label} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
