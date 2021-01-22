import React from 'react'
import './App.css';

import NavBar from './Components/NavBar/NavBar'
import Main from './Components/Main/Main.js'




function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      
      <main>
        <Main/>
      </main>
    </div>
  );
}

export default App;
