import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BannerPage, FormPage } from './Pages';
import ScrollToTop from './Constants/ScrollToTop';
import './App.css';

function App() {

  return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<BannerPage />} />
          <Route path='/form' element={<FormPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
