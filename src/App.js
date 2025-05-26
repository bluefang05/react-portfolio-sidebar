import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import MainContent from './components/MainContent/MainContent.jsx';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <div className="app">
      <Header />
      <div className="layout">
        <Sidebar onSelect={setSelectedPage} />
        <MainContent page={selectedPage} />
      </div>
    </div>
  );
}

export default App;