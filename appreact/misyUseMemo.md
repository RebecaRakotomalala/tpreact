import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './vente.css';

function Vente() {
  console.log("🔄 COMPOSANT VENTE RE-RENDER");
  const [ventes, setVentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  // Utilisation de useRef pour les données qui ne nécessitent pas de re-render
  const selectedRowsRef = useRef(new Set());
  const checkboxRefs = useRef({});
  const totalRef = useRef(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const fetchVentes = useCallback(() => {
    console.log("📥 FETCH VENTES - Chargement des données");
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

  // Fonction pour calculer le total
  const calculateTotal = useCallback(() => {
    return ventes
      .filter((v) => selectedRowsRef.current.has(v.id_vente))
      .reduce((total, v) => total + parseFloat(v.prix_vente), 0);
  }, [ventes]);

  // Fonction pour mettre à jour le total dans le DOM
  const updateTotal = useCallback(() => {
    if (totalRef.current) {
      const total = calculateTotal();
      totalRef.current.textContent = `Total des ventes sélectionnées : ${total.toLocaleString()} Ar`;
    }
  }, [calculateTotal]);

  // Fonction optimisée pour gérer la sélection sans re-render complet
  const toggleRowSelection = useCallback((id) => {
    console.log("🔄 TOGGLE ROW SELECTION - ID:", id);
    const selectedRows = selectedRowsRef.current;
    const checkbox = checkboxRefs.current[id];
    const row = checkbox?.closest('tr');
    
    if (selectedRows.has(id)) {
      selectedRows.delete(id);
      if (checkbox) checkbox.checked = false;
      if (row) row.classList.remove('selected');
    } else {
      selectedRows.add(id);
      if (checkbox) checkbox.checked = true;
      if (row) row.classList.add('selected');
    }
    
    // Mise à jour du total sans re-render
    updateTotal();
  }, [updateTotal]);

  // Mémoisation des lignes pour éviter les re-renders inutiles
  const ventesRows = useMemo(() => {
    console.log("Rendering toutes les lignes - ceci ne devrait apparaître qu'une fois");
    return ventes.map((vente) => {
      const isSelected = selectedRowsRef.current.has(vente.id_vente);
      
      return (
        <tr
          key={vente.id_vente}
          className={isSelected ? 'selected' : ''}
        >
          <td>
            <input
              type="checkbox"
              ref={(el) => {
                if (el) checkboxRefs.current[vente.id_vente] = el;
              }}
              defaultChecked={isSelected}
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
      );
    });
  }, [ventes, toggleRowSelection]);

  // Mise à jour du total initial
  useEffect(() => {
    updateTotal();
  }, [updateTotal]);

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
            {ventesRows}
          </tbody>
        </table>
        <h3 ref={totalRef}>Total des ventes sélectionnées : 0 Ar</h3>
      </div>

      <div className="section-image-vente"> </div>
    </div>
  );
}

export default Vente;