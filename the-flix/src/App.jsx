// import { useState } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <section id="center">
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            {/* Add more routes here as needed */}
          </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
