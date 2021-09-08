import React from 'react';

import './App.css';
import Header from '../components/Header/Header';


import RoutesPrivate from '../components/Routes/Routes';



const App = () => { 

  return (
    <>
      <Header/>
      <div className="container">     
        <RoutesPrivate/>
      </div>
    </>
    
  )
}

export default App;