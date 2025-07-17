import { useEffect, useState } from 'react';
import './ProduitsList.css'; 
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
    <div className="App-produit">

      {/* <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Retour
      </button> */}
      <header className="hero-section-produit">
        <div className="hero-content-image">
            <div className="title">
                <h1>Délicieuses pâtisseries</h1>
            </div>
            
        </div>

        <div className="hero-content-produit">
            <p className="subtitle-produit">NOS PRODUITS</p>
          <div className="produits-grid">
            {produits.map(p => (
              <div key={p.id_produit} className="produit-card-produit">
                <div className="produit-image-container-produit">
                 <img 
                        src={`/images/${p.image_produit}`} 
                        alt={p.nom_produit}
                        className="produit-image"
                        onError={(e) => {
                          e.target.onerror = null; // évite boucle infinie
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
