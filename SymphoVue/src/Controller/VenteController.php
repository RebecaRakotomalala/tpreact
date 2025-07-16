<?php

// src/Controller/ProduitController.php
namespace App\Controller;

use App\Entity\Vente;
use App\Repository\ProduitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class VenteController extends AbstractController
{
    #[Route('/api/ventes', name: 'api_ventes', methods: ['GET'])]
    public function getVentesAvecDetails(EntityManagerInterface $em): JsonResponse
    {
        $ventes = $em->getRepository(Vente::class)->findAllWithDetails();

        return $this->json($ventes);
    }
}

