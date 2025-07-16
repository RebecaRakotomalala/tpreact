import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './vente.css';

function Vente() {
  const [ventes, setVentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  // Fonction mémorisée pour récupérer les ventes
  const fetchVentes = useCallback(() => {
    console.log("Appel à fetchVentes");
    setLoading(true);
    fetch('http://localhost:8000/api/ventes')
      .then((res) => {
        if (!res.ok) throw new Error("Erreur réseau");
        return res.json();
      })
      .then((data) => {
        setVentes(data);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setError("Impossible de charger les ventes.");
      })
      .finally(() => setLoading(false));
  }, []);

  // Exécuter fetch au chargement
  useEffect(() => {
    fetchVentes();
  }, [fetchVentes]);

  // useMemo pour calculer total des ventes (optimisé)
  const totalVentes = useMemo(() => {
    console.log("Calcul du total des ventes");
    return ventes.reduce((total, v) => total + parseFloat(v.prix_vente), 0);
  }, [ventes]);

  if (loading) return <p>Chargement des ventes...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="App">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Retour
      </button>
    <div className="vente-container">
      <h2>Liste des Ventes</h2>
      <ul>
        {ventes.map((v) => (
          <li key={v.id_vente}>
            Produit: <strong>{v.nom_produit}</strong> — 
            Client: <strong>{v.nom_client}</strong> — 
            Vendeur: <strong>{v.nom_vendeur}</strong> — 
            Quantité: {v.quantite} — 
            Prix: {v.prix_vente} Ar — 
            Date: {formatDate(v.date_vente)}
          </li>
        ))}
      </ul>
      <h3>Total des ventes : {totalVentes.toLocaleString()} Ar</h3>
    </div>
    </div>
  );
}

export default Vente;
