import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BannerPage } from './Pages';
import './App.css';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BannerPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
