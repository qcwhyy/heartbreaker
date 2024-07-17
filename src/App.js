
import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Buy from "./Buy";
import Promo from "./Promo";




function App() {
  return (
      <BrowserRouter>
          {/*<div className="app-wrapper">*/}
          {/*    <Promo/>*/}
          {/*    <Buy/>*/}
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path="/Buy.js" element={<Buy/>}/>
                      <Route path="/" element={<Promo/>}/>
                  </Routes>
              </div>
          {/*</div>*/}
      </BrowserRouter>


 );
}

export default App;