// src/components/TrustedCompanies.jsx
import React from 'react';

export default function TrustedCompanies({ companies }) {
  return (
    <section style={{ backgroundColor: '#F7F9FA', padding: '40px 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', color: '#6a6f73', marginBottom: '30px' }}>
        Trusted by over 17,000 companies and millions of learners around the world
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
        {companies.map(company => (
          <img
            key={company.id}
            src={`https://via.placeholder.com/100x40?text=${company.name}`} 
            alt={`${company.name} logo`}
            style={{ maxHeight: '40px', opacity: 0.7 }}
          />
        ))}
      </div>
    </section>
  );
}