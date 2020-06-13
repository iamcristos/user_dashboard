import React from 'react';
import './App.css';

import Header from './components/header'
import SideBar from './components/sidebar';

function App() {
  return (
    <div style={{display: 'flex'}}>
     <SideBar />
     <Header />
    </div>
  );
}

export default App;
