import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/VendeursList.css';

function ProduitSaveur() {
  const saveurRef = useRef();
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    saveurRef.current?.focus();
  }, []);

  const chercherProduits = (e) => {
    e.preventDefault();
    const nomSaveur = saveurRef.current.value.trim();

    if (!nomSaveur) {
      setError("Veuillez entrer un nom de saveur.");
      setProduits([]);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`http://localhost:8000/api/produits/saveur/${nomSaveur}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur réseau");
        return res.json();
      })
      .then((data) => {
        setProduits(data);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setError("Aucun produit trouvé ou erreur réseau.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Retour
      </button>
      <header className="hero-section">
        <div className="hero-content">
          <h1>Rechercher des produits par saveur</h1>

          <form onSubmit={chercherProduits} className="search-form">
            <input
              type="text"
              ref={saveurRef}
              placeholder="Ex: Nature, Chocolat, etc."
              className="search-input"
            />
            <button type="submit" className="primary-btn search-button">
              Rechercher
            </button>
          </form>

          {loading && <p>Chargement...</p>}
          {error && <p className="error-message">{error}</p>}

          {produits.length > 0 && (
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
          )}
        </div>
      </header>
    </div>
  );
}

export default ProduitSaveur;