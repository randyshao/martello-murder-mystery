import React from 'react';
import Map from './components/Map/Map';
import Bar from './components/Map/Bar';
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
       <Map />
    </div>
  );
}

export default App;
