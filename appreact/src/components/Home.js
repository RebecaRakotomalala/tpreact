import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/produits'); 
    };
  
  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Bienvenue sur Mon Application</h1>
          <p className="subtitle">Découvrez une expérience unique et moderne</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={handleClick}>
              Commencer
            </button>
          </div>
        </div>
      </header> 
    </div>
  );
}

export default Home;