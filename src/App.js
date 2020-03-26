import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './component1.js';
import Component2 from './component2.js';
import Component3 from './component3.js';


function App() {
  return (
      <div className='App'>
        <Component1/>
        <img src={logo} className='App-logo' alt=""/>
        <Component2/>
        <Component3/>
      </div>
  );
}

export default App;
