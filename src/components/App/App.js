import React from 'react';
//import './App.css';
import Header from '../Header';
import Splash from '../Splash/Splash.js';
import FilterBar from '../ExploreTutors/FilterBar/FilterBar.js';

function App() {



  return (
    <div className="App">
      <Header/>
      <Splash/>
      <FilterBar/>
    </div>
  );
}

export default App;
