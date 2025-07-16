<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity]
#[ORM\Table(name: 'prix_produit')]
class PrixProduit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'id_prix', type: 'integer')]
    private ?int $id_prix = null;

    #[ORM\Column(name: 'prix_unitaire', type: 'float')]
    #[Groups(['prix:read'])]
    private float $prix_unitaire;

    #[ORM\Column(name: 'date_prix', type: 'date')]
    #[Groups(['prix:read'])]
    private \DateTimeInterface $date_prix;

    #[ORM\ManyToOne(targetEntity: Produit::class)]
    #[ORM\JoinColumn(name: 'id_produit', referencedColumnName: 'id_produit', nullable: false, onDelete: "CASCADE")]
    #[Groups(['prix:read'])]
    private ?Produit $produit = null;

    // === Getters / Setters ===

    public function getIdPrix(): ?int
    {
        return $this->id_prix;
    }

    public function getPrixUnitaire(): float
    {
        return $this->prix_unitaire;
    }

    public function setPrixUnitaire(float $prix): self
    {
        $this->prix_unitaire = $prix;
        return $this;
    }

    public function getDatePrix(): \DateTimeInterface
    {
        return $this->date_prix;
    }

    public function setDatePrix(\DateTimeInterface $date): self
    {
        $this->date_prix = $date;
        return $this;
    }

    public function getProduit(): ?Produit
    {
        return $this->produit;
    }

    public function setProduit(?Produit $produit): self
    {
        $this->produit = $produit;
        return $this;
    }
}
