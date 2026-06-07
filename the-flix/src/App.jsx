// import { useState } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import LoginScreen from './components/LoginScreen/LoginScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <section id="center">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
