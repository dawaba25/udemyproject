// src/components/CourseCard.jsx
import React from 'react';

export default function CourseCard({ course }) {
  const isBestseller = course.bestseller;
  
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '250px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '150px', backgroundColor: '#ccc', marginBottom: '10px' }}>
        {/* Placeholder for Course Image */}
      </div>
      <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>{course.title}</h4>
      <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#6a6f73' }}>{course.author}</p>
      <div style={{ display: 'flex', alignItems: 'center', margin: '0 0 5px 0' }}>
        <span style={{ color: '#b4690e', fontWeight: 'bold' }}>{course.rating}</span>
        <span style={{ marginLeft: '5px', fontSize: '12px', color: '#6a6f73' }}>({course.reviews})</span>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{course.currentPrice}</span>
        <del style={{ color: '#6a6f73' }}>{course.originalPrice}</del>
      </div>
      {isBestseller && (
        <span style={{ backgroundColor: '#ECEB98', fontSize: '12px', padding: '2px 5px', marginTop: '5px', alignSelf: 'flex-start' }}>Bestseller</span>
      )}
    </div>
  );
}