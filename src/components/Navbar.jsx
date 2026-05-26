import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Skills',   href: '#skills'   },
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'Message',  href: '#message'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position:       'fixed',
      top:            16,
      left:           '50%',
      transform:      'translateX(-50%)',
      zIndex:         900,
      background:     scrolled ? 'rgba(10,10,26,0.75)' : 'rgba(10,10,26,0.3)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border:         `1px solid ${scrolled ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
      borderRadius:   100,
      padding:        '10px 28px',
      display:        'flex',
      alignItems:     'center',
      gap:            32,
      transition:     'background 0.4s, border-color 0.4s',
    }}>
      {/* Logo */}
      <span style={{
        fontFamily:  "'Abril Fatface', cursive",
        fontSize:    18,
        background:  'linear-gradient(90deg, #FFD93D, #FF6B6B)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:  'transparent',
        backgroundClip:       'text',
      }}>
        G ✦
      </span>

      {NAV_LINKS.map(link => (
        <a
          key={link.href}
          href={link.href}
          onClick={e => scrollTo(e, link.href)}
          style={{
            color:          'rgba(255,255,255,0.65)',
            textDecoration: 'none',
            fontSize:       14,
            fontWeight:     500,
            transition:     'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
