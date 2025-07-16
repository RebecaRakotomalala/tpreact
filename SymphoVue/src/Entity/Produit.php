<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity]
#[ORM\Table(name: 'produit')]
class Produit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['produit:read'])]
    private ?int $id_produit = null;

    #[ORM\Column(length: 255)]
    #[Groups(['produit:read'])]
    private string $nom_produit;

    #[ORM\Column(type: 'integer')]
    #[Groups(['produit:read'])]
    private ?int $id_categorie = null;

    #[ORM\Column(type: 'integer')]
    #[Groups(['produit:read'])]
    private ?int $id_saveur = null;

    #[ORM\ManyToOne(targetEntity: Saveur::class)]
    #[ORM\JoinColumn(name: 'id_saveur', referencedColumnName: 'id_saveur')]
    private ?Saveur $saveur = null;

    // === Getters & Setters ===

    public function getIdProduit(): ?int
    {
        return $this->id_produit;
    }

    public function getNomProduit(): string
    {
        return $this->nom_produit;
    }

    public function setNomProduit(string $nom): self
    {
        $this->nom_produit = $nom;
        return $this;
    }

    public function getIdCategorie(): ?int
    {
        return $this->id_categorie;
    }

    public function setIdCategorie(?int $idCategorie): self
    {
        $this->id_categorie = $idCategorie;
        return $this;
    }

    public function getIdSaveur(): ?int
    {
        return $this->id_saveur;
    }

    public function setIdSaveur(?int $idSaveur): self
    {
        $this->id_saveur = $idSaveur;
        return $this;
    }

    public function getSaveur(): ?Saveur
    {
        return $this->saveur;
    }

    public function setSaveur(?Saveur $saveur): self
    {
        $this->saveur = $saveur;
        return $this;
    }
}
