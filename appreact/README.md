<!-- import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './vente.css';

function Vente() {
  const [ventes, setVentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState(new Set());

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const fetchVentes = useCallback(() => {
    setLoading(true);
    fetch('/ventes.json')
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

  useEffect(() => {
    fetchVentes();
  }, [fetchVentes]);

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const totalVentes = useMemo(() => {
    return ventes
      .filter((v) => selectedRows.has(v.id_vente))
      .reduce((total, v) => total + parseFloat(v.prix_vente), 0);
  }, [ventes, selectedRows]);

  if (loading) return <p>Chargement des ventes...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="App-vente">
      <div className="vente-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Retour
        </button>
        <h2>Liste des Ventes</h2>
        <table className="styled-table" border="1">
          <thead>
            <tr>
              <th>✔</th>
              <th>Produit</th>
              <th>Client</th>
              <th>Vendeur</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {ventes.map((vente) => (
              <tr
                key={vente.id_vente}
                className={selectedRows.has(vente.id_vente) ? 'selected' : ''}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.has(vente.id_vente)}
                    onChange={() => toggleRowSelection(vente.id_vente)}
                  />
                </td>
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
        <h3>Total des ventes sélectionnées : {totalVentes.toLocaleString()} Ar</h3>
      </div>

      <div className="section-image-vente"> </div>
    </div>
  );
}

export default Vente; -->
