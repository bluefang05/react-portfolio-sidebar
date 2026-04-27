import React from 'react';
import './Sidebar.css';

function Sidebar({ onSelect }) {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><button onClick={() => onSelect('home')}>Home</button></li>
        <li><button onClick={() => onSelect('about')}>About Me</button></li>
        <li><button onClick={() => onSelect('projects')}>Projects</button></li>
        <li><button onClick={() => onSelect('learning')}>Learning</button></li>
        <li><button onClick={() => onSelect('contact')}>Contact</button></li>
      </ul>
    </aside>
  );
}

export default Sidebar;