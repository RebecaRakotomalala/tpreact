<?php

namespace App\Repository;

use App\Entity\Vente;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class VenteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Vente::class);
    }

    public function findAllWithDetails(): array
    {
        return $this->createQueryBuilder('v')
            ->join('v.produit', 'p')
            ->join('v.client', 'c')
            ->join('v.vendeur', 'vd')
            ->select('v.id_vente AS id_vente', 'v.date_vente', 'v.quantite', 'v.prix_vente', 'p.nom_produit', 'c.nom_client', 'vd.nom_vendeur')
            ->getQuery()
            ->getArrayResult();
    }
}
