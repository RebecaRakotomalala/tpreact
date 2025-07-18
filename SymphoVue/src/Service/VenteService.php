<?php

namespace App\Service;

use App\Repository\VenteRepository;

class VenteService
{
    private VenteRepository $venteRepository;

    public function __construct(VenteRepository $venteRepository)
    {
        $this->venteRepository = $venteRepository;
    }

    public function getAllDetails(): array
    {
        return $this->venteRepository->findAllWithDetails();
    }
}
