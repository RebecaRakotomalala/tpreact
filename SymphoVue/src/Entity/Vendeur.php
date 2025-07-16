<?php

// src/Entity/Vendeur.php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Vendeur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: "id_vendeur", type: "integer")]
    private $id_vendeur;

    #[ORM\Column(type: "string", length: 255)]
    private $nom_vendeur;

    #[ORM\Column(type: "integer")]
    private $id_genre;

    // Getters / setters

    public function getId(): ?int
    {
        return $this->id_vendeur;
    }

    public function getNomVendeur(): ?string
    {
        return $this->nom_vendeur;
    }

    public function setNomVendeur(string $nom): self
    {
        $this->nom_vendeur = $nom;
        return $this;
    }

    public function getIdGenre(): ?int
    {
        return $this->id_genre;
    }

    public function setIdGenre(int $genre): self
    {
        $this->id_genre = $genre;
        return $this;
    }
}
