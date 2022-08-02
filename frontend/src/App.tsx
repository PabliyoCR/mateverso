import React from 'react';
import{ BrowserRouter, Routes, Route}from'react-router-dom' 
import GgbEditor from './components/GgbEditor/GgbEditor';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/layout/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ggb-editor" element={<GgbEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
