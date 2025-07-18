<?php

namespace App\Service;

use App\Repository\ProduitRepository;

class ProduitService
{
    private ProduitRepository $produitRepository;

    public function __construct(ProduitRepository $produitRepository)
    {
        $this->produitRepository = $produitRepository;
    }

    public function getProduitsParSaveur(string $nomSaveur): array
    {
        return $this->produitRepository->findByNomSaveur($nomSaveur);
    }
}
