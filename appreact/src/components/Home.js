import { useState } from 'react';
import '../components/Home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/public/logo.jpg';

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
  
  return (
    <div className="App">
      <div className="hero-section">
        <div className="hero-content">
          <img src={logo} alt="Image fond" />

          <h1>Votre boulanger de quartier, depuis toujours.</h1>
          <p className="subtitle">Application web qui permet de consulter facilement la liste de nos produits de boulangerie.</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={handleClick}>
              Produits
            </button>
            <button className="secondary-btn" onClick={handleClick2}>
              Saveurs
            </button>
            <button className="secondary-btn" onClick={handleClick3}>
              Ventes
            </button>
          </div>
        </div>

        <div className='hero-image'>  </div>
        
      </div> 
    </div>
  );
}

export default Home;