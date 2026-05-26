import React, { useState, useRef, useEffect } from 'react';
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'

const PLACEHOLDER_MEMORIES = [
  { id: 'p1', title: 'The First Pic', src:img1,    gradient: 'linear-gradient(135deg,#f6d365,#fda085)', emoji: '🌅' },
  { id: 'p2', title: 'Behind Everyone', src:img2,    gradient: 'linear-gradient(135deg,#a1c4fd,#c2e9fb)', emoji: '😂' },
  { id: 'p3', title: 'Together', src:img6,    gradient: 'linear-gradient(135deg,#fd746c,#ff9068)', emoji: '📷' },
  { id: 'p4', title: 'Funny Moments', src:img4,   gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', emoji: '🎬' },
  { id: 'p5', title: 'All of Us',     src:img5,     gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', emoji: '🌃' },
  { id: 'p6', title: 'The Last Pic', src:img3,     gradient: 'linear-gradient(135deg,#f093fb,#f5576c)', emoji: '🥳' },
];

function PhotoCard({ photo, index, onClick }) {
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
      onClick={() => onClick(photo)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius:   22,
        overflow:       'hidden',
        cursor:         'pointer',
        position:       'relative',
        aspectRatio:    '4 / 3',
        background:     photo.gradient || '#1a1a2e',
        opacity:        visible ? 1 : 0,
        transform:      visible
          ? (hovered ? 'scale(1.05) rotate(-1.2deg)' : 'scale(1) rotate(0)')
          : 'translateY(40px) scale(0.95)',
        transition:     'opacity 0.6s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        transitionDelay: `${index * 0.08}s`,
        boxShadow:      hovered ? '0 24px 64px rgba(0,0,0,0.55)' : '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      {/* Real uploaded photo */}
      {photo.src && (
        <img
          src={photo.src}
          alt={photo.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}

      {/* Placeholder emoji */}
      {!photo.src && (
        <div style={{
          position:       'absolute',
          inset:          0,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       56,
          opacity:        0.45,
        }}>
          {photo.emoji}
        </div>
      )}

      {/* Hover overlay */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: 'rgba(0,0,0,0.25)',
        opacity:    hovered ? 1 : 0,
        transition: 'opacity 0.3s',
        display:    'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:   32,
      }}>
        
      </div>

      {/* Caption bar */}
      <div style={{
        position:   'absolute',
        bottom:     0,
        left:       0,
        right:      0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
        padding:    '48px 18px 18px',
        transform:  hovered ? 'translateY(0)' : 'translateY(8px)',
        opacity:    hovered ? 1 : 0.8,
        transition: 'transform 0.3s, opacity 0.3s',
      }}>
        <div style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>{photo.title}</div>
        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, marginTop: 3 }}>{photo.date}</div>
      </div>
    </div>
  );
}

function LightBox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft')  onPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      onClick={onClose}
      style={{
        position:       'fixed',
        inset:          0,
        background:     'rgba(0,0,0,0.92)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        zIndex:         1000,
        padding:        24,
        animation:      'fadeIn 0.3s ease',
      }}
    >
      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev(); }}
        style={navBtnStyle('left')}
        aria-label="Previous photo"
      >‹</button>

      {/* Card */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background:    '#141428',
          borderRadius:  28,
          overflow:      'hidden',
          maxWidth:      750,
          width:         '100%',
          animation:     'scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow:     '0 40px 100px rgba(0,0,0,0.7)',
        }}
      >
        {/* Image area */}
        <div style={{
          width:          '100%',
          aspectRatio:    '16 / 9',
          background:     photo.gradient || '#0a0a1a',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       80,
          overflow:       'hidden',
        }}>
          {photo.src
            ? <img src={photo.src} alt={photo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <span style={{ opacity: 0.5 }}>{photo.emoji}</span>
          }
        </div>

        {/* Footer */}
        <div style={{
          padding:        '20px 28px',
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
        }}>
          <div>
            <div style={{ color: '#fff', fontFamily: "'Abril Fatface', cursive", fontSize: 22 }}>
              {photo.title}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 4 }}>
              {photo.date}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background:     'rgba(255,255,255,0.08)',
              border:         '1px solid rgba(255,255,255,0.15)',
              borderRadius:   '50%',
              width:          42,
              height:         42,
              color:          '#fff',
              fontSize:       20,
              cursor:         'pointer',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              transition:     'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >×</button>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext(); }}
        style={navBtnStyle('right')}
        aria-label="Next photo"
      >›</button>
    </div>
  );
}

const navBtnStyle = (side) => ({
  position:       'absolute',
  [side]:         24,
  top:            '50%',
  transform:      'translateY(-50%)',
  background:     'rgba(255,255,255,0.1)',
  border:         '1px solid rgba(255,255,255,0.2)',
  borderRadius:   '50%',
  width:          52,
  height:         52,
  color:          '#fff',
  fontSize:       28,
  cursor:         'pointer',
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  transition:     'background 0.2s',
  zIndex:         10,
});

export default function PhotoGallery() {
  const [uploads,  setUploads]  = useState([]);
  const [selected, setSelected] = useState(null);
  const [selIdx,   setSelIdx]   = useState(0);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef();

  const allPhotos = [...PLACEHOLDER_MEMORIES, ...uploads];

  const openPhoto = (photo) => {
    const idx = allPhotos.findIndex(p => p.id === photo.id);
    setSelIdx(idx);
    setSelected(photo);
  };

  const goNext = () => {
    const next = (selIdx + 1) % allPhotos.length;
    setSelIdx(next);
    setSelected(allPhotos[next]);
  };

  const goPrev = () => {
    const prev = (selIdx - 1 + allPhotos.length) % allPhotos.length;
    setSelIdx(prev);
    setSelected(allPhotos[prev]);
  };

  const handleFiles = (files) => {
    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUploads(prev => [...prev, {
          id:       `u-${Date.now()}-${Math.random()}`,
          title:    file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
          date:     'Just added 💛',
          src:      ev.target.result,
          gradient: null,
          emoji:    '📸',
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <section
      id="gallery"
      style={{ padding: '110px 2rem', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{
            color:         '#6BCB77',
            fontSize:      12,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom:  14,
            fontWeight:    600,
          }}>
            Our Shared Moments
          </p>
          <h2 style={{
            fontFamily: "'Abril Fatface', cursive",
            fontSize:   'clamp(36px, 6vw, 66px)',
            color:      '#fff',
            lineHeight: 1.1,
            marginBottom: 28,
          }}>
            Memories We{' '}
            <span style={{
              background:           'linear-gradient(90deg, #6BCB77, #4D96FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}>
              Made Together
            </span>
          </h2>

          {/* Upload button */}
          <button
            onClick={() => fileRef.current.click()}
            style={{
              background:  'linear-gradient(135deg, #6BCB77, #4D96FF)',
              border:      'none',
              borderRadius: 100,
              padding:     '13px 32px',
              color:       '#fff',
              fontSize:    15,
              fontWeight:  700,
              cursor:      'pointer',
              display:     'inline-flex',
              alignItems:  'center',
              gap:         8,
              boxShadow:   '0 8px 28px rgba(107,203,119,0.4)',
              transition:  'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform  = 'scale(1.06)';
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(107,203,119,0.55)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform  = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(107,203,119,0.4)';
            }}
          >
            📁 Add Our Photos
          </button>
          <input
            ref={fileRef}
            type="file"
            multiple
            accept="image/*"
            onChange={e => handleFiles(e.target.files)}
            style={{ display: 'none' }}
          />
        </div>

        {/* Drag-drop zone */}
        <div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          style={{
            border:         `2px dashed ${dragging ? '#6BCB77' : 'rgba(255,255,255,0.12)'}`,
            borderRadius:   20,
            padding:        '24px',
            textAlign:      'center',
            marginBottom:   40,
            background:     dragging ? 'rgba(107,203,119,0.06)' : 'transparent',
            transition:     'border-color 0.3s, background 0.3s',
            color:          'rgba(255,255,255,0.35)',
            fontSize:       14,
          }}
        >
          {dragging ? '🟢 Drop photos here!' : '🖼️ Or drag & drop photos here'}
        </div>

        {/* Grid */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap:                 20,
        }}>
          {allPhotos.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} onClick={openPhoto} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <LightBox
          photo={selected}
          onClose={() => setSelected(null)}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </section>
  );
}
