import React from 'react'
import './App.scss';
import AboutPanel from './Pages/AboutPanel';
import DesignPanel from './Pages/DesignPanel';


function App() {
  return (
    <div className="App">
      <div className='triple-column-layout'>
        <AboutPanel />
        <DesignPanel />
      </div>

    </div>
  );
}

export default App;
