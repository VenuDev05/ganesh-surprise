import React from 'react';
import Navbar           from './components/Navbar';
import FloatingParticles from './components/FloatingParticles';
import HeroSection      from './components/HeroSection';
import SkillsSection    from './components/SkillsSection';
import PhotoGallery     from './components/PhotoGallery';
import MessageSection   from './components/MessageSection';
import BirthdayFooter   from './components/BirthdayFooter';

export default function App() {
  return (
    <div style={{
      minHeight:   '100vh',
      background:  'linear-gradient(160deg, #0a0a1a 0%, #111228 35%, #1a0a2e 65%, #091a1a 100%)',
      color:       '#fff',
      overflowX:   'hidden',
      position:    'relative',
    }}>
      {/* Ambient background blobs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position:     'absolute',
          top:          '10%',
          left:         '-10%',
          width:        600,
          height:       600,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(199,125,255,0.07) 0%, transparent 70%)',
        }} />
        <div style={{
          position:     'absolute',
          top:          '55%',
          right:        '-8%',
          width:        500,
          height:       500,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(77,150,255,0.06) 0%, transparent 70%)',
        }} />
        <div style={{
          position:     'absolute',
          bottom:       '5%',
          left:         '30%',
          width:        400,
          height:       400,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(255,107,107,0.05) 0%, transparent 70%)',
        }} />
      </div>

      <FloatingParticles />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <SkillsSection />
        <PhotoGallery />
        <MessageSection />
        <BirthdayFooter />
      </main>
    </div>
  );
}
