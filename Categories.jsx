// src/components/Categories.jsx
import React, { useState } from 'react';
import Courses from './Courses.jsx'; // CRITICAL: Ensure the extension is included

export default function Categories({ data }) {
  // Initialize state with the ID of the first tab
  const [activeTabId, setActiveTabId] = useState(data[0].id);

  // Find the data object for the currently active tab
  const activeTabData = data.find(tab => tab.id === activeTabId);

  const handleTabClick = (id) => {
    setActiveTabId(id);
  };

  // Styles for active/inactive tabs
  const tabStyle = (id) => ({
    padding: '10px 15px',
    marginRight: '15px',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: id === activeTabId ? 'bold' : 'normal',
    color: id === activeTabId ? 'black' : '#6a6f73',
    borderBottom: id === activeTabId ? '3px solid black' : 'none',
  });

  return (
    <section style={{ padding: '40px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>A broad selection of courses</h2>
      
      {/* 1. Category Tabs */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {data.map(tab => (
          <span 
            key={tab.id} 
            style={tabStyle(tab.id)} 
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </span>
        ))}
      </div>

      {/* 2. Course Content (Headline and List) */}
      <div style={{ border: '1px solid #ddd', padding: '30px', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>{activeTabData.headline}</h3>
        <p style={{ fontSize: '16px', margin: '0 0 20px 0' }}>{activeTabData.description}</p>
        
        <Courses courses={activeTabData.courses} />
      </div>
    </section>
  );
}