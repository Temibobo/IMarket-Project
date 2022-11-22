import React from 'react';
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Verify from './Pages/Verify';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


const App =() =>{

  return(
    <BrowserRouter>

    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/verify' element={<Verify/>}/>
    </Routes>

    </BrowserRouter>
  )

}

export default App;