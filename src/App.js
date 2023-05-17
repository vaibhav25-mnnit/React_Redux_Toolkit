import React from 'react';
import Calculater from './features/calculater/Calculater';
import Articles from './features/articles/Articles';
import Home from './components/Home';


import './App.css';
import Shopping from './components/Shopping';

import {
  Routes, Route
} from 'react-router-dom';

function App() {
  return (<>


    <Routes>

      <Route exact path='/' element={<Home />} />

      <Route exact path='/cal' element={<Calculater />} />

      <Route exact path='/articles' element={<Articles />} />

      <Route exact path='/cart' element={<Shopping />} />

    </Routes>

  </>);
}

export default App;
