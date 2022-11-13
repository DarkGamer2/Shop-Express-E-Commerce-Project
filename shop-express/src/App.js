import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Laptops from './Pages/Laptops';
import Electronics from './Pages/Electronics';
import ComputerParts from './Pages/ComputerParts';
import Login from './Pages/Login';
const App=()=>{
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="laptops" element={<Laptops/>}/>
          <Route path="electronics" element={<Electronics/>}/>
          <Route path="computerparts" element={<ComputerParts/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
};
export default App;
