import React, { useState, useEffect, useRef } from 'react';

const MESSAGES = [
  { emoji: '🌟', color: '#FFD93D', text: 'You see beauty where others see ordinary — that rare eye is the photographer in you, and it spills into everything you do.' },
  { emoji: '🎬', color: '#FF6B6B', text: 'Every edit you make transforms raw footage into pure emotion. You don\'t just cut clips — you craft feelings.' },
  { emoji: '🎨', color: '#C77DFF', text: 'Your designs don\'t just look good — they say something. That\'s a rare gift, and you carry it effortlessly.' },
  { emoji: '💻', color: '#4D96FF', text: 'You build things that last. Every line of code you write is purposeful, and the results speak for themselves.' },
  { emoji: '🤝', color: '#6BCB77', text: 'Most of all — you show up for the people around you. That makes you more than talented. It makes you one of the best.' },
];

function MessageCard({ msg, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
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
        background:     hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
        border:         `1px solid ${hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius:   22,
        padding:        '28px 32px',
        display:        'flex',
        alignItems:     'flex-start',
        gap:            22,
        textAlign:      'left',
        opacity:        visible ? 1 : 0,
        transform:      visible ? 'translateX(0)' : 'translateX(-30px)',
        transition:     `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s, background 0.3s, border-color 0.3s`,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        position:       'relative',
        overflow:       'hidden',
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position:     'absolute',
        left:         0,
        top:          '15%',
        height:       '70%',
        width:        3,
        background:   msg.color,
        borderRadius: '0 3px 3px 0',
        opacity:      hovered ? 1 : 0.4,
        transition:   'opacity 0.3s, height 0.4s',
      }} />

      <span style={{
        fontSize:    40,
        flexShrink:  0,
        animation:   hovered ? 'heartbeat 1.5s ease-in-out infinite' : 'none',
        lineHeight:  1,
        marginTop:   2,
      }}>
        {msg.emoji}
      </span>

      <p style={{
        color:      'rgba(255,255,255,0.82)',
        fontSize:   16,
        lineHeight: 1.8,
        margin:     0,
      }}>
        {msg.text}
      </p>
    </div>
  );
}

export default function MessageSection() {
  return (
    <section id="message" style={{ padding: '110px 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            color:         '#FF6B6B',
            fontSize:      12,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom:  14,
            fontWeight:    600,
          }}>
            A Message From Us
          </p>
          <h2 style={{
            fontFamily: "'Abril Fatface', cursive",
            fontSize:   'clamp(34px, 5.5vw, 60px)',
            color:      '#fff',
            lineHeight: 1.1,
          }}>
            Here's What We{' '}
            <span style={{
              background:           'linear-gradient(90deg, #FF6B6B, #C77DFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}>
              Admire About You
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {MESSAGES.map((msg, i) => (
            <MessageCard key={i} msg={msg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
