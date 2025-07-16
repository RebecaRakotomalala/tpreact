import { useEffect, useState } from 'react';
import './VendeursList.css'; 
import { useNavigate } from 'react-router-dom';

function ProduitsList() {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/produits');
        const data = await response.json();
        console.log("Reçus:", data);
        setProduits(data);
      } catch (err) {
        console.error("Erreur :", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduits();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="App">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Retour
      </button>
      <header className="hero-section">
        <div className="hero-content">
        <h1>Nos délicieuses pâtisseries</h1>
          <div className="produits-grid">
            {produits.map(p => (
              <div key={p.id_produit} className="produit-card">
                <div className="produit-image-container">
                <img 
                  src={`/images/${p.image_produit}`} 
                  alt={p.nom_produit}
                  className="produit-image"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
                </div>
                <h3>{p.nom_produit}</h3>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default ProduitsList;
