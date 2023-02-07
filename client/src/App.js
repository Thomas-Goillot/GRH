import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agent from './pages/Agent';
import Home from './pages/Home';
import Graph from './pages/Graph';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent/:num_agent" element={<Agent />} />
        <Route path="/Graph" element={<Graph/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;