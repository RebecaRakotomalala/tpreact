CREATE DATABASE boulangerie;
\c boulangerie;

CREATE TABLE admin(
   id_amin SERIAL,
   nom_user VARCHAR(50)  NOT NULL,
   mot_de_passe VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_amin)
); -----------------------------------

CREATE TABLE ingredient(
   id_ingredient SERIAL,
   nom_ingredient VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_ingredient)
); -----------------------------------

CREATE TABLE unite(
   id_unite SERIAL,
   non_unite VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_unite)
); -----------------------------------

CREATE TABLE valeur_ingredient(
   id_valeur_ingredient SERIAL,
   valeur NUMERIC(15,2)   NOT NULL,
   id_unite INTEGER NOT NULL,
   id_ingredient INTEGER NOT NULL,
   PRIMARY KEY(id_valeur_ingredient),
   FOREIGN KEY(id_unite) REFERENCES unite(id_unite),
   FOREIGN KEY(id_ingredient) REFERENCES ingredient(id_ingredient)
); -----------------------------------

CREATE TABLE prix_ingredient(
   id_prix SERIAL,
   prix_unitaire NUMERIC(15,2)   NOT NULL,
   date_prix DATE NOT NULL,
   id_valeur_ingredient INTEGER NOT NULL,
   PRIMARY KEY(id_prix),
   FOREIGN KEY(id_valeur_ingredient) REFERENCES valeur_ingredient(id_valeur_ingredient)
); -----------------------------------

CREATE TABLE stocks_ingredients(
   id_stock SERIAL,
   quantite INTEGER NOT NULL,
   date_mouvement DATE NOT NULL,
   est_sortie BOOLEAN NOT NULL,
   id_ingredient INTEGER NOT NULL,
   PRIMARY KEY(id_stock),
   FOREIGN KEY(id_ingredient) REFERENCES ingredient(id_ingredient)
); -----------------------------------

CREATE TABLE categorie(
   id_categorie SERIAL,
   nom_categorie VARCHAR(50),
   PRIMARY KEY(id_categorie)
); -----------------------------------

CREATE TABLE saveur(
   id_saveur SERIAL,
   nom_saveur VARCHAR(50),
   PRIMARY KEY(id_saveur)
);

CREATE TABLE produit(
   id_produit SERIAL,
   nom_produit VARCHAR(50)  NOT NULL,
   id_categorie INTEGER not NULL,
   id_saveur INTEGER,
   image_produit VARCHAR(250) NOT NULL,
   PRIMARY KEY(id_produit),
   foreign key (id_categorie) REFERENCES categorie(id_categorie),
   foreign key (id_saveur) REFERENCES saveur(id_saveur)
); -----------------------------------

CREATE TABLE production(
   id_production SERIAL,
   nbr_produit INTEGER NOT NULL,
   date_production DATE NOT NULL,
   id_produit INTEGER NOT NULL,
   PRIMARY KEY(id_production),
   FOREIGN KEY(id_produit) REFERENCES produit(id_produit)
); -----------------------------------

CREATE TABLE prix_produit(
   id_prix SERIAL,
   prix_unitaire NUMERIC(15,2)   NOT NULL,
   date_prix DATE NOT NULL,
   id_produit INTEGER NOT NULL,
   PRIMARY KEY(id_prix),
   FOREIGN KEY(id_produit) REFERENCES produit(id_produit)
); -----------------------------------

CREATE TABLE stock_produit(
   id_stock SERIAL,
   quantite INTEGER NOT NULL,
   date_mouvement DATE NOT NULL,
   est_sortie BOOLEAN NOT NULL,
   id_produit INTEGER NOT NULL,
   PRIMARY KEY(id_stock),
   FOREIGN KEY(id_produit) REFERENCES produit(id_produit)
); -----------------------------------

CREATE TABLE recette(
   id_ingredient INTEGER,
   id_produit INTEGER,
   quantite INTEGER NOT NULL, 
   PRIMARY KEY(id_ingredient, id_produit),
   FOREIGN KEY(id_ingredient) REFERENCES ingredient(id_ingredient),
   FOREIGN KEY(id_produit) REFERENCES produit(id_produit)
); -----------------------------------

CREATE TABLE client(
   id_client SERIAL,
   nom_client VARCHAR(250),
   PRIMARY KEY(id_client)
); ----------------------------------

CREATE TABLE genre (
   id_genre SERIAL,
   genre CHAR,
   PRIMARY KEY(id_genre)
); 

CREATE TABLE vendeur(
   id_vendeur SERIAL,
   nom_vendeur VARCHAR(250),
   id_genre INTEGER,
   PRIMARY KEY(id_vendeur),
   FOREIGN KEY(id_genre) REFERENCES genre(id_genre)
); ----------------------------------

CREATE TABLE vente(
   id_vente SERIAL,
   quantite INTEGER,
   id_produit INTEGER,
   date_vente DATE,
   id_client INTEGER,
   id_vendeur INTEGER,
   prix_vente NUMERIC(15,2)   NOT NULL,
   PRIMARY KEY(id_vente),
   FOREIGN KEY(id_produit) REFERENCES produit(id_produit),
   FOREIGN KEY(id_client) REFERENCES client(id_client),
   FOREIGN KEY(id_vendeur) REFERENCES vendeur(id_vendeur)
); ----------------------------------

CREATE TABLE conseilMois(
   id_conseille SERIAL,
   mois INTEGER NOT NULL,
   annee INTEGER NOT NULL,
   id_produit INTEGER NOT NULL,
   PRIMARY KEY(id_conseille),
   FOREIGN KEY(id_produit) REFERENCES produit(id_produit)
);---------------------------------

CREATE TABLE commission(
   id_commission SERIAL,
   valeur INTEGER,
   PRIMARY KEY(id_commission)
);--------------------------------