INSERT INTO admin (nom_user, mot_de_passe) VALUES
('admin', 'admin');

INSERT INTO ingredient (nom_ingredient) VALUES
('Farine'),
('Sucre'),
('Levure'),
('Beurre'),
('Œufs'),
('Lait'),
('Sel'),
('Chocolat'),
('Pommes'),
('Crème'),
('Vanille'),
('Amandes'),
('Eau');

-- Ajout d'autres ingredients
INSERT INTO ingredient (nom_ingredient) VALUES
('Cannelle'),
('Noix de Coco'),
('Miel'),
('Pistaches'),
('Amandes effilees'),
('Crème Fraîche'),
('Pepites de Chocolat'),
('Raisin Sec'),
('Praline'),
('Confiture de Framboises'),
('Lait de Coco');

INSERT INTO unite (non_unite) VALUES
('Kilogramme'),
('Gramme'),
('Litre'),
('Pièce'),
('Millilitre'),
('Cuillère a cafe');


INSERT INTO categorie (nom_categorie) VALUES
('pain'),
('venoiserie');

-- Farine
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 2, 1);
-- Sucre
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (500, 2, 2);
-- Levure
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (50, 2, 3);
-- Beurre
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 4);
-- Œufs
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 4, 5);
-- Lait
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 3, 6);
-- Sel
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 6, 7);
-- Chocolat
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 8);
-- Pommes
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 4, 9);
-- Crème
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 3, 10);
-- Vanille
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 6, 11);
-- Amandes
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 12);
-- Eau
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 3, 13);


INSERT INTO prix_ingredient (prix_unitaire, date_prix, id_valeur_ingredient) VALUES
(4000, '2024-06-01', 1),
(4000, '2024-06-02', 2),
(1500, '2024-06-03', 3),
(10000, '2024-06-04', 4),
(4500, '2024-06-05', 5),
(6000, '2024-06-06', 6),
(500, '2024-06-07', 7),
(15000, '2024-06-08', 8),
(7500, '2024-06-09', 9),
(12500, '2024-06-10', 10),
(2500, '2024-06-11', 11),
(20000, '2024-06-12', 12),
(1000, '2024-06-13', 13);

INSERT INTO stocks_ingredients (quantite, date_mouvement, est_sortie, id_ingredient) VALUES
(100, '2024-06-10', FALSE, 1),
(50, '2024-06-11', FALSE, 2),
(20, '2024-06-12', FALSE, 3),
(30, '2024-06-13', FALSE, 4),
(60, '2024-06-14', FALSE, 5),
(40, '2024-06-15', FALSE, 6),
(10, '2024-06-16', FALSE, 7),
(25, '2024-06-17', FALSE, 8),
(15, '2024-06-18', FALSE, 9),
(20, '2024-06-19', FALSE, 10),
(5, '2024-06-20', FALSE, 11),
(8, '2024-06-21', FALSE, 12),
(50, '2024-06-22', FALSE, 13),
(2, '2024-08-16', FALSE, 7);

-- Insertion de valeurs d'ingredients supplementaires
-- Cannelle
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (50, 2, 14);
-- Noix de Coco
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 15);
-- Miel
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 16);
-- Pistaches
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 17);
-- Amandes effilees
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 18);
-- Crème Fraîche
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 3, 19);
-- Pepites de Chocolat
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (50, 2, 20);
-- Raisins Secs
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 21);
-- Praline
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (50, 2, 22);
-- Confiture de Framboises
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (100, 2, 23);
-- Lait de Coco
INSERT INTO valeur_ingredient (valeur, id_unite, id_ingredient) VALUES (1, 3, 24);

-- Insertion des prix unitaires des nouveaux ingredients
INSERT INTO prix_ingredient (prix_unitaire, date_prix, id_valeur_ingredient) VALUES
(2000, '2024-06-14', 14),
(2500, '2024-06-15', 15),
(3000, '2024-06-16', 16),
(3500, '2024-06-17', 17),
(4500, '2024-06-18', 18),
(6000, '2024-06-19', 19),
(4000, '2024-06-20', 20),
(5000, '2024-06-21', 21),
(7000, '2024-06-22', 22),
(8000, '2024-06-23', 23),
(9000, '2024-06-24', 24);

-- Insertion des stocks d'ingredients supplementaires
INSERT INTO stocks_ingredients (quantite, date_mouvement, est_sortie, id_ingredient) VALUES
(50, '2024-06-25', FALSE, 14),
(30, '2024-06-26', FALSE, 15),
(60, '2024-06-27', FALSE, 16),
(40, '2024-06-28', FALSE, 17),
(80, '2024-06-29', FALSE, 18),
(100, '2024-06-30', FALSE, 19),
(25, '2024-07-01', FALSE, 20),
(35, '2024-07-02', FALSE, 21),
(20, '2024-07-03', FALSE, 22),
(15, '2024-07-04', FALSE, 23),
(50, '2024-07-05', FALSE, 24),
(10, '2024-07-15', TRUE, 24);

--Saveur
INSERT INTO saveur(nom_saveur) VALUES
('Nature'),
('Chocolat'),
('Vanille'),
('Cannelle'),
('Fraise'),
('Citron'),
('Noisette'),
('Miel'),
('Amande'),
('Praline'),
('Raisin');

-- Insertion des produits avec leurs saveurs
INSERT INTO produit (nom_produit, id_categorie, id_saveur) VALUES
('Baguette Tradition', 1, 1),         -- 
('Croissant', 2, 1),                  -- 
('Pain au Chocolat', 2, 2),           -- 
('Brioche', 2, 1),                    -- 
('Tarte aux Pommes', 2, 5),           -- 
('Tartelette a la Cannelle', 2, 4),   -- 
('Pain de Mie', 1, 1),                -- 
('Brioche au Miel', 2, 8),            -- 
('Tartes aux Pepites de Chocolat', 2, 2), -- 
('Gateau aux Raisins Secs', 2, 11),   -- 
('Crepes au Praline', 2, 10),         -- 
('Pain au Chocolat aux Amandes', 2, 9), -- 
('Tarte au Citron', 2, 6),            -- 
('Gateau a la Noisette', 2, 7),       -- 
('Eclair au Chocolat', 2, 2),         -- 
('Macaron a la Vanille', 2, 3);   
INSERT INTO produit (nom_produit, id_categorie, id_saveur) VALUES
('Grefi', 2, 1);   

-- Production de Baguettes Tradition
INSERT INTO production (nbr_produit, date_production, id_produit) VALUES
(200, '2024-06-01', 1);  
-- Production de Croissants
INSERT INTO production (nbr_produit, date_production, id_produit) VALUES
(150, '2024-06-02', 2); 
-- Production de Pain au Chocolat
INSERT INTO production (nbr_produit, date_production, id_produit) VALUES
(100, '2024-06-03', 3);  
-- Production de Brioche
INSERT INTO production (nbr_produit, date_production, id_produit) VALUES
(80, '2024-06-04', 4);   
-- Production de Tartes aux Pommes
INSERT INTO production (nbr_produit, date_production, id_produit) VALUES
(120, '2024-06-05', 5);   

INSERT INTO prix_produit (prix_unitaire, date_prix, id_produit) VALUES
(10000, '2025-01-01', 1),  -- 
(10000, '2025-01-01', 2),  -- 
(10000, '2025-01-01', 3),  -- 
(10000, '2025-01-01', 4),  -- 
(10000, '2025-01-01', 5),  -- 
(10000, '2025-01-01', 6),  -- 
(10000, '2025-01-01', 7),  -- 
(10000, '2025-01-01', 8),  -- 
(10000, '2025-01-01', 9),  -- 
(10000, '2025-01-01', 10), -- 
(10000, '2025-01-01', 11), -- 
(10000, '2025-01-01', 12), -- 
(10000, '2025-01-01', 13), -- 
(10000, '2025-01-01', 14), -- 
(10000, '2025-01-01', 15), 
(10000, '2025-01-01', 16); 

INSERT INTO prix_produit (prix_unitaire, date_prix, id_produit) VALUES
(15000, '2025-01-11', 1),  -- 
(15000, '2025-01-11', 2),  -- 
(15000, '2025-01-11', 3),  -- 
(15000, '2025-01-11', 4),  -- 
(15000, '2025-01-11', 5),  -- 
(15000, '2025-01-11', 6),  -- 
(15000, '2025-01-11', 7),  -- 
(15000, '2025-01-11', 8),  -- 
(15000, '2025-01-11', 9),  -- 
(15000, '2025-01-11', 10), -- 
(15000, '2025-01-11', 11), -- 
(15000, '2025-01-11', 12), -- 
(15000, '2025-01-11', 13), -- 
(15000, '2025-01-11', 14), -- 
(15000, '2025-01-11', 15), 
(15000, '2025-01-11', 16); 

INSERT INTO prix_produit (prix_unitaire, date_prix, id_produit) VALUES
(30000, '2025-01-21', 1),  -- 
(30000, '2025-01-21', 2),  -- 
(30000, '2025-01-21', 3),  -- 
(30000, '2025-01-21', 4),  -- 
(30000, '2025-01-21', 5);  -- 


-- Stock de Baguettes Tradition
INSERT INTO stock_produit (quantite, date_mouvement, est_sortie, id_produit) VALUES
(200, '2024-06-06', FALSE, 1);
-- Stock de Croissants
INSERT INTO stock_produit (quantite, date_mouvement, est_sortie, id_produit) VALUES
(150, '2024-06-07', FALSE, 2);
-- Stock de Pain au Chocolat
INSERT INTO stock_produit (quantite, date_mouvement, est_sortie, id_produit) VALUES
(100, '2024-06-08', FALSE, 3);
-- Stock de Brioches
INSERT INTO stock_produit (quantite, date_mouvement, est_sortie, id_produit) VALUES
(80, '2024-06-09', FALSE, 4);
-- Stock de Tartes aux Pommes
INSERT INTO stock_produit (quantite, date_mouvement, est_sortie, id_produit) VALUES
(120, '2024-06-10', FALSE, 5);   

-- Stock des nouveaux produits
INSERT INTO stock_produit (quantite, date_mouvement, est_sortie, id_produit) VALUES
(50, '2024-07-06', FALSE, 6),  -- Tartelette a la Cannelle
(30, '2024-07-07', FALSE, 7),  -- Pain de Mie
(40, '2024-07-08', FALSE, 8),  -- Brioche au Miel
(60, '2024-07-09', FALSE, 9),  -- Tartes aux Pepites de Chocolat
(80, '2024-07-10', FALSE, 10), -- Gateau aux Raisins Secs
(100, '2024-07-11', FALSE, 11), -- Crepes au Praline
(100, '2024-08-11', FALSE, 12), -- Crepes au Praline
(90, '2024-07-11', TRUE, 11); -- Crepes au Praline

-- Recettes pour tous les produits
INSERT INTO recette (id_ingredient, id_produit, quantite) VALUES
-- Recette pour 'Baguette Tradition'
(1, 1, 1),  -- Farine
(13, 1, 1), -- Eau
(3, 1, 5),    -- Levure
(7, 1, 10),   -- Sel

-- Recette pour 'Croissant'
(1, 2, 2),  -- Farine
(4, 2, 2),  -- Beurre
(5, 2, 50),   -- Œufs
(6, 2, 1),  -- Lait

-- Recette pour 'Pain au Chocolat'
(1, 3, 1),  -- Farine
(4, 3, 2),  -- Beurre
(7, 3, 10),   -- Sel
(8, 3, 2),   -- Chocolat

-- Recette pour 'Brioche'
(1, 4, 2),  -- Farine
(4, 4, 2),  -- Beurre
(5, 4, 10),  -- Œufs
(6, 4, 2),  -- Lait
(2, 4, 1),   -- Sucre

-- Recette pour 'Tarte aux Pommes'
(1, 5, 3),  -- Farine
(4, 5, 1),  -- Beurre
(2, 5, 1),   -- Sucre
(9, 5, 3),  -- Pommes
(10, 5, 1), -- Crème

-- Recette pour 'Tartelette à la Cannelle'
(1, 6, 2),  -- Farine
(4, 6, 1),  -- Beurre
(2, 6, 2),   -- Sucre
(14, 6, 5),  -- Cannelle

-- Recette pour 'Pain de Mie'
(1, 7, 5),  -- Farine
(6, 7, 2),  -- Lait
(4, 7, 2),   -- Beurre
(7, 7, 1),   -- Sel

-- Recette pour 'Brioche au Miel'
(1, 8, 4),  -- Farine
(4, 8, 2),  -- Beurre
(5, 8, 5),   -- Œufs
(16, 8, 3),  -- Miel

-- Recette pour 'Tartes aux Pepites de Chocolat'
(1, 9, 3),  -- Farine
(4, 9, 1),  -- Beurre
(2, 9, 2),   -- Sucre
(19, 9, 2),  -- Pepites de Chocolat

-- Recette pour 'Gateau aux Raisins Secs'
(1, 10, 3), -- Farine
(5, 10, 5),  -- Œufs
(2, 10, 1), -- Sucre
(20, 10, 10), -- Raisin Sec

-- Recette pour 'Crepes au Praline'
(1, 11, 2), -- Farine
(5, 11, 3),  -- Œufs
(6, 11, 1), -- Lait
(21, 11, 2), -- Praline

-- Recette pour 'Pain au Chocolat aux Amandes'
(1, 12, 3), -- Farine
(4, 12, 2), -- Beurre
(8, 12, 2),  -- Chocolat
(12, 12, 3), -- Amandes effilees

-- Recette pour 'Tarte au Citron'
(1, 13, 3), -- Farine
(4, 13, 1), -- Beurre
(2, 13, 2),  -- Sucre
(10, 13, 1), -- Crème
(15, 13, 2),  -- Citron

-- Recette pour 'Gateau à la Noisette'
(1, 14, 3), -- Farine
(4, 14, 1), -- Beurre
(5, 14, 2),  -- Œufs
(17, 14, 5), -- Noisette

-- Recette pour 'eclair au Chocolat'
(1, 15, 2), -- Farine
(4, 15, 1), -- Beurre
(5, 15, 2),  -- Œufs
(8, 15, 2),  -- Chocolat

-- Recette pour 'Macaron à la Vanille'
(1, 16, 2), -- Farine
(4, 16, 1),  -- Beurre
(5, 16, 2),  -- Œufs
(11, 16, 3); -- Vanille


INSERT INTO client(nom_client)
VALUES
   ('Rebeca'),
   ('Gael'),
   ('Aina'),
   ('Irene'),
   ('Fy');

INSERT INTO genre (genre)
VALUES
   ('M'),
   ('F');

INSERT INTO vendeur(nom_vendeur,id_genre) 
VALUES
   ('Rakoto',1),
   ('Rabe',2),
   ('Soa',2);

INSERT INTO vente(quantite,id_produit,date_vente,id_client,id_vendeur)
VALUES
   (1,1,'2025-01-06',1,1),
   (1,2,'2025-02-06',1,1),
   (1,3,'2025-03-06',1,1),
   (2,1,'2025-01-06',1,2),
   (1,2,'2025-02-06',1,2),
   (1,3,'2025-02-06',1,2),
   (1,1,'2025-01-06',1,3),
   (1,2,'2025-03-06',1,3),
   (1,3,'2025-04-06',1,3);

INSERT INTO commission(valeur)
VALUES
   (5);