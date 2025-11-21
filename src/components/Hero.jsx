// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section style={{ height: '400px', backgroundColor: '#F7F9FA', padding: '50px 40px', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '60%', backgroundColor: '#eee', backgroundImage: 'url(https://via.placeholder.com/800x400?text=Hero+Image)', backgroundSize: 'cover' }}>
        {/* Placeholder for Hero Image */}
      </div>
      <div style={{ backgroundColor: 'white', padding: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '400px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '10px' }}>Learning that gets you noticed</h2>
        <p style={{ fontSize: '18px' }}>Skills for your present (and your future). Get started with us.</p>
        <input type="text" placeholder="What do you want to learn?" style={{ width: '100%', padding: '10px', marginTop: '20px', border: '1px solid #000' }} />
      </div>
    </section>
  );
}