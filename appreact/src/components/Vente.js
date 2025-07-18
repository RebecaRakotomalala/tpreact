import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './vente.css';

function Vente() {
  const [ventes, setVentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedRows, setSelectedRows] = useState(new Set());

  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');

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

  // Exécuter fetch au chargement
  useEffect(() => {
    fetchVentes();
  }, [fetchVentes]);

  // useMemo pour calculer total des ventes (optimisé)
  const totalVentes = useMemo(() => {
    return ventes
    .filter((v) => selectedRows.has(v.id_vente))
    .reduce((total, v) => total + parseFloat(v.prix_vente), 0);
  }, [ventes, selectedRows]);
  // })();

  // Filtrage par date
  const ventesFiltrees = useMemo(() => {
    if (!dateDebut && !dateFin) return ventes;

    const debut = dateDebut ? new Date(dateDebut) : null;
    const fin = dateFin ? new Date(dateFin) : null;

    return ventes.filter((vente) => {
      const dateVente = new Date(vente.date_vente);
      if (debut && dateVente < debut) return false;
      if (fin && dateVente > fin) return false;
      return true;
    });
  }, [ventes, dateDebut, dateFin]);

  const totalPrixFiltre = (() => {
    return ventesFiltrees.reduce((total, v) => total + parseFloat(v.prix_vente), 0);
  // }, [ventesFiltrees]);  
  })();

  const ventesPage = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ventesFiltrees.slice(startIndex, endIndex);
  }, [ventesFiltrees, currentPage]);
  

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

  const totalPages = Math.ceil(ventesFiltrees.length / itemsPerPage);

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
      </button>
      <div className="filtre-dates">
        <label>
          Date de début :&nbsp;
          <input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
        </label>
        &nbsp;&nbsp;
        <label>
          Date de fin :&nbsp;
          <input type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
        </label>
      </div>
      <h3>Total (prix entre les dates) : <strong>{totalPrixFiltre.toLocaleString()} Ar</strong></h3>
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
      <div className="pagination">
        {currentPage > 2 && (
          <>
            <button onClick={() => setCurrentPage(1)} className={currentPage === 1 ? 'active' : ''}>
              1
            </button>
            {currentPage > 3 && <span className="dots">...</span>}
          </>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((page) =>
            page === currentPage ||
            page === currentPage - 1 ||
            page === currentPage + 1
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}

        {currentPage < totalPages - 1 && (
          <>
            {currentPage < totalPages - 2 && <span className="dots">...</span>}
            <button onClick={() => setCurrentPage(totalPages)} className={currentPage === totalPages ? 'active' : ''}>
              {totalPages}
            </button>
          </>
        )}
      </div>
      <h3>Total des ventes : {totalVentes.toLocaleString()} Ar</h3>
    </div>

    <div className="section-image-vente"> </div>

    </div>
  );
}

export default Vente;
