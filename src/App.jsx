import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
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
          </>}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
