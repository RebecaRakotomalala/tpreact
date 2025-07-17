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
    <div className="App-vente">
      {/* <button className="back-button-vente" onClick={() => navigate(-1)}>
        ⬅ Retour
      </button> */}
    <div className="vente-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Retour
      </button>-
      <h2>Liste des Ventes</h2>
      <table className="styled-table" border="1">
            <thead>
                  <tr>
                      <th> Produit </th>
                      <th> Client </th>
                      <th> Vendeur </th>
                      <th> Quantité </th>
                      <th> Prix </th>
                      <th> Date </th>
                  </tr>
            </thead>
            <tbody>
                   {ventes.map((vente) => (
          <tr key={vente.id_vente}>
            <td>{vente.nom_produit}</td>
            <td>{vente.nom_client}</td>
            <td>{vente.nom_vendeur}</td>
            <td>{vente.quantite}</td>
            <td>{vente.prix_vente}</td>
            <td>{formatDate(vente.date_vente)}</td>
          </tr>
        ))}
            </tbody>

      </table>

      
      {/* <ul>
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
      </ul> */}
      <h3>Total des ventes : {totalVentes.toLocaleString()} Ar</h3>
    </div>

    <div className="section-image-vente"> </div>

    </div>
  );
}

export default Vente;
