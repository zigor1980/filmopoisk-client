import React from 'react';
import './styles.css';

export default function Sidebar({ children }) {
  return (
    <div className="sidebar">
      {children}
    </div>
  );
}
