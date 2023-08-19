import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CategorySpecies from './components/CategorySpecies'; 

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Main /> 
      <Routes>
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/category-species" element={<CategorySpecies />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;