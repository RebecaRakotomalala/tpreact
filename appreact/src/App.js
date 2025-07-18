import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VendeursList from './components/VendeursList';
import ProduitsList from './components/ProduitsList';
import ProduitSaveur from './components/ProduitSaveur';
import Vente from './components/Vente';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendeurs" element={<VendeursList />} />
        <Route path="/produits" element={<ProduitsList />} />
        <Route path="/produitsSaveur" element={<ProduitSaveur />} />
        <Route path="/vente" element={<Vente />} />
      </Routes>
    </Router>
  );
}

export default App;
