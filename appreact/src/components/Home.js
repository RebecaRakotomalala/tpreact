import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/produits'); 
    };

    const handleClick2 = () => {
      navigate('/produitsSaveur'); 
    };

    const handleClick3 = () => {
      navigate('/vente'); 
    };

    const handleClick4 = () => {
      navigate('/prix'); 
    };
  
  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Bienvenue sur Mon Application</h1>
          <p className="subtitle">Découvrez une expérience unique et moderne</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={handleClick}>
              Produit
            </button>
            <button className="primary-btn" onClick={handleClick2}>
              Saveur
            </button>
            <button className="primary-btn" onClick={handleClick3}>
              Vente
            </button>
            <button className="primary-btn" onClick={handleClick4}>
              Prix Produit
            </button>
          </div>
        </div>
      </header> 
    </div>
  );
}

export default Home;