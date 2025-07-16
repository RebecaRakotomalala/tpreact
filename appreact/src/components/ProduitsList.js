import { useEffect, useState } from 'react';
import './VendeursList.css'; 
import { useNavigate } from 'react-router-dom';

function ProduitsList() {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/produitsSaveur'); 
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/produits')
      .then((res) => res.json())
      .then((data) => {
        console.log("Reçus:", data);
        setProduits(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Liste des produits</h1>
          <ul>
            {produits.map(p => (
              <li key={p.id_produit}>{p.nom_produit}</li>
            ))}
          </ul>
        </div>
        <div className="cta-buttons">
            <button className="primary-btn" onClick={handleClick}>
              Produit / Saveur
            </button>
          </div>
      </header>
    </div>
  );
}

export default ProduitsList;
