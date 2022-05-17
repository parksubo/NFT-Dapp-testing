import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Breeding from './routes/Breeding/Breeding';
import Game from './routes/Game/Game';
import Main from './routes/Main/Main';
import Marketplace from './routes/Marketplace/Marketplace';
import MyNFTPage from './routes/MyNFTPage/MyNFTPage';
const App: FC = () => {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/MyNFTPage" element={<MyNFTPage />} />
          <Route path="/Breeding" element={<Breeding />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

export default App;
