import { useEffect, useState } from 'react';
import '../assets/VendeursList.css';

function VendeursList() {
  const [vendeurs, setVendeurs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/backphp/api/myapi.php')
      .then((res) => res.json())
      .then((data) => {
        setVendeurs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch des vendeurs :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
        <h1>Liste des vendeurs</h1>
        <ul>
          {vendeurs.map((vendeur) => (
            <li key={vendeur.id}>
              {vendeur.nom_vendeur || vendeur.name || `Vendeur #${vendeur.id}`}
            </li>
          ))}
        </ul>
        </div>
      </header> 
    </div>
  );  
}

export default VendeursList;
