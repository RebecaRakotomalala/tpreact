<?php

namespace App\Repository;

use App\Entity\Produit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ProduitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Produit::class);
    }

    public function findByNomSaveur(string $nomSaveur): array
    {
        return $this->createQueryBuilder('p')
            ->join('p.saveur', 's')
            ->andWhere('s.nom_saveur = :nomSaveur')
            ->setParameter('nomSaveur', $nomSaveur)
            ->getQuery()
            ->getResult();
    }
}
