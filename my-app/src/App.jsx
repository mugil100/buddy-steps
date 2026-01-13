import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Category from './pages/Category'
import Lesson from './pages/Lesson'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:type" element={<Category />} />
          <Route path="/lesson/:type/:id" element={<Lesson />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
