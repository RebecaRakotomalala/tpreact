<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250717115236 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produit DROP CONSTRAINT produit_id_categorie_fkey');
        $this->addSql('ALTER TABLE vendeur DROP CONSTRAINT vendeur_id_genre_fkey');
        $this->addSql('DROP SEQUENCE admin_id_amin_seq CASCADE');
        $this->addSql('DROP SEQUENCE ingredient_id_ingredient_seq CASCADE');
        $this->addSql('DROP SEQUENCE unite_id_unite_seq CASCADE');
        $this->addSql('DROP SEQUENCE valeur_ingredient_id_valeur_ingredient_seq CASCADE');
        $this->addSql('DROP SEQUENCE prix_ingredient_id_prix_seq CASCADE');
        $this->addSql('DROP SEQUENCE stocks_ingredients_id_stock_seq CASCADE');
        $this->addSql('DROP SEQUENCE categorie_id_categorie_seq CASCADE');
        $this->addSql('DROP SEQUENCE production_id_production_seq CASCADE');
        $this->addSql('DROP SEQUENCE prix_produit_id_prix_seq CASCADE');
        $this->addSql('DROP SEQUENCE stock_produit_id_stock_seq CASCADE');
        $this->addSql('DROP SEQUENCE genre_id_genre_seq CASCADE');
        $this->addSql('DROP SEQUENCE conseilmois_id_conseille_seq CASCADE');
        $this->addSql('DROP SEQUENCE commission_id_commission_seq CASCADE');
        $this->addSql('ALTER TABLE stock_produit DROP CONSTRAINT stock_produit_id_produit_fkey');
        $this->addSql('ALTER TABLE conseilmois DROP CONSTRAINT conseilmois_id_produit_fkey');
        $this->addSql('ALTER TABLE prix_produit DROP CONSTRAINT prix_produit_id_produit_fkey');
        $this->addSql('ALTER TABLE production DROP CONSTRAINT production_id_produit_fkey');
        $this->addSql('ALTER TABLE prix_ingredient DROP CONSTRAINT prix_ingredient_id_valeur_ingredient_fkey');
        $this->addSql('ALTER TABLE valeur_ingredient DROP CONSTRAINT valeur_ingredient_id_ingredient_fkey');
        $this->addSql('ALTER TABLE valeur_ingredient DROP CONSTRAINT valeur_ingredient_id_unite_fkey');
        $this->addSql('ALTER TABLE stocks_ingredients DROP CONSTRAINT stocks_ingredients_id_ingredient_fkey');
        $this->addSql('ALTER TABLE recette DROP CONSTRAINT recette_id_ingredient_fkey');
        $this->addSql('ALTER TABLE recette DROP CONSTRAINT recette_id_produit_fkey');
        $this->addSql('DROP TABLE stock_produit');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE unite');
        $this->addSql('DROP TABLE conseilmois');
        $this->addSql('DROP TABLE prix_produit');
        $this->addSql('DROP TABLE production');
        $this->addSql('DROP TABLE ingredient');
        $this->addSql('DROP TABLE commission');
        $this->addSql('DROP TABLE prix_ingredient');
        $this->addSql('DROP TABLE valeur_ingredient');
        $this->addSql('DROP TABLE stocks_ingredients');
        $this->addSql('DROP TABLE admin');
        $this->addSql('DROP TABLE genre');
        $this->addSql('DROP TABLE recette');
        $this->addSql('ALTER TABLE client ALTER nom_client SET NOT NULL');
        $this->addSql('ALTER TABLE client ALTER nom_client TYPE VARCHAR(255)');
        $this->addSql('DROP INDEX IDX_29A5EC27C9486A13');
        $this->addSql('ALTER TABLE produit ALTER id_saveur SET NOT NULL');
        $this->addSql('ALTER TABLE produit ALTER nom_produit TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE produit ALTER image_produit DROP NOT NULL');
        $this->addSql('ALTER TABLE produit ALTER image_produit TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE saveur ALTER nom_saveur SET NOT NULL');
        $this->addSql('ALTER TABLE saveur ALTER nom_saveur TYPE VARCHAR(255)');
        $this->addSql('DROP INDEX IDX_7AF499966DD572C8');
        $this->addSql('ALTER TABLE vendeur ALTER id_genre SET NOT NULL');
        $this->addSql('ALTER TABLE vendeur ALTER nom_vendeur SET NOT NULL');
        $this->addSql('ALTER TABLE vendeur ALTER nom_vendeur TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE vente ALTER quantite SET NOT NULL');
        $this->addSql('ALTER TABLE vente ALTER date_vente SET NOT NULL');
        $this->addSql('ALTER TABLE vente ALTER prix_vente TYPE DOUBLE PRECISION');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SEQUENCE admin_id_amin_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE ingredient_id_ingredient_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE unite_id_unite_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE valeur_ingredient_id_valeur_ingredient_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE prix_ingredient_id_prix_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE stocks_ingredients_id_stock_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE categorie_id_categorie_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE production_id_production_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE prix_produit_id_prix_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE stock_produit_id_stock_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE genre_id_genre_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE conseilmois_id_conseille_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE commission_id_commission_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE stock_produit (id_stock SERIAL NOT NULL, id_produit INT NOT NULL, quantite INT NOT NULL, date_mouvement DATE NOT NULL, est_sortie BOOLEAN NOT NULL, PRIMARY KEY(id_stock))');
        $this->addSql('CREATE INDEX IDX_3003FC84F7384557 ON stock_produit (id_produit)');
        $this->addSql('CREATE TABLE categorie (id_categorie SERIAL NOT NULL, nom_categorie VARCHAR(50) DEFAULT NULL, PRIMARY KEY(id_categorie))');
        $this->addSql('CREATE TABLE unite (id_unite SERIAL NOT NULL, non_unite VARCHAR(50) NOT NULL, PRIMARY KEY(id_unite))');
        $this->addSql('CREATE TABLE conseilmois (id_conseille SERIAL NOT NULL, id_produit INT NOT NULL, mois INT NOT NULL, annee INT NOT NULL, PRIMARY KEY(id_conseille))');
        $this->addSql('CREATE INDEX IDX_6960265AF7384557 ON conseilmois (id_produit)');
        $this->addSql('CREATE TABLE prix_produit (id_prix SERIAL NOT NULL, id_produit INT NOT NULL, prix_unitaire NUMERIC(15, 2) NOT NULL, date_prix DATE NOT NULL, PRIMARY KEY(id_prix))');
        $this->addSql('CREATE INDEX IDX_A79730EDF7384557 ON prix_produit (id_produit)');
        $this->addSql('CREATE TABLE production (id_production SERIAL NOT NULL, id_produit INT NOT NULL, nbr_produit INT NOT NULL, date_production DATE NOT NULL, PRIMARY KEY(id_production))');
        $this->addSql('CREATE INDEX IDX_D3EDB1E0F7384557 ON production (id_produit)');
        $this->addSql('CREATE TABLE ingredient (id_ingredient SERIAL NOT NULL, nom_ingredient VARCHAR(50) NOT NULL, PRIMARY KEY(id_ingredient))');
        $this->addSql('CREATE TABLE commission (id_commission SERIAL NOT NULL, valeur INT DEFAULT NULL, PRIMARY KEY(id_commission))');
        $this->addSql('CREATE TABLE prix_ingredient (id_prix SERIAL NOT NULL, id_valeur_ingredient INT NOT NULL, prix_unitaire NUMERIC(15, 2) NOT NULL, date_prix DATE NOT NULL, PRIMARY KEY(id_prix))');
        $this->addSql('CREATE INDEX IDX_12CDB0FB6F0D189C ON prix_ingredient (id_valeur_ingredient)');
        $this->addSql('CREATE TABLE valeur_ingredient (id_valeur_ingredient SERIAL NOT NULL, id_unite INT NOT NULL, id_ingredient INT NOT NULL, valeur NUMERIC(15, 2) NOT NULL, PRIMARY KEY(id_valeur_ingredient))');
        $this->addSql('CREATE INDEX IDX_9E3A708BCE25F8A7 ON valeur_ingredient (id_ingredient)');
        $this->addSql('CREATE INDEX IDX_9E3A708BF3E18028 ON valeur_ingredient (id_unite)');
        $this->addSql('CREATE TABLE stocks_ingredients (id_stock SERIAL NOT NULL, id_ingredient INT NOT NULL, quantite INT NOT NULL, date_mouvement DATE NOT NULL, est_sortie BOOLEAN NOT NULL, PRIMARY KEY(id_stock))');
        $this->addSql('CREATE INDEX IDX_1D726BACCE25F8A7 ON stocks_ingredients (id_ingredient)');
        $this->addSql('CREATE TABLE admin (id_amin SERIAL NOT NULL, nom_user VARCHAR(50) NOT NULL, mot_de_passe VARCHAR(50) NOT NULL, PRIMARY KEY(id_amin))');
        $this->addSql('CREATE TABLE genre (id_genre SERIAL NOT NULL, genre CHAR(1) DEFAULT NULL, PRIMARY KEY(id_genre))');
        $this->addSql('CREATE TABLE recette (id_ingredient INT NOT NULL, id_produit INT NOT NULL, quantite INT NOT NULL, PRIMARY KEY(id_ingredient, id_produit))');
        $this->addSql('CREATE INDEX IDX_49BB6390CE25F8A7 ON recette (id_ingredient)');
        $this->addSql('CREATE INDEX IDX_49BB6390F7384557 ON recette (id_produit)');
        $this->addSql('ALTER TABLE stock_produit ADD CONSTRAINT stock_produit_id_produit_fkey FOREIGN KEY (id_produit) REFERENCES produit (id_produit) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE conseilmois ADD CONSTRAINT conseilmois_id_produit_fkey FOREIGN KEY (id_produit) REFERENCES produit (id_produit) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE prix_produit ADD CONSTRAINT prix_produit_id_produit_fkey FOREIGN KEY (id_produit) REFERENCES produit (id_produit) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE production ADD CONSTRAINT production_id_produit_fkey FOREIGN KEY (id_produit) REFERENCES produit (id_produit) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE prix_ingredient ADD CONSTRAINT prix_ingredient_id_valeur_ingredient_fkey FOREIGN KEY (id_valeur_ingredient) REFERENCES valeur_ingredient (id_valeur_ingredient) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE valeur_ingredient ADD CONSTRAINT valeur_ingredient_id_ingredient_fkey FOREIGN KEY (id_ingredient) REFERENCES ingredient (id_ingredient) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE valeur_ingredient ADD CONSTRAINT valeur_ingredient_id_unite_fkey FOREIGN KEY (id_unite) REFERENCES unite (id_unite) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE stocks_ingredients ADD CONSTRAINT stocks_ingredients_id_ingredient_fkey FOREIGN KEY (id_ingredient) REFERENCES ingredient (id_ingredient) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE recette ADD CONSTRAINT recette_id_ingredient_fkey FOREIGN KEY (id_ingredient) REFERENCES ingredient (id_ingredient) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE recette ADD CONSTRAINT recette_id_produit_fkey FOREIGN KEY (id_produit) REFERENCES produit (id_produit) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE produit ALTER id_saveur DROP NOT NULL');
        $this->addSql('ALTER TABLE produit ALTER nom_produit TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE produit ALTER image_produit SET NOT NULL');
        $this->addSql('ALTER TABLE produit ALTER image_produit TYPE VARCHAR(250)');
        $this->addSql('ALTER TABLE produit ADD CONSTRAINT produit_id_categorie_fkey FOREIGN KEY (id_categorie) REFERENCES categorie (id_categorie) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_29A5EC27C9486A13 ON produit (id_categorie)');
        $this->addSql('ALTER TABLE saveur ALTER nom_saveur DROP NOT NULL');
        $this->addSql('ALTER TABLE saveur ALTER nom_saveur TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE client ALTER nom_client DROP NOT NULL');
        $this->addSql('ALTER TABLE client ALTER nom_client TYPE VARCHAR(250)');
        $this->addSql('ALTER TABLE vente ALTER quantite DROP NOT NULL');
        $this->addSql('ALTER TABLE vente ALTER date_vente DROP NOT NULL');
        $this->addSql('ALTER TABLE vente ALTER prix_vente TYPE NUMERIC(15, 2)');
        $this->addSql('ALTER TABLE vendeur ALTER nom_vendeur DROP NOT NULL');
        $this->addSql('ALTER TABLE vendeur ALTER nom_vendeur TYPE VARCHAR(250)');
        $this->addSql('ALTER TABLE vendeur ALTER id_genre DROP NOT NULL');
        $this->addSql('ALTER TABLE vendeur ADD CONSTRAINT vendeur_id_genre_fkey FOREIGN KEY (id_genre) REFERENCES genre (id_genre) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_7AF499966DD572C8 ON vendeur (id_genre)');
    }
}
