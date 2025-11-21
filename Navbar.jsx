// src/components/Navbar.jsx
import React from 'react';
import { NAV_DATA } from '../data.js';

// FIX: Ensure 'export default' is present
export default function Navbar() {
  const { businessLink, loginText, signupText } = NAV_DATA;
  return (
    <nav style={{ padding: '10px 40px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ color: '#A435F0', fontSize: '24px' }}>Udemy</h1>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button>{businessLink}</button>
        <button style={{ border: '1px solid black', padding: '5px 10px' }}>{loginText}</button>
        <button style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px' }}>{signupText}</button>
      </div>
    </nav>
  );
}