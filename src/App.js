import React from 'react';
import Map from './components/Map/Map';
import Bar from './components/Map/Bar';
import Sidebar from './components/Map/Sidebar';
import './App.css';

function App() {
  // state = {
  //     currTime : 0
  // }
  return (
    <div className="App">
      <header>
        <Bar />
      </header>
        <Sidebar />
       <Map />
    </div>
  );
}

export default App;
