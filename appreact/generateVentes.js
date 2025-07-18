const fs = require('fs');
const { faker } = require('@faker-js/faker');

// Configuration des plages de données
const NB_VENTES = 20000;
const ventes = [];

for (let i = 0; i < NB_VENTES; i++) {
  const vente = {
    id_vente: i + 1,
    id_produit: faker.number.int({ min: 1, max: 16 }),
    id_client: faker.number.int({ min: 1, max: 50 }),
    id_vendeur: faker.number.int({ min: 1, max: 10 }),
    nom_produit: faker.commerce.productName(),
    nom_client: faker.person.fullName(),
    nom_vendeur: faker.person.fullName(),
    quantite: faker.number.int({ min: 1, max: 10 }),
    prix_vente: parseFloat(faker.commerce.price({ min: 500, max: 10000, dec: 0 })),
    date_vente: faker.date.between({ from: '2024-01-01', to: '2025-07-01' }).toISOString(),
  };

  ventes.push(vente);
}

// Écriture dans un fichier JSON
fs.writeFileSync('ventes.json', JSON.stringify(ventes, null, 2), 'utf-8');

console.log('✅ 1000 ventes générées et enregistrées dans ventes.json');
