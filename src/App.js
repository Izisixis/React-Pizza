import './scss/app.scss';

import Header from './components/Header';
import React from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
