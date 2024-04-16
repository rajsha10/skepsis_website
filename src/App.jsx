import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import About from './components/About';
import ClubS from './components/ClubS';
import Team from './components/Team';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<>
            <Container />
            <About />
            <ClubS />
            <Team />
          </>}>
          </Route>
        </Routes>
      </Router>
    </>
    
  )
}

export default App
