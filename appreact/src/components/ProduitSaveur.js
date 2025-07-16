import { useEffect, useRef, useState } from 'react';
import './VendeursList.css';

function ProduitSaveur() {
  const saveurRef = useRef();
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      <header className="hero-section">
        <div className="hero-content">
          <h1>Rechercher des produits par saveur</h1>

          <form onSubmit={chercherProduits} style={{ marginBottom: "1em" }}>
            <input
              type="text"
              ref={saveurRef}
              placeholder="Ex: Nature"
              style={{ padding: "8px", marginRight: "10px" }}
            />
            <button type="submit" className="primary-btn">
              Rechercher
            </button>
          </form>

          {loading && <p>Chargement...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <ul>
            {produits.map(p => (
              <li key={p.id_produit}>
                {p.nom_produit}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default ProduitSaveur;
