<?php
    // src/Entity/Saveur.php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'saveur')]
class Saveur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id_saveur = null;

    #[ORM\Column(length: 255)]
    private string $nom_saveur;

    public function getIdSaveur(): ?int
    {
        return $this->id_saveur;
    }

    public function getNomSaveur(): string
    {
        return $this->nom_saveur;
    }

    public function setNomSaveur(string $nom): self
    {
        $this->nom_saveur = $nom;
        return $this;
    }
}
