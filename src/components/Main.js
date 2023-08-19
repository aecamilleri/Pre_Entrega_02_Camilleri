import { Route, Routes } from 'react-router-dom'; 
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer'; 
import SpeciesDetail from './SpeciesDetail'; 

function Main() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category-species/:name" element={<SpeciesDetail />} />
      </Routes>
    </main>
  );
}

export default Main;
