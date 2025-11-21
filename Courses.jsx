// src/components/Courses.jsx
import React from 'react';
import CourseCard from './CourseCard.jsx'; // CRITICAL: Ensure the extension is included

export default function Courses({ courses }) {
  if (!courses || courses.length === 0) {
    return <p>No courses available for this category.</p>;
  }

  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '20px 0' }}>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}