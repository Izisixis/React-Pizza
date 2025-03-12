import './scss/app.scss';

import Header from './components/Header/Header';
import React, { createContext, useState } from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';

export const SearchContext = createContext();
function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
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
      </SearchContext.Provider>
    </div>
  );
}

export default App;
