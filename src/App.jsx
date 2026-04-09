import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Contact from './pages/Contact';
import Todos from "./pages/Todos";
import Navbar from './components/Navbar';

function App() {
  return(
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todos" element={<Todos />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </BrowserRouter>
  );
}



export default App
