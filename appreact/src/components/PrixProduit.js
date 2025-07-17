import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrixProduits } from '../store/prixSlice';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import '../assets/prix.css';
import { useNavigate } from 'react-router-dom';

function PrixProduit({ idProduit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: prixData, status } = useSelector((state) => state.prix);

  // Dates par défaut : dernier semestre
  const defaultDateFin = new Date();
  const defaultDateDebut = new Date();
  defaultDateDebut.setMonth(defaultDateFin.getMonth() - 6);

  const [dateDebut, setDateDebut] = useState(defaultDateDebut.toISOString().slice(0, 10));
  const [dateFin, setDateFin] = useState(defaultDateFin.toISOString().slice(0, 10));

  useEffect(() => {
    dispatch(fetchPrixProduits({ idProduit, dateDebut, dateFin }));
  }, [idProduit, dateDebut, dateFin, dispatch]);

  return (
    <div className="prix-background">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Retour
      </button>

      <div className="prix-container">
        <h2>Évolution du prix</h2>

        <div className="date-selectors">
          <div className="date-selector-group">
            <label>Date début :</label>
            <input
              type="date"
              value={dateDebut}
              max={dateFin}
              onChange={(e) => setDateDebut(e.target.value)}
            />
          </div>
          
          <div className="date-selector-group">
            <label>Date fin :</label>
            <input
              type="date"
              value={dateFin}
              min={dateDebut}
              max={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setDateFin(e.target.value)}
            />
          </div>
        </div>

        {status === 'loading' && <p className="loading-message">Chargement des données...</p>}
        {status === 'failed' && <p className="error-message">Erreur de chargement des données</p>}

        {status === 'succeeded' && (
          <>
            {prixData.length > 0 ? (
              <div className="chart-wrapper">
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={prixData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" />
                      <XAxis 
                        dataKey="date_prix" 
                        stroke="white"
                        tick={{ fill: 'white' }}
                      />
                      <YAxis 
                        stroke="white"
                        tick={{ fill: 'white' }}
                      />
                      <Tooltip 
                        contentStyle={{
                          background: 'rgba(0,0,0,0.8)',
                          color: 'white',
                          borderRadius: '8px',
                          border: 'none'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="prix_unitaire" 
                        stroke="white" 
                        strokeWidth={3}
                        dot={{ fill: '#6e8efb', stroke: 'white', strokeWidth: 2, r: 5 }}
                        activeDot={{ r: 8, stroke: 'white', strokeWidth: 2, fill: '#a777e3' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ) : (
              <p className="empty-message">Aucune donnée disponible pour cette période</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default PrixProduit;