import React from 'react';
import './App.css';

import MainContainer from './components/Container'
import SideBar from './components/sidebar';

function App() {
  return (
    <div style={{display: 'flex'}}>
     <SideBar />
     <MainContainer />
    </div>
  );
}

export default App;
