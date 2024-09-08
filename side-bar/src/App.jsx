import React from 'react'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";


function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} >
                  <Route path="/about" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/about" element={<About />} />
              </Route>
          </Routes>
      </Router>

  )
}

export default App
