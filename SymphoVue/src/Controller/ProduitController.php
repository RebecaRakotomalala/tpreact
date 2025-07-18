<?php

// src/Controller/ProduitController.php
namespace App\Controller;

use App\Entity\Produit;
use App\Service\ProduitService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class ProduitController extends AbstractController
{
    #[Route('/api/produits', name: 'api_produits', methods: ['GET'])]
    public function getAll(EntityManagerInterface $em): JsonResponse
    {
        $produits = $em->getRepository(Produit::class)->findAll();

        return $this->json($produits, 200, [], ['groups' => 'produit:read']);
    }

    #[Route('/api/produits/saveur/{nomSaveur}', name: 'api_produits_by_nom_saveur', methods: ['GET'])]
    public function getByNomSaveur(ProduitService $produitRepository, string $nomSaveur): JsonResponse
    {
        $produits = $produitRepository->getProduitsParSaveur($nomSaveur);
        return $this->json($produits, 200, [], ['groups' => 'produit:read']);
    }
}

