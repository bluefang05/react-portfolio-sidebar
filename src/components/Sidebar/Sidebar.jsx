import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><button onClick={() => {}}>Home</button></li>
        <li><button onClick={() => {}}>About Me</button></li>
        <li><button onClick={() => {}}>Projects</button></li>
        <li><button onClick={() => {}}>Contact</button></li>
      </ul>
    </aside>
  );
}

export default Sidebar;