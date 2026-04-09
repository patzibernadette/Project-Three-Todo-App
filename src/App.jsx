import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import ContactInfo from './pages/ContactInfo';
import Workout from './pages/Workout';

function App() {
  return(
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/todos" element={<Workout />} />

        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
    
    </BrowserRouter>
  );
}



export default App
